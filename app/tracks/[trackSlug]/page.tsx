"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getTrackBySlug, LearningTrack } from "@/data/tracks";
import { governmentModules } from "@/data/government-content";
import { healthcareChapters } from "@/data/healthcare-content";
import { hrChapters } from "@/data/hr-content";
import { financeChapters } from "@/data/finance-content";
import { 
  ChevronLeft, ChevronRight, BookOpen, Clock, CheckCircle, Menu,
  Building2, Landmark, HeartPulse, Users, Home, GraduationCap, ArrowRight,
  LucideIcon, TrendingUp
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { MarkdownComponents } from "@/components/MarkdownComponents";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Building2,
  Landmark,
  HeartPulse,
  Users,
  TrendingUp,
};

// Content mapping by track slug
function getTrackContent(slug: string) {
  switch (slug) {
    case "government":
      return {
        modules: governmentModules,
        metadata: { title: "AI Policy & Ethics for Government Professionals", totalModules: governmentModules.length }
      };
    case "healthcare":
      return {
        modules: healthcareChapters,
        metadata: { title: "AI Ethics for Healthcare Professionals", totalModules: healthcareChapters.length }
      };
    case "hr":
      return {
        modules: hrChapters,
        metadata: { title: "AI Ethics for HR & Recruitment", totalModules: hrChapters.length }
      };
    case "finance":
      return {
        modules: financeChapters,
        metadata: { title: "AI Ethics for Financial Services", totalModules: financeChapters.length }
      };
    default:
      return null;
  }
}

interface TrackPageProps {
  params: Promise<{ trackSlug: string }>;
}

