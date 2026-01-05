import Link from "next/link";
import Image from "next/image";
import { BookOpen, Bot, GraduationCap, Compass, Heart, ExternalLink } from "lucide-react";

const quickLinks = [
  { href: "/tracks", label: "Learning Tracks", icon: Compass },
  { href: "/ebook", label: "SMB Playbook", icon: BookOpen },
  { href: "/virtual-ta", label: "Virtual TA", icon: Bot },
  { href: "/quiz", label: "Knowledge Quiz", icon: GraduationCap },
];

const tracks = [
  { href: "/ebook", label: "SMB Track" },
  { href: "/tracks/government", label: "Government Track" },
  { href: "/tracks/healthcare", label: "Healthcare Track" },
  { href: "/tracks/hr", label: "HR Track" },
  { href: "/tracks/finance", label: "Finance Track" },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 border-t border-slate-800">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/50 pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-shadow">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-black text-xl bg-gradient-to-r from-purple-200 to-indigo-200 bg-clip-text text-transparent">
                  AI Ethics Playbook
                </div>
                <div className="text-xs text-purple-400">for Professionals</div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Comprehensive AI ethics education for businesses and professionals of all backgrounds.
            </p>
            {/* AIPossible Branding */}
            <div className="flex items-center gap-2 pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-500">Powered by</span>
              <a 
                href="https://aipossible.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <Image 
                  src="/aipossible.jpeg" 
                  alt="AIPossible" 
                  width={80}
                  height={20}
                  className="h-5 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="flex items-center space-x-2 text-slate-400 hover:text-purple-300 transition-colors group"
                    >
                      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm">{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Learning Tracks */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Learning Tracks</h3>
            <ul className="space-y-3">
              {tracks.map((track) => (
                <li key={track.href}>
                  <Link 
                    href={track.href}
                    className="text-slate-400 hover:text-purple-300 transition-colors text-sm"
                  >
                    {track.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.nist.gov/itl/ai-risk-management-framework"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-slate-400 hover:text-purple-300 transition-colors group"
                >
                  <span className="text-sm">NIST AI RMF</span>
                  <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.ibm.com/opensource/open/projects/ai-fairness-360/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-slate-400 hover:text-purple-300 transition-colors group"
                >
                  <span className="text-sm">IBM AIF360</span>
                  <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a 
                  href="https://partnershiponai.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-slate-400 hover:text-purple-300 transition-colors group"
                >
                  <span className="text-sm">Partnership on AI</span>
                  <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-slate-500 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>for ethical AI adoption</span>
            </div>
            <div className="text-slate-500 text-sm">
              © {new Date().getFullYear()} AI Ethics Playbook. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

