import { ReactNode } from "react";
import { CheckCircle, Lightbulb, Target, Zap, Code2, ExternalLink } from "lucide-react";
import { Components } from "react-markdown";

export const MarkdownComponents: Partial<Components> = {
  h1: ({ children }: { children?: ReactNode }) => (
    <h1 className="text-4xl md:text-5xl font-black text-white mb-8 mt-12 pb-6 border-b-2 border-purple-500/30 leading-tight">
      {children}
    </h1>
  ),
  
  h2: ({ children }: { children?: ReactNode }) => (
    <div className="mt-12 mb-6 group">
      <div className="flex items-center space-x-3 mb-1">
        <div className="w-1.5 h-8 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
        <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
          {children}
        </h2>
      </div>
      <div className="ml-5 mt-2 h-0.5 w-24 bg-gradient-to-r from-purple-500 to-transparent rounded-full"></div>
    </div>
  ),
  
  h3: ({ children }: { children?: ReactNode }) => (
    <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mt-10 mb-5 flex items-center space-x-3">
      <Zap className="w-6 h-6 text-purple-400 flex-shrink-0" />
      <span>{children}</span>
    </h3>
  ),
  
  h4: ({ children }: { children?: ReactNode }) => (
    <h4 className="text-xl md:text-2xl font-bold text-slate-200 mt-8 mb-4 flex items-center space-x-2">
      <Target className="w-5 h-5 text-indigo-400 flex-shrink-0" />
      <span>{children}</span>
    </h4>
  ),
  
  p: ({ children }: { children?: ReactNode }) => (
    <p className="text-base md:text-lg text-slate-300 leading-[1.8] mb-6 tracking-wide">
      {children}
    </p>
  ),
  
  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="my-6 space-y-3 pl-2">
      {children}
    </ul>
  ),
  
  ol: ({ children }: { children?: ReactNode }) => (
    <ol className="my-6 space-y-3 pl-2 list-decimal list-inside">
      {children}
    </ol>
  ),
  
  li: ({ children }: { children?: ReactNode }) => (
    <li className="text-base md:text-lg text-slate-300 leading-relaxed flex items-start space-x-3 group">
      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
      <span className="flex-1">{children}</span>
    </li>
  ),
  
  blockquote: ({ children }: { children?: ReactNode }) => (
    <blockquote className="my-8 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-xl blur-xl"></div>
      <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border-l-4 border-purple-500 shadow-lg">
        <div className="flex items-start space-x-4">
          <Lightbulb className="w-8 h-8 text-yellow-400 flex-shrink-0 animate-pulse" />
          <div className="flex-1">
            <div className="text-lg md:text-xl text-purple-200 italic leading-relaxed font-medium">
              {children}
            </div>
          </div>
        </div>
      </div>
    </blockquote>
  ),
  
  code: ({ children, className }: { children?: ReactNode; className?: string }) => {
    // Inline code
    if (!className) {
      return (
        <code className="px-2.5 py-1 bg-purple-500/20 text-purple-300 rounded-lg font-mono text-sm font-semibold border border-purple-500/30">
          {children}
        </code>
      );
    }
    // Code block
    return (
      <code className={`${className} text-sm md:text-base`}>
        {children}
      </code>
    );
  },
  
  pre: ({ children }: { children?: ReactNode }) => (
    <div className="my-8 relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-800 rounded-xl blur-lg opacity-50"></div>
      <div className="relative bg-slate-950 rounded-xl overflow-hidden border border-slate-700 shadow-2xl">
        <div className="flex items-center justify-between bg-slate-900 px-4 py-2.5 border-b border-slate-700">
          <div className="flex items-center space-x-2">
            <Code2 className="w-4 h-4 text-purple-400" />
            <span className="text-xs text-slate-400 font-semibold">Code</span>
          </div>
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
          </div>
        </div>
        <pre className="p-6 overflow-x-auto text-slate-300">
          {children}
        </pre>
      </div>
    </div>
  ),
  
  table: ({ children }: { children?: ReactNode }) => (
    <div className="my-8 relative overflow-hidden rounded-xl shadow-2xl border border-slate-700">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          {children}
        </table>
      </div>
    </div>
  ),
  
  thead: ({ children }: { children?: ReactNode }) => (
    <thead className="bg-gradient-to-r from-purple-600 to-indigo-600">
      {children}
    </thead>
  ),
  
  th: ({ children }: { children?: ReactNode }) => (
    <th className="px-6 py-4 text-left font-black text-white text-sm md:text-base uppercase tracking-wider border-r border-purple-700 last:border-r-0">
      {children}
    </th>
  ),
  
  td: ({ children }: { children?: ReactNode }) => (
    <td className="px-6 py-4 text-slate-300 text-sm md:text-base border-b border-slate-700 border-r border-slate-800 last:border-r-0">
      {children}
    </td>
  ),
  
  tr: ({ children }: { children?: ReactNode }) => (
    <tr className="even:bg-slate-800/30 hover:bg-slate-700/30 transition-colors duration-200">
      {children}
    </tr>
  ),
  
  strong: ({ children }: { children?: ReactNode }) => (
    <strong className="font-black text-purple-300">
      {children}
    </strong>
  ),
  
  em: ({ children }: { children?: ReactNode }) => (
    <em className="font-semibold text-indigo-300 italic">
      {children}
    </em>
  ),
  
  a: ({ children, href }: { children?: ReactNode; href?: string }) => (
    <a 
      href={href}
      className="inline-flex items-center space-x-1 font-bold text-purple-400 hover:text-purple-300 border-b-2 border-purple-500/30 hover:border-purple-400 transition-all duration-200 group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{children}</span>
      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
    </a>
  ),
  
  hr: () => (
    <div className="my-12 relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      </div>
      <div className="relative flex justify-center">
        <div className="bg-slate-900 px-6">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </div>
    </div>
  ),
};
