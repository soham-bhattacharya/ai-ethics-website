"use client";

import Link from "next/link";
import { getAllCategories, getAllTracks, TrackCategory, LearningTrack, getTrackStats } from "@/data/tracks";
import { 
  Building2, Landmark, HeartPulse, Users, Clock, BookOpen, 
  ArrowRight, Sparkles, GraduationCap, Target, CheckCircle,
  LucideIcon, TrendingUp, Shield, Briefcase, Factory, ShoppingCart,
  Radio, Megaphone, ArrowUpRight
} from "lucide-react";

// Icon mapping for dynamic track rendering
const iconMap: Record<string, LucideIcon> = {
  Building2,
  Landmark,
  HeartPulse,
  Users,
  TrendingUp,
  Shield,
  Briefcase,
  Factory,
  ShoppingCart,
  Radio,
  Megaphone,
  GraduationCap,
};

export default function TracksPage() {
  const categories = getAllCategories();
  const allTracks = getAllTracks();
  const stats = getTrackStats();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-fade-in shadow-lg">
            <Target className="w-5 h-5 text-cyan-300" />
            <span>All Learning Tracks</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-cyan-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Learning Tracks
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-200/90 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            From Principles to Practice to Proof. Choose the track that matches your professional context.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-purple-200/80 text-sm animate-fade-in-up delay-200">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span>📚 {stats.totalTracks} Industry Tracks</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-100"></div>
              <span>📖 {stats.totalChapters}+ Modules</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-200"></div>
              <span>✅ {stats.totalQuestions}+ Quiz Questions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Sections */}
      {categories.map((category, catIndex) => (
        <CategorySection key={category.id} category={category} index={catIndex} />
      ))}

      {/* All Tracks List */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Industry Tracks
            </h2>
            <p className="text-purple-200/70 max-w-2xl mx-auto">
              Quick access to every track in the platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allTracks.map((track, index) => (
              <MiniTrackCard key={track.id} track={track} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Category Section Component
interface CategorySectionProps {
  category: TrackCategory;
  index: number;
}

function CategorySection({ category, index }: CategorySectionProps) {
  const Icon = iconMap[category.icon] || Building2;
  
  // Color schemes
  const colorSchemes: Record<string, { border: string; badge: string; accent: string }> = {
    policy: { border: "border-blue-500/20", badge: "from-blue-500/20 to-cyan-500/20 border-blue-500/30", accent: "text-blue-300" },
    regulated: { border: "border-rose-500/20", badge: "from-rose-500/20 to-pink-500/20 border-rose-500/30", accent: "text-rose-300" },
    "non-regulated": { border: "border-amber-500/20", badge: "from-amber-500/20 to-orange-500/20 border-amber-500/30", accent: "text-amber-300" },
    smb: { border: "border-purple-500/20", badge: "from-purple-500/20 to-indigo-500/20 border-purple-500/30", accent: "text-purple-300" },
  };
  
  const colors = colorSchemes[category.id] || colorSchemes.smb;
  const isOdd = index % 2 === 1;
  
  return (
    <section className={`relative py-16 px-4 sm:px-6 lg:px-8 ${isOdd ? 'bg-slate-900/30' : ''}`}>
      <div className="max-w-7xl mx-auto">
        {/* Category Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center shadow-lg`}>
              <Icon className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">{category.title}</h2>
              <p className={`text-sm ${colors.accent}`}>{category.tagline}</p>
            </div>
          </div>
          
          {category.tracks && (
            <Link 
              href={`/${category.slug}`}
              className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${colors.badge} rounded-full text-sm font-medium text-white hover:scale-105 transition-transform`}
            >
              <span>View All {category.tracks.length} Tracks</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
        
        {/* Tracks Grid */}
        {category.isSingleTrack && category.singleTrackData ? (
          <SingleTrackCard track={category.singleTrackData} />
        ) : category.tracks ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.tracks.slice(0, 3).map((track, idx) => (
              <TrackCard key={track.id} track={track} index={idx} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

// Single Track Card (for Policy and SMB)
function SingleTrackCard({ track }: { track: LearningTrack }) {
  const Icon = iconMap[track.icon] || Building2;
  const href = track.id === "smb" ? "/ebook" : `/tracks/${track.slug}`;
  
  return (
    <Link href={href} className="group block">
      <div className="relative animate-fade-in-up">
        <div className={`absolute inset-0 bg-gradient-to-r ${track.color} rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity`}></div>
        <div className={`relative bg-slate-800/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 hover:border-white/20 transition-all duration-500 transform group-hover:scale-[1.01]`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className={`w-16 h-16 bg-gradient-to-br ${track.color} rounded-2xl flex items-center justify-center mb-6 shadow-2xl group-hover:rotate-3 transition-transform duration-500`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                {track.title}
              </h3>
              <p className="text-purple-200/80 text-lg leading-relaxed mb-6">
                {track.description}
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-purple-300">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{track.estimatedTime}</span>
                </div>
                <div className="flex items-center gap-2 text-purple-300">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm">{track.chapterCount} modules</span>
                </div>
                <div className="flex items-center gap-2 text-purple-300">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-sm">{track.questionCount} questions</span>
                </div>
              </div>
              <div className="inline-flex items-center space-x-2 text-white font-bold group-hover:gap-3 transition-all">
                <span>Start Learning</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-4">
                {track.features.slice(0, 4).map((feature, idx) => (
                  <div key={feature} className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-xl p-4 animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                    <CheckCircle className="w-5 h-5 text-green-400 mb-2" />
                    <span className="text-sm font-medium text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// Track Card Component
interface TrackCardProps {
  track: LearningTrack;
  index: number;
}

function TrackCard({ track, index }: TrackCardProps) {
  const Icon = iconMap[track.icon] || Building2;
  const isPlaceholder = track.isPlaceholder;
  
  return (
    <Link 
      href={`/tracks/${track.slug}`}
      className="group animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative h-full">
        <div className={`absolute inset-0 bg-gradient-to-br ${track.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
        <div className="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 h-full hover:border-white/20 transition-all duration-300 transform group-hover:scale-[1.02]">
          {/* Placeholder badge */}
          {isPlaceholder && (
            <div className="absolute top-4 right-4 px-2 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-xs text-amber-300">
              Preview
            </div>
          )}
          
          {/* Icon */}
          <div className={`w-14 h-14 bg-gradient-to-br ${track.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
          
          {/* Title & Description */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
            {track.shortTitle}
          </h3>
          <p className="text-purple-200/70 text-sm leading-relaxed mb-4 line-clamp-2">
            {track.description}
          </p>
          
          {/* Meta info */}
          <div className="flex items-center gap-4 text-xs text-purple-300/80 mb-4">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{track.estimatedTime}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{track.chapterCount} modules</span>
            </div>
          </div>
          
          {/* CTA */}
          <div className="flex items-center text-purple-300 font-semibold text-sm group-hover:text-white transition-colors">
            <span>{isPlaceholder ? "Preview Content" : "Start Learning"}</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}

// Mini Track Card for the full list
function MiniTrackCard({ track, index }: { track: LearningTrack; index: number }) {
  const Icon = iconMap[track.icon] || Building2;
  const href = track.id === "smb" ? "/ebook" : `/tracks/${track.slug}`;
  
  return (
    <Link 
      href={href}
      className="group animate-fade-in-up"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="relative bg-slate-800/30 backdrop-blur-sm border border-white/5 rounded-xl p-4 hover:border-white/15 transition-all duration-300 hover:translate-y-[-2px]">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 bg-gradient-to-br ${track.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-white truncate group-hover:text-purple-200 transition-colors">
              {track.shortTitle}
            </h4>
            <p className="text-xs text-slate-500">{track.estimatedTime} • {track.chapterCount} modules</p>
          </div>
          <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-purple-400 transition-colors flex-shrink-0" />
        </div>
      </div>
    </Link>
  );
}
