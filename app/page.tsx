'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send, Globe, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [query, setQuery] = useState('');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 relative overflow-hidden bg-slate-950">
      {/* Background Gradient Mesh */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/10 rounded-full blur-[128px] pointer-events-none" />

      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50">
        <div className="flex items-center gap-2">
          {/* Using text logo for now, will replace with SVG later */}
          <span className="text-2xl font-bold tracking-tight text-white font-display">ZOLA</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="/login" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Log In</a>
          <button className="bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full border border-white/10 transition-all backdrop-blur-sm">
            Start Application
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="z-10 w-full max-w-4xl text-center flex flex-col items-center gap-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Live in Dubai.<br/>
            Pay <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">0% Tax.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light">
            The AI-first platform for UAE structuring and setup.<br/>
            Visa, Banking, and Incorporation in one dashboard.
          </p>
        </motion.div>

        {/* The AI Input CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-full max-w-2xl mt-8 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative bg-slate-900/80 border border-white/10 rounded-2xl p-2 flex items-center shadow-2xl backdrop-blur-xl ring-1 ring-white/5 focus-within:ring-amber-500/50 transition-all">
            <div className="pl-4 pr-2 text-slate-500">
              <Globe className="w-5 h-5" />
            </div>
            <input 
              type="text" 
              placeholder="Ask Zola anything about your setup (e.g., 'Cost for a marketing license?')" 
              className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-slate-500 px-4 py-4 text-lg w-full font-light"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="bg-white text-slate-900 hover:bg-amber-400 transition-colors p-3 rounded-xl flex items-center justify-center group/btn">
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          </div>
          
          <div className="flex justify-center gap-6 mt-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Money-back guarantee</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-500" /> 48-hour incorporation</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Trusted by 500+ founders</span>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
