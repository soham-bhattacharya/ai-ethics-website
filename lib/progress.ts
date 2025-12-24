// Progress Tracking System with localStorage persistence

export interface TrackProgress {
  trackId: string;
  moduleProgress: Record<number, number>; // moduleId -> percentage read
  quizScores: Record<number, { score: number; total: number; attempts: number }>; // moduleId -> quiz results
  lastAccessed: string;
  totalTimeSpent: number; // in seconds
  completed: boolean;
  completedAt?: string;
}

export interface UserProgress {
  tracks: Record<string, TrackProgress>;
  overallStartDate: string;
  totalSessionTime: number;
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  earnedAt: string;
  icon: string;
}

const STORAGE_KEY = 'ai-ethics-playbook-progress';

// Initialize empty progress
function getDefaultProgress(): UserProgress {
  return {
    tracks: {},
    overallStartDate: new Date().toISOString(),
    totalSessionTime: 0,
    achievements: []
  };
}

// Get progress from localStorage
export function getProgress(): UserProgress {
  if (typeof window === 'undefined') return getDefaultProgress();
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error reading progress:', error);
  }
  
  return getDefaultProgress();
}

// Save progress to localStorage
export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Error saving progress:', error);
  }
}

// Get or initialize track progress
export function getTrackProgress(trackId: string): TrackProgress {
  const progress = getProgress();
  
  if (!progress.tracks[trackId]) {
    progress.tracks[trackId] = {
      trackId,
      moduleProgress: {},
      quizScores: {},
      lastAccessed: new Date().toISOString(),
      totalTimeSpent: 0,
      completed: false
    };
    saveProgress(progress);
  }
  
  return progress.tracks[trackId];
}

// Update module reading progress
export function updateModuleProgress(trackId: string, moduleId: number, percentage: number): void {
  const progress = getProgress();
  
  if (!progress.tracks[trackId]) {
    progress.tracks[trackId] = {
      trackId,
      moduleProgress: {},
      quizScores: {},
      lastAccessed: new Date().toISOString(),
      totalTimeSpent: 0,
      completed: false
    };
  }
  
  // Only update if new progress is higher
  const currentProgress = progress.tracks[trackId].moduleProgress[moduleId] || 0;
  if (percentage > currentProgress) {
    progress.tracks[trackId].moduleProgress[moduleId] = percentage;
  }
  
  progress.tracks[trackId].lastAccessed = new Date().toISOString();
  
  // Check for completion
  checkAndAwardAchievements(progress, trackId);
  
  saveProgress(progress);
}

// Update quiz score
export function updateQuizScore(trackId: string, moduleId: number, score: number, total: number): void {
  const progress = getProgress();
  
  if (!progress.tracks[trackId]) {
    progress.tracks[trackId] = {
      trackId,
      moduleProgress: {},
      quizScores: {},
      lastAccessed: new Date().toISOString(),
      totalTimeSpent: 0,
      completed: false
    };
  }
  
  const existing = progress.tracks[trackId].quizScores[moduleId];
  
  progress.tracks[trackId].quizScores[moduleId] = {
    score: Math.max(score, existing?.score || 0),
    total,
    attempts: (existing?.attempts || 0) + 1
  };
  
  progress.tracks[trackId].lastAccessed = new Date().toISOString();
  
  checkAndAwardAchievements(progress, trackId);
  
  saveProgress(progress);
}

// Calculate overall track completion percentage
export function calculateTrackCompletion(trackId: string, totalModules: number): number {
  const trackProgress = getTrackProgress(trackId);
  
  if (totalModules === 0) return 0;
  
  const moduleValues = Object.values(trackProgress.moduleProgress);
  if (moduleValues.length === 0) return 0;
  
  const totalProgress = moduleValues.reduce((sum, val) => sum + val, 0);
  return Math.round(totalProgress / totalModules);
}

// Check if user has completed a track
export function isTrackCompleted(trackId: string, totalModules: number): boolean {
  const trackProgress = getTrackProgress(trackId);
  const completion = calculateTrackCompletion(trackId, totalModules);
  
  // Completed if all modules are 100% read
  return completion >= 95 && Object.keys(trackProgress.moduleProgress).length >= totalModules;
}

// Award achievements
function checkAndAwardAchievements(progress: UserProgress, trackId: string): void {
  const achievements: Achievement[] = [];
  
  // First module completed
  const trackData = progress.tracks[trackId];
  if (trackData && Object.values(trackData.moduleProgress).some(p => p >= 100)) {
    if (!progress.achievements.find(a => a.id === 'first-module')) {
      achievements.push({
        id: 'first-module',
        title: 'First Steps',
        description: 'Completed your first module',
        earnedAt: new Date().toISOString(),
        icon: '🎯'
      });
    }
  }
  
  // Perfect quiz score
  if (trackData && Object.values(trackData.quizScores).some(s => s.score === s.total && s.total > 0)) {
    if (!progress.achievements.find(a => a.id === 'perfect-quiz')) {
      achievements.push({
        id: 'perfect-quiz',
        title: 'Perfect Score',
        description: 'Achieved 100% on a quiz',
        earnedAt: new Date().toISOString(),
        icon: '⭐'
      });
    }
  }
  
  // Track completion
  const trackModuleCounts: Record<string, number> = {
    'smb': 8,
    'government': 5,
    'healthcare': 6,
    'hr': 5,
    'finance': 5
  };
  
  if (trackData && isTrackCompletedInternal(trackData, trackModuleCounts[trackId] || 5)) {
    const trackCompletionId = `track-complete-${trackId}`;
    if (!progress.achievements.find(a => a.id === trackCompletionId)) {
      achievements.push({
        id: trackCompletionId,
        title: `${trackId.toUpperCase()} Master`,
        description: `Completed the ${trackId} learning track`,
        earnedAt: new Date().toISOString(),
        icon: '🏆'
      });
      
      trackData.completed = true;
      trackData.completedAt = new Date().toISOString();
    }
  }
  
  // Add new achievements
  progress.achievements = [...progress.achievements, ...achievements];
}

function isTrackCompletedInternal(trackData: TrackProgress, totalModules: number): boolean {
  const moduleValues = Object.values(trackData.moduleProgress);
  if (moduleValues.length < totalModules) return false;
  return moduleValues.every(p => p >= 95);
}

// Get all achievements
export function getAchievements(): Achievement[] {
  return getProgress().achievements;
}

// Reset progress (for testing)
export function resetProgress(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}

// Get stats for display
export function getProgressStats(): {
  tracksStarted: number;
  tracksCompleted: number;
  totalAchievements: number;
  overallProgress: number;
} {
  const progress = getProgress();
  const tracks = Object.values(progress.tracks);
  
  return {
    tracksStarted: tracks.length,
    tracksCompleted: tracks.filter(t => t.completed).length,
    totalAchievements: progress.achievements.length,
    overallProgress: tracks.length > 0 
      ? Math.round(tracks.reduce((sum, t) => {
          const moduleValues = Object.values(t.moduleProgress);
          return sum + (moduleValues.length > 0 ? moduleValues.reduce((a, b) => a + b, 0) / moduleValues.length : 0);
        }, 0) / tracks.length)
      : 0
  };
}

