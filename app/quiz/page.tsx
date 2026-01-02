"use client";

import { useState, useEffect } from "react";
import { 
  GraduationCap, CheckCircle, XCircle, ChevronRight, RotateCcw, Trophy, 
  Target, Brain, ChevronLeft, ArrowRight, LucideIcon,
  Building2, Landmark, HeartPulse, Users, TrendingUp, Shield, Megaphone,
  Radio, Factory, ShoppingCart, BookOpen
} from "lucide-react";

// Track imports
import { getAllTracks, LearningTrack } from "@/data/tracks";

// Quiz imports
import { quizzes as smbQuizzes } from "@/data/quizzes";
import { governmentQuizzes } from "@/data/government-quizzes";
import { healthcareQuizzes } from "@/data/healthcare-quizzes";
import { hrQuizzes } from "@/data/hr-quizzes";
import { financeQuizzes } from "@/data/finance-quizzes";
import { insuranceQuizzes } from "@/data/insurance-quizzes";
import { marketingQuizzes } from "@/data/marketing-quizzes";
import { educationQuizzes } from "@/data/education-quizzes";
import { mediaQuizzes } from "@/data/media-quizzes";
import { manufacturingQuizzes } from "@/data/manufacturing-quizzes";
import { retailQuizzes } from "@/data/retail-quizzes";

// Content imports for chapter titles
import { chapters as smbChapters } from "@/data/ebook-content";
import { governmentModules } from "@/data/government-content";
import { healthcareChapters } from "@/data/healthcare-content";
import { hrChapters } from "@/data/hr-content";
import { financeChapters } from "@/data/finance-content";
import { insuranceContent } from "@/data/insurance-content";
import { marketingContent } from "@/data/marketing-content";
import { educationContent } from "@/data/education-content";
import { mediaContent } from "@/data/media-content";
import { manufacturingContent } from "@/data/manufacturing-content";
import { retailContent } from "@/data/retail-content";

import { updateQuizScore } from "@/lib/progress";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Building2,
  Landmark,
  HeartPulse,
  Users,
  TrendingUp,
  Shield,
  Megaphone,
  GraduationCap,
  Radio,
  Factory,
  ShoppingCart,
};