export default function TrackPage({ params }: TrackPageProps) {
  const { trackSlug } = use(params);
  const router = useRouter();
  const [currentModule, setCurrentModule] = useState(0);
  const [readProgress, setReadProgress] = useState<number[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const track = getTrackBySlug(trackSlug);
  const content = getTrackContent(trackSlug);

  useEffect(() => {
    if (content) {
      setReadProgress(new Array(content.modules.length).fill(0));
    }
  }, [content]);

  useEffect(() => {
    if (!content) return;

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = documentHeight > 0 ? (scrolled / documentHeight) * 100 : 0;
      
      const newProgress = [...readProgress];
      newProgress[currentModule] = Math.min(Math.round(progress), 100);
      setReadProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentModule, readProgress, content]);

  // Handle invalid track
  if (!track || !content) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Track Not Found</h1>
          <p className="text-purple-200/70 mb-8">The learning track you&apos;re looking for doesn&apos;t exist or isn&apos;t available yet.</p>
          <Link href="/tracks" className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
            <Home className="w-5 h-5" />
            <span>Browse Tracks</span>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[track.icon] || Building2;
  const modules = content.modules;
  const module = modules[currentModule];

  const goToNextModule = () => {
    if (currentModule < modules.length - 1) {
      setCurrentModule(currentModule + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToPreviousModule = () => {
    if (currentModule > 0) {
      setCurrentModule(currentModule - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const averageProgress = readProgress.length > 0 
    ? Math.round(readProgress.reduce((a, b) => a + b, 0) / modules.length)
    : 0;

  // Get track-specific color classes
  const getColorClasses = () => {
    switch (track.accentColor) {
      case "blue":
        return {
          gradient: "from-blue-600 to-cyan-600",
          shadow: "shadow-blue-500/50",
          text: "text-blue-400",
          bg: "bg-blue-500",
          border: "border-blue-500/30"
        };
      case "rose":
        return {
          gradient: "from-rose-600 to-pink-600",
          shadow: "shadow-rose-500/50",
          text: "text-rose-400",
          bg: "bg-rose-500",
          border: "border-rose-500/30"
        };
      case "amber":
        return {
          gradient: "from-amber-600 to-orange-600",
          shadow: "shadow-amber-500/50",
          text: "text-amber-400",
          bg: "bg-amber-500",
          border: "border-amber-500/30"
        };
      case "emerald":
        return {
          gradient: "from-emerald-600 to-teal-600",
          shadow: "shadow-emerald-500/50",
          text: "text-emerald-400",
          bg: "bg-emerald-500",
          border: "border-emerald-500/30"
        };
      default:
        return {
          gradient: "from-purple-600 to-indigo-600",
          shadow: "shadow-purple-500/50",
          text: "text-purple-400",
          bg: "bg-purple-500",
          border: "border-purple-500/30"
        };
    }
  };

  const colors = getColorClasses();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Progress Bar */}
      <div className="fixed top-16 left-0 right-0 z-50">
        <div className="relative h-1 bg-slate-700/50 backdrop-blur-sm">
          <div
            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${colors.gradient} transition-all duration-300 ${colors.shadow}`}
            style={{ width: `${readProgress[currentModule] || 0}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </div>
        </div>
        <div className={`bg-slate-800/95 backdrop-blur-xl border-b ${colors.border} px-4 py-2`}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
              >
                <Menu className="w-5 h-5 text-white" />
              </button>
              <Link href="/tracks" className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors">
                <ChevronLeft className="w-4 h-4" />
                <span className="text-sm hidden sm:inline">All Tracks</span>
              </Link>
              <div className="hidden sm:flex items-center space-x-3">
                <div className={`w-8 h-8 bg-gradient-to-br ${colors.gradient} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-bold text-white">
                  Module {currentModule + 1} of {modules.length}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="hidden sm:flex items-center space-x-2 text-slate-400">
                <Clock className="w-4 h-4" />
                <span>{Math.ceil(module.wordCount / 200)} min</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className={`${colors.text} font-bold`}>{readProgress[currentModule] || 0}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className={`lg:col-span-3 ${sidebarOpen ? 'block' : 'hidden'} lg:block`}>
              <div className="sticky top-32">
                {/* Track Info */}
                <div className="relative mb-6 animate-fade-in-up">
                  <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} rounded-2xl blur-xl opacity-50`}></div>
                  <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 shadow-2xl">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">{track.shortTitle}</div>
                        <div className="text-xs text-slate-400">{track.estimatedTime}</div>
                      </div>
                    </div>
                    <div className="text-center mb-4">
                      <div className={`text-4xl font-black bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent mb-1`}>
                        {averageProgress}%
                      </div>
                      <div className="text-xs text-slate-400 font-semibold">Track Progress</div>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${colors.gradient} h-full transition-all duration-500 rounded-full`}
                        style={{ width: `${averageProgress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Module List */}
                <div className="relative animate-fade-in-up delay-100">
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl blur-xl opacity-50"></div>
                  <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-2xl p-4 shadow-2xl">
                    <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-slate-700">
                      <BookOpen className={`w-5 h-5 ${colors.text}`} />
                      <h2 className="font-black text-white text-sm">Modules</h2>
                    </div>
                    
                    <nav className="space-y-2 max-h-[calc(100vh-450px)] overflow-y-auto pr-2 custom-scrollbar">
                      {modules.map((mod, idx) => (
                        <button
                          key={mod.id}
                          onClick={() => {
                            setCurrentModule(idx);
                            setSidebarOpen(false);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className={`group relative w-full text-left px-3 py-3 rounded-xl transition-all duration-300 ${
                            idx === currentModule
                              ? `bg-gradient-to-r ${colors.gradient} text-white shadow-lg ${colors.shadow}`
                              : "hover:bg-slate-700 text-slate-300 hover:text-white"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <div className="text-xs font-bold opacity-80">
                              {idx === 0 ? "Introduction" : `Module ${idx}`}
                            </div>
                            {(readProgress[idx] || 0) === 100 && (
                              <CheckCircle className={`w-3 h-3 ${idx === currentModule ? "text-green-300" : "text-green-500"}`} />
                            )}
                          </div>
                          <div className={`text-xs line-clamp-2 mb-1 ${idx === currentModule ? "text-white font-semibold" : "text-slate-400"}`}>
                            {mod.title.replace(/^(Introduction: |Module \d+: |Chapter \d+: )/, "")}
                          </div>
                          {(readProgress[idx] || 0) > 0 && idx !== currentModule && (
                            <div className={`text-xs ${colors.text} font-semibold`}>
                              {readProgress[idx]}%
                            </div>
                          )}
                        </button>
                      ))}
                    </nav>

                    {/* Quiz Link */}
                    <div className="mt-4 pt-4 border-t border-slate-700">
                      <Link
                        href={`/tracks/${trackSlug}/quiz`}
                        className={`group flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r ${colors.gradient} rounded-xl text-white font-bold text-sm hover:${colors.shadow} transition-all`}
                      >
                        <GraduationCap className="w-4 h-4" />
                        <span>Take Quiz</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9">
              <div className="relative animate-fade-in-up">
                <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} rounded-3xl blur-2xl opacity-20`}></div>
                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl shadow-2xl overflow-hidden">
                  {/* Module Header */}
                  <div className={`border-b border-slate-700 bg-gradient-to-r from-slate-800/80 to-slate-800/50 px-8 md:px-12 py-8`}>
                    <div className={`text-xs font-bold ${colors.text} mb-2 uppercase tracking-wider`}>
                      {currentModule === 0 ? "Introduction" : `Module ${currentModule}`}
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                      {module.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center space-x-1.5 bg-slate-700/50 px-3 py-1.5 rounded-full">
                        <Clock className="w-3.5 h-3.5" />
                        <span className="font-semibold">{Math.ceil(module.wordCount / 200)} min read</span>
                      </span>
                      <span className="flex items-center space-x-1.5 bg-slate-700/50 px-3 py-1.5 rounded-full">
                        <span className="font-semibold">{module.wordCount.toLocaleString()} words</span>
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
                        {module.content}
                      </ReactMarkdown>
                    </article>
                  </div>

                  {/* Navigation Footer */}
                  <div className="border-t border-slate-700 bg-slate-800/80 p-6">
                    <div className="flex justify-between items-center">
                      <button
                        onClick={goToPreviousModule}
                        disabled={currentModule === 0}
                        className={`group flex items-center space-x-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                          currentModule === 0
                            ? "bg-slate-700/50 text-slate-500 cursor-not-allowed"
                            : `bg-slate-700 text-white hover:bg-gradient-to-r hover:${colors.gradient} hover:shadow-lg transform hover:-translate-x-1`
                        }`}
                      >
                        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span>Previous</span>
                      </button>

                      <div className="text-center hidden sm:block">
                        <div className="text-xs text-slate-500 mb-1">Progress</div>
                        <div className={`text-lg font-black bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                          {currentModule + 1} / {modules.length}
                        </div>
                      </div>

                      {currentModule === modules.length - 1 ? (
                        <Link
                          href={`/tracks/${trackSlug}/quiz`}
                          className={`group flex items-center space-x-2 px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r ${colors.gradient} text-white hover:shadow-lg ${colors.shadow} transition-all duration-300 transform hover:translate-x-1`}
                        >
                          <span>Take Quiz</span>
                          <GraduationCap className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </Link>
                      ) : (
                        <button
                          onClick={goToNextModule}
                          className={`group flex items-center space-x-2 px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r ${colors.gradient} text-white hover:shadow-lg ${colors.shadow} transition-all duration-300 transform hover:translate-x-1`}
                        >
                          <span>Next</span>
                          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      )}
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

