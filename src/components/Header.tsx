import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { label: 'Blueprint', href: '#blueprint' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 h-16 flex items-center transition-all duration-400"
        style={{
          background: scrolled ? 'rgba(10,25,47,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(100,255,218,0.08)' : 'none',
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#home" className="font-mono text-sm font-medium tracking-widest" style={{ color: '#64FFDA' }}>
            SKATTA<span style={{ color: '#8892B0' }}>.exe</span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                className="font-mono text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 hover:text-green"
                style={{ color: '#8892B0' }}
              >
                <span style={{ color: '#64FFDA', marginRight: 6 }}>0{i + 1}.</span>{l.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="w-10 h-10 flex items-center justify-center border md:hidden transition-colors"
            style={{ borderColor: 'rgba(100,255,218,0.3)', color: '#64FFDA' }}
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col justify-between p-10"
            style={{ background: '#0A192F', borderLeft: '1px solid rgba(100,255,218,0.12)' }}
          >
            <div className="flex justify-between items-center">
              <span className="font-mono text-sm" style={{ color: '#64FFDA' }}>SKATTA<span style={{ color: '#8892B0' }}>.exe</span></span>
              <button onClick={() => setOpen(false)} style={{ color: '#64FFDA' }}>
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col gap-10">
              {links.map((l, i) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-sans font-bold text-5xl transition-colors hover:text-green"
                  style={{ color: '#E6F1FF' }}
                >
                  <span className="font-mono text-base mr-4" style={{ color: '#64FFDA' }}>0{i + 1}.</span>
                  {l.label}
                </a>
              ))}
            </nav>

            <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: '#8892B0' }}>
              © 2025 Skatta Burrell · Downsound Entertainment
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
