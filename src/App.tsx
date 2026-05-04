import { motion, useScroll, useSpring } from 'motion/react';
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
    </div>
  );
}
