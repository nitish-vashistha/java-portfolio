import { motion } from 'framer-motion';
import { MapPin, Calendar, Code2, Cpu, Layers, ArrowRight, GraduationCap } from 'lucide-react';
import { SectionHeading, FadeIn } from '@/components/ui';

const stats = [
  { icon: Calendar, value: '3.8', unit: 'Years', label: 'Jan 2023 – Sept 2026' },
  { icon: Code2, value: '6+', unit: 'Websites', label: 'Enterprise Systems' },
  { icon: Layers, value: '40+', unit: 'Components', label: 'WCAG Storybook Design System' },
  { icon: Cpu, value: '95%+', unit: 'Score', label: 'PageSpeed & Web Vitals' },
];

const highlights = [
  'Low-Level Design (LLD) specs converting roadmaps into decoupled React frontends & Spring Boot microservices',
  'Client-side micro-frontends with single-spa integrated with backend-for-frontend (BFF) layers',
  'High-throughput Spring Boot REST services with JPA/Hibernate & HikariCP connection pooling',
  'Enterprise catalog management (Unopim) & configurable drag-and-drop page builder modules',
  'Zero-downtime containerized deployments via Docker & GitHub Actions CI/CD workflows',
  'Production observability & telemetry instrumented with Sentry, New Relic, and Kibana',
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)' }} />
        <div className="absolute bottom-0 inset-x-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.1), transparent)' }} />
      </div>

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left: Bio */}
          <div>
            <SectionHeading
              badge="About Me"
              title="Engineering software at"
              titleHighlight="enterprise scale."
              className="mb-8"
            />

            <FadeIn delay={0.2} className="space-y-5 prose-portfolio">
              <p className="text-[#8b8b9e] leading-relaxed text-lg">
                I'm <span className="text-[#f0f0f5] font-semibold">Nitish</span>, a Full-Stack Software Engineer based in{' '}
                <span className="text-[#f0f0f5] font-medium inline-flex items-center gap-1">
                  <MapPin size={14} className="text-indigo-400" /> Noida, India
                </span>.
                I specialize in architecting resilient, scalable enterprise web applications using{' '}
                <span className="text-indigo-400 font-medium">React.js</span> on the frontend and{' '}
                <span className="text-indigo-400 font-medium">Java (Core Java / Java 17) &amp; Spring Boot</span> on the backend.
              </p>

              <p className="text-[#8b8b9e] leading-relaxed">
                From <span className="text-[#f0f0f5] font-medium">Jan 2023 to Sept 2026</span> at{' '}
                <a href="https://webkul.com" target="_blank" rel="noopener noreferrer"
                  className="text-[#f0f0f5] hover:text-indigo-400 transition-colors font-medium underline underline-offset-2 decoration-indigo-400/30">
                  Webkul Software Pvt. Ltd.
                </a>{' '}
                (Noida, India), I authored modular Low-Level Design (LLD) specs converting product roadmaps into decoupled React SPAs and Spring Boot microservices adopted across 6 enterprise websites.
              </p>

              <p className="text-[#8b8b9e] leading-relaxed">
                My work spans designing client-side micro-frontends with <span className="text-[#f0f0f5] font-medium">single-spa</span>, building 40+ WCAG 2.1-compliant accessible Storybook UI components, sustaining 95%+ PageSpeed and Web Vitals, and implementing high-throughput REST APIs with Redis caching and HikariCP connection pooling.
              </p>
            </FadeIn>

            {/* Key focus areas */}
            <FadeIn delay={0.3} className="mt-8">
              <p className="text-[#f0f0f5] font-semibold mb-4 text-sm uppercase tracking-wider">Core Architectural Highlights</p>
              <ul className="space-y-2.5">
                {highlights.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * i + 0.3 }}
                    className="flex items-start gap-3 text-[#8b8b9e] text-sm leading-relaxed"
                  >
                    <ArrowRight size={14} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </FadeIn>

            {/* Education Card */}
            <FadeIn delay={0.4} className="mt-8">
              <div className="p-5 rounded-2xl flex items-start gap-4"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(99, 102, 241, 0.12)' }}>
                  <GraduationCap size={20} className="text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-[#f0f0f5] font-semibold text-sm">B.Tech, Computer Science &amp; Engineering</h4>
                  <p className="text-[#8b8b9e] text-xs mt-0.5">MMDU, Ambala, HR • Aug 2019 – July 2023</p>
                  <p className="text-indigo-400 text-xs font-mono font-medium mt-1">CGPA: 8.5 / 10</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Stats grid */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i + 0.2, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl transition-all duration-300 group"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center"
                    style={{ background: 'rgba(99, 102, 241, 0.12)' }}>
                    <stat.icon size={20} className="text-indigo-400" />
                  </div>
                  <div className="text-3xl font-bold text-[#f0f0f5] mb-0.5">
                    {stat.value}
                    <span className="text-lg text-[#8b8b9e] font-normal ml-1">{stat.unit}</span>
                  </div>
                  <div className="text-[#8b8b9e] text-xs leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Tech stack pills */}
            <FadeIn delay={0.5}>
              <div className="p-6 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <p className="text-[#f0f0f5] font-semibold text-sm mb-4 uppercase tracking-wider">Production Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'React.js', 'TypeScript', 'Java 17', 'Spring Boot',
                    'single-spa', 'Redux Toolkit', 'PostgreSQL', 'MySQL', 'Redis',
                    'HikariCP', 'Storybook', 'Docker', 'GitHub Actions',
                    'Sentry', 'New Relic', 'Kibana', 'WCAG 2.1', 'Core Web Vitals',
                  ].map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Status card */}
            <FadeIn delay={0.6} className="mt-4">
              <div className="p-4 rounded-xl flex items-center gap-3"
                style={{
                  background: 'rgba(16, 185, 129, 0.06)',
                  border: '1px solid rgba(16, 185, 129, 0.15)',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <span className="text-emerald-400 text-sm font-medium">
                  Open to Full-Stack &amp; Senior Engineering Opportunities
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