interface QuizQuestion {
  id: string;
  chapterId: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface Module {
  id: number;
  title: string;
}

// Get quizzes by track
function getTrackQuizzes(trackId: string): QuizQuestion[] {
  switch (trackId) {
    case "smb": return smbQuizzes;
    case "government": return governmentQuizzes;
    case "healthcare": return healthcareQuizzes;
    case "hr": return hrQuizzes;
    case "finance": return financeQuizzes;
    case "insurance": return insuranceQuizzes;
    case "marketing": return marketingQuizzes;
    case "education": return educationQuizzes;
    case "media": return mediaQuizzes;
    case "manufacturing": return manufacturingQuizzes;
    case "retail": return retailQuizzes;
    default: return [];
  }
}

// Get modules by track
function getTrackModules(trackId: string): Module[] {
  switch (trackId) {
    case "smb": return smbChapters.map(c => ({ id: c.id, title: c.title }));
    case "government": return governmentModules.map(m => ({ id: m.id, title: m.title }));
    case "healthcare": return healthcareChapters.map(c => ({ id: c.id, title: c.title }));
    case "hr": return hrChapters.map(c => ({ id: c.id, title: c.title }));
    case "finance": return financeChapters.map(c => ({ id: c.id, title: c.title }));
    case "insurance": return insuranceContent.modules.map(m => ({ id: m.id, title: m.title }));
    case "marketing": return marketingContent.modules.map(m => ({ id: m.id, title: m.title }));
    case "education": return educationContent.modules.map(m => ({ id: m.id, title: m.title }));
    case "media": return mediaContent.modules.map(m => ({ id: m.id, title: m.title }));
    case "manufacturing": return manufacturingContent.modules.map(m => ({ id: m.id, title: m.title }));
    case "retail": return retailContent.modules.map(m => ({ id: m.id, title: m.title }));
    default: return [];
  }
}

export default function QuizPage() {
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const tracks = getAllTracks().filter(t => t.isActive);
  const currentTrack = selectedTrack ? tracks.find(t => t.id === selectedTrack) : null;
  const modules = selectedTrack ? getTrackModules(selectedTrack) : [];
  const allQuizzes = selectedTrack ? getTrackQuizzes(selectedTrack) : [];
  
  const moduleQuizzes = selectedModule !== null 
    ? allQuizzes.filter(q => q.chapterId === selectedModule)
    : [];

  const currentQuestion = moduleQuizzes[currentQuestionIndex];

  useEffect(() => {
    if (selectedModule !== null) {
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setScore(0);
      setAnsweredQuestions(new Array(moduleQuizzes.length).fill(false));
      setQuizCompleted(false);
    }
  }, [selectedModule, moduleQuizzes.length]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    setShowExplanation(true);
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    if (isCorrect && !answeredQuestions[currentQuestionIndex]) {
      setScore(score + 1);
    }
    
    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[currentQuestionIndex] = true;
    setAnsweredQuestions(newAnsweredQuestions);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < moduleQuizzes.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
      if (selectedTrack && selectedModule !== null) {
        updateQuizScore(selectedTrack, selectedModule, score + (selectedAnswer === currentQuestion.correctAnswer ? 1 : 0), moduleQuizzes.length);
      }
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions(new Array(moduleQuizzes.length).fill(false));
    setQuizCompleted(false);
  };

  // Group tracks by category
  const policyTrack = tracks.find(t => t.id === "government");
  const smbTrack = tracks.find(t => t.id === "smb");
  const regulatedTracks = tracks.filter(t => ["healthcare", "finance", "insurance"].includes(t.id));
  const nonRegulatedTracks = tracks.filter(t => ["hr", "marketing", "education", "media", "manufacturing", "retail"].includes(t.id));

  // Step 1: Select Track
  if (!selectedTrack) {
    return (
      <div className="min-h-screen bg-slate-950 relative">
        <div className="fixed inset-0 grid-pattern opacity-40" />
        <div className="fixed top-0 left-1/3 w-[600px] h-[400px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-sm text-violet-400 font-medium mb-4">
              <GraduationCap className="w-4 h-4" />
              <span>Interactive Quizzes</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Test Your Knowledge
            </h1>
            <p className="text-slate-400 max-w-lg mx-auto">
              Select a learning track to take quizzes. Each module has assessments to test your understanding.
            </p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {/* AI Policy */}
            {policyTrack && (
              <div>
                <h3 className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-3 px-1">AI Policy</h3>
                <TrackButton track={policyTrack} quizCount={getTrackQuizzes(policyTrack.id).length} onClick={() => setSelectedTrack(policyTrack.id)} />
              </div>
            )}

            {/* Regulated Industries */}
            <div>
              <h3 className="text-xs font-medium text-rose-400 uppercase tracking-wider mb-3 px-1">Regulated Industries</h3>
              <div className="grid md:grid-cols-3 gap-3">
                {regulatedTracks.map((track) => (
                  <TrackButton key={track.id} track={track} quizCount={getTrackQuizzes(track.id).length} onClick={() => setSelectedTrack(track.id)} />
                ))}
              </div>
            </div>

            {/* Non-Regulated Industries */}
            <div>
              <h3 className="text-xs font-medium text-amber-400 uppercase tracking-wider mb-3 px-1">Non-Regulated Industries</h3>
              <div className="grid md:grid-cols-3 gap-3">
                {nonRegulatedTracks.map((track) => (
                  <TrackButton key={track.id} track={track} quizCount={getTrackQuizzes(track.id).length} onClick={() => setSelectedTrack(track.id)} />
                ))}
              </div>
            </div>

            {/* SMB */}
            {smbTrack && (
              <div>
                <h3 className="text-xs font-medium text-violet-400 uppercase tracking-wider mb-3 px-1">Small & Medium Business</h3>
                <TrackButton track={smbTrack} quizCount={getTrackQuizzes(smbTrack.id).length} onClick={() => setSelectedTrack(smbTrack.id)} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Step 2: Select Module
  if (selectedModule === null && currentTrack) {
    const Icon = iconMap[currentTrack.icon] || Building2;
    
    return (
      <div className="min-h-screen bg-slate-950 relative">
        <div className="fixed inset-0 grid-pattern opacity-40" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={() => setSelectedTrack(null)}
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-white mb-8 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Tracks
          </button>

          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className={`w-12 h-12 bg-gradient-to-br ${currentTrack.color} rounded-xl flex items-center justify-center`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">{currentTrack.shortTitle} Quiz</h1>
            <p className="text-slate-500">Select a module to start the quiz</p>
          </div>

          <div className="space-y-2">
            {modules.map((module) => {
              const questionCount = allQuizzes.filter(q => q.chapterId === module.id).length;
              if (questionCount === 0) return null;
              
              return (
                <button
                  key={module.id}
                  onClick={() => setSelectedModule(module.id)}
                  className="w-full text-left bg-slate-900/50 border border-slate-800 rounded-xl p-4 hover:bg-slate-900/80 hover:border-slate-700 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={`w-9 h-9 bg-gradient-to-br ${currentTrack.color} rounded-lg flex items-center justify-center text-white text-sm font-medium`}>
                        {module.id + 1}
                      </span>
                      <div>
                        <span className="text-white font-medium block">{module.title}</span>
                        <span className="text-xs text-slate-500">{questionCount} questions</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Step 3: Quiz Completed
  if (quizCompleted && currentTrack) {
    const percentage = Math.round((score / moduleQuizzes.length) * 100);
    const passed = percentage >= 70;
    const Icon = iconMap[currentTrack.icon] || Building2;

    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center relative px-4">
        <div className="fixed inset-0 grid-pattern opacity-40" />

        <div className="relative z-10 max-w-md w-full">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 text-center">
            {/* Track badge */}
            <div className="flex items-center justify-center gap-2 mb-5">
              <div className={`w-8 h-8 bg-gradient-to-br ${currentTrack.color} rounded-lg flex items-center justify-center`}>
                <Icon className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm text-slate-400 font-medium">{currentTrack.shortTitle}</span>
            </div>

            <div className={`w-20 h-20 mx-auto mb-5 rounded-full flex items-center justify-center ${
              passed ? "bg-emerald-500/20 border-2 border-emerald-500/50" : "bg-amber-500/20 border-2 border-amber-500/50"
            }`}>
              <Trophy className={`w-10 h-10 ${passed ? 'text-emerald-400' : 'text-amber-400'}`} />
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">Quiz Completed!</h2>

            <div className={`text-5xl font-bold mb-2 ${passed ? 'text-emerald-400' : 'text-amber-400'}`}>
              {percentage}%
            </div>

            <p className="text-slate-400 mb-6">
              {score} out of {moduleQuizzes.length} correct
            </p>

            <div className={`inline-block px-4 py-2 rounded-lg text-sm font-medium mb-6 ${
              passed 
                ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400" 
                : "bg-amber-500/10 border border-amber-500/30 text-amber-400"
            }`}>
              {passed ? "🎉 Excellent!" : "💪 Keep Learning!"}
            </div>

            <div className="space-y-3">
              <button
                onClick={handleRestartQuiz}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Retake Quiz
              </button>
              <button
                onClick={() => setSelectedModule(null)}
                className="w-full px-4 py-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-white rounded-xl font-medium transition-colors"
              >
                Choose Another Module
              </button>
              <button
                onClick={() => setSelectedTrack(null)}
                className="w-full px-4 py-3 text-slate-500 hover:text-white text-sm transition-colors"
              >
                Change Track
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 4: Active Quiz
  if (!currentQuestion || !currentTrack) return null;
  
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  const Icon = iconMap[currentTrack.icon] || Building2;
  const currentModuleTitle = modules.find(m => m.id === selectedModule)?.title || "";

  return (
    <div className="min-h-screen bg-slate-950 relative">
      <div className="fixed inset-0 grid-pattern opacity-40" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => setSelectedModule(null)}
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-white mb-4 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to modules
          </button>
          
          {/* Track & Module Info */}
          <div className="flex items-center gap-2 mb-4">
            <div className={`w-8 h-8 bg-gradient-to-br ${currentTrack.color} rounded-lg flex items-center justify-center`}>
              <Icon className="w-4 h-4 text-white" />
            </div>
            <div className="text-sm">
              <span className="text-slate-500">{currentTrack.shortTitle}</span>
              <span className="text-slate-600 mx-2">•</span>
              <span className="text-slate-400">{currentModuleTitle}</span>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-white">
              Question {currentQuestionIndex + 1} of {moduleQuizzes.length}
            </h1>
            <div className="text-right">
              <span className="text-2xl font-bold text-emerald-400">{score}</span>
              <span className="text-slate-500">/{moduleQuizzes.length}</span>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${currentTrack.color} transition-all duration-500`}
              style={{ width: `${((currentQuestionIndex + 1) / moduleQuizzes.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 mb-6">
          <div className="flex items-start gap-3 mb-6">
            <div className="w-9 h-9 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
              <Brain className="w-4 h-4 text-slate-400" />
            </div>
            <h2 className="text-lg font-medium text-white leading-relaxed">
              {currentQuestion.question}
            </h2>
          </div>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrectAnswer = index === currentQuestion.correctAnswer;
              
              let buttonClass = "w-full text-left px-5 py-4 rounded-xl transition-all border-2 ";
              
              if (!showExplanation) {
                buttonClass += isSelected
                  ? "border-indigo-500 bg-indigo-500/10"
                  : "border-slate-700/50 bg-slate-800/30 hover:border-slate-600 hover:bg-slate-800/50";
              } else {
                if (isCorrectAnswer) {
                  buttonClass += "border-emerald-500 bg-emerald-500/10";
                } else if (isSelected && !isCorrect) {
                  buttonClass += "border-red-500 bg-red-500/10";
                } else {
                  buttonClass += "border-slate-800/50 bg-slate-900/50 opacity-50";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                  className={buttonClass}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-white">{option}</span>
                    {showExplanation && isCorrectAnswer && (
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    )}
                    {showExplanation && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className={`mb-6 border-2 rounded-xl p-5 ${
            isCorrect 
              ? "bg-emerald-500/5 border-emerald-500/30" 
              : "bg-red-500/5 border-red-500/30"
          }`}>
            <div className="flex items-start gap-3">
              {isCorrect ? (
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
              )}
              <div>
                <h3 className={`font-semibold mb-1 ${isCorrect ? "text-emerald-400" : "text-red-400"}`}>
                  {isCorrect ? "Correct! 🎉" : "Not Quite"}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {currentQuestion.explanation}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-between">
          <div>
            {!showExplanation && (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Answer
              </button>
            )}
          </div>
          
          <div>
            {showExplanation && (
              <button
                onClick={handleNextQuestion}
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-colors"
              >
                {currentQuestionIndex < moduleQuizzes.length - 1 ? "Next Question" : "Finish Quiz"}
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Track Button Component
function TrackButton({ track, quizCount, onClick }: { track: LearningTrack; quizCount: number; onClick: () => void }) {
  const Icon = iconMap[track.icon] || Building2;
  
  return (
    <button
      onClick={onClick}
      disabled={quizCount === 0}
      className="w-full text-left bg-slate-900/50 border border-slate-800 rounded-xl p-4 hover:bg-slate-900/80 hover:border-slate-700 transition-all group disabled:opacity-50 disabled:cursor-not-allowed relative"
    >
      {track.isPlaceholder && (
        <span className="absolute top-2 right-2 px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs text-amber-400">
          Preview
        </span>
      )}
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 bg-gradient-to-br ${track.color} rounded-xl flex items-center justify-center`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-medium group-hover:text-indigo-200 transition-colors">
            {track.shortTitle}
          </h3>
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <Target className="w-3 h-3" /> {quizCount} questions
          </span>
        </div>
        <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
      </div>
    </button>
  );
}
