// Progress Tracking System with localStorage persistence
// Supports all industry tracks across categories

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
  trackId?: string; // Optional: which track earned this
  category?: string; // Optional: achievement category
}

const STORAGE_KEY = 'ai-ethics-playbook-progress';

// Track module counts for all industries
const TRACK_MODULE_COUNTS: Record<string, number> = {
  // Main tracks
  'smb': 8,
  'government': 6,
  // Regulated industries
  'healthcare': 6,
  'finance': 5,
  'insurance': 5,
  // Non-regulated industries
  'hr': 5,
  'marketing': 5,
  'education': 5,
  'media': 4,
  'manufacturing': 4,
  'retail': 4,
};

// Track display names for achievements
const TRACK_NAMES: Record<string, string> = {
  'smb': 'SMB',
  'government': 'AI Policy',
  'healthcare': 'Healthcare',
  'finance': 'Finance',
  'insurance': 'Insurance',
  'hr': 'HR & Recruiting',
  'marketing': 'Marketing',
  'education': 'Education',
  'media': 'Media & Comms',
  'manufacturing': 'Manufacturing',
  'retail': 'Retail',
};

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
export function calculateTrackCompletion(trackId: string, totalModules?: number): number {
  const trackProgress = getTrackProgress(trackId);
  const modules = totalModules || TRACK_MODULE_COUNTS[trackId] || 5;
  
  if (modules === 0) return 0;
  
  const moduleValues = Object.values(trackProgress.moduleProgress);
  if (moduleValues.length === 0) return 0;
  
  const totalProgress = moduleValues.reduce((sum, val) => sum + val, 0);
  return Math.round(totalProgress / modules);
}

// Check if user has completed a track
export function isTrackCompleted(trackId: string, totalModules?: number): boolean {
  const trackProgress = getTrackProgress(trackId);
  const modules = totalModules || TRACK_MODULE_COUNTS[trackId] || 5;
  const completion = calculateTrackCompletion(trackId, modules);
  
  // Completed if all modules are 100% read
  return completion >= 95 && Object.keys(trackProgress.moduleProgress).length >= modules;
}

