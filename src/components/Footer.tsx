export default function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
           <span className="text-xl font-bold text-gray-200">Megaphone</span>
           <span className="text-sm text-gray-500">© {new Date().getFullYear()}</span>
        </div>
        
        <div className="flex gap-8 text-sm text-gray-400">
           <a href="https://github.com/dghilardi/megaphone" className="hover:text-white transition-colors">GitHub</a>
           <a href="https://crates.io/crates/megaphone-broker" className="hover:text-white transition-colors">Crates.io</a>
           <a href="https://www.npmjs.com/package/megaphone-client" className="hover:text-white transition-colors">NPM</a>
        </div>
      </div>
    </footer>
  );
}
