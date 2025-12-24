"use client";

import { useState, use } from "react";
import Link from "next/link";
import { getTrackBySlug } from "@/data/tracks";
import { governmentQuizzes } from "@/data/government-quizzes";
import { healthcareQuizzes } from "@/data/healthcare-quizzes";
import { hrQuizzes } from "@/data/hr-quizzes";
import { financeQuizzes } from "@/data/finance-quizzes";
import { governmentModules } from "@/data/government-content";
import { healthcareChapters } from "@/data/healthcare-content";
import { hrChapters } from "@/data/hr-content";
import { financeChapters } from "@/data/finance-content";
import {
  ChevronLeft, ChevronRight, BookOpen, CheckCircle, XCircle,
  Trophy, Target, Zap, RotateCcw, Home, Building2, Landmark, HeartPulse, Users,
  LucideIcon, ArrowRight, Sparkles, TrendingUp
} from "lucide-react";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Building2,
  Landmark,
  HeartPulse,
  Users,
  TrendingUp,
};

interface QuizQuestion {
  id: string;
  chapterId: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

// Get quizzes by track
function getTrackQuizzes(slug: string): QuizQuestion[] {
  switch (slug) {
    case "government": return governmentQuizzes;
    case "healthcare": return healthcareQuizzes;
    case "hr": return hrQuizzes;
    case "finance": return financeQuizzes;
    default: return [];
  }
}

// Get modules by track
function getTrackModules(slug: string) {
  switch (slug) {
    case "government": return governmentModules;
    case "healthcare": return healthcareChapters;
    case "hr": return hrChapters;
    case "finance": return financeChapters;
    default: return [];
  }
}

interface QuizPageProps {
  params: Promise<{ trackSlug: string }>;
}

export default function TrackQuizPage({ params }: QuizPageProps) {
  const { trackSlug } = use(params);
  const track = getTrackBySlug(trackSlug);
  const quizzes = getTrackQuizzes(trackSlug);
  const modules = getTrackModules(trackSlug);

  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);

