"use client";

import { useState } from "react";
import { chapters } from "@/data/ebook-content";
import { Bot, Send, Loader2, MessageCircle, Sparkles, Brain, Zap, BookOpen } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function VirtualTAPage() {
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading || selectedChapter === null) return;

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

  if (selectedChapter === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 py-12 px-4 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 text-white px-8 py-4 rounded-full mb-6 shadow-2xl">
              <Bot className="w-8 h-8 text-cyan-300 animate-pulse" />
              <span className="font-black text-2xl">Virtual Teaching Assistant</span>
              <Brain className="w-8 h-8 text-blue-300" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-blue-200 to-indigo-200 mb-6">
              Ask Me Anything
            </h1>
            <p className="text-xl text-cyan-200/90 max-w-2xl mx-auto leading-relaxed">
              Select a chapter and chat with our AI-powered teaching assistant to deepen your understanding.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {chapters.map((chapter, index) => {
              return (
                <button
                  key={chapter.id}
                  onClick={() => setSelectedChapter(chapter.id)}
                  className="group relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-sm text-cyan-300 font-bold bg-cyan-500/20 px-4 py-2 rounded-full border border-cyan-400/30">
                        {chapter.id === 0 ? "Introduction" : chapter.id === chapters.length - 1 ? "Conclusion" : `Chapter ${chapter.id}`}
                      </div>
                      <MessageCircle className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3 group-hover:text-cyan-200 transition-colors">
                      {chapter.title.replace(/^(Introduction: |Chapter \d+: |Conclusion)/, "")}
                    </h3>
                    <div className="flex items-center space-x-2 text-cyan-300">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-sm font-semibold">{Math.round(chapter.wordCount / 200)} min read</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 flex flex-col relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 border-b border-white/10 bg-slate-800/50 backdrop-blur-2xl shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                setSelectedChapter(null);
                setMessages([]);
              }}
              className="text-cyan-300 hover:text-cyan-100 flex items-center space-x-2 font-semibold transition-colors"
            >
              <span>← Back to chapters</span>
            </button>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/50">
                <Bot className="w-6 h-6 text-white animate-pulse" />
              </div>
              <div>
                <div className="text-sm text-cyan-300 font-semibold">Virtual TA</div>
                <h1 className="text-xl font-black text-white">
                  {chapters[selectedChapter].title}
                </h1>
              </div>
            </div>

            <div className="flex items-center space-x-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 px-4 py-2 rounded-full">
              <BookOpen className="w-5 h-5 text-cyan-300" />
              <span className="text-sm font-semibold text-cyan-300">
                {chapters[selectedChapter]?.id === 0 ? "Introduction" : chapters[selectedChapter]?.id === chapters.length - 1 ? "Conclusion" : `Chapter ${chapters[selectedChapter]?.id}`}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.length === 0 && (
            <div className="text-center py-20 animate-fade-in-up">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-cyan-500/50">
                <Brain className="w-12 h-12 text-white animate-pulse" />
              </div>
              <h2 className="text-3xl font-black text-white mb-4">Ready to Help!</h2>
              <p className="text-lg text-cyan-200/80 max-w-lg mx-auto leading-relaxed">
                Ask me anything about <span className="font-bold text-cyan-300">{chapters[selectedChapter].title}</span>. I&apos;m here to help you understand the concepts better.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto">
                <button
                  onClick={() => setInput("Can you summarize the key points of this chapter?")}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                    <Zap className="w-8 h-8 text-cyan-400 mb-3" />
                    <p className="text-sm text-white font-semibold">Summarize key points</p>
                  </div>
                </button>
                
                <button
                  onClick={() => setInput("What are the main challenges discussed?")}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                    <Brain className="w-8 h-8 text-cyan-400 mb-3" />
                    <p className="text-sm text-white font-semibold">Main challenges</p>
                  </div>
                </button>
                
                <button
                  onClick={() => setInput("Can you give me practical examples?")}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                    <Sparkles className="w-8 h-8 text-cyan-400 mb-3" />
                    <p className="text-sm text-white font-semibold">Practical examples</p>
                  </div>
                </button>
              </div>
            </div>
          )}

          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-fade-in-up`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`relative max-w-2xl ${message.role === "user" ? "ml-12" : "mr-12"}`}>
                {message.role === "assistant" && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur-lg opacity-30"></div>
                )}
                <div
                  className={`relative backdrop-blur-xl border rounded-3xl p-6 shadow-xl ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-cyan-600 to-blue-600 border-cyan-500/50 text-white shadow-cyan-500/20"
                      : "bg-slate-800/70 border-white/20 text-white"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="flex items-center space-x-2 mb-3 pb-3 border-b border-white/10">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-bold text-cyan-300">Virtual TA</span>
                    </div>
                  )}
                  <div className="prose prose-invert max-w-none">
                    <p className="text-base leading-relaxed whitespace-pre-wrap font-medium">
                      {message.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start animate-fade-in-up">
              <div className="relative max-w-2xl mr-12">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur-lg opacity-30"></div>
                <div className="relative bg-slate-800/70 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl">
                  <div className="flex items-center space-x-2 mb-3 pb-3 border-b border-white/10">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-bold text-cyan-300">Virtual TA</span>
                  </div>
                  <div className="flex items-center space-x-3 text-cyan-300">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span className="text-sm font-semibold">Thinking...</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input */}
      <div className="relative z-10 border-t border-white/10 bg-slate-800/50 backdrop-blur-2xl p-6 shadow-2xl">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur-xl opacity-30"></div>
            <div className="relative flex items-end space-x-4 bg-slate-900/50 backdrop-blur-xl border-2 border-white/20 rounded-3xl p-4 shadow-2xl">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask a question about this chapter..."
                className="flex-1 bg-transparent text-white placeholder-cyan-300/50 outline-none resize-none text-lg max-h-40 font-medium focus:placeholder-cyan-300/30 transition-colors"
                rows={1}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !input.trim()}
                className="group w-14 h-14 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center flex-shrink-0 transform hover:scale-110 disabled:hover:scale-100"
              >
                {isLoading ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
