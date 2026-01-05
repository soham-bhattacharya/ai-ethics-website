import Link from "next/link";
import Image from "next/image";
import { 
  BookOpen, Bot, GraduationCap, ArrowRight, Sparkles, Zap, 
  LucideIcon, Building2, Landmark, HeartPulse, Users, Clock, 
  TrendingUp, Shield, Scale, Target, CheckCircle2, ArrowUpRight,
  Briefcase, Factory, ShoppingCart, Radio, Megaphone, GraduationCap as GradCap
} from "lucide-react";
import { getAllCategories, TrackCategory, getTrackStats } from "@/data/tracks";

// Icon mapping for dynamic rendering
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
  GraduationCap: GradCap,
};

export default function Home() {
  const categories = getAllCategories();
  const stats = getTrackStats();
  
  return (
    <div className="min-h-screen bg-[#0a0a0f] overflow-hidden relative">
      {/* Animated background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Grid overlay */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Content with Graphic */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="flex flex-col sm:flex-row items-center gap-3 mb-8 animate-fade-in">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 text-white px-5 py-2.5 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-cyan-200">AI Ethics & Policy Academy</span>
                </div>
                {/* AIPossible Badge */}
                <div className="inline-flex items-center gap-2 text-xs text-slate-500">
                  <span>by</span>
                  <a 
                    href="https://aipossible.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center group"
                  >
                    <Image 
                      src="/aipossible-bigger.jpg" 
                      alt="AIPossible" 
                      width={120}
                      height={40}
                      className="h-7 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                </div>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 animate-fade-in-up leading-[1.05] tracking-tight">
                <span className="text-white">From </span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Principles</span>
                <br className="hidden sm:block" />
                <span className="text-white"> to </span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Practice</span>
                <span className="text-white"> to </span>
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">Proof</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up delay-100">
                A structured learning experience that helps teams understand AI risk, 
                operationalize responsible AI, and build governance-ready programs—aligned 
                to NIST AI RMF and ISO/IEC 42001.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in-up delay-200">
                <Link
                  href="#tracks"
                  className="group relative inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl text-base font-bold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <Target className="w-5 h-5" />
                  <span>Choose Your Learning Path</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  href="/virtual-ta"
                  className="group inline-flex items-center justify-center space-x-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <Bot className="w-5 h-5" />
                  <span>Ask the AI Tutor</span>
                </Link>
              </div>
              
              {/* Stats Row */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-sm animate-fade-in-up delay-300">
                {[
                  { value: "4", label: "Learning Paths" },
                  { value: `${stats.totalTracks}`, label: "Industry Tracks" },
                  { value: `${stats.totalChapters}+`, label: "Modules" },
                  { value: `${stats.totalQuestions}+`, label: "Quiz Questions" },
                ].map((stat, i) => (
                  <div key={stat.label} className="flex items-center space-x-2">
                    <span className="text-2xl font-black text-white">{stat.value}</span>
                    <span className="text-slate-500">{stat.label}</span>
                    {i < 3 && <span className="text-slate-700 ml-6 hidden sm:inline">•</span>}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right: Custom Graphic */}
            <div className="relative hidden lg:block animate-fade-in-up delay-200">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-rose-500/20 rounded-3xl blur-3xl" />
                
                {/* SVG Graphic */}
                <div className="relative w-full h-full p-8">
                  <svg
                    viewBox="0 0 400 400"
                    className="w-full h-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Animated connecting lines */}
                    <path
                      d="M 50 200 Q 150 100, 200 150 T 350 200"
                      stroke="url(#gradient1)"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="8 4"
                      className="animate-pulse"
                      opacity="0.6"
                    />
                    <path
                      d="M 50 200 Q 150 300, 200 250 T 350 200"
                      stroke="url(#gradient2)"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="8 4"
                      className="animate-pulse"
                      opacity="0.6"
                      style={{ animationDelay: "0.5s" }}
                    />
                    
                    {/* Gradient definitions */}
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
                      </linearGradient>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
                      </linearGradient>
                      <linearGradient id="nodeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                      <linearGradient id="nodeGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                      <linearGradient id="nodeGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#ef4444" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    {/* Node 1: Principles */}
                    <g className="group">
                      <circle
                        cx="50"
                        cy="200"
                        r="35"
                        fill="url(#nodeGradient1)"
                        filter="url(#glow)"
                        className="animate-pulse"
                      />
                      <circle
                        cx="50"
                        cy="200"
                        r="25"
                        fill="url(#nodeGradient1)"
                        opacity="0.8"
                      />
                      <text
                        x="50"
                        y="200"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="white"
                        fontSize="14"
                        fontWeight="bold"
                        className="pointer-events-none"
                      >
                        P
                      </text>
                      <text
                        x="50"
                        y="245"
                        textAnchor="middle"
                        fill="#06b6d4"
                        fontSize="12"
                        fontWeight="600"
                      >
                        Principles
                      </text>
                    </g>
                    
                    {/* Node 2: Practice */}
                    <g className="group">
                      <circle
                        cx="200"
                        cy="150"
                        r="35"
                        fill="url(#nodeGradient2)"
                        filter="url(#glow)"
                        className="animate-pulse"
                        style={{ animationDelay: "0.3s" }}
                      />
                      <circle
                        cx="200"
                        cy="150"
                        r="25"
                        fill="url(#nodeGradient2)"
                        opacity="0.8"
                      />
                      <text
                        x="200"
                        y="150"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="white"
                        fontSize="14"
                        fontWeight="bold"
                        className="pointer-events-none"
                      >
                        P
                      </text>
                      <text
                        x="200"
                        y="195"
                        textAnchor="middle"
                        fill="#8b5cf6"
                        fontSize="12"
                        fontWeight="600"
                      >
                        Practice
                      </text>
                    </g>
                    
                    {/* Node 3: Proof */}
                    <g className="group">
                      <circle
                        cx="350"
                        cy="200"
                        r="35"
                        fill="url(#nodeGradient3)"
                        filter="url(#glow)"
                        className="animate-pulse"
                        style={{ animationDelay: "0.6s" }}
                      />
                      <circle
                        cx="350"
                        cy="200"
                        r="25"
                        fill="url(#nodeGradient3)"
                        opacity="0.8"
                      />
                      <text
                        x="350"
                        y="200"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="white"
                        fontSize="14"
                        fontWeight="bold"
                        className="pointer-events-none"
                      >
                        P
                      </text>
                      <text
                        x="350"
                        y="245"
                        textAnchor="middle"
                        fill="#f59e0b"
                        fontSize="12"
                        fontWeight="600"
                      >
                        Proof
                      </text>
                    </g>
                    
                    {/* Central hub node */}
                    <g>
                      <circle
                        cx="200"
                        cy="250"
                        r="30"
                        fill="url(#nodeGradient2)"
                        filter="url(#glow)"
                        opacity="0.6"
                        className="animate-pulse"
                        style={{ animationDelay: "0.4s" }}
                      />
                      <circle
                        cx="200"
                        cy="250"
                        r="20"
                        fill="url(#nodeGradient2)"
                        opacity="0.4"
                      />
                    </g>
                    
                    {/* Decorative elements */}
                    <g opacity="0.3">
                      <circle cx="100" cy="100" r="3" fill="#06b6d4" className="animate-pulse" />
                      <circle cx="300" cy="100" r="3" fill="#8b5cf6" className="animate-pulse" style={{ animationDelay: "0.2s" }} />
                      <circle cx="100" cy="300" r="3" fill="#ec4899" className="animate-pulse" style={{ animationDelay: "0.4s" }} />
                      <circle cx="300" cy="300" r="3" fill="#f59e0b" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aligned To Section */}
      <section className="relative py-8 px-4 sm:px-6 lg:px-8 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm text-slate-500">
            <span className="text-slate-400 font-medium">Aligned to:</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-500/50" />
              <span className="text-slate-300 font-semibold">NIST AI RMF</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500/50" />
              <span className="text-slate-300 font-semibold">ISO/IEC 42001</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-500/50" />
              <span className="text-slate-300 font-semibold">OMB-ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Four Learning Paths Section */}
      <section id="tracks" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Learning Paths</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
              Four Paths to AI Ethics Mastery
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Choose the path that matches your professional context. Each path contains specialized tracks with industry-specific content, case studies, and assessments.
            </p>
          </div>
          
          {/* Four Equal Category Cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* The Tiered Learning Model */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">The Learning Model</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              Progressive Skill Development
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our tiered approach builds competency from foundational understanding to governance-ready implementation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <TierCard 
              level="L100"
              title="Foundations"
              description="Shared understanding of AI ethics, risk concepts, and responsible AI principles."
              items={["Core concepts: risk, bias, transparency", "Roles & responsibilities", "Minimum viable controls"]}
              color="cyan"
            />
            <TierCard 
              level="L200"
              title="Operationalize"
              description="Practical implementation of responsible AI workflows and documentation."
              items={["Workflows: intake → assessment → approvals", "Documentation: model cards, data sheets", "Playbooks for common use cases"]}
              color="purple"
            />
            <TierCard 
              level="L300"
              title="Governance & Proof"
              description="Build audit-ready governance structures and demonstrate compliance."
              items={["Governance operating model", "Vendor evaluation & procurement", "Certification & audit preparation"]}
              color="amber"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-rose-400 font-semibold text-sm uppercase tracking-wider">What You Get</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              Everything You Need
            </h2>
                  </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={BookOpen}
              title="Self-Paced Modules"
              description="In-depth e-book content for every industry, with real case studies and actionable frameworks."
              color="cyan"
            />
            <FeatureCard 
              icon={GraduationCap}
              title="Quizzes & Assessments"
              description="Test your knowledge with track-specific quizzes. Detailed explanations help you learn from every answer."
              color="purple"
            />
            <FeatureCard 
              icon={Bot}
              title="AI Teaching Assistant"
              description="Get instant answers to your questions from an AI tutor with deep knowledge of our curriculum."
              color="rose"
            />
            <FeatureCard 
              icon={CheckCircle2}
              title="Templates & Checklists"
              description="Practical tools you can use immediately: policies, assessments, implementation guides."
              color="amber"
            />
                </div>
              </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-b from-slate-800/30 to-transparent border border-white/5 rounded-3xl p-10 md:p-16 text-center">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-2xl w-10 h-10 rounded-full flex items-center justify-center font-serif">
              &ldquo;
            </div>
            <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
              Ethics is not a compliance checkbox. For organizations using AI, 
              it&apos;s a survival strategy—and a competitive advantage.
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-px h-8 bg-purple-500/30" />
              <span className="text-slate-400 text-sm">
                Build trust. Reduce risk. Create lasting value.
              </span>
              <div className="w-px h-8 bg-purple-500/30" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-r from-cyan-900/40 via-purple-900/40 to-rose-900/40 backdrop-blur-sm border border-white/10 rounded-3xl p-10 md:p-16">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-cyan-200 mb-6">
                <Zap className="w-4 h-4" />
                <span>Start learning in 60 seconds</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build Responsible AI?
              </h2>
              <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                Choose a learning path that matches your needs. Whether you&apos;re in government, healthcare, finance, or any other industry—we have a track for you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/tracks"
                  className="group inline-flex items-center justify-center space-x-3 bg-white text-slate-900 px-8 py-4 rounded-xl text-base font-bold hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Explore All Tracks</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center space-x-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-white/10 transition-all duration-300"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>View Your Progress</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Category Card Component
interface CategoryCardProps {
  category: TrackCategory;
  index: number;
}

function CategoryCard({ category, index }: CategoryCardProps) {
  const Icon = iconMap[category.icon] || Building2;
  const trackCount = category.tracks?.length || 1;
  
  // Determine link based on category type
  const href = category.isSingleTrack 
    ? (category.id === "smb" ? "/ebook" : `/tracks/${category.singleTrackData?.slug}`)
    : `/${category.slug}`;
  
  // Color schemes for each category
  const colorSchemes: Record<string, { gradient: string; border: string; glow: string; badge: string }> = {
    policy: {
      gradient: "from-blue-600 to-cyan-600",
      border: "border-blue-500/20 hover:border-blue-500/40",
      glow: "bg-blue-500/20",
      badge: "bg-blue-500/20 text-blue-300"
    },
    regulated: {
      gradient: "from-rose-600 to-pink-600",
      border: "border-rose-500/20 hover:border-rose-500/40",
      glow: "bg-rose-500/20",
      badge: "bg-rose-500/20 text-rose-300"
    },
    "non-regulated": {
      gradient: "from-amber-600 to-orange-600",
      border: "border-amber-500/20 hover:border-amber-500/40",
      glow: "bg-amber-500/20",
      badge: "bg-amber-500/20 text-amber-300"
    },
    smb: {
      gradient: "from-purple-600 to-indigo-600",
      border: "border-purple-500/20 hover:border-purple-500/40",
      glow: "bg-purple-500/20",
      badge: "bg-purple-500/20 text-purple-300"
    }
  };
  
  const colors = colorSchemes[category.id] || colorSchemes.smb;
  
  return (
    <Link 
      href={href}
      className="group animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={`relative h-full bg-slate-900/50 backdrop-blur-sm border ${colors.border} rounded-3xl p-8 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-2xl overflow-hidden`}>
        {/* Glow effect on hover */}
        <div className={`absolute inset-0 ${colors.glow} opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500`} />
        
        {/* Top accent */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient} rounded-t-3xl`} />
        
        <div className="relative">
          {/* Icon and Title Row */}
          <div className="flex items-start gap-5 mb-6">
            <div className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
            <Icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-white transition-colors">
                {category.shortTitle}
              </h3>
              <p className="text-slate-400 text-sm">{category.tagline}</p>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-slate-400 leading-relaxed mb-6 line-clamp-3">
            {category.description}
          </p>
          
          {/* Track Pills or Single Track Info */}
          {category.tracks ? (
            <div className="flex flex-wrap gap-2 mb-6">
              {category.tracks.slice(0, 4).map((track) => (
                <span key={track.id} className={`px-3 py-1 rounded-full text-xs font-medium ${colors.badge}`}>
                  {track.shortTitle}
                </span>
              ))}
              {category.tracks.length > 4 && (
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-700 text-slate-300">
                  +{category.tracks.length - 4} more
                </span>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{category.singleTrackData?.estimatedTime}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                <span>{category.singleTrackData?.chapterCount} modules</span>
              </div>
            </div>
          )}
          
          {/* CTA */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">
              {trackCount === 1 ? "1 track" : `${trackCount} tracks`}
            </span>
            <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
              <span>Explore</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// Tier Card Component
interface TierCardProps {
  level: string;
  title: string;
  description: string;
  items: string[];
  color: string;
}

function TierCard({ level, title, description, items, color }: TierCardProps) {
  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    cyan: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/20" },
    purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20" },
    amber: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20" },
  };
  
  const colors = colorClasses[color];
  
  return (
    <div className={`relative bg-slate-900/30 backdrop-blur-sm border ${colors.border} rounded-2xl p-6 hover:border-opacity-50 transition-all duration-300`}>
      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold ${colors.bg} ${colors.text} mb-4`}>
        {level}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm mb-4">{description}</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
            <CheckCircle2 className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Feature Card Component
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

function FeatureCard({ icon: Icon, title, description, color }: FeatureCardProps) {
  const colorClasses: Record<string, { gradient: string; shadow: string }> = {
    cyan: { gradient: "from-cyan-500 to-blue-600", shadow: "shadow-cyan-500/25" },
    purple: { gradient: "from-purple-500 to-indigo-600", shadow: "shadow-purple-500/25" },
    rose: { gradient: "from-rose-500 to-pink-600", shadow: "shadow-rose-500/25" },
    amber: { gradient: "from-amber-500 to-orange-600", shadow: "shadow-amber-500/25" },
  };
  
  const colors = colorClasses[color];
  
  return (
    <div className="group relative bg-slate-900/30 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300">
      <div className={`w-12 h-12 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center shadow-lg ${colors.shadow} mb-4 group-hover:scale-110 transition-transform`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm">{description}</p>
    </div>
  );
}
