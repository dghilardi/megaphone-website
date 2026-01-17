import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion, AnimatePresence } from 'framer-motion';

const codeSnippets = {
  create: {
    lang: 'bash',
    title: 'Create a Channel',
    code: `curl -X POST http://megaphone:8080/create
# Returns:
# {
#   "producerAddress": "uuid-write-123",
#   "consumerAddress": "uuid-read-456"
# }`
  },
  producer: {
    lang: 'javascript',
    title: 'Microservice (Producer)',
    code: `// Publish an event when something happens
await fetch('http://megaphone:8080/write/uuid-write-123/stream-id', {
  method: 'POST',
  body: JSON.stringify({ 
    event: 'order_updated',
    status: 'shipped' 
  })
});`
  },
  consumer: {
    lang: 'typescript',
    title: 'Frontend (Consumer)',
    code: `import { MegaphonePoller } from 'megaphone-client';

const poller = new MegaphonePoller('http://megaphone:8080');

// Subscribe to the stream
const subscription = await poller.newUnboundedStream(async () => {
  // Logic to get the channel ID from your backend
  return {
    channelAddress: { consumer: 'uuid-read-456', producer: '' },
    streamIds: ['stream-id'],
  }
});

subscription.subscribe(msg => {
  console.log('Received:', msg);
});`
  }
};

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<'create' | 'producer' | 'consumer'>('create');

  return (
    <div id="how-it-works" className="py-24 bg-dark-card border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Simple Integration Flow
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Megaphone uses a simple Producer-Consumer model. Channels are ephemeral and lightweight, perfect for per-user or per-session event streams.
            </p>

            <div className="mt-8 space-y-4">
              <button 
                onClick={() => setActiveTab('create')}
                className={`w-full text-left px-6 py-4 rounded-xl border transition-all flex items-center gap-4 ${activeTab === 'create' ? 'bg-brand-500/10 border-brand-500 ring-1 ring-brand-500' : 'bg-white/5 border-transparent hover:bg-white/10'}`}
              >
                <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center font-bold ${activeTab === 'create' ? 'bg-brand-500 text-white' : 'bg-gray-700 text-gray-400'}`}>1</div>
                <div>
                  <h3 className="text-white font-medium">Create a Channel</h3>
                  <p className="text-sm text-gray-400 mt-1">Generate read/write addresses dynamically.</p>
                </div>
              </button>
              
              <button 
                onClick={() => setActiveTab('producer')}
                className={`w-full text-left px-6 py-4 rounded-xl border transition-all flex items-center gap-4 ${activeTab === 'producer' ? 'bg-brand-500/10 border-brand-500 ring-1 ring-brand-500' : 'bg-white/5 border-transparent hover:bg-white/10'}`}
              >
                 <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center font-bold ${activeTab === 'producer' ? 'bg-brand-500 text-white' : 'bg-gray-700 text-gray-400'}`}>2</div>
                <div>
                  <h3 className="text-white font-medium">Publish Events</h3>
                  <p className="text-sm text-gray-400 mt-1">Your services write to the producer address.</p>
                </div>
              </button>

              <button 
                onClick={() => setActiveTab('consumer')}
                className={`w-full text-left px-6 py-4 rounded-xl border transition-all flex items-center gap-4 ${activeTab === 'consumer' ? 'bg-brand-500/10 border-brand-500 ring-1 ring-brand-500' : 'bg-white/5 border-transparent hover:bg-white/10'}`}
              >
                 <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center font-bold ${activeTab === 'consumer' ? 'bg-brand-500 text-white' : 'bg-gray-700 text-gray-400'}`}>3</div>
                <div>
                  <h3 className="text-white font-medium">Stream to Client</h3>
                  <p className="text-sm text-gray-400 mt-1">Frontend connects via the consumer address.</p>
                </div>
              </button>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
             <div className="bg-[#1e1e1e] rounded-2xl shadow-2xl overflow-hidden border border-white/10">
                <div className="flex items-center px-4 py-3 bg-[#252526] border-b border-white/5 gap-2">
                   <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                   </div>
                   <div className="ml-4 text-xs text-gray-400 font-mono">
                      {codeSnippets[activeTab].title}
                   </div>
                </div>
                <div className="relative">
                   <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                         <SyntaxHighlighter 
                           language={codeSnippets[activeTab].lang} 
                           style={vscDarkPlus}
                           customStyle={{ margin: 0, padding: '1.5rem', background: 'transparent' }}
                         >
                           {codeSnippets[activeTab].code}
                         </SyntaxHighlighter>
                      </motion.div>
                   </AnimatePresence>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
