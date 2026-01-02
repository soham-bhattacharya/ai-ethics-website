"use client";

import Link from "next/link";
import { getAllCategories, getAllTracks, TrackCategory, LearningTrack, getTrackStats } from "@/data/tracks";
import { 
  Building2, Landmark, HeartPulse, Users, Clock, BookOpen, 
  ArrowRight, GraduationCap, Target, CheckCircle,
  LucideIcon, TrendingUp, Shield, Briefcase, Factory, ShoppingCart,
  Radio, Megaphone, ArrowUpRight, ChevronRight
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
    <div className="min-h-screen bg-slate-950 relative">
      {/* Subtle pattern background */}
      <div className="fixed inset-0 grid-pattern opacity-40" />
      
      {/* Top accent glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-indigo-400 font-medium mb-4">
            <Target className="w-4 h-4" />
            <span>All Learning Tracks</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Learning Tracks
          </h1>
          
          <p className="text-lg text-slate-400 max-w-2xl mb-8">
            From Principles to Practice to Proof. Choose the track that matches your professional context.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-500 rounded-full" />
              <span className="text-sm text-slate-400">{stats.totalTracks} Industry Tracks</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-violet-500 rounded-full" />
              <span className="text-sm text-slate-400">{stats.totalChapters}+ Modules</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span className="text-sm text-slate-400">{stats.totalQuestions}+ Quiz Questions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Sections */}
      <div className="relative z-10">
        {categories.map((category, catIndex) => (
          <CategorySection key={category.id} category={category} index={catIndex} />
        ))}
      </div>

      {/* All Tracks Grid */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2">All Industry Tracks</h2>
          <p className="text-slate-500 mb-8">Quick access to every track</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {allTracks.map((track) => (
              <MiniTrackCard key={track.id} track={track} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Category Section Component
function CategorySection({ category, index }: { category: TrackCategory; index: number }) {
  const Icon = iconMap[category.icon] || Building2;
  const isAlternate = index % 2 === 1;
  
  // Category accent colors
  const categoryAccents: Record<string, { border: string; text: string; bg: string }> = {
    policy: { border: 'border-blue-500/30', text: 'text-blue-400', bg: 'bg-blue-500/10' },
    regulated: { border: 'border-rose-500/30', text: 'text-rose-400', bg: 'bg-rose-500/10' },
    'non-regulated': { border: 'border-amber-500/30', text: 'text-amber-400', bg: 'bg-amber-500/10' },
    smb: { border: 'border-violet-500/30', text: 'text-violet-400', bg: 'bg-violet-500/10' },
  };
  
  const accent = categoryAccents[category.id] || categoryAccents.smb;
  
  return (
    <section className={`py-12 px-4 sm:px-6 lg:px-8 ${isAlternate ? 'bg-slate-900/30' : ''}`}>
      <div className="max-w-6xl mx-auto">
        {/* Category Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{category.title}</h2>
              <p className={`text-sm ${accent.text}`}>{category.tagline}</p>
            </div>
          </div>
          
          {category.tracks && category.tracks.length > 3 && (
            <Link 
              href={`/${category.slug}`}
              className={`inline-flex items-center gap-1.5 px-4 py-2 ${accent.bg} ${accent.border} border rounded-lg text-sm font-medium ${accent.text} hover:bg-opacity-20 transition-colors`}
            >
              <span>View All {category.tracks.length}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          )}
        </div>
        
        {/* Tracks */}
        {category.isSingleTrack && category.singleTrackData ? (
          <FeaturedTrackCard track={category.singleTrackData} />
        ) : category.tracks ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.tracks.slice(0, 3).map((track) => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

// Featured Track Card (for single-track categories like Policy and SMB)
function FeaturedTrackCard({ track }: { track: LearningTrack }) {
  const Icon = iconMap[track.icon] || Building2;
  const href = track.id === "smb" ? "/ebook" : `/tracks/${track.slug}`;
  
  return (
    <Link href={href} className="group block">
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-slate-700 transition-all">
        <div className="grid md:grid-cols-5 gap-6 items-center">
          <div className="md:col-span-3">
            <div className={`w-14 h-14 bg-gradient-to-br ${track.color} rounded-xl flex items-center justify-center mb-5`}>
              <Icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">
              {track.title}
            </h3>
            <p className="text-slate-400 leading-relaxed mb-5">
              {track.description}
            </p>
            <div className="flex flex-wrap gap-4 mb-5">
              <span className="flex items-center gap-1.5 text-sm text-slate-500">
                <Clock className="w-4 h-4" /> {track.estimatedTime}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-slate-500">
                <BookOpen className="w-4 h-4" /> {track.chapterCount} modules
              </span>
              <span className="flex items-center gap-1.5 text-sm text-slate-500">
                <GraduationCap className="w-4 h-4" /> {track.questionCount} questions
              </span>
            </div>
            <div className="inline-flex items-center gap-2 text-indigo-400 font-medium group-hover:gap-3 transition-all">
              Start Learning <ArrowRight className="w-4 h-4" />
            </div>
          </div>
          
          <div className="md:col-span-2 hidden md:block">
            <div className="grid grid-cols-2 gap-3">
              {track.features.slice(0, 4).map((feature) => (
                <div key={feature} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mb-2" />
                  <span className="text-sm text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// Track Card Component
function TrackCard({ track }: { track: LearningTrack }) {
  const Icon = iconMap[track.icon] || Building2;
  
  return (
    <Link href={`/tracks/${track.slug}`} className="group block">
      <div className="relative bg-slate-900/50 border border-slate-800 rounded-xl p-5 h-full hover:border-slate-700 hover:bg-slate-900/80 transition-all">
        {track.isPlaceholder && (
          <span className="absolute top-3 right-3 text-xs font-medium text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
            Preview
          </span>
        )}
        
        <div className={`w-11 h-11 bg-gradient-to-br ${track.color} rounded-xl flex items-center justify-center mb-4`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        
        <h3 className="font-semibold text-white mb-1.5 group-hover:text-indigo-200 transition-colors">
          {track.shortTitle}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
          {track.description}
        </p>
        
        <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> {track.estimatedTime}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="w-3 h-3" /> {track.chapterCount} modules
          </span>
        </div>
        
        <div className="flex items-center text-sm text-indigo-400 font-medium">
          {track.isPlaceholder ? "Preview" : "Start Learning"}
          <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

// Mini Track Card
function MiniTrackCard({ track }: { track: LearningTrack }) {
  const Icon = iconMap[track.icon] || Building2;
  const href = track.id === "smb" ? "/ebook" : `/tracks/${track.slug}`;
  
  return (
    <Link href={href} className="group block">
      <div className="bg-slate-900/30 border border-slate-800/50 rounded-lg p-3 hover:bg-slate-900/50 hover:border-slate-700 transition-all">
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 bg-gradient-to-br ${track.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
            <Icon className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-medium text-white truncate group-hover:text-indigo-200 transition-colors">
              {track.shortTitle}
            </h4>
            <p className="text-xs text-slate-600">{track.estimatedTime} • {track.chapterCount} modules</p>
          </div>
          <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors flex-shrink-0" />
        </div>
      </div>
    </Link>
  );
}
