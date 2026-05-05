import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, ArrowLeft } from 'lucide-react';

const INTERVIEWS = [
  { id: 'MF28XeYyDW4' },
  { id: 'ITDI_3rxKXQ' },
  { id: 'UW2JaZLgXs4' },
  { id: 'OW2Nj7-Zb1U' },
  { id: '1YCF67JE4zY' },
  { id: 'UCZX4XukoTo' },
  { id: 'jM9D9TRrqIk' },
  { id: 'fC8mbypg3H0' },
  { id: '4OoKFcC8Klc' },
];

interface Props { onBack: () => void; }

export default function Interviews({ onBack }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <>
      <div className="min-h-screen relative" style={{ background: '#081424', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="absolute inset-0 grid-line opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">

          {/* Back */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] mb-12 transition-colors hover:text-white"
            style={{ color: 'rgba(100,255,218,0.6)' }}
          >
            <ArrowLeft size={14} />
            Back
          </button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.5em] mb-4" style={{ color: '#64FFDA' }}>
              Press · Media · Conversation
            </p>
            <h2 className="font-sans font-bold text-4xl md:text-6xl mb-4" style={{ color: '#E6F1FF' }}>
              Interviews
            </h2>
            <div className="h-px w-24" style={{ background: '#64FFDA' }} />
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {INTERVIEWS.map((v, i) => (
              <motion.button
                key={v.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                onClick={() => setActiveId(v.id)}
                className="group relative overflow-hidden text-left"
                style={{ border: '1px solid rgba(100,255,218,0.1)', background: 'rgba(17,34,64,0.5)', aspectRatio: '16/9' }}
              >
                <img
                  src={`https://i.ytimg.com/vi/${v.id}/mqdefault.jpg`}
                  alt="Interview"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: 'brightness(0.65) saturate(0.75)' }}
                />

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(10,25,47,0.65)' }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: '#64FFDA', boxShadow: '0 0 32px rgba(100,255,218,0.5)' }}
                  >
                    <Play size={22} fill="#0A192F" style={{ color: '#0A192F', marginLeft: 3 }} />
                  </div>
                </div>

                {/* Default play icon */}
                <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(100,255,218,0.12)', border: '1px solid rgba(100,255,218,0.35)' }}
                  >
                    <Play size={16} style={{ color: '#64FFDA', marginLeft: 2 }} />
                  </div>
                </div>

                <span
                  className="absolute top-3 left-3 font-mono text-[9px] tracking-widest"
                  style={{ color: 'rgba(100,255,218,0.45)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen modal player */}
      <AnimatePresence>
        {activeId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex items-center justify-center"
            style={{ background: 'rgba(4,10,22,0.96)', backdropFilter: 'blur(12px)' }}
            onClick={() => setActiveId(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full"
              style={{ maxWidth: 'min(1100px, 95vw)' }}
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveId(null)}
                className="absolute -top-12 right-0 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest transition-colors hover:text-white"
                style={{ color: 'rgba(100,255,218,0.7)' }}
              >
                <X size={16} />
                Close
              </button>

              <div style={{ aspectRatio: '16/9', width: '100%', border: '1px solid rgba(100,255,218,0.15)' }}>
                <iframe
                  key={activeId}
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${activeId}?autoplay=1&rel=0`}
                  title="Skatta Burrell Interview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ display: 'block', border: 'none' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