  // Handle invalid track
  if (!track || quizzes.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Quiz Not Available</h1>
          <p className="text-purple-200/70 mb-8">The quiz for this track isn&apos;t available yet.</p>
          <Link href="/tracks" className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
            <Home className="w-5 h-5" />
            <span>Browse Tracks</span>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[track.icon] || Building2;

  // Get track-specific color classes
  const getColorClasses = () => {
    switch (track.accentColor) {
      case "blue":
        return {
          gradient: "from-blue-600 to-cyan-600",
          shadow: "shadow-blue-500/50",
          text: "text-blue-400",
          bgLight: "bg-blue-500/20",
          border: "border-blue-500/30"
        };
      case "rose":
        return {
          gradient: "from-rose-600 to-pink-600",
          shadow: "shadow-rose-500/50",
          text: "text-rose-400",
          bgLight: "bg-rose-500/20",
          border: "border-rose-500/30"
        };
      case "amber":
        return {
          gradient: "from-amber-600 to-orange-600",
          shadow: "shadow-amber-500/50",
          text: "text-amber-400",
          bgLight: "bg-amber-500/20",
          border: "border-amber-500/30"
        };
      case "emerald":
        return {
          gradient: "from-emerald-600 to-teal-600",
          shadow: "shadow-emerald-500/50",
          text: "text-emerald-400",
          bgLight: "bg-emerald-500/20",
          border: "border-emerald-500/30"
        };
      default:
        return {
          gradient: "from-purple-600 to-indigo-600",
          shadow: "shadow-purple-500/50",
          text: "text-purple-400",
          bgLight: "bg-purple-500/20",
          border: "border-purple-500/30"
        };
    }
  };

  const colors = getColorClasses();

  // Filter quizzes by selected module
  const moduleQuizzes = selectedModule !== null 
    ? quizzes.filter(q => q.chapterId === selectedModule)
    : [];

  const handleAnswerSelect = (answerIndex: number) => {
    if (isAnswered) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    setIsAnswered(true);
    if (selectedAnswer === moduleQuizzes[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    const newAnswered = [...answeredQuestions];
    newAnswered[currentQuestion] = true;
    setAnsweredQuestions(newAnswered);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < moduleQuizzes.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
    setAnsweredQuestions([]);
  };

  const handleBackToModuleSelect = () => {
    setSelectedModule(null);
    handleRestart();
  };

  // Module selection view
  if (selectedModule === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        {/* Animated background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-20 left-10 w-72 h-72 ${colors.bgLight} rounded-full blur-3xl animate-pulse`}></div>
          <div className={`absolute bottom-20 right-10 w-96 h-96 ${colors.bgLight} rounded-full blur-3xl animate-pulse delay-1000`}></div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Header */}
          <div className="text-center mb-12">
            <Link 
              href={`/tracks/${trackSlug}`}
              className="inline-flex items-center space-x-2 text-slate-400 hover:text-white transition-colors mb-6"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to {track.shortTitle}</span>
            </Link>
            
            <div className={`inline-flex items-center space-x-3 bg-gradient-to-r ${colors.bgLight} backdrop-blur-sm ${colors.border} border text-white px-6 py-3 rounded-full mb-6`}>
              <div className={`w-10 h-10 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold">{track.shortTitle} Quiz</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              Test Your Knowledge
            </h1>
            <p className="text-xl text-purple-200/70 max-w-2xl mx-auto">
              Select a module to begin testing your understanding of the concepts covered.
            </p>
          </div>

          {/* Module Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => {
              const moduleQuestionCount = quizzes.filter(q => q.chapterId === module.id).length;
              if (moduleQuestionCount === 0) return null;
              
              return (
                <button
                  key={module.id}
                  onClick={() => setSelectedModule(module.id)}
                  className="group relative animate-fade-in-up text-left"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  <div className="relative bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 h-full hover:border-white/30 transition-all duration-300 transform group-hover:scale-[1.02] group-hover:-translate-y-1">
                    <div className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">
                      {index === 0 ? "Introduction" : `Module ${index}`}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-purple-200 transition-colors">
                      {module.title.replace(/^(Introduction: |Module \d+: |Chapter \d+: )/, "")}
                    </h3>
                    <div className={`flex items-center space-x-2 ${colors.text}`}>
                      <Zap className="w-4 h-4" />
                      <span className="text-sm font-semibold">{moduleQuestionCount} questions</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* All Questions Option */}
          <div className="mt-8 text-center">
            <button
              onClick={() => {
                // Select first module with questions as a default
                const firstModuleWithQuestions = modules.find(m => quizzes.filter(q => q.chapterId === m.id).length > 0);
                if (firstModuleWithQuestions) {
                  setSelectedModule(firstModuleWithQuestions.id);
                }
              }}
              className={`inline-flex items-center space-x-3 bg-gradient-to-r ${colors.gradient} text-white px-8 py-4 rounded-2xl font-bold text-lg hover:${colors.shadow} hover:shadow-lg transition-all transform hover:scale-105`}
            >
              <Sparkles className="w-5 h-5" />
              <span>Start Quiz</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Results view
  if (showResults) {
    const percentage = Math.round((score / moduleQuizzes.length) * 100);
    const passed = percentage >= 70;

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="relative animate-fade-in-up">
            <div className={`absolute inset-0 bg-gradient-to-r ${passed ? "from-green-600 to-emerald-600" : "from-orange-600 to-amber-600"} rounded-3xl blur-2xl opacity-30`}></div>
            <div className="relative bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-3xl p-12 text-center">
              <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${passed ? "bg-green-500/20" : "bg-orange-500/20"}`}>
                <Trophy className={`w-12 h-12 ${passed ? "text-green-400" : "text-orange-400"}`} />
              </div>
              
              <h1 className="text-4xl font-black text-white mb-4">
                {passed ? "Excellent Work!" : "Keep Learning!"}
              </h1>
              
              <div className={`text-6xl font-black mb-4 ${passed ? "text-green-400" : "text-orange-400"}`}>
                {percentage}%
              </div>
              
              <p className="text-xl text-purple-200/70 mb-8">
                You scored {score} out of {moduleQuizzes.length} questions correctly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleRestart}
                  className="inline-flex items-center justify-center space-x-2 bg-slate-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-600 transition-all"
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>Try Again</span>
                </button>
                <button
                  onClick={handleBackToModuleSelect}
                  className="inline-flex items-center justify-center space-x-2 bg-slate-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-600 transition-all"
                >
                  <Target className="w-5 h-5" />
                  <span>Different Module</span>
                </button>
                <Link
                  href={`/tracks/${trackSlug}`}
                  className={`inline-flex items-center justify-center space-x-2 bg-gradient-to-r ${colors.gradient} text-white px-6 py-3 rounded-xl font-bold hover:${colors.shadow} hover:shadow-lg transition-all`}
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Review Content</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quiz question view
  const question = moduleQuizzes[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handleBackToModuleSelect}
              className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-sm">Change Module</span>
            </button>
            <div className="flex items-center space-x-4">
              <div className={`flex items-center space-x-2 ${colors.text}`}>
                <Target className="w-4 h-4" />
                <span className="font-bold">{score}/{currentQuestion + (isAnswered ? 1 : 0)}</span>
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
            <div
              className={`bg-gradient-to-r ${colors.gradient} h-full transition-all duration-500`}
              style={{ width: `${((currentQuestion + 1) / moduleQuizzes.length) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-slate-400">
            <span>Question {currentQuestion + 1} of {moduleQuizzes.length}</span>
            <span>{Math.round(((currentQuestion + 1) / moduleQuizzes.length) * 100)}%</span>
          </div>
        </div>

        {/* Question Card */}
        <div className="relative animate-fade-in-up">
          <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} rounded-3xl blur-2xl opacity-20`}></div>
          <div className="relative bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-3xl overflow-hidden">
            <div className="p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-relaxed">
                {question.question}
              </h2>

              <div className="space-y-4">
                {question.options.map((option, index) => {
                  let buttonClass = "bg-slate-700/50 border-slate-600 hover:border-white/40 hover:bg-slate-700";
                  
                  if (isAnswered) {
                    if (index === question.correctAnswer) {
                      buttonClass = "bg-green-500/20 border-green-500 text-green-300";
                    } else if (index === selectedAnswer && !isCorrect) {
                      buttonClass = "bg-red-500/20 border-red-500 text-red-300";
                    }
                  } else if (selectedAnswer === index) {
                    buttonClass = `${colors.bgLight} ${colors.border} ${colors.text}`;
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={isAnswered}
                      className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ${buttonClass} ${!isAnswered ? "cursor-pointer" : "cursor-default"}`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                          isAnswered && index === question.correctAnswer
                            ? "bg-green-500 text-white"
                            : isAnswered && index === selectedAnswer && !isCorrect
                            ? "bg-red-500 text-white"
                            : selectedAnswer === index
                            ? `bg-gradient-to-r ${colors.gradient} text-white`
                            : "bg-slate-600 text-slate-300"
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className="text-lg text-white">{option}</span>
                        {isAnswered && index === question.correctAnswer && (
                          <CheckCircle className="w-6 h-6 text-green-400 ml-auto flex-shrink-0" />
                        )}
                        {isAnswered && index === selectedAnswer && !isCorrect && (
                          <XCircle className="w-6 h-6 text-red-400 ml-auto flex-shrink-0" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {isAnswered && (
                <div className={`mt-8 p-6 rounded-2xl ${isCorrect ? "bg-green-500/10 border border-green-500/30" : "bg-amber-500/10 border border-amber-500/30"} animate-fade-in`}>
                  <div className="flex items-start space-x-3">
                    {isCorrect ? (
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <div className={`font-bold mb-2 ${isCorrect ? "text-green-400" : "text-amber-400"}`}>
                        {isCorrect ? "Correct!" : "Not quite right"}
                      </div>
                      <p className="text-purple-200/80 leading-relaxed">
                        {question.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Footer */}
            <div className="border-t border-slate-700 bg-slate-800/80 p-6">
              <div className="flex justify-between items-center">
                <button
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestion === 0}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                    currentQuestion === 0
                      ? "bg-slate-700/50 text-slate-500 cursor-not-allowed"
                      : "bg-slate-700 text-white hover:bg-slate-600"
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>Previous</span>
                </button>

                {!isAnswered ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer === null}
                    className={`flex items-center space-x-2 px-8 py-3 rounded-xl font-bold text-sm transition-all ${
                      selectedAnswer === null
                        ? "bg-slate-700/50 text-slate-500 cursor-not-allowed"
                        : `bg-gradient-to-r ${colors.gradient} text-white hover:${colors.shadow} hover:shadow-lg`
                    }`}
                  >
                    <span>Check Answer</span>
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className={`flex items-center space-x-2 px-8 py-3 rounded-xl font-bold text-sm bg-gradient-to-r ${colors.gradient} text-white hover:${colors.shadow} hover:shadow-lg transition-all`}
                  >
                    <span>{currentQuestion === moduleQuizzes.length - 1 ? "View Results" : "Next Question"}</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

