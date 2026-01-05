"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BookOpen, Bot, GraduationCap, Home, Compass, BarChart3, Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/tracks", label: "Tracks", icon: Compass },
  { href: "/dashboard", label: "Progress", icon: BarChart3 },
  { href: "/virtual-ta", label: "AI Tutor", icon: Bot },
  { href: "/quiz", label: "Quiz", icon: GraduationCap },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[100] isolate bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white shadow-2xl border-b border-purple-500/30 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="group flex items-center space-x-3 transform hover:scale-105 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center backdrop-blur-sm shadow-lg group-hover:shadow-purple-500/50 transform group-hover:rotate-6 transition-all duration-300">
                <BookOpen className="w-5 h-5 md:w-7 md:h-7 text-white" />
                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="hidden sm:block">
                <div className="font-black text-lg md:text-xl bg-gradient-to-r from-purple-200 to-indigo-200 bg-clip-text text-transparent">
                  AI Ethics Playbook
                </div>
                <div className="text-xs text-purple-300 font-semibold">for Professionals</div>
              </div>
            </Link>
            
            {/* AIPossible Logo */}
            <div className="hidden md:flex items-center gap-2 pl-4 border-l border-white/10">
              <a 
                href="https://aipossible.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 group"
              >
                <span className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">by</span>
                <Image 
                  src="/aipossible-bigger.jpg" 
                  alt="AIPossible" 
                  width={160}
                  height={53}
                  className="h-11 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative flex items-center space-x-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 overflow-hidden ${
                    isActive
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg shadow-purple-500/50 scale-105"
                      : "hover:bg-white/10 hover:scale-105"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "" : "group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"}`} />
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <div className="absolute inset-0 bg-white/10 rounded-xl"></div>
                  )}
                  {!isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-indigo-600/0 group-hover:from-purple-600/20 group-hover:to-indigo-600/20 transition-all duration-300 rounded-xl"></div>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Nav Icons (visible on small screens) */}
          <div className="flex md:hidden items-center space-x-1">
            {navItems.slice(0, 3).map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative p-2.5 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg"
                      : "hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              );
            })}
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-purple-500/20 animate-fade-in">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg"
                      : "hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
