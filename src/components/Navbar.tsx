import { Megaphone, Github, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-dark-bg/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-brand-500">
              <Megaphone className="h-8 w-8" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#features" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</a>
                <a href="#how-it-works" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">How it Works</a>
                <a href="#ecosystem" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Ecosystem</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <a href="https://github.com/dghilardi/megaphone" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md text-sm font-medium transition-all">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-card border-b border-white/10">
            <a href="#features" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">How it Works</a>
            <a href="#ecosystem" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Ecosystem</a>
            <a href="https://github.com/dghilardi/megaphone" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">GitHub</a>
          </div>
        </div>
      )}
    </nav>
  );
}
