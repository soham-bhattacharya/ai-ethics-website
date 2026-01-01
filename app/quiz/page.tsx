"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  GraduationCap, CheckCircle, XCircle, ChevronRight, RotateCcw, Trophy, 
  Zap, Target, Brain, ChevronLeft, ArrowRight, LucideIcon,
  Building2, Landmark, HeartPulse, Users, TrendingUp, Shield, Megaphone,
  Radio, Factory, ShoppingCart, BookOpen, Clock
} from "lucide-react";

// Track imports
import { getAllTracks, LearningTrack, getAllCategories } from "@/data/tracks";

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
      // Save score to progress
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 py-12 px-4 relative overflow-hidden">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm border border-purple-500/30 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
              <GraduationCap className="w-6 h-6 text-purple-300" />
              <span className="font-bold text-lg">Interactive Quizzes</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-200 mb-4">
              Test Your Knowledge
            </h1>
            <p className="text-lg text-purple-200/80 max-w-2xl mx-auto">
              Select a learning track to take quizzes. Each track has module-specific assessments to test your understanding.
            </p>
          </div>

          {/* Track Selection Grid */}
          <div className="space-y-8">
            {/* AI Policy */}
            {policyTrack && (
              <div>
                <h3 className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-3 px-2">AI Policy</h3>
                <TrackButton track={policyTrack} quizCount={getTrackQuizzes(policyTrack.id).length} onClick={() => setSelectedTrack(policyTrack.id)} />
              </div>
            )}

            {/* Regulated Industries */}
            <div>
              <h3 className="text-sm font-semibold text-rose-300 uppercase tracking-wider mb-3 px-2">Regulated Industries</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {regulatedTracks.map((track) => (
                  <TrackButton key={track.id} track={track} quizCount={getTrackQuizzes(track.id).length} onClick={() => setSelectedTrack(track.id)} />
                ))}
              </div>
            </div>

            {/* Non-Regulated Industries */}
            <div>
              <h3 className="text-sm font-semibold text-amber-300 uppercase tracking-wider mb-3 px-2">Non-Regulated Industries</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {nonRegulatedTracks.map((track) => (
                  <TrackButton key={track.id} track={track} quizCount={getTrackQuizzes(track.id).length} onClick={() => setSelectedTrack(track.id)} />
                ))}
              </div>
            </div>

            {/* SMB */}
            {smbTrack && (
              <div>
                <h3 className="text-sm font-semibold text-purple-300 uppercase tracking-wider mb-3 px-2">Small & Medium Business</h3>
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 py-12 px-4 relative overflow-hidden">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <button
            onClick={() => setSelectedTrack(null)}
            className="inline-flex items-center gap-2 text-purple-300 hover:text-white mb-8 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Tracks</span>
          </button>

          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className={`w-14 h-14 bg-gradient-to-br ${currentTrack.color} rounded-xl flex items-center justify-center shadow-lg`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-white">{currentTrack.shortTitle} Quiz</h1>
            </div>
            <p className="text-purple-200/70">Select a module to start the quiz</p>
          </div>

          <div className="space-y-3">
            {modules.map((module) => {
              const questionCount = allQuizzes.filter(q => q.chapterId === module.id).length;
              if (questionCount === 0) return null;
              
              return (
                <button
                  key={module.id}
                  onClick={() => setSelectedModule(module.id)}
                  className="w-full text-left bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-slate-700/50 hover:border-purple-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 bg-gradient-to-br ${currentTrack.color} rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
                        {module.id + 1}
                      </div>
                      <div>
                        <span className="text-white font-semibold block">{module.title}</span>
                        <span className="text-purple-300/60 text-sm">{questionCount} questions</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 py-12 px-4 flex items-center justify-center relative overflow-hidden">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-3xl w-full relative z-10 animate-fade-in-up">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-slate-800/80 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 md:p-14 text-center shadow-2xl">
              {/* Track badge */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className={`w-8 h-8 bg-gradient-to-br ${currentTrack.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-purple-300 font-semibold">{currentTrack.shortTitle}</span>
              </div>

              <div className={`w-28 h-28 mx-auto mb-6 rounded-full flex items-center justify-center relative ${
                passed ? "bg-gradient-to-br from-green-500 to-emerald-600" : "bg-gradient-to-br from-yellow-500 to-orange-600"
              } shadow-2xl`}>
                <Trophy className="w-14 h-14 text-white" />
              </div>

              <h2 className="text-4xl font-black text-white mb-4">
                Quiz Completed!
              </h2>

              <div className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-200 bg-clip-text text-transparent">
                {percentage}%
              </div>

              <p className="text-lg text-purple-200 mb-6">
                You scored <span className="font-black text-white">{score}</span> out of <span className="font-black text-white">{moduleQuizzes.length}</span>
              </p>

              <div className={`inline-block px-6 py-3 rounded-xl text-lg font-bold mb-8 ${
                passed 
                  ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white" 
                  : "bg-gradient-to-r from-yellow-500 to-orange-600 text-white"
              }`}>
                {passed ? "🎉 Excellent!" : "💪 Keep Learning!"}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleRestartQuiz}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-bold hover:shadow-lg transition-all"
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>Retake Quiz</span>
                </button>
                <button
                  onClick={() => setSelectedModule(null)}
                  className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all"
                >
                  Choose Another Module
                </button>
                <button
                  onClick={() => setSelectedTrack(null)}
                  className="px-6 py-3 bg-white/5 border border-white/10 text-slate-300 rounded-xl font-semibold hover:bg-white/10 transition-all"
                >
                  Change Track
                </button>
              </div>
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 py-12 px-4 relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => setSelectedModule(null)}
            className="text-purple-300 hover:text-white mb-4 flex items-center gap-2 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to modules</span>
          </button>
          
          {/* Track & Module Info */}
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-10 h-10 bg-gradient-to-br ${currentTrack.color} rounded-lg flex items-center justify-center`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-purple-300/70 text-sm">{currentTrack.shortTitle}</span>
              <h2 className="text-white font-semibold">{currentModuleTitle}</h2>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-black text-white">
              Question {currentQuestionIndex + 1} of {moduleQuizzes.length}
            </h1>
            <div className="text-right">
              <div className="text-sm text-purple-300">Score</div>
              <div className="text-3xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                {score}/{moduleQuizzes.length}
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="relative h-2 bg-slate-800/50 rounded-full overflow-hidden border border-white/10">
            <div
              className={`absolute inset-y-0 left-0 bg-gradient-to-r ${currentTrack.color} transition-all duration-500 rounded-full`}
              style={{ width: `${((currentQuestionIndex + 1) / moduleQuizzes.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="relative mb-6">
          <div className="bg-slate-800/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
                {currentQuestion.question}
              </h2>
            </div>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrectAnswer = index === currentQuestion.correctAnswer;
                
                let buttonClass = "w-full text-left px-6 py-4 rounded-xl transition-all duration-300 border-2 ";
                
                if (!showExplanation) {
                  buttonClass += isSelected
                    ? "border-purple-500 bg-purple-500/20"
                    : "border-white/10 bg-slate-700/30 hover:border-purple-400/50 hover:bg-slate-700/50";
                } else {
                  if (isCorrectAnswer) {
                    buttonClass += "border-green-500 bg-green-500/20";
                  } else if (isSelected && !isCorrect) {
                    buttonClass += "border-red-500 bg-red-500/20";
                  } else {
                    buttonClass += "border-white/5 bg-slate-800/30 opacity-50";
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showExplanation}
                    className={buttonClass}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">{option}</span>
                      {showExplanation && isCorrectAnswer && (
                        <CheckCircle className="w-6 h-6 text-green-400" />
                      )}
                      {showExplanation && isSelected && !isCorrect && (
                        <XCircle className="w-6 h-6 text-red-400" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className={`mb-6 ${isCorrect ? "" : ""}`}>
            <div className={`backdrop-blur-xl border-2 rounded-2xl p-6 ${
              isCorrect 
                ? "bg-green-500/10 border-green-500/40" 
                : "bg-red-500/10 border-red-500/40"
            }`}>
              <div className="flex items-start gap-3">
                {isCorrect ? (
                  <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
                ) : (
                  <XCircle className="w-8 h-8 text-red-400 flex-shrink-0" />
                )}
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${
                    isCorrect ? "text-green-300" : "text-red-300"
                  }`}>
                    {isCorrect ? "Correct! 🎉" : "Not Quite 💡"}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {currentQuestion.explanation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <div>
            {!showExplanation && (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-bold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Answer
              </button>
            )}
          </div>
          
          <div>
            {showExplanation && (
              <button
                onClick={handleNextQuestion}
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-bold hover:shadow-lg transition-all"
              >
                <span>{currentQuestionIndex < moduleQuizzes.length - 1 ? "Next Question" : "Finish Quiz"}</span>
                <ChevronRight className="w-5 h-5" />
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
  const isPlaceholder = track.isPlaceholder;
  
  return (
    <button
      onClick={onClick}
      disabled={quizCount === 0}
      className="w-full text-left bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-slate-700/50 hover:border-purple-500/30 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed relative"
    >
      {isPlaceholder && (
        <div className="absolute top-2 right-2 px-2 py-0.5 bg-amber-500/20 border border-amber-500/30 rounded-full text-xs text-amber-300">
          Preview
        </div>
      )}
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 bg-gradient-to-br ${track.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-bold group-hover:text-purple-200 transition-colors">
            {track.shortTitle}
          </h3>
          <div className="flex items-center gap-2 text-purple-300/60 text-sm">
            <Target className="w-3.5 h-3.5" />
            <span>{quizCount} questions</span>
          </div>
        </div>
        <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
      </div>
    </button>
  );
}
