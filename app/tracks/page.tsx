"use client";

import Link from "next/link";
import { getAllTracks, LearningTrack } from "@/data/tracks";
import { 
  Building2, Landmark, HeartPulse, Users, Clock, BookOpen, 
  ArrowRight, Sparkles, GraduationCap, Target, CheckCircle,
  LucideIcon, TrendingUp
} from "lucide-react";

// Icon mapping for dynamic track rendering
const iconMap: Record<string, LucideIcon> = {
  Building2,
  Landmark,
  HeartPulse,
  Users,
  TrendingUp,
};

export default function TracksPage() {
  const tracks = getAllTracks();
  const activeTracks = tracks.filter(t => t.isActive);
  const comingSoonTracks = tracks.filter(t => t.comingSoon);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            <span>Specialized Learning Paths</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-cyan-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Learning Tracks
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-200/90 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            Tailored AI ethics education for your professional context. Choose the track that fits your role and industry.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-purple-200/80 text-sm animate-fade-in-up delay-200">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>📚 {activeTracks.length + 1} Active Tracks</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-100"></div>
              <span>📖 20+ Modules</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></div>
              <span>✅ 100+ Quiz Questions</span>
            </div>
          </div>
        </div>
      </section>

      {/* SMB Track - Featured */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 backdrop-blur-sm border border-purple-500/40 text-white px-4 py-2 rounded-full text-xs font-bold mb-4">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span>FOUNDATIONAL TRACK</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Start Here
            </h2>
          </div>

          <Link href="/ebook" className="group block">
            <div className="relative animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative bg-slate-800/60 backdrop-blur-xl border border-purple-500/40 rounded-3xl p-8 md:p-12 hover:border-purple-400/60 transition-all duration-500 transform group-hover:scale-[1.02]">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-purple-500/50 group-hover:rotate-6 transition-transform duration-500">
                      <Building2 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-4">
                      AI Ethics for SMBs
                    </h3>
                    <p className="text-purple-200/80 text-lg leading-relaxed mb-6">
                      The foundational playbook for small and medium businesses. Learn practical AI ethics from the ground up with real-world examples and actionable frameworks.
                    </p>
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 text-purple-300">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">45 minutes</span>
                      </div>
                      <div className="flex items-center gap-2 text-purple-300">
                        <BookOpen className="w-4 h-4" />
                        <span className="text-sm">8 chapters</span>
                      </div>
                      <div className="flex items-center gap-2 text-purple-300">
                        <GraduationCap className="w-4 h-4" />
                        <span className="text-sm">40 questions</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center space-x-2 text-purple-300 font-bold group-hover:text-white transition-colors">
                      <span>Start Learning</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="grid grid-cols-2 gap-4">
                      {["Fairness & Bias", "Transparency", "Privacy", "Implementation"].map((topic, idx) => (
                        <div key={topic} className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-xl p-4 animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                          <CheckCircle className="w-5 h-5 text-green-400 mb-2" />
                          <span className="text-sm font-semibold text-white">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Professional Tracks */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 backdrop-blur-sm border border-cyan-500/40 text-white px-4 py-2 rounded-full text-xs font-bold mb-4">
              <Target className="w-4 h-4 text-cyan-300" />
              <span>SPECIALIZED TRACKS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific Learning
            </h2>
            <p className="text-purple-200/70 max-w-2xl mx-auto">
              Deep-dive into AI ethics for your specific professional context with tailored content, case studies, and compliance guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {activeTracks.filter(t => t.id !== "smb").map((track, index) => (
              <TrackCard key={track.id} track={track} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      {comingSoonTracks.length > 0 && (
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/30 to-orange-500/30 backdrop-blur-sm border border-amber-500/40 text-white px-4 py-2 rounded-full text-xs font-bold mb-4">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>COMING SOON</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                More Tracks on the Way
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {comingSoonTracks.map((track, index) => (
                <ComingSoonCard key={track.id} track={track} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

interface TrackCardProps {
  track: LearningTrack;
  index: number;
}

function TrackCard({ track, index }: TrackCardProps) {
  const Icon = iconMap[track.icon] || Building2;
  
  return (
    <Link 
      href={`/tracks/${track.slug}`}
      className="group animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative h-full">
        <div className={`absolute inset-0 bg-gradient-to-br ${track.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
        <div className="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:border-white/30 transition-all duration-300 transform group-hover:scale-[1.02] group-hover:-translate-y-1">
          {/* Icon */}
          <div className={`w-16 h-16 bg-gradient-to-br ${track.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          
          {/* Title & Description */}
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
            {track.shortTitle}
          </h3>
          <p className="text-purple-200/70 leading-relaxed mb-4 line-clamp-3">
            {track.description}
          </p>
          
          {/* Audience */}
          <p className="text-sm text-purple-300/60 mb-6 line-clamp-2">
            <span className="font-semibold text-purple-300/80">For:</span> {track.audience}
          </p>
          
          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-purple-300/80 mb-6">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{track.estimatedTime}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>{track.chapterCount} modules</span>
            </div>
            <div className="flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>{track.questionCount} questions</span>
            </div>
          </div>
          
          {/* CTA */}
          <div className="flex items-center text-purple-300 font-semibold group-hover:text-white transition-colors">
            <span>Start Learning</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}

function ComingSoonCard({ track, index }: TrackCardProps) {
  const Icon = iconMap[track.icon] || Building2;
  
  return (
    <div 
      className="group animate-fade-in-up cursor-default"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative h-full">
        <div className="relative bg-slate-800/30 backdrop-blur-xl border border-white/5 rounded-3xl p-6 h-full opacity-75">
          {/* Coming Soon Badge */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            Coming Soon
          </div>
          
          {/* Icon */}
          <div className={`w-14 h-14 bg-gradient-to-br ${track.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg opacity-60`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-white/80 mb-2">
            {track.shortTitle}
          </h3>
          
          {/* Description */}
          <p className="text-purple-200/50 text-sm leading-relaxed mb-4 line-clamp-2">
            {track.description}
          </p>
          
          {/* Meta info */}
          <div className="flex items-center gap-4 text-xs text-purple-300/50">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{track.estimatedTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="w-3 h-3" />
              <span>{track.chapterCount} modules</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

