import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

function SoundwaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;
    let raf: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const bars = Math.floor(width / 6);
      const centerY = height / 2;

      for (let i = 0; i < bars; i++) {
        const x = i * 6;
        const t = (frame * 0.018) + (i * 0.18);
        const h = (
          Math.sin(t) * 0.5 +
          Math.sin(t * 1.7 + 1.2) * 0.3 +
          Math.sin(t * 0.5 + 2.4) * 0.2
        ) * (height * 0.38);

        const alpha = 0.15 + Math.abs(Math.sin(t * 0.4)) * 0.55;
        ctx.fillStyle = `rgba(100,255,218,${alpha})`;
        ctx.fillRect(x, centerY - Math.abs(h), 2, Math.abs(h) * 2);
      }

      frame++;
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: 'block' }}
    />
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden bg-navy">

      {/* Background grid */}
      <div className="absolute inset-0 grid-line opacity-60" />

      {/* Cutout figure — right-anchored, full height */}
      <div className="absolute inset-0 z-0 flex justify-end items-end pointer-events-none">
        <img
          src="/skatta-hero-cutout.png"
          alt="Skatta Burrell"
          className="h-full w-auto max-w-none object-contain object-bottom"
          style={{ filter: 'drop-shadow(-8px 0 40px rgba(100,255,218,0.12))' }}
        />
        {/* Fade left edge so text sits clean */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" />
        {/* Fade bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
      </div>

      {/* Soundwave strip — bottom quarter */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none">
        <SoundwaveCanvas />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pb-44 md:pb-48">

        <div className="overflow-hidden mb-3">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="font-sans font-bold text-white leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)' }}
          >
            SKATTA
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            className="font-sans font-bold leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)', color: '#64FFDA' }}
          >
            BURRELL
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center gap-4 mb-10"
        >
          {['Producer', 'A&R Executive', 'CEO · Downsound'].map((tag, i) => (
            <span
              key={i}
              className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 border"
              style={{ borderColor: 'rgba(100,255,218,0.3)', color: '#8892B0' }}
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
          className="h-px origin-left mb-10"
          style={{ background: 'linear-gradient(to right, #64FFDA, transparent)', width: '60%' }}
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex gap-4"
        >
          <a
            href="#blueprint"
            className="font-mono text-[11px] uppercase tracking-widest px-8 py-3 transition-all duration-300"
            style={{ background: '#64FFDA', color: '#0A192F', fontWeight: 600 }}
          >
            The Blueprint
          </a>
          <a
            href="#contact"
            className="font-mono text-[11px] uppercase tracking-widest px-8 py-3 border transition-all duration-300 hover:border-green hover:text-green"
            style={{ borderColor: 'rgba(100,255,218,0.3)', color: '#8892B0' }}
          >
            Book / Enquire
          </a>
        </motion.div>
      </div>
    </section>
  );
}
