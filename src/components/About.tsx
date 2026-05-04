import { motion } from 'motion/react';

const TIMELINE = [
  { year: '1997', event: 'Enters the Jamaican music industry as a producer and A&R executive' },
  { year: '2000s', event: 'Founds Downsound Entertainment — one of Jamaica\'s premier entertainment companies' },
  { year: '2004', event: 'Produces the multi-platinum Coolie Dance Rhythm — sampled globally by Pitbull and Kehlani' },
  { year: '2010s', event: 'Architects the marketing strategy for Reggae Sumfest, Jamaica\'s largest music festival' },
  { year: 'Ongoing', event: 'Leads Abood Music publishing and continues to shape the architecture of Jamaican music infrastructure' },
];

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 px-6 md:px-12 relative" style={{ background: '#112240' }}>
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — photo + caption */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <img
                src="/skatta-about.webp"
                alt="Skatta Burrell"
                className="w-full object-cover"
                style={{
                  filter: 'saturate(0.8) brightness(0.85)',
                  border: '1px solid rgba(100,255,218,0.15)',
                  maxHeight: 520,
                  objectPosition: 'top',
                }}
              />
              {/* Green corner accent */}
              <div className="absolute bottom-0 left-0 w-12 h-12"
                style={{ borderLeft: '2px solid #64FFDA', borderBottom: '2px solid #64FFDA' }} />
              <div className="absolute top-0 right-0 w-12 h-12"
                style={{ borderTop: '2px solid #64FFDA', borderRight: '2px solid #64FFDA' }} />
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div className="h-px flex-1" style={{ background: 'rgba(100,255,218,0.2)' }} />
              <p className="font-mono text-[9px] uppercase tracking-widest" style={{ color: '#8892B0' }}>
                Skatta Burrell · Blueprint Architect
              </p>
            </div>
          </motion.div>

          {/* Right — text + timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.5em] mb-4" style={{ color: '#64FFDA' }}>
              About
            </p>
            <h2 className="font-sans font-bold text-4xl md:text-5xl mb-6 leading-tight" style={{ color: '#E6F1FF' }}>
              The Man Behind<br />The Music
            </h2>
            <p className="font-sans text-base leading-relaxed mb-4" style={{ color: '#8892B0' }}>
              Skatta Burrell is not a performer — he is the framework. Since 1997, he has been the structural intelligence behind some of Jamaican music's most defining moments, from the mixing board to the boardroom.
            </p>
            <p className="font-sans text-base leading-relaxed mb-10" style={{ color: '#8892B0' }}>
              As CEO of Downsound Entertainment and a strategic force behind Reggae Sumfest, Skatta represents the hidden infrastructure of an industry — the producer, the executive, the architect working at the intersection of art and business.
            </p>

            {/* Timeline */}
            <div className="space-y-0">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex gap-6 pb-8 relative"
                >
                  {/* Vertical line */}
                  {i < TIMELINE.length - 1 && (
                    <div className="absolute left-[3.15rem] top-6 bottom-0 w-px"
                      style={{ background: 'rgba(100,255,218,0.12)' }} />
                  )}
                  <span className="font-mono text-[10px] shrink-0 w-16 pt-[2px] text-right" style={{ color: '#64FFDA' }}>
                    {item.year}
                  </span>
                  <div className="shrink-0 w-2 h-2 rounded-full mt-[5px]"
                    style={{ background: '#64FFDA', boxShadow: '0 0 6px #64FFDA' }} />
                  <p className="font-sans text-sm leading-relaxed" style={{ color: '#8892B0' }}>{item.event}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