// Award achievements
function checkAndAwardAchievements(progress: UserProgress, trackId: string): void {
  const achievements: Achievement[] = [];
  const trackData = progress.tracks[trackId];
  const trackName = TRACK_NAMES[trackId] || trackId.toUpperCase();
  
  // First module completed (any track)
  if (trackData && Object.values(trackData.moduleProgress).some(p => p >= 100)) {
    if (!progress.achievements.find(a => a.id === 'first-module')) {
      achievements.push({
        id: 'first-module',
        title: 'First Steps',
        description: 'Completed your first module',
        earnedAt: new Date().toISOString(),
        icon: '🎯',
        trackId,
        category: 'learning'
      });
    }
  }
  
  // First track started
  if (trackData && Object.keys(trackData.moduleProgress).length > 0) {
    const trackStartId = `track-started-${trackId}`;
    if (!progress.achievements.find(a => a.id === trackStartId)) {
      achievements.push({
        id: trackStartId,
        title: `${trackName} Explorer`,
        description: `Started the ${trackName} learning track`,
        earnedAt: new Date().toISOString(),
        icon: '🚀',
        trackId,
        category: 'exploration'
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
        icon: '⭐',
        trackId,
        category: 'quiz'
      });
    }
    
    // Track-specific perfect quiz
    const perfectQuizId = `perfect-quiz-${trackId}`;
    if (!progress.achievements.find(a => a.id === perfectQuizId)) {
      achievements.push({
        id: perfectQuizId,
        title: `${trackName} Quiz Master`,
        description: `Perfect score on a ${trackName} quiz`,
        earnedAt: new Date().toISOString(),
        icon: '🌟',
        trackId,
        category: 'quiz'
      });
    }
  }
  
  // Track completion
  const moduleCount = TRACK_MODULE_COUNTS[trackId] || 5;
  if (trackData && isTrackCompletedInternal(trackData, moduleCount)) {
    const trackCompletionId = `track-complete-${trackId}`;
    if (!progress.achievements.find(a => a.id === trackCompletionId)) {
      achievements.push({
        id: trackCompletionId,
        title: `${trackName} Master`,
        description: `Completed the ${trackName} learning track`,
        earnedAt: new Date().toISOString(),
        icon: '🏆',
        trackId,
        category: 'completion'
      });
      
      trackData.completed = true;
      trackData.completedAt = new Date().toISOString();
    }
  }
  
  // Multiple tracks started
  const tracksStarted = Object.values(progress.tracks).filter(t => 
    Object.keys(t.moduleProgress).length > 0
  ).length;
  
  if (tracksStarted >= 3 && !progress.achievements.find(a => a.id === 'multi-track-explorer')) {
    achievements.push({
      id: 'multi-track-explorer',
      title: 'Multi-Track Explorer',
      description: 'Started learning in 3 different tracks',
      earnedAt: new Date().toISOString(),
      icon: '🗺️',
      category: 'exploration'
    });
  }
  
  // Category completion
  const regulatedTracks = ['healthcare', 'finance', 'insurance'];
  const nonRegulatedTracks = ['hr', 'marketing', 'education', 'media', 'manufacturing', 'retail'];
  
  const regulatedCompleted = regulatedTracks.every(tid => 
    progress.tracks[tid]?.completed
  );
  
  if (regulatedCompleted && !progress.achievements.find(a => a.id === 'regulated-master')) {
    achievements.push({
      id: 'regulated-master',
      title: 'Regulated Industries Master',
      description: 'Completed all regulated industry tracks',
      earnedAt: new Date().toISOString(),
      icon: '🏛️',
      category: 'completion'
    });
  }
  
  const nonRegulatedCompleted = nonRegulatedTracks.filter(tid => 
    progress.tracks[tid]?.completed
  ).length >= 3;
  
  if (nonRegulatedCompleted && !progress.achievements.find(a => a.id === 'non-regulated-explorer')) {
    achievements.push({
      id: 'non-regulated-explorer',
      title: 'Industry Explorer',
      description: 'Completed 3 non-regulated industry tracks',
      earnedAt: new Date().toISOString(),
      icon: '🎓',
      category: 'completion'
    });
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

// Get achievements by category
export function getAchievementsByCategory(category: string): Achievement[] {
  return getProgress().achievements.filter(a => a.category === category);
}

// Get achievements by track
export function getAchievementsByTrack(trackId: string): Achievement[] {
  return getProgress().achievements.filter(a => a.trackId === trackId);
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
  quizzesTaken: number;
  perfectScores: number;
} {
  const progress = getProgress();
  const tracks = Object.values(progress.tracks);
  
  // Count quizzes and perfect scores
  let quizzesTaken = 0;
  let perfectScores = 0;
  tracks.forEach(t => {
    Object.values(t.quizScores).forEach(s => {
      quizzesTaken += s.attempts;
      if (s.score === s.total && s.total > 0) {
        perfectScores++;
      }
    });
  });
  
  return {
    tracksStarted: tracks.filter(t => Object.keys(t.moduleProgress).length > 0).length,
    tracksCompleted: tracks.filter(t => t.completed).length,
    totalAchievements: progress.achievements.length,
    overallProgress: tracks.length > 0 
      ? Math.round(tracks.reduce((sum, t) => {
          const moduleValues = Object.values(t.moduleProgress);
          return sum + (moduleValues.length > 0 ? moduleValues.reduce((a, b) => a + b, 0) / moduleValues.length : 0);
        }, 0) / tracks.length)
      : 0,
    quizzesTaken,
    perfectScores
  };
}

// Get recently accessed tracks
export function getRecentTracks(limit: number = 3): string[] {
  const progress = getProgress();
  return Object.entries(progress.tracks)
    .filter(([, t]) => Object.keys(t.moduleProgress).length > 0)
    .sort(([, a], [, b]) => 
      new Date(b.lastAccessed).getTime() - new Date(a.lastAccessed).getTime()
    )
    .slice(0, limit)
    .map(([id]) => id);
}
