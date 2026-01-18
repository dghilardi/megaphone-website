import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Ecosystem from '../components/Ecosystem';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      const element = document.getElementById((location.state as any).scrollTo);
      if (element) {
        // Add a small delay to ensure rendering is complete
        setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Ecosystem />
    </main>
  );
}
