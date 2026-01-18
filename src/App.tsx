import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Docs from './pages/Docs';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg selection:bg-brand-500/30 selection:text-brand-200">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;