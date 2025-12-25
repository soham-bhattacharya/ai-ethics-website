import Link from "next/link";
import { BookOpen, Bot, GraduationCap, ArrowRight, Sparkles, Zap, LucideIcon, Building2, Landmark, HeartPulse, Users, Clock, TrendingUp, Shield, Scale, Target, CheckCircle2, AlertTriangle, DollarSign, FileText, Award, Brain, ArrowUpRight } from "lucide-react";
import { getAllTracks, LearningTrack } from "@/data/tracks";
import { AINetworkIllustration, EthicsShieldIllustration, FloatingOrbs, GridOverlay } from "@/components/Illustrations";

// Icon mapping for dynamic track rendering
const iconMap: Record<string, LucideIcon> = {
  Building2,
  Landmark,
  HeartPulse,
  Users,
  TrendingUp,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] overflow-hidden relative">
      {/* Global background effects */}
      <FloatingOrbs />
      <GridOverlay className="opacity-30" />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 backdrop-blur-sm border border-purple-500/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-purple-200">Industry-Specific AI Ethics Training</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 animate-fade-in-up leading-[1.1] tracking-tight">
                <span className="text-white">The</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                  AI Ethics
                </span>
                <br />
                <span className="text-white">Playbook</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-xl leading-relaxed animate-fade-in-up delay-100">
                Industry-specific training on AI ethics and compliance. Five specialized learning tracks, 130+ quiz questions, and an AI-powered tutor to guide your journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up delay-200">
                <Link
                  href="/tracks"
                  className="group relative inline-flex items-center justify-center space-x-3 bg-white text-slate-900 px-8 py-4 rounded-xl text-base font-bold hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <Target className="w-5 h-5" />
                  <span>Choose Your Track</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  href="/virtual-ta"
                  className="group inline-flex items-center justify-center space-x-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <Bot className="w-5 h-5" />
                  <span>Ask AI Tutor</span>
                </Link>
              </div>
              
              {/* Stats Row */}
              <div className="flex flex-wrap gap-6 text-sm animate-fade-in-up delay-300">
                {[
                  { value: "5", label: "Tracks" },
                  { value: "~63K", label: "Words" },
                  { value: "130+", label: "Questions" },
                ].map((stat, i) => (
                  <div key={stat.label} className="flex items-center space-x-2">
                    <span className="text-2xl font-black text-white">{stat.value}</span>
                    <span className="text-slate-500">{stat.label}</span>
                    {i < 2 && <span className="text-slate-700 ml-4">•</span>}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Column - Illustration */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Glow effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-3xl rounded-full" />
                
                {/* Main illustration */}
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 animate-fade-in">
                  <AINetworkIllustration className="w-full h-auto" />
                  
                  {/* Floating cards */}
                  <div className="absolute -left-8 top-1/4 bg-slate-800/90 backdrop-blur-sm border border-white/10 rounded-2xl p-4 shadow-xl animate-fade-in-up delay-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">Compliance Ready</div>
                        <div className="text-slate-400 text-xs">CO, NYC, IL covered</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -right-8 bottom-1/4 bg-slate-800/90 backdrop-blur-sm border border-white/10 rounded-2xl p-4 shadow-xl animate-fade-in-up delay-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl flex items-center justify-center">
                        <Brain className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">AI-Powered</div>
                        <div className="text-slate-400 text-xs">Gemini 2.0 Tutor</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">The Stakes</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              AI Ethics Isn&apos;t Optional Anymore
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative bg-gradient-to-b from-red-500/5 to-transparent border border-red-500/10 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <AlertTriangle className="w-10 h-10 text-red-400 mb-4" />
              <div className="text-3xl font-black text-white mb-2">$175K</div>
              <div className="text-slate-400 text-sm">Average fine for AI compliance violations in 2024. One Austin agency paid this for an unvetted lead-scoring tool.</div>
            </div>
            
            <div className="group relative bg-gradient-to-b from-amber-500/5 to-transparent border border-amber-500/10 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <DollarSign className="w-10 h-10 text-amber-400 mb-4" />
              <div className="text-3xl font-black text-white mb-2">$20K</div>
              <div className="text-slate-400 text-sm">Per violation under Colorado AI Act. Enforcement begins Feb 2026. NYC fines accumulate daily.</div>
            </div>
            
            <div className="group relative bg-gradient-to-b from-emerald-500/5 to-transparent border border-emerald-500/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <TrendingUp className="w-10 h-10 text-emerald-400 mb-4" />
              <div className="text-3xl font-black text-white mb-2">+15%</div>
              <div className="text-slate-400 text-sm">Revenue growth for companies with strong AI ethics practices—through higher customer trust and loyalty.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Tracks Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Learning Paths</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
                Choose Your Industry Track
              </h2>
              <p className="text-slate-400 mt-3 max-w-2xl">
                Each track is a complete e-book with case studies, implementation guides, and quizzes tailored to your profession.
              </p>
            </div>
            <Link 
              href="/tracks" 
              className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-semibold mt-6 md:mt-0 group"
            >
              <span>View all tracks</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {getAllTracks().map((track, index) => (
              <TrackCard key={track.id} track={track} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Platform Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              Everything You Need to Master AI Ethics
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              No paywalls. No sign-ups. Just high-quality, actionable content designed for professionals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial/Social Proof */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-b from-purple-500/5 to-transparent border border-purple-500/10 rounded-3xl p-10 md:p-16 text-center">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <EthicsShieldIllustration className="w-12 h-14" />
            </div>
            <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
              &ldquo;The question isn&apos;t whether AI will transform your industry—it already has. 
              The question is whether you&apos;ll ensure that transformation serves your values, 
              your customers, and your compliance requirements.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-px h-8 bg-purple-500/30" />
              <span className="text-slate-400 text-sm">
                Start with any track. Finish with confidence.
              </span>
              <div className="w-px h-8 bg-purple-500/30" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-r from-purple-900/50 to-indigo-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-10 md:p-16">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-purple-200 mb-6">
                <Zap className="w-4 h-4" />
                <span>Start learning in 60 seconds</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build Ethical AI?
              </h2>
              <p className="text-lg text-purple-200/90 mb-10 max-w-2xl mx-auto">
                Join professionals implementing responsible AI practices. Choose a track, read at your pace, test your knowledge.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/ebook"
                  className="group inline-flex items-center justify-center space-x-3 bg-white text-slate-900 px-8 py-4 rounded-xl text-base font-bold hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Start with SMB Track</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/quiz"
                  className="inline-flex items-center justify-center space-x-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-white/10 transition-all duration-300"
                >
                  <GraduationCap className="w-5 h-5" />
                  <span>Jump to Quizzes</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: FileText,
    title: "63,000+ Words of Content",
    description: "Five complete e-books covering SMB, government, healthcare, HR, and finance. Real regulations, real case studies, real templates.",
    href: "/tracks",
    color: "purple"
  },
  {
    icon: Bot,
    title: "AI Teaching Assistant",
    description: "Stuck on a concept? Ask our Gemini-powered tutor. It knows the content and provides context-aware answers.",
    href: "/virtual-ta",
    color: "indigo"
  },
  {
    icon: GraduationCap,
    title: "130+ Quiz Questions",
    description: "Test your knowledge with track-specific quizzes. Detailed explanations help you learn from every answer.",
    href: "/quiz",
    color: "cyan"
  },
  {
    icon: Shield,
    title: "Compliance Focused",
    description: "Colorado AI Act, NYC Local Law 144, Illinois HB 3773, ECOA, HIPAA—we cover the regulations that matter.",
    href: "/tracks",
    color: "rose"
  },
  {
    icon: Scale,
    title: "Practical Implementation",
    description: "90-day roadmaps, vendor checklists, policy templates, and audit frameworks. Not theory—action.",
    href: "/tracks",
    color: "amber"
  },
  {
    icon: Award,
    title: "Progress Tracking",
    description: "Track your learning journey with achievements, completion certificates, and quiz scores across all tracks.",
    href: "/dashboard",
    color: "emerald"
  }
];

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  color: string;
  index: number;
}

function FeatureCard({ icon: Icon, title, description, href, color, index }: FeatureCardProps) {
  const colorClasses: Record<string, string> = {
    purple: "from-purple-500 to-purple-600 shadow-purple-500/25",
    indigo: "from-indigo-500 to-indigo-600 shadow-indigo-500/25",
    cyan: "from-cyan-500 to-cyan-600 shadow-cyan-500/25",
    rose: "from-rose-500 to-rose-600 shadow-rose-500/25",
    amber: "from-amber-500 to-amber-600 shadow-amber-500/25",
    emerald: "from-emerald-500 to-emerald-600 shadow-emerald-500/25",
  };

  const hoverBorderColors: Record<string, string> = {
    purple: "group-hover:border-purple-500/30",
    indigo: "group-hover:border-indigo-500/30",
    cyan: "group-hover:border-cyan-500/30",
    rose: "group-hover:border-rose-500/30",
    amber: "group-hover:border-amber-500/30",
    emerald: "group-hover:border-emerald-500/30",
  };

  return (
    <Link 
      href={href}
      className="group block animate-fade-in-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className={`relative h-full bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 ${hoverBorderColors[color]} transition-all duration-500 hover:translate-y-[-4px] hover:shadow-xl overflow-hidden`}>
        {/* Subtle glow on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color]} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
        
        <div className={`relative w-12 h-12 bg-gradient-to-br ${colorClasses[color]} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="relative text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
          {title}
        </h3>
        <p className="relative text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
          {description}
        </p>
        
        {/* Arrow indicator on hover */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <ArrowRight className={`w-5 h-5 text-slate-500`} />
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
  
  // SMB track goes to /ebook, others go to /tracks/[slug]
  const href = track.id === "smb" ? "/ebook" : `/tracks/${track.slug}`;
  
  return (
    <Link 
      href={href}
      className="group block animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-5 hover:border-white/20 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-2xl overflow-hidden">
        {/* Background glow on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
        
        {/* Track color accent */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${track.color} rounded-t-2xl opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:h-1.5`} />
        
        <div className="relative flex items-start space-x-4">
          <div className={`w-12 h-12 bg-gradient-to-br ${track.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-white mb-1 group-hover:text-purple-200 transition-colors truncate">
              {track.shortTitle}
            </h3>
            <p className="text-slate-500 text-xs mb-3 line-clamp-2 group-hover:text-slate-400 transition-colors">
              {track.audience.split(",")[0]}
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{track.estimatedTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <FileText className="w-3 h-3" />
                <span>{track.chapterCount} chapters</span>
              </div>
            </div>
          </div>
          
          <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-purple-400 transition-colors flex-shrink-0" />
        </div>
      </div>
    </Link>
  );
}
