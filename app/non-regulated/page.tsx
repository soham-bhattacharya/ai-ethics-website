"use client";

import Link from "next/link";
import { 
  Users, Megaphone, GraduationCap, Radio, Factory, ShoppingCart,
  ArrowRight, ArrowLeft, Clock, BookOpen, CheckCircle, LucideIcon,
  Target, Sparkles, Lightbulb
} from "lucide-react";
import { getNonRegulatedTracks, SubTrack } from "@/data/tracks";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Users,
  Megaphone,
  GraduationCap,
  Radio,
  Factory,
  ShoppingCart,
};

export default function NonRegulatedIndustriesPage() {
  const tracks = getNonRegulatedTracks();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-amber-950/10 to-[#0a0a0f] overflow-hidden relative">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Grid overlay */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      {/* Back Navigation */}
      <div className="relative py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Learning Paths</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/10 to-fuchsia-500/10 backdrop-blur-sm border border-amber-500/20 text-white px-5 py-2.5 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span className="text-amber-200">Ethical AI for Every Sector</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-fuchsia-400 bg-clip-text text-transparent">
                Non-Regulated Industries
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-100">
              Guidance for sectors with lighter regulation, focusing on ethical AI adoption 
              that builds trust, avoids harm, and creates competitive advantage through responsible practices.
            </p>

            {/* Category Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm animate-fade-in-up delay-200">
              <div className="flex items-center gap-2 text-slate-400">
                <Target className="w-4 h-4 text-amber-400" />
                <span>{tracks.length} Industry Tracks</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>{tracks.reduce((sum, t) => sum + t.chapterCount, 0)} Total Modules</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span>{tracks.reduce((sum, t) => sum + t.questionCount, 0)} Quiz Questions</span>
              </div>
            </div>
          </div>

          {/* Key Focus Areas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
            {["HR & Recruiting", "Marketing", "Education", "Retail & More"].map((item) => (
              <div key={item} className="bg-slate-900/50 border border-amber-500/10 rounded-xl px-4 py-3 text-center">
                <span className="text-sm font-medium text-amber-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Tracks */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track, index) => (
              <TrackCard key={track.id} track={track} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Ethics Without Regulation */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-b from-slate-800/30 to-transparent border border-amber-500/10 rounded-3xl p-10 md:p-14">
            <div className="text-center mb-10">
              <Sparkles className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Why Ethics Matters Without Heavy Regulation
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <FeatureItem 
                  title="Customer Trust" 
                  description="Ethical AI practices build lasting customer relationships. Unethical practices destroy trust faster than regulations can catch up."
                />
                <FeatureItem 
                  title="Competitive Advantage" 
                  description="Companies with strong AI ethics attract better talent, partners, and customers who increasingly care about responsible practices."
                />
              </div>
              <div className="space-y-4">
                <FeatureItem 
                  title="Future-Proofing" 
                  description="Regulation is coming. Companies that build ethical foundations now avoid scrambling when laws arrive."
                />
                <FeatureItem 
                  title="Risk Mitigation" 
                  description="Even without specific AI laws, existing consumer protection, anti-discrimination, and privacy laws apply to AI systems."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emerging Regulations Notice */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 border border-amber-500/20 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-amber-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Regulations Are Evolving Fast</h3>
                <p className="text-slate-400 text-sm">
                  NYC Local Law 144 for hiring, FTC guidelines for marketing, FERPA for education—even 
                  &ldquo;non-regulated&rdquo; industries face growing AI-specific requirements. Our content 
                  covers what&apos;s here and what&apos;s coming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Lead with Responsible AI?
          </h2>
          <p className="text-slate-400 mb-8">
            Choose the track that matches your industry and start building ethical practices today.
          </p>
          <Link
            href="/virtual-ta"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-xl text-base font-bold hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-300"
          >
            <span>Ask the AI Tutor</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

interface TrackCardProps {
  track: SubTrack;
  index: number;
}

function TrackCard({ track, index }: TrackCardProps) {
  const Icon = iconMap[track.icon] || Users;
  const isPlaceholder = track.isPlaceholder;
  
  return (
    <Link 
      href={`/tracks/${track.slug}`}
      className="group animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-2xl overflow-hidden">
        {/* Glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Placeholder badge */}
        {isPlaceholder && (
          <div className="absolute top-4 right-4 px-2 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-xs text-amber-300">
            Coming Soon
          </div>
        )}
        
        {/* Icon */}
        <div className={`relative w-14 h-14 bg-gradient-to-br ${track.color} rounded-xl flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        
        {/* Content */}
        <h3 className="relative text-xl font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
          {track.shortTitle}
        </h3>
        
        <p className="relative text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {track.description}
        </p>
        
        {/* Meta */}
        <div className="relative flex items-center gap-4 text-xs text-slate-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{track.estimatedTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{track.chapterCount} modules</span>
          </div>
        </div>
        
        {/* Features */}
        <div className="relative space-y-1.5">
          {track.features.slice(0, 3).map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-xs text-slate-500">
              <CheckCircle className="w-3 h-3 text-amber-400" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="relative flex items-center justify-end mt-6">
          <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm group-hover:gap-3 transition-all">
            <span>{isPlaceholder ? "Preview" : "Start Learning"}</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}

function FeatureItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-3">
      <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
      <div>
        <h4 className="text-white font-semibold mb-1">{title}</h4>
        <p className="text-slate-400 text-sm">{description}</p>
      </div>
    </div>
  );
}

