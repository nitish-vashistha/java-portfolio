import { motion } from 'framer-motion';
import { Briefcase, MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import { SectionHeading, FadeIn } from '@/components/ui';
import { experiences } from '@/data/experience';

export function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 relative">
      <div className="section-container">
        <SectionHeading
          badge="Work Experience"
          title="Where I've"
          titleHighlight="built things."
          subtitle="Nearly 4 years of experience working on enterprise products at scale."
          className="mb-16"
        />

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px hidden lg:block"
            style={{ background: 'linear-gradient(to bottom, rgba(99,102,241,0.5), rgba(99,102,241,0.1), transparent)' }}
          />

          <div className="space-y-12 lg:pl-10">
            {experiences.map((exp, index) => (
              <FadeIn key={exp.id} delay={index * 0.15} direction="up">
                <div className="relative">
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-[2.875rem] top-2 w-5 h-5 rounded-full border-2 border-indigo-500 hidden lg:flex items-center justify-center"
                    style={{ background: exp.current ? '#6366f1' : '#0a0a0f' }}
                  >
                    {exp.current && (
                      <motion.span
                        animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-white"
                      />
                    )}
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="p-8 rounded-2xl transition-all duration-300 group"
                    style={{
                      background: 'rgba(255,255,255,0.025)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-[#f0f0f5]">{exp.role}</h3>
                          {exp.current && (
                            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold"
                              style={{
                                background: 'rgba(16, 185, 129, 0.12)',
                                color: '#34d399',
                                border: '1px solid rgba(16,185,129,0.2)',
                              }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors"
                        >
                          <Briefcase size={14} />
                          {exp.company}
                          <ExternalLink size={12} />
                        </a>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-[#f0f0f5] text-sm font-medium mb-1">{exp.period}</div>
                        <div className="flex items-center gap-1.5 text-[#8b8b9e] text-xs justify-end">
                          <MapPin size={12} />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[#8b8b9e] text-sm leading-relaxed mb-6">{exp.description}</p>

                    {/* Achievements */}
                    <ul className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.06 + 0.2 }}
                          className="flex items-start gap-3 text-[#8b8b9e] text-sm leading-relaxed"
                        >
                          <ArrowRight size={14} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                          <span dangerouslySetInnerHTML={{ __html: achievement.text.replace(/(\d+%|\d+ms|\d+K\+|\d+M\+)/g, '<strong class="text-[#f0f0f5]">$1</strong>') }} />
                        </motion.li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
