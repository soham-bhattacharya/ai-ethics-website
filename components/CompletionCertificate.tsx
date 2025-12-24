"use client";

import { useRef } from "react";
import { Award, Download, Share2, CheckCircle, Calendar, Clock } from "lucide-react";

interface CompletionCertificateProps {
  trackTitle: string;
  trackShortTitle: string;
  completedAt: string;
  modulesCompleted: number;
  quizScore?: number;
  userName?: string;
}

export default function CompletionCertificate({
  trackTitle,
  trackShortTitle,
  completedAt,
  modulesCompleted,
  quizScore,
  userName = "Learner"
}: CompletionCertificateProps) {
  const certificateRef = useRef<HTMLDivElement>(null);
  
  const formattedDate = new Date(completedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `AI Ethics Playbook - ${trackShortTitle} Certification`,
          text: `I just completed the ${trackTitle} on AI Ethics Playbook!`,
          url: window.location.href
        });
      } catch (error) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback: Copy link to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="relative">
      {/* Certificate Card */}
      <div 
        ref={certificateRef}
        className="relative bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 rounded-3xl overflow-hidden"
      >
        {/* Decorative border */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 opacity-20"></div>
        <div className="absolute inset-[3px] bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 rounded-3xl"></div>
        
        {/* Corner decorations */}
        <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-amber-400/50 rounded-tl-xl"></div>
        <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-amber-400/50 rounded-tr-xl"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-amber-400/50 rounded-bl-xl"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-amber-400/50 rounded-br-xl"></div>
        
        <div className="relative p-8 md:p-12 text-center">
          {/* Header */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="relative w-24 h-24 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl">
                <Award className="w-12 h-12 text-slate-900" />
              </div>
            </div>
          </div>
          
          {/* Certificate Title */}
          <div className="text-amber-400/80 text-sm font-bold uppercase tracking-[0.3em] mb-2">
            Certificate of Completion
          </div>
          
          <h1 className="text-3xl md:text-4xl font-black text-white mb-6">
            AI Ethics Playbook
          </h1>
          
          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400/50"></div>
            <CheckCircle className="w-5 h-5 text-green-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400/50"></div>
          </div>
          
          {/* Track Name */}
          <div className="mb-8">
            <div className="text-purple-300/70 text-sm mb-2">has successfully completed</div>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              {trackTitle}
            </h2>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl px-6 py-4">
              <div className="flex items-center gap-2 text-purple-300 mb-1">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm">Modules</span>
              </div>
              <div className="text-2xl font-bold text-white">{modulesCompleted}</div>
            </div>
            
            {quizScore !== undefined && (
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl px-6 py-4">
                <div className="flex items-center gap-2 text-purple-300 mb-1">
                  <Award className="w-4 h-4" />
                  <span className="text-sm">Quiz Score</span>
                </div>
                <div className="text-2xl font-bold text-white">{quizScore}%</div>
              </div>
            )}
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl px-6 py-4">
              <div className="flex items-center gap-2 text-purple-300 mb-1">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Completed</span>
              </div>
              <div className="text-lg font-bold text-white">{formattedDate}</div>
            </div>
          </div>
          
          {/* Signature area */}
          <div className="border-t border-slate-700 pt-6">
            <div className="text-slate-400 text-xs mb-2">Awarded to</div>
            <div className="text-xl font-bold text-white mb-4">{userName}</div>
            <div className="text-slate-500 text-xs">
              AI Ethics Playbook • Certificate ID: {trackShortTitle.toUpperCase()}-{Date.now().toString(36).toUpperCase()}
            </div>
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handleShare}
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-semibold transition-all"
        >
          <Share2 className="w-5 h-5" />
          <span>Share</span>
        </button>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-900 rounded-xl font-bold transition-all"
        >
          <Download className="w-5 h-5" />
          <span>Download</span>
        </button>
      </div>
    </div>
  );
}

