import { motion, useScroll, useSpring } from 'motion/react';
import { Info } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Blueprint from './components/Blueprint';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="min-h-screen bg-navy text-white">
      <Header />

      {/* Scroll progress — LED green */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 origin-left"
        style={{ scaleX, height: 2, background: '#64FFDA' }}
      />

      <main>
        <Hero />
        <Blueprint />
        <About />
        <Contact />
      </main>

      <Footer />

      {/* DISCLAIMER BANNER */}
      <div className="fixed bottom-0 left-0 right-0 z-50 px-4 py-2 flex items-center justify-center gap-2" style={{ background: 'rgba(245,158,11,0.08)', borderTop: '1px solid rgba(245,158,11,0.2)' }}>
        <Info size={13} style={{ color: 'rgba(251,191,36,0.85)', flexShrink: 0 }} />
        <p className="font-mono text-[9px] uppercase tracking-widest text-center" style={{ color: 'rgba(251,191,36,0.65)' }}>
          Working draft — buyer assumes responsibility for clearing image &amp; likeness rights with Skatta Burrell. This site is available for{' '}
          <a href="https://mindwaveja.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }} className="hover:opacity-100 transition-opacity">purchase</a>.
        </p>
      </div>
    </div>
  );
}
