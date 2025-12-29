"use client";

import { useState, useEffect, use, useCallback, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getTrackBySlug, LearningTrack } from "@/data/tracks";
import { governmentModules } from "@/data/government-content";
import { healthcareChapters } from "@/data/healthcare-content";
import { hrChapters } from "@/data/hr-content";
import { financeChapters } from "@/data/finance-content";
import { updateModuleProgress } from "@/lib/progress";
import { 
  ChevronLeft, ChevronRight, BookOpen, Clock, CheckCircle, Menu,
  Building2, Landmark, HeartPulse, Users, Home, GraduationCap, ArrowRight,
  LucideIcon, TrendingUp, Sparkles, FileText, Award
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
  const modules = content?.modules;
  const moduleCount = modules?.length ?? 0;

  // Initialize read progress array when track changes
  useEffect(() => {
    if (moduleCount > 0) {
      setReadProgress(new Array(moduleCount).fill(0));
    }
  }, [trackSlug, moduleCount]);

  // Save progress when scrolling - use refs to avoid dependency issues
  const progressRef = useRef<number[]>([]);
  progressRef.current = readProgress;
  
  const trackIdRef = useRef(track?.id);
  trackIdRef.current = track?.id;

  useEffect(() => {
    if (!modules || moduleCount === 0) return;

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = documentHeight > 0 ? (scrolled / documentHeight) * 100 : 0;
      const roundedProgress = Math.min(Math.round(progress), 100);
      
      // Use functional update to avoid stale closure
      setReadProgress(prev => {
        const newProgress = [...prev];
        if (newProgress[currentModule] !== roundedProgress) {
          newProgress[currentModule] = roundedProgress;
          
          // Save progress to localStorage (at 10% intervals or at 100%)
          const currentSaved = prev[currentModule] || 0;
          if (roundedProgress > currentSaved && (roundedProgress % 10 === 0 || roundedProgress >= 95)) {
            if (trackIdRef.current && modules[currentModule]) {
              updateModuleProgress(trackIdRef.current, modules[currentModule].id, roundedProgress);
            }
          }
          return newProgress;
        }
        return prev; // No change, return same reference
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentModule, modules, moduleCount]);

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
  const module = modules![currentModule];

  const goToNextModule = () => {
    if (currentModule < moduleCount - 1) {
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
    ? Math.round(readProgress.reduce((a, b) => a + b, 0) / moduleCount)
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

  // Get industry-specific tagline
  const getTrackTagline = () => {
    switch (trackSlug) {
      case "government":
        return "Building ethical frameworks for public trust";
      case "healthcare":
        return "Where technology meets compassion";
      case "hr":
        return "Fair hiring in the age of algorithms";
      case "finance":
        return "Trust through transparent AI";
      default:
        return "Your journey to ethical AI";
    }
  };

  // Get track-specific background gradient
  const getTrackBackground = () => {
    switch (track.accentColor) {
      case "blue": return "from-slate-900 via-blue-950/30 to-slate-900";
      case "rose": return "from-slate-900 via-rose-950/30 to-slate-900";
      case "amber": return "from-slate-900 via-amber-950/30 to-slate-900";
      case "emerald": return "from-slate-900 via-emerald-950/30 to-slate-900";
      default: return "from-slate-900 via-slate-800 to-slate-900";
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${getTrackBackground()} relative`}>
      {/* Progress Bar - positioned below navigation */}
      <div className="fixed top-16 md:top-20 left-0 right-0 z-40">
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
                  Module {currentModule + 1} of {moduleCount}
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

      <div className="pt-28 md:pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className={`lg:col-span-3 ${sidebarOpen ? 'block' : 'hidden'} lg:block`}>
              <div className="sticky top-32 md:top-36">
                {/* Track Info Card */}
                <div className="relative mb-6 animate-fade-in-up group">
                  <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500`}></div>
                  <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 shadow-2xl overflow-hidden">
                    {/* Decorative corner */}
                    <div className={`absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br ${colors.gradient} rounded-full blur-2xl opacity-30`}></div>
                    
                    <div className="flex items-center space-x-3 mb-5">
                      <div className={`w-14 h-14 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center shadow-lg ${colors.shadow} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-black text-white">{track.shortTitle}</div>
                        <div className="flex items-center space-x-1.5 text-xs text-slate-400">
                          <Clock className="w-3 h-3" />
                          <span>{track.estimatedTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Circular progress indicator */}
                    <div className="flex items-center justify-center mb-4">
                      <div className="relative w-28 h-28">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle
                            cx="56"
                            cy="56"
                            r="48"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            className="text-slate-700"
                          />
                          <circle
                            cx="56"
                            cy="56"
                            r="48"
                            stroke="url(#progressGradient)"
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={`${averageProgress * 3.01} 301`}
                            className="transition-all duration-500"
                          />
                          <defs>
                            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" className={colors.text.replace('text-', 'stop-color-').replace('-400', '-500')} stopColor="currentColor" />
                              <stop offset="100%" className={colors.text.replace('text-', 'stop-color-').replace('-400', '-600')} stopColor="currentColor" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className={`text-3xl font-black bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                            {averageProgress}%
                          </span>
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Complete</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Completion milestones */}
                    <div className="flex justify-between items-center text-xs">
                      <div className="flex items-center space-x-1.5">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${averageProgress >= 25 ? `bg-gradient-to-r ${colors.gradient}` : 'bg-slate-700'}`}>
                          {averageProgress >= 25 && <CheckCircle className="w-3 h-3 text-white" />}
                        </div>
                        <span className="text-slate-400">25%</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${averageProgress >= 50 ? `bg-gradient-to-r ${colors.gradient}` : 'bg-slate-700'}`}>
                          {averageProgress >= 50 && <CheckCircle className="w-3 h-3 text-white" />}
                        </div>
                        <span className="text-slate-400">50%</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${averageProgress >= 75 ? `bg-gradient-to-r ${colors.gradient}` : 'bg-slate-700'}`}>
                          {averageProgress >= 75 && <CheckCircle className="w-3 h-3 text-white" />}
                        </div>
                        <span className="text-slate-400">75%</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${averageProgress >= 100 ? `bg-gradient-to-r ${colors.gradient}` : 'bg-slate-700'}`}>
                          {averageProgress >= 100 && <CheckCircle className="w-3 h-3 text-white" />}
                        </div>
                        <span className="text-slate-400">100%</span>
                      </div>
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
                      {modules!.map((mod, idx) => (
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
                  <div className={`relative border-b border-slate-700 bg-gradient-to-r from-slate-800/80 to-slate-800/50 px-8 md:px-12 py-10 overflow-hidden`}>
                    {/* Decorative gradient accent */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.gradient}`}></div>
                    <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${colors.gradient} rounded-full blur-3xl opacity-20`}></div>
                    
                    {/* Tagline */}
                    <div className="flex items-center space-x-2 mb-4 animate-fade-in">
                      <Sparkles className={`w-4 h-4 ${colors.text}`} />
                      <span className={`text-xs font-bold ${colors.text} uppercase tracking-widest`}>
                        {getTrackTagline()}
                      </span>
                    </div>
                    
                    <div className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${colors.gradient}/20 border ${colors.border} mb-4`}>
                      <div className={`w-2 h-2 rounded-full ${colors.bg} animate-pulse`}></div>
                      <span className="text-xs font-bold text-white">
                        {currentModule === 0 ? "Introduction" : `Module ${currentModule}`}
                      </span>
                    </div>
                    
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight animate-fade-in-up">
                      {module.title}
                    </h1>
                    
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 animate-fade-in-up delay-100">
                      <span className={`flex items-center space-x-1.5 bg-slate-700/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-600/50 hover:border-slate-500/50 transition-colors`}>
                        <Clock className={`w-3.5 h-3.5 ${colors.text}`} />
                        <span className="font-semibold">{Math.ceil(module.wordCount / 200)} min read</span>
                      </span>
                      <span className={`flex items-center space-x-1.5 bg-slate-700/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-600/50 hover:border-slate-500/50 transition-colors`}>
                        <FileText className={`w-3.5 h-3.5 ${colors.text}`} />
                        <span className="font-semibold">{module.wordCount.toLocaleString()} words</span>
                      </span>
                      <span className={`flex items-center space-x-1.5 bg-slate-700/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-600/50 hover:border-slate-500/50 transition-colors`}>
                        <Award className={`w-3.5 h-3.5 ${colors.text}`} />
                        <span className="font-semibold">{track.shortTitle}</span>
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-8 md:px-12 lg:px-16 py-12 bg-slate-900/30">
                    <article className="prose prose-lg prose-invert max-w-none">
                      <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        components={MarkdownComponents}
                      >
                        {module.content}
                      </ReactMarkdown>
                    </article>
                    
                    {/* Module completion encouragement */}
                    {(readProgress[currentModule] || 0) >= 80 && (
                      <div className={`mt-12 relative animate-fade-in-up`}>
                        <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} rounded-2xl blur-xl opacity-30`}></div>
                        <div className={`relative bg-slate-800/60 backdrop-blur-xl border ${colors.border} rounded-2xl p-8 text-center`}>
                          <div className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg ${colors.shadow}`}>
                            <Award className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-xl font-black text-white mb-2">
                            {(readProgress[currentModule] || 0) >= 100 ? "Module Complete!" : "Almost There!"}
                          </h3>
                          <p className="text-slate-300 text-sm mb-4">
                            {(readProgress[currentModule] || 0) >= 100 
                              ? `Great work! You've completed this module. ${currentModule < moduleCount - 1 ? "Continue to the next module to keep learning." : "Ready for the quiz?"}`
                              : "You're doing great! Keep reading to complete this module."
                            }
                          </p>
                          {currentModule < moduleCount - 1 ? (
                            <button
                              onClick={goToNextModule}
                              className={`inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${colors.gradient} rounded-xl text-white font-bold text-sm hover:shadow-lg ${colors.shadow} transition-all`}
                            >
                              <span>Next Module</span>
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          ) : (
                            <Link
                              href={`/tracks/${trackSlug}/quiz`}
                              className={`inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${colors.gradient} rounded-xl text-white font-bold text-sm hover:shadow-lg ${colors.shadow} transition-all`}
                            >
                              <span>Take the Quiz</span>
                              <GraduationCap className="w-4 h-4" />
                            </Link>
                          )}
                        </div>
                      </div>
                    )}
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
                          {currentModule + 1} / {moduleCount}
                        </div>
                      </div>

                      {currentModule === moduleCount - 1 ? (
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

