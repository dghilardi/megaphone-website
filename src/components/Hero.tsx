import { motion } from 'framer-motion';
import { ArrowRight, Server, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-200 to-brand-500 tracking-tight"
          >
            Real-time Connectivity <br className="hidden sm:block" />
            for Microservices
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-400"
          >
            Megaphone abstracts the complexity of long-polling and streaming. 
            Build resilient, event-driven architectures without managing persistent connections in your business logic.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex justify-center gap-4"
          >
            <a href="#how-it-works" className="inline-flex items-center gap-2 px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700 md:text-lg transition-all shadow-lg shadow-brand-500/20">
              Get Started
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="https://github.com/dghilardi/megaphone" className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-base font-medium rounded-md text-gray-300 hover:bg-white/10 md:text-lg transition-all">
              Documentation
            </a>
          </motion.div>
        </div>

        {/* Abstract Visualization */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 relative max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-brand-500/20 blur-3xl rounded-full" />
          <div className="relative bg-dark-card border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Producer */}
                <div className="flex flex-col items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                   <Server className="h-10 w-10 text-brand-400" />
                   <div className="text-sm font-mono text-gray-400">Microservice A</div>
                   <div className="text-xs text-gray-500">POST /write</div>
                </div>

                {/* Megaphone */}
                <div className="flex flex-col items-center justify-center relative">
                   <div className="w-full h-1 bg-gradient-to-r from-brand-400/20 via-brand-400 to-brand-400/20 absolute top-1/2 -translate-y-1/2" />
                   <div className="bg-dark-bg border border-brand-500/50 p-4 rounded-full z-10 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                      <Megaphone className="h-8 w-8 text-brand-500" />
                   </div>
                   <div className="mt-8 text-xs font-mono text-brand-300 animate-pulse">Buffering & Streaming</div>
                </div>

                {/* Consumer */}
                <div className="flex flex-col items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                   <Zap className="h-10 w-10 text-yellow-400" />
                   <div className="text-sm font-mono text-gray-400">Frontend Client</div>
                   <div className="text-xs text-gray-500">GET /read (Stream)</div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-500/10 blur-[100px] -z-10 rounded-full mix-blend-screen" />
    </div>
  );
}

function Megaphone({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  );
}
