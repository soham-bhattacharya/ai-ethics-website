"use client";

import React from "react";

// Abstract AI Network Illustration
export function AINetworkIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background gradient circles */}
      <circle cx="200" cy="150" r="120" fill="url(#network-gradient1)" opacity="0.1" />
      <circle cx="200" cy="150" r="80" fill="url(#network-gradient2)" opacity="0.15" />
      
      {/* Neural network nodes */}
      <g className="animate-pulse">
        {/* Layer 1 */}
        <circle cx="80" cy="80" r="12" fill="url(#node-gradient)" />
        <circle cx="80" cy="150" r="12" fill="url(#node-gradient)" />
        <circle cx="80" cy="220" r="12" fill="url(#node-gradient)" />
        
        {/* Layer 2 */}
        <circle cx="160" cy="100" r="14" fill="url(#node-gradient)" />
        <circle cx="160" cy="180" r="14" fill="url(#node-gradient)" />
        
        {/* Layer 3 - Central */}
        <circle cx="240" cy="140" r="16" fill="url(#node-gradient-accent)" />
        
        {/* Layer 4 */}
        <circle cx="320" cy="100" r="14" fill="url(#node-gradient)" />
        <circle cx="320" cy="180" r="14" fill="url(#node-gradient)" />
      </g>
      
      {/* Connection lines */}
      <g stroke="url(#line-gradient)" strokeWidth="1.5" opacity="0.6">
        {/* Layer 1 to Layer 2 */}
        <line x1="92" y1="80" x2="146" y2="100" />
        <line x1="92" y1="80" x2="146" y2="180" />
        <line x1="92" y1="150" x2="146" y2="100" />
        <line x1="92" y1="150" x2="146" y2="180" />
        <line x1="92" y1="220" x2="146" y2="100" />
        <line x1="92" y1="220" x2="146" y2="180" />
        
        {/* Layer 2 to Layer 3 */}
        <line x1="174" y1="100" x2="224" y2="140" />
        <line x1="174" y1="180" x2="224" y2="140" />
        
        {/* Layer 3 to Layer 4 */}
        <line x1="256" y1="140" x2="306" y2="100" />
        <line x1="256" y1="140" x2="306" y2="180" />
      </g>
      
      {/* Floating particles */}
      <g className="animate-pulse" style={{ animationDelay: "0.5s" }}>
        <circle cx="120" cy="60" r="3" fill="#a78bfa" opacity="0.7" />
        <circle cx="280" cy="80" r="4" fill="#818cf8" opacity="0.6" />
        <circle cx="350" cy="140" r="3" fill="#c4b5fd" opacity="0.5" />
        <circle cx="100" cy="250" r="4" fill="#a78bfa" opacity="0.6" />
        <circle cx="300" cy="240" r="3" fill="#818cf8" opacity="0.7" />
      </g>
      
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="network-gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="network-gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="node-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
        <linearGradient id="node-gradient-accent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="50%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#c4b5fd" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Shield/Ethics Badge Illustration
export function EthicsShieldIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield shape */}
      <path
        d="M60 10L110 30V70C110 95 90 120 60 130C30 120 10 95 10 70V30L60 10Z"
        fill="url(#shield-gradient)"
        stroke="url(#shield-stroke)"
        strokeWidth="2"
      />
      
      {/* Inner glow */}
      <path
        d="M60 20L100 37V70C100 90 83 110 60 118C37 110 20 90 20 70V37L60 20Z"
        fill="url(#shield-inner)"
        opacity="0.5"
      />
      
      {/* Checkmark */}
      <path
        d="M45 70L55 80L78 55"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-pulse"
      />
      
      {/* Sparkle effects */}
      <circle cx="90" cy="45" r="3" fill="white" opacity="0.8" />
      <circle cx="30" cy="50" r="2" fill="white" opacity="0.6" />
      <circle cx="85" cy="85" r="2" fill="white" opacity="0.5" />
      
      <defs>
        <linearGradient id="shield-gradient" x1="60" y1="10" x2="60" y2="130">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="50%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="shield-stroke" x1="60" y1="10" x2="60" y2="130">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
        <linearGradient id="shield-inner" x1="60" y1="20" x2="60" y2="118">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Decorative geometric pattern for backgrounds
