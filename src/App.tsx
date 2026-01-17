import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Ecosystem from './components/Ecosystem';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg selection:bg-brand-500/30 selection:text-brand-200">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Ecosystem />
      </main>
      <Footer />
    </div>
  );
}

export default App;