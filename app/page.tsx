import Link from "next/link";
import { BookOpen, Bot, GraduationCap, ArrowRight, Sparkles, Zap, LucideIcon, Building2, Landmark, HeartPulse, Users, Clock } from "lucide-react";
import { ebookMetadata } from "@/data/ebook-content";
import { getAllTracks, LearningTrack } from "@/data/tracks";

// Icon mapping for dynamic track rendering
const iconMap: Record<string, LucideIcon> = {
  Building2,
  Landmark,
  HeartPulse,
  Users,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm border border-purple-500/30 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-fade-in shadow-lg">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span>Your Complete AI Ethics Resource</span>
            <Sparkles className="w-5 h-5 text-yellow-300" />
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 animate-fade-in-up">
            <span className="bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-200 bg-clip-text text-transparent drop-shadow-2xl">
              AI Ethics Playbook
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl font-bold text-purple-100 mb-6 animate-fade-in-up delay-100">
            for Businesses &amp; Professionals
          </div>
          
          <p className="text-xl md:text-2xl text-purple-200/90 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Master responsible AI adoption with our comprehensive guide, interactive tools, and AI-powered teaching assistant
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-300">
            <Link
              href="/ebook"
              className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <BookOpen className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span>Start Reading</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur"></div>
            </Link>
            
            <Link
              href="/virtual-ta"
              className="group inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
            >
              <Bot className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Ask Virtual TA</span>
            </Link>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-purple-200/80 text-sm animate-fade-in-up delay-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>📖 {ebookMetadata.totalChapters} Chapters</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-100"></div>
              <span>⏱️ {ebookMetadata.estimatedReadingTime}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></div>
              <span>✅ 40 Quiz Questions</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-300"></div>
              <span>🤖 AI-Powered TA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Everything You Need to Master AI Ethics
            </h2>
            <p className="text-xl text-purple-200/80">
              Interactive learning tools designed for small business success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Tracks Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 backdrop-blur-sm border border-indigo-500/30 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>Choose Your Path</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Learning Tracks for Every Professional
            </h2>
            <p className="text-xl text-purple-200/80 max-w-3xl mx-auto">
              Whether you&apos;re a business owner, government employee, healthcare professional, or HR specialist, we have a tailored learning path for you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getAllTracks().map((track, index) => (
              <TrackCard key={track.id} track={track} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-10 text-center hover:border-white/30 transition-all duration-300 transform hover:scale-105">
                  <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent mb-4">
                    {stat.value}
                  </div>
                  <div className="text-lg text-purple-200/80 font-semibold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-white/20 rounded-3xl p-12 md:p-16">
              <Zap className="w-16 h-16 mx-auto mb-6 text-yellow-300 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Build Ethical AI?
              </h2>
              <p className="text-xl text-purple-200/90 mb-10 leading-relaxed">
                Join thousands of SMBs implementing responsible AI practices. Start your journey today with our comprehensive playbook and interactive tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/ebook"
                  className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <BookOpen className="w-6 h-6" />
                  <span>Read the Playbook</span>
                </Link>
                <Link
                  href="/quiz"
                  className="inline-flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white/20 transition-all duration-300"
                >
                  <GraduationCap className="w-6 h-6" />
                  <span>Test Your Knowledge</span>
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
    icon: BookOpen,
    title: "Comprehensive Ebook",
    description: "8 chapters covering everything from AI fundamentals to practical implementation strategies",
    href: "/ebook",
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    icon: Bot,
    title: "AI Teaching Assistant",
    description: "Get instant, context-aware answers about any chapter with our Gemini-powered Virtual TA",
    href: "/virtual-ta",
    gradient: "from-indigo-500 to-blue-600"
  },
  {
    icon: GraduationCap,
    title: "Interactive Quiz",
    description: "Test your understanding with 40 curated questions featuring detailed explanations",
    href: "/quiz",
    gradient: "from-blue-500 to-cyan-600"
  }
];

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  gradient: string;
  index: number;
}

function FeatureCard({ icon: Icon, title, description, href, gradient, index }: FeatureCardProps) {
  return (
    <Link 
      href={href}
      className="group animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative h-full">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
        <div className="relative bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
          <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">
            {title}
          </h3>
          <p className="text-purple-200/70 leading-relaxed group-hover:text-purple-200/90 transition-colors">
            {description}
          </p>
          <div className="mt-6 flex items-center text-purple-300 font-semibold group-hover:text-purple-200 transition-colors">
            <span>Learn more</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}

const stats = [
  { value: "~10K", label: "Words of Content" },
  { value: "8", label: "Expert Chapters" },
  { value: "40+", label: "Quiz Questions" }
];

// Track Card Component
interface TrackCardProps {
  track: LearningTrack;
  index: number;
}

function TrackCard({ track, index }: TrackCardProps) {
  const Icon = iconMap[track.icon] || Building2;
  const isActive = track.isActive;
  
  const CardContent = (
    <div className="relative h-full">
      <div className={`absolute inset-0 bg-gradient-to-br ${track.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
      <div className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-3xl p-6 h-full transition-all duration-300 ${
        isActive 
          ? "border-white/20 hover:border-white/40 transform hover:scale-105 hover:-translate-y-2" 
          : "border-white/10 opacity-75"
      }`}>
        {/* Coming Soon Badge */}
        {track.comingSoon && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            Coming Soon
          </div>
        )}
        
        {/* Icon */}
        <div className={`w-14 h-14 bg-gradient-to-br ${track.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg ${isActive ? "group-hover:rotate-6 group-hover:scale-110" : ""} transition-transform duration-300`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
          {track.shortTitle}
        </h3>
        
        {/* Description */}
        <p className="text-purple-200/70 text-sm leading-relaxed mb-4 line-clamp-3">
          {track.description}
        </p>
        
        {/* Meta info */}
        <div className="flex items-center gap-4 text-xs text-purple-300/80">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{track.estimatedTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-3 h-3" />
            <span>{track.chapterCount} chapters</span>
          </div>
        </div>
        
        {/* CTA */}
        {isActive && (
          <div className="mt-4 flex items-center text-purple-300 font-semibold group-hover:text-purple-200 transition-colors">
            <span>Start Learning</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
          </div>
        )}
      </div>
    </div>
  );

  if (isActive) {
    return (
      <Link 
        href="/ebook"
        className="group animate-fade-in-up"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {CardContent}
      </Link>
    );
  }

  return (
    <div 
      className="group animate-fade-in-up cursor-default"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {CardContent}
    </div>
  );
}
