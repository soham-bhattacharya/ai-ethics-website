"use client";

import { useState } from "react";
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
  Bot, Send, Loader2, MessageCircle, Brain,
  Building2, Landmark, HeartPulse, Users, TrendingUp, ChevronLeft, ArrowRight,
  LucideIcon, Shield, Megaphone, GraduationCap, Radio, Factory, ShoppingCart,
  Sparkles
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

  // Group tracks by category
  const policyTrack = tracks.find(t => t.id === "government");
  const smbTrack = tracks.find(t => t.id === "smb");
  const regulatedTracks = tracks.filter(t => ["healthcare", "finance", "insurance"].includes(t.id));
  const nonRegulatedTracks = tracks.filter(t => ["hr", "marketing", "education", "media", "manufacturing", "retail"].includes(t.id));

  return (
    <div className="min-h-screen bg-slate-950 relative">
      {/* Subtle pattern */}
      <div className="fixed inset-0 dot-pattern opacity-30" />
      
      {/* Accent glow */}
      <div className="fixed top-0 right-1/4 w-[600px] h-[400px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-sm text-cyan-400 font-medium mb-4">
            <Brain className="w-4 h-4" />
            <span>Context-Aware Learning Support</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Virtual Teaching Assistant
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Get personalized help understanding AI ethics concepts. Select a learning track and module to start.
          </p>
        </div>

        {/* Step 1: Select Track */}
        {!selectedTrack && (
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 justify-center mb-8">
              <span className="w-7 h-7 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-medium">1</span>
              <span className="text-sm text-slate-400">Select a Learning Track</span>
            </div>

            <div className="space-y-6">
              {/* AI Policy */}
              {policyTrack && (
                <div>
                  <h3 className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-3 px-1">AI Policy</h3>
                  <TrackButton track={policyTrack} onClick={() => setSelectedTrack(policyTrack.id)} />
                </div>
              )}

              {/* Regulated Industries */}
              <div>
                <h3 className="text-xs font-medium text-rose-400 uppercase tracking-wider mb-3 px-1">Regulated Industries</h3>
                <div className="grid md:grid-cols-3 gap-3">
                  {regulatedTracks.map((track) => (
                    <TrackButton key={track.id} track={track} onClick={() => setSelectedTrack(track.id)} />
                  ))}
                </div>
              </div>

              {/* Non-Regulated Industries */}
              <div>
                <h3 className="text-xs font-medium text-amber-400 uppercase tracking-wider mb-3 px-1">Non-Regulated Industries</h3>
                <div className="grid md:grid-cols-3 gap-3">
                  {nonRegulatedTracks.map((track) => (
                    <TrackButton key={track.id} track={track} onClick={() => setSelectedTrack(track.id)} />
                  ))}
                </div>
              </div>

              {/* SMB */}
              {smbTrack && (
                <div>
                  <h3 className="text-xs font-medium text-violet-400 uppercase tracking-wider mb-3 px-1">Small & Medium Business</h3>
                  <TrackButton track={smbTrack} onClick={() => setSelectedTrack(smbTrack.id)} />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 2: Select Chapter */}
        {selectedTrack && !selectedChapter && currentTrack && (
          <div className="animate-fade-in">
            <button
              onClick={() => setSelectedTrack(null)}
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-white mb-8 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Tracks
            </button>

            <div className="flex items-center gap-2 justify-center mb-6">
              <span className="w-7 h-7 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-medium">2</span>
              <span className="text-sm text-slate-400">Select a Module</span>
            </div>
            
            <div className="flex items-center justify-center gap-3 mb-8">
              {(() => {
                const Icon = iconMap[currentTrack.icon] || Building2;
                return (
                  <div className={`w-10 h-10 bg-gradient-to-br ${currentTrack.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                );
              })()}
              <h2 className="text-xl font-semibold text-white">{currentTrack.shortTitle}</h2>
            </div>

            <div className="space-y-2 max-w-2xl mx-auto">
              {currentModules.map((module) => (
                <button
                  key={module.id}
                  onClick={() => {
                    setSelectedChapter(module.id);
                    setMessages([]);
                  }}
                  className="w-full text-left bg-slate-900/50 border border-slate-800 rounded-xl p-4 hover:bg-slate-900/80 hover:border-slate-700 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 text-sm font-medium">
                        {module.id + 1}
                      </span>
                      <span className="text-white font-medium">{module.title}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Chat Interface */}
        {selectedTrack && selectedChapter !== null && currentTrack && (
          <div className="animate-fade-in">
            <button
              onClick={() => {
                setSelectedChapter(null);
                setMessages([]);
              }}
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-white mb-6 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Modules
            </button>

            {/* Current context */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-3">
                {(() => {
                  const Icon = iconMap[currentTrack.icon] || Building2;
                  return (
                    <div className={`w-9 h-9 bg-gradient-to-br ${currentTrack.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                  );
                })()}
                <div>
                  <span className="text-sm text-slate-500">{currentTrack.shortTitle}</span>
                  <h3 className="text-white font-medium">{currentModules[selectedChapter]?.title}</h3>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 mb-6 min-h-[350px] max-h-[450px] overflow-y-auto">
              {messages.length === 0 && (
                <div className="text-center py-10">
                  <div className="w-14 h-14 mx-auto mb-4 bg-slate-800/50 rounded-full flex items-center justify-center">
                    <Bot className="w-7 h-7 text-slate-500" />
                  </div>
                  <p className="text-slate-500 mb-5">No messages yet. Start by asking a question!</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {[
                      "What are the key takeaways?",
                      "Explain the main concepts",
                      "Give me an example"
                    ].map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => setInput(suggestion)}
                        className="px-3 py-1.5 bg-slate-800/50 border border-slate-700/50 rounded-full text-xs text-slate-400 hover:bg-slate-700/50 hover:text-white transition-colors"
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
                    className={`inline-block max-w-[85%] px-4 py-3 rounded-2xl ${
                      msg.role === "user"
                        ? "bg-indigo-600 text-white rounded-tr-sm"
                        : "bg-slate-800/80 text-slate-200 rounded-tl-sm"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-slate-400">
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
                className="flex-1 bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!input.trim() || isLoading}
                className="px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
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
  
  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-slate-900/50 border border-slate-800 rounded-xl p-4 hover:bg-slate-900/80 hover:border-slate-700 transition-all group relative"
    >
      {track.isPlaceholder && (
        <span className="absolute top-2 right-2 px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs text-amber-400">
          Preview
        </span>
      )}
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 bg-gradient-to-br ${track.color} rounded-xl flex items-center justify-center`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-medium group-hover:text-indigo-200 transition-colors">
            {track.shortTitle}
          </h3>
          <p className="text-xs text-slate-500">{track.chapterCount} modules</p>
        </div>
        <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
      </div>
    </button>
  );
}
