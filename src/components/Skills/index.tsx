import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layout, 
  Server, 
  Database, 
  Cloud, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Cpu,
  Flame
} from 'lucide-react';
import { SectionHeading } from '@/components/ui';
import { skillCategories } from '@/data/skills';

const categoryIcons: Record<string, React.ElementType> = {
  frontend: Layout,
  backend: Server,
  database: Database,
  devops: Cloud,
  testing: CheckCircle2,
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  const activeCategoryObj = skillCategories.find((c) => c.id === activeCategory) || skillCategories[0];
  const activeSkills = activeCategoryObj.skills;

  return (
    <section id="skills" className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'rgba(255,255,255,0.01)' }}
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)' }} />
        <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.4), transparent 70%)' }} />
        <div className="absolute bottom-0 inset-x-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.1), transparent)' }} />
      </div>

      <div className="section-container relative z-10">
        <SectionHeading
          badge="Skills & Expertise"
          title="Technical proficiency &"
          titleHighlight="core stack."
          subtitle="Specialized in building full-stack enterprise systems from decoupled micro-frontends to distributed high-throughput Java microservices."
          className="mb-12"
        />

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-10">
          {skillCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Layers;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  isActive
                    ? 'text-white shadow-lg'
                    : 'text-[#8b8b9e] hover:text-[#f0f0f5]'
                }`}
                style={
                  isActive
                    ? {
                        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                        boxShadow: '0 8px 25px rgba(99,102,241,0.35)',
                      }
                    : {
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }
                }
              >
                <Icon size={16} className={isActive ? 'text-white' : 'text-indigo-400'} />
                <span>{cat.label}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-mono ${
                    isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-[#8b8b9e]'
                  }`}
                >
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
          >
            {activeSkills.map((skill, index) => {
              const isTopTier = skill.level >= 90;
              const isAdvanced = skill.level >= 85 && skill.level < 90;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  whileHover={{ y: -4, borderColor: 'rgba(99,102,241,0.3)' }}
                  className="p-5 rounded-2xl relative group transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {/* Subtle hover gradient wash */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: 'radial-gradient(circle at 80% 20%, rgba(99,102,241,0.08), transparent 70%)' }} />

                  <div>
                    {/* Top Row: Skill Title & Level Badge */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{
                            background: isTopTier 
                              ? 'rgba(99,102,241,0.18)' 
                              : 'rgba(255,255,255,0.05)',
                            border: isTopTier
                              ? '1px solid rgba(99,102,241,0.3)'
                              : '1px solid rgba(255,255,255,0.08)',
                          }}
                        >
                          {isTopTier ? (
                            <Flame size={16} className="text-indigo-400" />
                          ) : (
                            <Cpu size={16} className="text-[#8b8b9e]" />
                          )}
                        </div>
                        <div>
                          <h4 className="text-[#f0f0f5] font-semibold text-sm group-hover:text-white transition-colors">
                            {skill.name}
                          </h4>
                          <span className="text-[11px] text-[#8b8b9e]">
                            {isTopTier ? 'Primary Competency' : isAdvanced ? 'Production Grade' : 'Proficient'}
                          </span>
                        </div>
                      </div>

                      <span
                        className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md"
                        style={{
                          background: isTopTier
                            ? 'rgba(99,102,241,0.15)'
                            : 'rgba(255,255,255,0.04)',
                          color: isTopTier ? '#a5b4fc' : '#8b8b9e',
                          border: isTopTier
                            ? '1px solid rgba(99,102,241,0.25)'
                            : '1px solid rgba(255,255,255,0.06)',
                        }}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div
                      className="h-2 rounded-full overflow-hidden p-0.5"
                      style={{ background: 'rgba(255,255,255,0.05)' }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: 0.1 + index * 0.03, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="h-full rounded-full"
                        style={{
                          background: isTopTier
                            ? 'linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)'
                            : 'linear-gradient(90deg, #4f46e5, #6366f1)',
                        }}
                      />
                    </div>
                  </div>

                  {/* Bottom details label */}
                  <div className="mt-4 pt-3 flex items-center justify-between text-[11px]"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
                  >
                    <span className="text-[#8b8b9e] flex items-center gap-1">
                      <Sparkles size={11} className="text-indigo-400" />
                      Enterprise Used
                    </span>
                    <span className="text-indigo-400/90 font-medium font-mono text-[10px] uppercase tracking-wider">
                      {isTopTier ? 'Expert' : isAdvanced ? 'Advanced' : 'Skilled'}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Additional Tools & Standards Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl relative overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-1">
                Standards, Tools &amp; Practices
              </p>
              <h4 className="text-base font-bold text-[#f0f0f5]">
                Engineering Ecosystem &amp; Methodologies
              </h4>
              <p className="text-xs text-[#8b8b9e] mt-1 max-w-xl">
                Practices applied daily at Webkul across multi-tenant deployments, code reviews, and high-performance production workloads.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 max-w-xl">
              {[
                'Low-Level Design (LLD)',
                'single-spa Micro-frontends',
                'Core Web Vitals (95%+)',
                'HikariCP Connection Pooling',
                'Storybook (40+ Comps)',
                'WCAG 2.1 Accessibility',
                'Spring Security / JWT',
                'Redis Session Caching',
                'Docker & GitHub Actions',
                'Sentry & Kibana Telemetry',
                'JUnit 5 / Mockito / RTL',
                'i18n Multi-Language',
              ].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#c7d2fe] transition-all hover:bg-indigo-500/20 cursor-default"
                  style={{
                    background: 'rgba(99, 102, 241, 0.1)',
                    border: '1px solid rgba(99, 102, 241, 0.22)',
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
