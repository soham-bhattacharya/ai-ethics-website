"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getAllTracks } from "@/data/tracks";
import { getProgress, getProgressStats, calculateTrackCompletion } from "@/lib/progress";
import {
  Trophy, Target, BookOpen, Clock, ArrowRight, Sparkles,
  Building2, Landmark, HeartPulse, Users, TrendingUp, Award,
  CheckCircle, Zap, GraduationCap, BarChart3, Calendar,
  LucideIcon, Shield, Megaphone, Radio, Factory, ShoppingCart
} from "lucide-react";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Building2,
  Landmark,
  HeartPulse,
  Users,
  TrendingUp,
  Shield,
  Megaphone,
  GraduationCap,
  Radio,
  Factory,
  ShoppingCart,
};

export default function DashboardPage() {
  const [stats, setStats] = useState({ tracksStarted: 0, tracksCompleted: 0, totalAchievements: 0, overallProgress: 0 });
  const [trackProgressData, setTrackProgressData] = useState<Record<string, number>>({});
  const [achievements, setAchievements] = useState<Array<{ id: string; title: string; description: string; earnedAt: string; icon: string }>>([]);
  const [mounted, setMounted] = useState(false);

  const tracks = getAllTracks().filter(t => t.isActive);

  useEffect(() => {
    setMounted(true);
    const newStats = getProgressStats();
    setStats(newStats);

    const progress = getProgress();
    setAchievements(progress.achievements);

    const progressByTrack: Record<string, number> = {};
    tracks.forEach(track => {
      progressByTrack[track.id] = calculateTrackCompletion(track.id, track.chapterCount);
    });
    setTrackProgressData(progressByTrack);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 relative">
      {/* Subtle grid pattern background */}
      <div className="fixed inset-0 grid-pattern opacity-50" />
      
      {/* Accent glow - subtle */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/8 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Dashboard</p>
              <h1 className="text-3xl font-bold text-white">Your Progress</h1>
            </div>
          </div>
          <p className="text-slate-400 max-w-xl">
            Track your learning journey across all AI Ethics tracks
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <StatCard icon={Target} label="Tracks Started" value={stats.tracksStarted} accent="indigo" />
          <StatCard icon={Trophy} label="Completed" value={stats.tracksCompleted} accent="amber" />
          <StatCard icon={Award} label="Achievements" value={stats.totalAchievements} accent="violet" />
          <StatCard icon={Zap} label="Progress" value={`${stats.overallProgress}%`} accent="emerald" />
        </div>

        {/* Learning Tracks Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-slate-400" />
              Learning Tracks
            </h2>
            <Link href="/tracks" className="text-sm text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tracks.map((track) => {
              const Icon = iconMap[track.icon] || Building2;
              const progress = trackProgressData[track.id] || 0;
              const href = track.id === "smb" ? "/ebook" : `/tracks/${track.slug}`;

              return (
                <Link
                  key={track.id}
                  href={href}
                  className="group block"
                >
                  <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 hover:bg-slate-900/80 hover:border-slate-700 transition-all duration-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-11 h-11 bg-gradient-to-br ${track.color} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      {progress >= 100 && (
                        <span className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">
                          <CheckCircle className="w-3 h-3" /> Done
                        </span>
                      )}
                    </div>

                    <h3 className="font-semibold text-white mb-1 group-hover:text-indigo-200 transition-colors">
                      {track.shortTitle}
                    </h3>

                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {track.estimatedTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3" /> {track.chapterCount} modules
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Progress</span>
                        <span className="text-slate-300 font-medium">{progress}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${track.color} transition-all duration-500`}
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-5 h-5 text-amber-500" />
            <h2 className="text-xl font-semibold text-white">Achievements</h2>
          </div>

          {achievements.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="bg-slate-900/50 border border-amber-500/20 rounded-xl p-5"
                >
                  <div className="text-3xl mb-3">{achievement.icon}</div>
                  <h3 className="font-semibold text-white text-sm mb-1">{achievement.title}</h3>
                  <p className="text-xs text-slate-500 mb-3">{achievement.description}</p>
                  <div className="flex items-center gap-1 text-xs text-amber-500/80">
                    <Calendar className="w-3 h-3" />
                    {new Date(achievement.earnedAt).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-slate-900/30 border border-slate-800/50 rounded-2xl p-10 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-slate-800/50 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="font-semibold text-slate-400 mb-2">No achievements yet</h3>
              <p className="text-sm text-slate-500 mb-6">Start learning to earn your first achievement</p>
              <Link
                href="/tracks"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
              >
                <Sparkles className="w-4 h-4" />
                Explore Tracks
              </Link>
            </div>
          )}
        </section>

        {/* Quick Actions */}
        <section>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <QuickAction
              href="/tracks"
              icon={BookOpen}
              title="Browse Tracks"
              subtitle="Explore all learning paths"
              gradient="from-indigo-500 to-violet-500"
            />
            <QuickAction
              href="/quiz"
              icon={GraduationCap}
              title="Take a Quiz"
              subtitle="Test your knowledge"
              gradient="from-cyan-500 to-blue-500"
            />
            <QuickAction
              href="/virtual-ta"
              icon={Zap}
              title="Ask Virtual TA"
              subtitle="Get AI-powered help"
              gradient="from-emerald-500 to-teal-500"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

// Stat Card Component
interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  accent: 'indigo' | 'amber' | 'violet' | 'emerald';
}

const accentColors = {
  indigo: 'from-indigo-500 to-indigo-600 text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
  amber: 'from-amber-500 to-amber-600 text-amber-400 bg-amber-500/10 border-amber-500/20',
  violet: 'from-violet-500 to-violet-600 text-violet-400 bg-violet-500/10 border-violet-500/20',
  emerald: 'from-emerald-500 to-emerald-600 text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
};

function StatCard({ icon: Icon, label, value, accent }: StatCardProps) {
  const colors = accentColors[accent];
  const [gradientPart, textPart] = colors.split(' text-');
  
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
      <div className={`w-9 h-9 bg-gradient-to-br ${gradientPart} rounded-lg flex items-center justify-center mb-3`}>
        <Icon className="w-4 h-4 text-white" />
      </div>
      <div className="text-2xl font-bold text-white mb-0.5">{value}</div>
      <div className="text-xs text-slate-500">{label}</div>
    </div>
  );
}

// Quick Action Component
interface QuickActionProps {
  href: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  gradient: string;
}

function QuickAction({ href, icon: Icon, title, subtitle, gradient }: QuickActionProps) {
  return (
    <Link href={href} className="group block">
      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:bg-slate-900/80 hover:border-slate-700 transition-all">
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-white group-hover:text-indigo-200 transition-colors">{title}</h3>
            <p className="text-xs text-slate-500">{subtitle}</p>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </Link>
  );
}
