import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36 px-6 md:px-12 relative" style={{ background: '#0A192F' }}>
      <div className="absolute inset-0 grid-line opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.5em] mb-4" style={{ color: '#64FFDA' }}>
            Booking · Business · Press
          </p>
          <h2 className="font-sans font-bold text-4xl md:text-6xl mb-4" style={{ color: '#E6F1FF' }}>
            Initiate Contact
          </h2>
          <div className="h-px w-16" style={{ background: '#64FFDA' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-8 md:p-12"
          style={{ border: '1px solid rgba(100,255,218,0.12)', background: 'rgba(17,34,64,0.4)' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="NAME / ORGANIZATION"
              className="w-full bg-transparent px-5 py-4 font-mono text-xs tracking-widest focus:outline-none transition-colors"
              style={{
                border: '1px solid rgba(100,255,218,0.15)',
                color: '#E6F1FF',
                caretColor: '#64FFDA',
              }}
              onFocus={e => (e.target.style.borderColor = 'rgba(100,255,218,0.5)')}
              onBlur={e => (e.target.style.borderColor = 'rgba(100,255,218,0.15)')}
            />
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="w-full bg-transparent px-5 py-4 font-mono text-xs tracking-widest focus:outline-none transition-colors"
              style={{
                border: '1px solid rgba(100,255,218,0.15)',
                color: '#E6F1FF',
                caretColor: '#64FFDA',
              }}
              onFocus={e => (e.target.style.borderColor = 'rgba(100,255,218,0.5)')}
              onBlur={e => (e.target.style.borderColor = 'rgba(100,255,218,0.15)')}
            />
          </div>
          <select
            className="w-full bg-transparent px-5 py-4 font-mono text-xs tracking-widest mb-4 focus:outline-none appearance-none"
            style={{
              border: '1px solid rgba(100,255,218,0.15)',
              color: '#8892B0',
              background: 'transparent',
            }}
          >
            <option value="" style={{ background: '#0A192F' }}>ENQUIRY TYPE</option>
            <option value="booking" style={{ background: '#0A192F' }}>Event Booking</option>
            <option value="production" style={{ background: '#0A192F' }}>Production / Collaboration</option>
            <option value="press" style={{ background: '#0A192F' }}>Press / Media</option>
            <option value="business" style={{ background: '#0A192F' }}>Business Development</option>
          </select>
          <textarea
            placeholder="YOUR MESSAGE"
            rows={5}
            className="w-full bg-transparent px-5 py-4 font-mono text-xs tracking-widest mb-4 focus:outline-none resize-none transition-colors"
            style={{
              border: '1px solid rgba(100,255,218,0.15)',
              color: '#E6F1FF',
              caretColor: '#64FFDA',
            }}
            onFocus={e => (e.target.style.borderColor = 'rgba(100,255,218,0.5)')}
            onBlur={e => (e.target.style.borderColor = 'rgba(100,255,218,0.15)')}
          />

          <div>
            <button
              disabled
              className="w-full py-4 font-mono text-xs uppercase tracking-widest cursor-not-allowed transition-colors"
              style={{
                background: 'rgba(100,255,218,0.08)',
                border: '1px solid rgba(100,255,218,0.2)',
                color: 'rgba(100,255,218,0.35)',
              }}
            >
              Transmit Message
            </button>
            <p className="mt-3 text-center font-mono text-[9px] uppercase tracking-widest" style={{ color: 'rgba(100,255,218,0.3)' }}>
              Contact form activates after purchase — owner configures on setup
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
