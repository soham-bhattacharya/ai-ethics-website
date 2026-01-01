"use client";

import { useState } from "react";
import Link from "next/link";
import { chapters } from "@/data/ebook-content";
import { governmentModules } from "@/data/government-content";
import { healthcareChapters } from "@/data/healthcare-content";
import { hrChapters } from "@/data/hr-content";
import { financeChapters } from "@/data/finance-content";
import { insuranceContent } from "@/data/insurance-content";
import { marketingContent } from "@/data/marketing-content";
import { educationContent } from "@/data/education-content";
import { mediaContent } from "@/data/media-content";
import { manufacturingContent } from "@/data/manufacturing-content";
import { retailContent } from "@/data/retail-content";
import { getAllTracks, LearningTrack } from "@/data/tracks";
import { 
  Bot, Send, Loader2, MessageCircle, Sparkles, Brain, Zap, BookOpen,
  Building2, Landmark, HeartPulse, Users, TrendingUp, ChevronLeft, ArrowRight,
  LucideIcon, Shield, Megaphone, GraduationCap, Radio, Factory, ShoppingCart
} from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

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

// Get content by track
function getTrackModules(trackId: string) {
  switch (trackId) {
    case "government": return governmentModules;
    case "healthcare": return healthcareChapters;
    case "hr": return hrChapters;
    case "finance": return financeChapters;
    case "insurance": return insuranceContent.modules;
    case "marketing": return marketingContent.modules;
    case "education": return educationContent.modules;
    case "media": return mediaContent.modules;
    case "manufacturing": return manufacturingContent.modules;
    case "retail": return retailContent.modules;
    case "smb":
    default: return chapters;
  }
}

