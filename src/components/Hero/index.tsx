import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const codeLines = [
  { text: 'const engineer = {', indent: 0, type: 'keyword' },
  { text: '  name:', indent: 2, type: 'key', value: '"Nitish",' },
  { text: '  frontend:', indent: 2, type: 'key', value: '"React.js",' },
  { text: '  backend:', indent: 2, type: 'key', value: '"Spring Boot",' },
  { text: '  architecture:', indent: 2, type: 'key', value: '"Microservices",' },
  { text: '  database:', indent: 2, type: 'key', value: '"PostgreSQL",' },
  { text: '  cache:', indent: 2, type: 'key', value: '"Redis",' },
  { text: '  experience:', indent: 2, type: 'key', value: '"~4 years",' },
  { text: '};', indent: 0, type: 'keyword' },
];

function CodeLine({ text, value, delay }: { text: string; value?: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="flex font-mono text-sm leading-7"
    >
      <span className="text-indigo-300/70">{text}</span>
      {value && <span className="text-emerald-400 ml-1">{value}</span>}
    </motion.div>
  );
}

function AnimatedGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-grid opacity-40" />
      {/* Gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)' }}
      />
      {/* Subtle horizontal lines */}
      <div className="absolute inset-x-0 top-1/3 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)' }} />
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } },
};

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <AnimatedGrid />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase"
                style={{
                  background: 'rgba(99, 102, 241, 0.1)',
                  border: '1px solid rgba(99, 102, 241, 0.25)',
                  color: '#a5b4fc',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                Full-Stack Software Engineer
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-balance mb-6"
            >
              Building{' '}
              <span className="gradient-text">scalable</span>
              <br />
              web applications
              <br />
              <span className="text-[#8b8b9e]">with React &amp; Java.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-[#8b8b9e] text-lg leading-relaxed mb-8 max-w-xl"
            >
              Full-Stack Software Engineer with nearly{' '}
              <span className="text-[#f0f0f5] font-medium">4 years of experience</span>{' '}
              building scalable enterprise applications, micro-frontends, REST APIs, and distributed systems.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
              <button onClick={scrollToProjects} className="btn-primary group">
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="/resume.pdf"
                download
                className="btn-secondary group"
              >
                <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                Download Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-5">
              <span className="text-[#8b8b9e] text-sm">Find me on</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com/in/vashisthnitish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#8b8b9e] hover:text-indigo-400 transition-colors text-sm font-medium group"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} className="group-hover:scale-110 transition-transform" />
                  LinkedIn
                </a>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <a
                  href="https://github.com/vashisthnitish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#8b8b9e] hover:text-indigo-400 transition-colors text-sm font-medium group"
                  aria-label="GitHub"
                >
                  <Github size={16} className="group-hover:scale-110 transition-transform" />
                  GitHub
                </a>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <a
                  href="mailto:nitishvashistha00@gmail.com"
                  className="flex items-center gap-1.5 text-[#8b8b9e] hover:text-indigo-400 transition-colors text-sm font-medium group"
                  aria-label="Email"
                >
                  <Mail size={16} className="group-hover:scale-110 transition-transform" />
                  Email
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Code editor card */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Glow behind card */}
              <div className="absolute -inset-4 rounded-3xl blur-2xl"
                style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)' }} />

              {/* Code editor window */}
              <div className="relative rounded-2xl overflow-hidden"
                style={{
                  background: '#0d0d14',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
                }}
              >
                {/* Editor title bar */}
                <div className="flex items-center gap-2 px-5 py-4 border-b border-white/[0.06]"
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                >
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="flex-1 text-center text-xs text-[#8b8b9e] font-mono">engineer.ts</span>
                  <ExternalLink size={12} className="text-[#8b8b9e]" />
                </div>

                {/* Line numbers + code */}
                <div className="flex p-5 gap-5">
                  {/* Line numbers */}
                  <div className="flex flex-col text-[#8b8b9e]/30 font-mono text-sm text-right select-none"
                    style={{ minWidth: '1.5rem' }}>
                    {codeLines.map((_, i) => (
                      <span key={i} className="leading-7">{i + 1}</span>
                    ))}
                  </div>

                  {/* Code */}
                  <div className="flex-1">
                    {codeLines.map((line, i) => (
                      <CodeLine key={i} text={line.text} value={line.value} delay={0.5 + i * 0.08} />
                    ))}
                  </div>
                </div>

                {/* Cursor blink */}
                <div className="px-5 pb-5">
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block w-2 h-5 bg-indigo-400 rounded-sm"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute -right-6 top-1/4 px-3 py-2 rounded-xl text-xs font-semibold"
                style={{
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  color: '#34d399',
                }}
              >
                ✓ 99.9% Uptime
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7, duration: 0.5 }}
                className="absolute -left-6 bottom-1/4 px-3 py-2 rounded-xl text-xs font-semibold"
                style={{
                  background: 'rgba(99, 102, 241, 0.12)',
                  border: '1px solid rgba(99, 102, 241, 0.25)',
                  color: '#a5b4fc',
                }}
              >
                ⚡ 95%+ PageSpeed
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[#8b8b9e] text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-indigo-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
