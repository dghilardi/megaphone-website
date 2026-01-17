import { motion } from 'framer-motion';
import { Globe, Box, Code } from 'lucide-react';

const features = [
  {
    name: 'Smart Buffering',
    description: 'Automatic message buffering for temporarily disconnected clients. Never miss an event during a quick network blip.',
    icon: Buffer,
  },
  {
    name: 'Protocol Agnostic',
    description: 'Currently supports HTTP Streaming, designed to be extensible. Clients connect via standard HTTP protocols.',
    icon: Globe,
  },
  {
    name: 'Kubernetes Native',
    description: 'Deploys easily with a dedicated Operator. Manage channels and resources using standard K8s CRDs.',
    icon: Box,
  },
  {
    name: 'Developer First',
    description: 'Ready-to-use clients for Rust and TypeScript. Clean, typed APIs that integrate into your workflow in seconds.',
    icon: Code,
  },
];

function Buffer(props: any) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-7.4-1.7-2.8-2.3-4-4-7.6-1.7 3.6-2.3 4.8-4 7.6-2 3.5-3 5.4-3 7.4a7 7 0 0 0 7 7z"/><path d="M2 16h20"/><path d="M12 2v20"/></svg> // Actually this is a droplet, let's use layers
    )
}

export default function Features() {
  return (
    <div id="features" className="py-24 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-brand-500 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Built for Modern Architectures
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Megaphone bridges the gap between your backend services and your frontend clients.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-brand-500/50 hover:bg-white/10 transition-all group"
              >
                <div className="absolute top-6 right-6 text-gray-500 group-hover:text-brand-400 transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-white group-hover:text-brand-300 transition-colors">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