export default function VirtualTAPage() {
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const tracks = getAllTracks().filter(t => t.isActive);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading || selectedChapter === null || selectedTrack === null) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          chapterId: selectedChapter,
          trackId: selectedTrack,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      const assistantMessage: Message = {
        role: "assistant",
        content: data.response,
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again.",
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const currentTrack = selectedTrack ? tracks.find(t => t.id === selectedTrack) : null;
  const currentModules = selectedTrack ? getTrackModules(selectedTrack) : [];

  // Group tracks by category for better organization
  const policyTrack = tracks.find(t => t.id === "government");
  const smbTrack = tracks.find(t => t.id === "smb");
  const regulatedTracks = tracks.filter(t => ["healthcare", "finance", "insurance"].includes(t.id));
  const nonRegulatedTracks = tracks.filter(t => ["hr", "marketing", "education", "media", "manufacturing", "retail"].includes(t.id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Brain className="w-5 h-5 text-cyan-300" />
            <span>Powered by Gemini 2.5</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Virtual Teaching Assistant
            </span>
          </h1>
          <p className="text-purple-200/80 text-lg max-w-2xl mx-auto">
            Get personalized help understanding AI ethics concepts. Select a learning track and module to start.
          </p>
        </div>

        {/* Step 1: Select Track */}
        {!selectedTrack && (
          <div className="max-w-5xl mx-auto animate-fade-in">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full text-sm text-purple-300">
                <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</span>
                <span>Select a Learning Track</span>
              </div>
            </div>

            {/* AI Policy Track */}
            {policyTrack && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-3 px-2">AI Policy</h3>
                <TrackButton track={policyTrack} onClick={() => setSelectedTrack(policyTrack.id)} />
              </div>
            )}

            {/* Regulated Industries */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-rose-300 uppercase tracking-wider mb-3 px-2">Regulated Industries</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {regulatedTracks.map((track) => (
                  <TrackButton key={track.id} track={track} onClick={() => setSelectedTrack(track.id)} />
                ))}
              </div>
            </div>

            {/* Non-Regulated Industries */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-amber-300 uppercase tracking-wider mb-3 px-2">Non-Regulated Industries</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {nonRegulatedTracks.map((track) => (
                  <TrackButton key={track.id} track={track} onClick={() => setSelectedTrack(track.id)} />
                ))}
              </div>
            </div>

            {/* SMB Track */}
            {smbTrack && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-purple-300 uppercase tracking-wider mb-3 px-2">Small & Medium Business</h3>
                <TrackButton track={smbTrack} onClick={() => setSelectedTrack(smbTrack.id)} />
              </div>
            )}
          </div>
        )}

        {/* Step 2: Select Chapter */}
        {selectedTrack && !selectedChapter && currentTrack && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <button
              onClick={() => setSelectedTrack(null)}
              className="inline-flex items-center gap-2 text-purple-300 hover:text-white mb-6 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Tracks</span>
            </button>

            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full text-sm text-purple-300 mb-4">
                <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</span>
                <span>Select a Module</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                {(() => {
                  const Icon = iconMap[currentTrack.icon] || Building2;
                  return (
                    <div className={`w-10 h-10 bg-gradient-to-br ${currentTrack.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  );
                })()}
                <h2 className="text-2xl font-bold text-white">{currentTrack.shortTitle}</h2>
              </div>
            </div>

            <div className="space-y-3">
              {currentModules.map((module) => (
                <button
                  key={module.id}
                  onClick={() => {
                    setSelectedChapter(module.id);
                    setMessages([]);
                  }}
                  className="w-full text-left bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-slate-700/50 hover:border-purple-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-300 font-bold text-sm">
                        {module.id + 1}
                      </div>
                      <span className="text-white font-medium">{module.title}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Chat Interface */}
        {selectedTrack && selectedChapter !== null && currentTrack && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <button
              onClick={() => {
                setSelectedChapter(null);
                setMessages([]);
              }}
              className="inline-flex items-center gap-2 text-purple-300 hover:text-white mb-6 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Modules</span>
            </button>

            {/* Current context */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-3 mb-2">
                {(() => {
                  const Icon = iconMap[currentTrack.icon] || Building2;
                  return (
                    <div className={`w-8 h-8 bg-gradient-to-br ${currentTrack.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                  );
                })()}
                <span className="text-purple-300 font-medium">{currentTrack.shortTitle}</span>
                <span className="text-slate-500">•</span>
                <span className="text-white font-semibold">
                  {currentModules[selectedChapter]?.title}
                </span>
              </div>
              <p className="text-slate-400 text-sm">
                Ask questions about this module&apos;s content. I&apos;m here to help you understand the concepts.
              </p>
            </div>

            {/* Messages */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-6 min-h-[400px] max-h-[500px] overflow-y-auto">
              {messages.length === 0 && (
                <div className="text-center py-12">
                  <Bot className="w-16 h-16 text-purple-400 mx-auto mb-4 opacity-50" />
                  <p className="text-slate-400 mb-4">No messages yet. Start by asking a question!</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {[
                      "What are the key takeaways?",
                      "Explain the main concepts",
                      "Give me an example"
                    ].map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => setInput(suggestion)}
                        className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-300 hover:bg-purple-500/30 transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`mb-4 ${msg.role === "user" ? "text-right" : ""}`}
                >
                  <div
                    className={`inline-block max-w-[80%] px-4 py-3 rounded-2xl ${
                      msg.role === "user"
                        ? "bg-purple-600 text-white rounded-tr-none"
                        : "bg-slate-700/50 text-slate-200 rounded-tl-none"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-purple-300">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm">Thinking...</span>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask a question about this module..."
                className="flex-1 bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!input.trim() || isLoading}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span className="hidden sm:inline">Send</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Track Button Component
function TrackButton({ track, onClick }: { track: LearningTrack; onClick: () => void }) {
  const Icon = iconMap[track.icon] || Building2;
  const isPlaceholder = track.isPlaceholder;
  
  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-slate-700/50 hover:border-purple-500/30 transition-all duration-300 group relative"
    >
      {isPlaceholder && (
        <div className="absolute top-2 right-2 px-2 py-0.5 bg-amber-500/20 border border-amber-500/30 rounded-full text-xs text-amber-300">
          Preview
        </div>
      )}
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 bg-gradient-to-br ${track.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-bold group-hover:text-purple-200 transition-colors">
            {track.shortTitle}
          </h3>
          <p className="text-slate-400 text-sm">{track.chapterCount} modules</p>
        </div>
        <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
      </div>
    </button>
  );
}
