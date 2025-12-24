"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Bot, GraduationCap, Home } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/ebook", label: "Ebook", icon: BookOpen },
  { href: "/virtual-ta", label: "Virtual TA", icon: Bot },
  { href: "/quiz", label: "Quiz", icon: GraduationCap },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white shadow-2xl border-b border-purple-500/30 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="group flex items-center space-x-3 transform hover:scale-105 transition-all duration-300">
              <div className="relative w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center backdrop-blur-sm shadow-lg group-hover:shadow-purple-500/50 transform group-hover:rotate-6 transition-all duration-300">
                <BookOpen className="w-7 h-7 text-white" />
                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="hidden sm:block">
                <div className="font-black text-xl bg-gradient-to-r from-purple-200 to-indigo-200 bg-clip-text text-transparent">
                  AI Ethics Playbook
                </div>
                <div className="text-xs text-purple-300 font-semibold">for Professionals</div>
              </div>
            </Link>
          </div>
          
          <div className="flex space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative flex items-center space-x-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg shadow-purple-500/50 scale-105"
                      : "hover:bg-white/10 hover:scale-105"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "animate-pulse" : "group-hover:scale-110 transition-transform"}`} />
                  <span className="hidden md:block">{item.label}</span>
                  {isActive && (
                    <div className="absolute inset-0 bg-white/20 rounded-xl animate-pulse"></div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
