import { ArrowUp, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-12" style={{ borderTop: '1px solid rgba(100,255,218,0.08)', background: '#0A192F' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.4em]" style={{ color: '#8892B0' }}>
          © 2025 Skatta Burrell · Downsound Entertainment · All Rights Reserved
        </p>
        <div className="flex items-center gap-8">
          {['#blueprint', '#about', '#contact'].map((href) => (
            <a
              key={href}
              href={href}
              className="font-mono text-[9px] uppercase tracking-widest transition-colors hover:text-green"
              style={{ color: 'rgba(136,146,176,0.5)' }}
            >
              {href.replace('#', '')}
            </a>
          ))}
          <a
            href="https://www.instagram.com/skattaburrell/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center border transition-all hover:bg-green hover:border-green hover:text-navy"
            style={{ borderColor: 'rgba(100,255,218,0.25)', color: '#64FFDA' }}
          >
            <Instagram size={15} />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-9 h-9 flex items-center justify-center border transition-all hover:bg-green hover:border-green hover:text-navy"
            style={{ borderColor: 'rgba(100,255,218,0.25)', color: '#64FFDA' }}
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
