import { Package, Container, Server, Laptop } from 'lucide-react';

const repos = [
  {
    name: 'Megaphone Server',
    desc: 'The core Rust reverse proxy and streaming server.',
    icon: Server,
    link: 'https://github.com/dghilardi/megaphone',
    tags: ['Rust', 'Axum', 'Tokio']
  },
  {
    name: 'Megaphone JS',
    desc: 'TypeScript client for browser and Node.js applications.',
    icon: Package,
    link: 'https://github.com/dghilardi/megaphone-js',
    tags: ['TypeScript', 'NPM']
  },
  {
    name: 'Megaphone Operator',
    desc: 'Kubernetes Operator for managing Megaphone deployments.',
    icon: Container,
    link: 'https://github.com/dghilardi/megaphone-operator',
    tags: ['K8s', 'Rust', 'CRD']
  },
  {
    name: 'Megaphone Client',
    desc: 'Rust client library for backend service integration.',
    icon: Laptop,
    link: 'https://github.com/dghilardi/megaphone-client',
    tags: ['Rust', 'Crate']
  }
];

export default function Ecosystem() {
  return (
    <div id="ecosystem" className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Complete Ecosystem
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Everything you need to build scalable real-time features, from the kernel to the edge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo) => (
            <a 
              key={repo.name} 
              href={repo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 bg-dark-card border border-white/10 rounded-2xl hover:border-brand-500/50 hover:bg-white/5 transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-brand-500/10 rounded-lg text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    <repo.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors">
                    {repo.name}
                  </h3>
                </div>
              </div>
              
              <p className="mt-4 text-gray-400">
                {repo.desc}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {repo.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
