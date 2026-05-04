import { motion } from 'motion/react';

const PRODUCTIONS = [
  {
    title: 'Coolie Dance Rhythm',
    year: '2004',
    detail: 'Multi-platinum · Sampled by Pitbull, Kehlani · Global chart impact',
    tag: 'LANDMARK',
  },
  {
    title: 'Reggae Sumfest',
    year: '1993–',
    detail: 'Strategic architect of Jamaica\'s largest music festival · International marketing',
    tag: 'INSTITUTION',
  },
  {
    title: 'Downsound Entertainment',
    year: '2000s–',
    detail: 'CEO & Founder · Premier Jamaican music label and entertainment company',
    tag: 'EXECUTIVE',
  },
  {
    title: 'Abood Music',
    year: 'Active',
    detail: 'Publishing and rights management arm · Protecting Jamaican music catalogues',
    tag: 'PUBLISHING',
  },
];

const STATS = [
  { value: '25+', label: 'Years in the Industry' },
  { value: '100+', label: 'Riddims Produced' },
  { value: 'Platinum', label: 'Certified Records' },
  { value: 'Global', label: 'Distribution Reach' },
];

export default function Blueprint() {
  return (
    <section id="blueprint" className="py-28 md:py-36 px-6 md:px-12 relative" style={{ background: '#0A192F' }}>
      <div className="absolute inset-0 grid-line opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.5em] mb-4" style={{ color: '#64FFDA' }}>
            Production · A&R · Executive
          </p>
          <h2 className="font-sans font-bold text-4xl md:text-6xl mb-4" style={{ color: '#E6F1FF' }}>
            The Blueprint
          </h2>
          <div className="h-px w-24" style={{ background: '#64FFDA' }} />
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mb-20"
          style={{ border: '1px solid rgba(100,255,218,0.1)', background: 'rgba(100,255,218,0.06)' }}>
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-8 text-center"
              style={{ borderRight: i < 3 ? '1px solid rgba(100,255,218,0.08)' : 'none' }}
            >
              <p className="font-sans font-bold text-3xl md:text-4xl mb-2" style={{ color: '#64FFDA' }}>{s.value}</p>
              <p className="font-mono text-[9px] uppercase tracking-widest" style={{ color: '#8892B0' }}>{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Production cards */}
        <div className="space-y-px">
          {PRODUCTIONS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-10 p-6 md:p-8 transition-all duration-300"
              style={{
                border: '1px solid rgba(100,255,218,0.08)',
                background: 'rgba(17,34,64,0.5)',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(100,255,218,0.04)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(17,34,64,0.5)')}
            >
              {/* Number */}
              <span className="font-mono text-[11px] shrink-0" style={{ color: 'rgba(100,255,218,0.3)' }}>
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Tag */}
              <span
                className="font-mono text-[9px] uppercase tracking-widest px-2 py-1 shrink-0 hidden md:block"
                style={{ border: '1px solid rgba(100,255,218,0.25)', color: '#64FFDA' }}
              >
                {p.tag}
              </span>

              {/* Title */}
              <div className="flex-1 min-w-0">
                <h3 className="font-sans font-bold text-lg md:text-xl mb-1 group-hover:text-green transition-colors duration-300"
                  style={{ color: '#E6F1FF' }}>
                  {p.title}
                </h3>
                <p className="font-mono text-[10px] leading-relaxed" style={{ color: '#8892B0' }}>{p.detail}</p>
              </div>

              {/* Year */}
              <span className="font-mono text-sm shrink-0" style={{ color: 'rgba(100,255,218,0.5)' }}>
                {p.year}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Accolades placeholder — update when Deego sends the list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 p-8 md:p-12"
          style={{ border: '1px solid rgba(100,255,218,0.12)', background: 'rgba(17,34,64,0.3)' }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] mb-6" style={{ color: '#64FFDA' }}>
            Accolades · Recognition
          </p>
          <p className="font-sans text-lg md:text-2xl font-light leading-relaxed max-w-3xl" style={{ color: '#8892B0' }}>
            "The architect of a generation. Skatta Burrell didn't just produce music — he engineered the sound that defined dancehall's global moment."
          </p>
          <div className="mt-8 h-px" style={{ background: 'linear-gradient(to right, rgba(100,255,218,0.4), transparent)' }} />
        </motion.div>

      </div>
    </section>
  );
}
