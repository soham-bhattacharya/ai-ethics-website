"use client";

import { useState, useEffect } from "react";
import { quizzes } from "@/data/quizzes";
import { chapters } from "@/data/ebook-content";
import { GraduationCap, CheckCircle, XCircle, ChevronRight, RotateCcw, Trophy, Zap, Target, Brain } from "lucide-react";

export default function QuizPage() {
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const chapterQuizzes = selectedChapter !== null 
    ? quizzes.filter(q => q.chapterId === selectedChapter)
    : [];

  const currentQuestion = chapterQuizzes[currentQuestionIndex];

  useEffect(() => {
    if (selectedChapter !== null) {
      // Reset quiz state when chapter changes - this is intentional
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setScore(0);
      setAnsweredQuestions(new Array(chapterQuizzes.length).fill(false));
      setQuizCompleted(false);
    }
  }, [selectedChapter, chapterQuizzes.length]);

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
    if (currentQuestionIndex < chapterQuizzes.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions(new Array(chapterQuizzes.length).fill(false));
    setQuizCompleted(false);
  };

  if (selectedChapter === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm border border-purple-500/30 text-white px-8 py-4 rounded-full mb-6 shadow-2xl">
              <GraduationCap className="w-8 h-8 text-purple-300" />
              <span className="font-black text-2xl">Interactive Quiz</span>
              <Brain className="w-8 h-8 text-indigo-300" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-200 mb-6">
              Test Your Knowledge
            </h1>
            <p className="text-xl text-purple-200/90 max-w-2xl mx-auto leading-relaxed">
              Select a chapter to start the quiz. 5 questions per chapter to master the concepts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {chapters.map((chapter, index) => {
              const chapterQuestionCount = quizzes.filter(q => q.chapterId === chapter.id).length;
              return (
                <button
                  key={chapter.id}
                  onClick={() => setSelectedChapter(chapter.id)}
                  className="group relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-sm text-purple-300 font-bold bg-purple-500/20 px-4 py-2 rounded-full border border-purple-400/30">
                        {chapter.id === 0 ? "Introduction" : chapter.id === chapters.length - 1 ? "Conclusion" : `Chapter ${chapter.id}`}
                      </div>
                      <Target className="w-6 h-6 text-indigo-400 group-hover:rotate-180 transition-transform duration-500" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3 group-hover:text-purple-200 transition-colors">
                      {chapter.title.replace(/^(Introduction: |Chapter \d+: |Conclusion)/, "")}
                    </h3>
                    <div className="flex items-center space-x-2 text-purple-300">
                      <Zap className="w-4 h-4" />
                      <span className="text-sm font-semibold">{chapterQuestionCount} questions</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    const percentage = Math.round((score / chapterQuizzes.length) * 100);
    const passed = percentage >= 70;

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4 flex items-center justify-center relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-3xl w-full relative z-10 animate-fade-in-up">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-slate-800/80 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
              <div className={`w-32 h-32 mx-auto mb-8 rounded-full flex items-center justify-center relative ${
                passed ? "bg-gradient-to-br from-green-500 to-emerald-600" : "bg-gradient-to-br from-yellow-500 to-orange-600"
              } shadow-2xl`}>
                <Trophy className="w-16 h-16 text-white animate-pulse" />
                <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-white"></div>
              </div>

              <h2 className="text-5xl font-black text-white mb-6">
                Quiz Completed!
              </h2>

              <div className="text-7xl md:text-8xl font-black mb-4 bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-200 bg-clip-text text-transparent">
                {percentage}%
              </div>

              <p className="text-xl md:text-2xl text-purple-200 mb-8">
                You scored <span className="font-black text-white">{score}</span> out of <span className="font-black text-white">{chapterQuizzes.length}</span> correct
              </p>

              <div className={`inline-block px-8 py-4 rounded-2xl text-xl font-black mb-10 ${
                passed 
                  ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white" 
                  : "bg-gradient-to-r from-yellow-500 to-orange-600 text-white"
              } shadow-2xl`}>
                {passed ? "🎉 Excellent Work!" : "💪 Keep Learning!"}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={handleRestartQuiz}
                  className="group flex items-center justify-center space-x-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl text-lg font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <RotateCcw className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
                  <span>Retake Quiz</span>
                </button>
                <button
                  onClick={() => setSelectedChapter(null)}
                  className="flex items-center justify-center space-x-3 px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-2xl text-lg font-bold hover:bg-white/20 transition-all duration-300"
                >
                  <span>Choose Another Chapter</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8 animate-fade-in-down">
          <button
            onClick={() => setSelectedChapter(null)}
            className="text-purple-300 hover:text-purple-100 mb-6 flex items-center space-x-2 font-semibold transition-colors"
          >
            <span>← Back to chapters</span>
          </button>
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm text-purple-300 mb-2 font-semibold">
                {chapters[selectedChapter].title}
              </div>
              <h1 className="text-4xl font-black text-white">
                Question {currentQuestionIndex + 1} of {chapterQuizzes.length}
              </h1>
            </div>
            <div className="text-right">
              <div className="text-sm text-purple-300 mb-2">Score</div>
              <div className="text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                {score}/{chapterQuizzes.length}
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="relative h-3 bg-slate-800/50 backdrop-blur-sm rounded-full overflow-hidden border border-white/10">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 transition-all duration-500 rounded-full"
              style={{ width: `${((currentQuestionIndex + 1) / chapterQuizzes.length) * 100}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="relative mb-8 animate-fade-in-up">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur-xl opacity-30"></div>
          <div className="relative bg-slate-800/80 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-2xl">
            <div className="flex items-start space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white leading-tight flex-1">
                {currentQuestion.question}
              </h2>
            </div>

            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrectAnswer = index === currentQuestion.correctAnswer;
                
                let buttonClass = "group relative w-full text-left px-8 py-6 rounded-2xl transition-all duration-300 border-2 transform ";
                
                if (!showExplanation) {
                  buttonClass += isSelected
                    ? "border-purple-500 bg-purple-500/20 backdrop-blur-sm shadow-lg shadow-purple-500/50 scale-[1.02]"
                    : "border-white/10 bg-slate-700/30 backdrop-blur-sm hover:border-purple-400 hover:bg-purple-500/10 hover:scale-[1.01]";
                } else {
                  if (isCorrectAnswer) {
                    buttonClass += "border-green-500 bg-green-500/20 backdrop-blur-sm shadow-lg shadow-green-500/50 scale-[1.02]";
                  } else if (isSelected && !isCorrect) {
                    buttonClass += "border-red-500 bg-red-500/20 backdrop-blur-sm shadow-lg shadow-red-500/50";
                  } else {
                    buttonClass += "border-white/10 bg-slate-700/20 backdrop-blur-sm opacity-50";
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
                      <span className="text-lg font-semibold text-white pr-4">{option}</span>
                      {showExplanation && isCorrectAnswer && (
                        <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0 animate-pulse" />
                      )}
                      {showExplanation && isSelected && !isCorrect && (
                        <XCircle className="w-8 h-8 text-red-400 flex-shrink-0" />
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
          <div className={`relative mb-8 animate-fade-in-up ${
            isCorrect ? "animate-pulse-once" : ""
          }`}>
            <div className={`absolute inset-0 rounded-3xl blur-xl opacity-30 ${
              isCorrect ? "bg-gradient-to-r from-green-600 to-emerald-600" : "bg-gradient-to-r from-red-600 to-orange-600"
            }`}></div>
            <div className={`relative backdrop-blur-2xl border-2 rounded-3xl p-8 ${
              isCorrect 
                ? "bg-green-500/10 border-green-500/50" 
                : "bg-red-500/10 border-red-500/50"
            }`}>
              <div className="flex items-start space-x-4">
                {isCorrect ? (
                  <CheckCircle className="w-10 h-10 text-green-400 flex-shrink-0 animate-bounce" />
                ) : (
                  <XCircle className="w-10 h-10 text-red-400 flex-shrink-0" />
                )}
                <div>
                  <h3 className={`text-2xl font-black mb-4 ${
                    isCorrect ? "text-green-300" : "text-red-300"
                  }`}>
                    {isCorrect ? "Correct! 🎉" : "Not Quite 💡"}
                  </h3>
                  <p className="text-lg text-white leading-relaxed">
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
                className="px-10 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl text-lg font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 disabled:hover:scale-100"
              >
                Submit Answer
              </button>
            )}
          </div>
          
          <div>
            {showExplanation && (
              <button
                onClick={handleNextQuestion}
                className="group flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl text-lg font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <span>{currentQuestionIndex < chapterQuizzes.length - 1 ? "Next Question" : "Finish Quiz"}</span>
                <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
