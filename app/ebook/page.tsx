"use client";

import { useState, useEffect } from "react";
import { chapters } from "@/data/ebook-content";
import { updateModuleProgress } from "@/lib/progress";
import { ChevronLeft, ChevronRight, BookOpen, Clock, CheckCircle, Menu } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { MarkdownComponents } from "@/components/MarkdownComponents";

export default function EbookPage() {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [readProgress, setReadProgress] = useState<number[]>(new Array(chapters.length).fill(0));
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const chapter = chapters[currentChapter];

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = documentHeight > 0 ? (scrolled / documentHeight) * 100 : 0;
      const roundedProgress = Math.min(Math.round(progress), 100);
      
      const newProgress = [...readProgress];
      newProgress[currentChapter] = roundedProgress;
      setReadProgress(newProgress);
      
      // Save progress to localStorage at 10% intervals or at completion
      const currentSaved = readProgress[currentChapter] || 0;
      if (roundedProgress > currentSaved && (roundedProgress % 10 === 0 || roundedProgress >= 95)) {
        updateModuleProgress('smb', chapters[currentChapter].id, roundedProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentChapter, readProgress]);

  const goToNextChapter = () => {
    if (currentChapter < chapters.length - 1) {
      setCurrentChapter(currentChapter + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToPreviousChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const averageProgress = Math.round(readProgress.reduce((a, b) => a + b, 0) / chapters.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Sleek Top Progress Bar - positioned below navigation */}
      <div className="fixed top-16 md:top-20 left-0 right-0 z-40">
        <div className="relative h-1 bg-slate-700/50 backdrop-blur-sm">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 transition-all duration-300 shadow-lg shadow-purple-500/50"
            style={{ width: `${readProgress[currentChapter]}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </div>
        </div>
        <div className="bg-slate-800/95 backdrop-blur-xl border-b border-slate-700 px-4 py-2">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
              >
                <Menu className="w-5 h-5 text-white" />
              </button>
              <div className="flex items-center space-x-3">
                <BookOpen className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-bold text-white">
                  Chapter {currentChapter + 1} of {chapters.length}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="hidden sm:flex items-center space-x-2 text-slate-400">
                <Clock className="w-4 h-4" />
                <span>{Math.ceil(chapter.wordCount / 200)} min</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-purple-400 font-bold">{readProgress[currentChapter]}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-28 md:pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className={`lg:col-span-3 ${sidebarOpen ? 'block' : 'hidden'} lg:block`}>
              <div className="sticky top-32 md:top-36">
                {/* Overall Progress */}
                <div className="relative mb-6 animate-fade-in-up">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur-xl opacity-50"></div>
                  <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 shadow-2xl">
                    <div className="text-center mb-4">
                      <div className="text-5xl font-black bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                        {averageProgress}%
                      </div>
                      <div className="text-sm text-slate-400 font-semibold">Book Progress</div>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full transition-all duration-500 rounded-full"
                        style={{ width: `${averageProgress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Chapter List */}
                <div className="relative animate-fade-in-up delay-100">
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl blur-xl opacity-50"></div>
                  <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-2xl p-4 shadow-2xl">
                    <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-slate-700">
                      <BookOpen className="w-5 h-5 text-purple-400" />
                      <h2 className="font-black text-white text-sm">Table of Contents</h2>
                    </div>
                    
                    <nav className="space-y-2 max-h-[calc(100vh-400px)] overflow-y-auto pr-2 custom-scrollbar">
                      {chapters.map((ch, idx) => (
                        <button
                          key={ch.id}
                          onClick={() => {
                            setCurrentChapter(idx);
                            setSidebarOpen(false);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className={`group relative w-full text-left px-3 py-3 rounded-xl transition-all duration-300 ${
                            idx === currentChapter
                              ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/50"
                              : "hover:bg-slate-700 text-slate-300 hover:text-white"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <div className="text-xs font-bold opacity-80">
                              {idx === 0 ? "Introduction" : idx === chapters.length - 1 ? "Conclusion" : `Chapter ${idx}`}
                            </div>
                            {readProgress[idx] === 100 && (
                              <CheckCircle className={`w-3 h-3 ${idx === currentChapter ? "text-green-300" : "text-green-500"}`} />
                            )}
                          </div>
                          <div className={`text-xs line-clamp-2 mb-1 ${idx === currentChapter ? "text-white font-semibold" : "text-slate-400"}`}>
                            {ch.title.replace(/^(Introduction: |Chapter \d+: |Conclusion)/, "")}
                          </div>
                          {readProgress[idx] > 0 && idx !== currentChapter && (
                            <div className="text-xs text-purple-400 font-semibold">
                              {readProgress[idx]}%
                            </div>
                          )}
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Reading Area */}
            <div className="lg:col-span-9">
              <div className="relative animate-fade-in-up">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl shadow-2xl overflow-hidden">
                  {/* Chapter Header */}
                  <div className="border-b border-slate-700 bg-gradient-to-r from-slate-800/80 to-slate-800/50 px-8 md:px-12 py-8">
                    <div className="text-xs font-bold text-purple-400 mb-2 uppercase tracking-wider">
                      {currentChapter === 0 ? "Introduction" : currentChapter === chapters.length - 1 ? "Conclusion" : `Chapter ${currentChapter}`}
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                      {chapter.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center space-x-1.5 bg-slate-700/50 px-3 py-1.5 rounded-full">
                        <Clock className="w-3.5 h-3.5" />
                        <span className="font-semibold">{Math.ceil(chapter.wordCount / 200)} min read</span>
                      </span>
                      <span className="flex items-center space-x-1.5 bg-slate-700/50 px-3 py-1.5 rounded-full">
                        <span className="font-semibold">{chapter.wordCount.toLocaleString()} words</span>
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-8 md:px-12 py-10 bg-slate-900/30">
                    <article className="prose prose-lg prose-invert max-w-none">
                      <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        components={MarkdownComponents}
                      >
                        {chapter.content}
                      </ReactMarkdown>
                    </article>
                  </div>

                  {/* Navigation Footer */}
                  <div className="border-t border-slate-700 bg-slate-800/80 p-6">
                    <div className="flex justify-between items-center">
                      <button
                        onClick={goToPreviousChapter}
                        disabled={currentChapter === 0}
                        className={`group flex items-center space-x-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                          currentChapter === 0
                            ? "bg-slate-700/50 text-slate-500 cursor-not-allowed"
                            : "bg-slate-700 text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:shadow-lg transform hover:-translate-x-1"
                        }`}
                      >
                        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span>Previous</span>
                      </button>

                      <div className="text-center hidden sm:block">
                        <div className="text-xs text-slate-500 mb-1">Progress</div>
                        <div className="text-lg font-black bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                          {currentChapter + 1} / {chapters.length}
                        </div>
                      </div>

                      <button
                        onClick={goToNextChapter}
                        disabled={currentChapter === chapters.length - 1}
                        className={`group flex items-center space-x-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                          currentChapter === chapters.length - 1
                            ? "bg-slate-700/50 text-slate-500 cursor-not-allowed"
                            : "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-purple-500/50 transform hover:translate-x-1"
                        }`}
                      >
                        <span>Next</span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
