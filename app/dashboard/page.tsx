"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getAllTracks } from "@/data/tracks";
import { getProgress, getProgressStats, getTrackProgress, calculateTrackCompletion } from "@/lib/progress";
import {
  Trophy, Target, BookOpen, Clock, ArrowRight, Sparkles,
  Building2, Landmark, HeartPulse, Users, TrendingUp, Award,
  CheckCircle, Star, Zap, GraduationCap, BarChart3, Calendar,
  LucideIcon
} from "lucide-react";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Building2,
  Landmark,
  HeartPulse,
  Users,
  TrendingUp,
};

// Achievement icon mapping
const achievementIcons: Record<string, string> = {
  '🎯': 'Target',
  '⭐': 'Star',
  '🏆': 'Trophy',
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 py-12 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm border border-purple-500/30 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 animate-fade-in">
            <BarChart3 className="w-5 h-5 text-purple-300" />
            <span>Learning Dashboard</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 animate-fade-in-up">
            Your Progress
          </h1>
          <p className="text-xl text-purple-200/80 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Track your learning journey across all AI Ethics tracks
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <StatCard
            icon={Target}
            label="Tracks Started"
            value={stats.tracksStarted}
            color="from-blue-500 to-cyan-500"
            delay={0}
          />
          <StatCard
            icon={Trophy}
            label="Tracks Completed"
            value={stats.tracksCompleted}
            color="from-amber-500 to-yellow-500"
            delay={100}
          />
          <StatCard
            icon={Award}
            label="Achievements"
            value={stats.totalAchievements}
            color="from-purple-500 to-pink-500"
            delay={200}
          />
          <StatCard
            icon={Zap}
            label="Overall Progress"
            value={`${stats.overallProgress}%`}
            color="from-green-500 to-emerald-500"
            delay={300}
          />
        </div>

        {/* Track Progress */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl font-bold text-white">Learning Tracks</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track, index) => {
              const Icon = iconMap[track.icon] || Building2;
              const progress = trackProgressData[track.id] || 0;

              return (
                <Link
                  key={track.id}
                  href={track.id === "smb" ? "/ebook" : `/tracks/${track.slug}`}
                  className="group relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${track.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 h-full hover:border-white/30 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${track.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      {progress >= 100 && (
                        <div className="bg-green-500/20 border border-green-500/50 text-green-400 text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1">
                          <CheckCircle className="w-3 h-3" />
                          <span>Complete</span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                      {track.shortTitle}
                    </h3>

                    <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{track.estimatedTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{track.chapterCount} modules</span>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-400">Progress</span>
                        <span className="text-purple-300 font-bold">{progress}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div
                          className={`bg-gradient-to-r ${track.color} h-full transition-all duration-500 rounded-full`}
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex items-center text-purple-300 font-semibold group-hover:text-white transition-colors">
                      <span>{progress > 0 ? "Continue Learning" : "Start Track"}</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <Trophy className="w-6 h-6 text-amber-400" />
            <h2 className="text-2xl font-bold text-white">Achievements</h2>
          </div>

          {achievements.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.id}
                  className="bg-slate-800/50 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="text-4xl mb-3">{achievement.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-1">{achievement.title}</h3>
                  <p className="text-sm text-slate-400 mb-3">{achievement.description}</p>
                  <div className="flex items-center space-x-1 text-xs text-amber-400">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(achievement.earnedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-slate-800/30 backdrop-blur-xl border border-white/5 rounded-3xl p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-slate-700/50 rounded-full flex items-center justify-center">
                <Award className="w-10 h-10 text-slate-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-400 mb-2">No achievements yet</h3>
              <p className="text-slate-500 mb-6">Start learning to earn your first achievement!</p>
              <Link
                href="/tracks"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
              >
                <Sparkles className="w-5 h-5" />
                <span>Explore Tracks</span>
              </Link>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Link
            href="/tracks"
            className="group bg-slate-800/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white group-hover:text-purple-200 transition-colors">Browse Tracks</h3>
                <p className="text-sm text-slate-400">Explore all learning paths</p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-purple-300 group-hover:translate-x-1 transition-all ml-auto" />
            </div>
          </Link>

          <Link
            href="/quiz"
            className="group bg-slate-800/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white group-hover:text-purple-200 transition-colors">Take a Quiz</h3>
                <p className="text-sm text-slate-400">Test your knowledge</p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-purple-300 group-hover:translate-x-1 transition-all ml-auto" />
            </div>
          </Link>

          <Link
            href="/virtual-ta"
            className="group bg-slate-800/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white group-hover:text-purple-200 transition-colors">Ask Virtual TA</h3>
                <p className="text-sm text-slate-400">Get AI-powered help</p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-purple-300 group-hover:translate-x-1 transition-all ml-auto" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  color: string;
  delay: number;
}

function StatCard({ icon: Icon, label, value, color, delay }: StatCardProps) {
  return (
    <div
      className="animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative group">
        <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}></div>
        <div className="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
          <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center mb-4`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="text-3xl font-black text-white mb-1">{value}</div>
          <div className="text-sm text-slate-400">{label}</div>
        </div>
      </div>
    </div>
  );
}