export function GeometricPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.2" />
      </pattern>
      <rect width="100" height="100" fill="url(#grid-pattern)" />
    </svg>
  );
}

// Animated rings for hero section
export function AnimatedRings({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full border border-purple-500/20 animate-[spin_40s_linear_infinite]" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[450px] h-[450px] rounded-full border border-indigo-500/20 animate-[spin_30s_linear_infinite_reverse]" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[300px] h-[300px] rounded-full border border-pink-500/20 animate-[spin_20s_linear_infinite]" />
      </div>
    </div>
  );
}

// Track-specific icons with custom styling
export function GovernmentIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="5" y="45" width="50" height="10" rx="2" fill="url(#gov-base)" />
      <rect x="10" y="25" width="40" height="20" fill="url(#gov-middle)" />
      <path d="M30 5L5 25H55L30 5Z" fill="url(#gov-top)" />
      <rect x="15" y="30" width="8" height="15" fill="white" opacity="0.3" />
      <rect x="26" y="30" width="8" height="15" fill="white" opacity="0.3" />
      <rect x="37" y="30" width="8" height="15" fill="white" opacity="0.3" />
      <defs>
        <linearGradient id="gov-base" x1="5" y1="50" x2="55" y2="50">
          <stop stopColor="#0ea5e9" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="gov-middle" x1="30" y1="25" x2="30" y2="45">
          <stop stopColor="#38bdf8" />
          <stop offset="1" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="gov-top" x1="30" y1="5" x2="30" y2="25">
          <stop stopColor="#7dd3fc" />
          <stop offset="1" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function HealthcareIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M30 55C30 55 52 42 52 26C52 15 43 8 30 18C17 8 8 15 8 26C8 42 30 55 30 55Z" fill="url(#health-heart)" />
      <rect x="25" y="22" width="10" height="20" rx="2" fill="white" opacity="0.9" />
      <rect x="20" y="27" width="20" height="10" rx="2" fill="white" opacity="0.9" />
      <defs>
        <linearGradient id="health-heart" x1="30" y1="8" x2="30" y2="55">
          <stop stopColor="#f472b6" />
          <stop offset="0.5" stopColor="#ec4899" />
          <stop offset="1" stopColor="#be185d" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function HRIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="30" cy="18" r="10" fill="url(#hr-head)" />
      <path d="M10 55C10 40 18 32 30 32C42 32 50 40 50 55" fill="url(#hr-body)" />
      <circle cx="15" cy="22" r="6" fill="url(#hr-small)" opacity="0.7" />
      <circle cx="45" cy="22" r="6" fill="url(#hr-small)" opacity="0.7" />
      <defs>
        <linearGradient id="hr-head" x1="30" y1="8" x2="30" y2="28">
          <stop stopColor="#fbbf24" />
          <stop offset="1" stopColor="#f59e0b" />
        </linearGradient>
        <linearGradient id="hr-body" x1="30" y1="32" x2="30" y2="55">
          <stop stopColor="#fcd34d" />
          <stop offset="1" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="hr-small" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="#fbbf24" />
          <stop offset="1" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function FinanceIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M5 45L20 30L30 40L55 15" stroke="url(#finance-line)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="55" cy="15" r="6" fill="url(#finance-dot)" />
      <rect x="5" y="50" width="50" height="5" rx="2" fill="url(#finance-base)" opacity="0.5" />
      <defs>
        <linearGradient id="finance-line" x1="5" y1="30" x2="55" y2="30">
          <stop stopColor="#10b981" />
          <stop offset="1" stopColor="#14b8a6" />
        </linearGradient>
        <linearGradient id="finance-dot" x1="49" y1="9" x2="61" y2="21">
          <stop stopColor="#34d399" />
          <stop offset="1" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="finance-base" x1="5" y1="52" x2="55" y2="52">
          <stop stopColor="#10b981" />
          <stop offset="1" stopColor="#0d9488" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Floating orbs for backgrounds
export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1500" />
    </div>
  );
}

// Grid pattern overlay
export function GridOverlay({ className = "" }: { className?: string }) {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.15) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}
    />
  );
}

