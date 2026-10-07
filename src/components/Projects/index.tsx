import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';

type Filter = 'all' | 'fullstack' | 'frontend' | 'backend';

const filterOptions: { label: string; value: Filter }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
];

export function Projects() {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 lg:py-32 relative"
      style={{ background: 'rgba(255,255,255,0.01)' }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.15), transparent)' }} />
        <div className="absolute bottom-0 inset-x-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.1), transparent)' }} />
      </div>

      <div className="section-container">
        <SectionHeading
          badge="Projects"
          title="Things I've"
          titleHighlight="shipped."
          subtitle="Production-grade projects demonstrating full-stack engineering depth, from micro-frontend platforms to distributed backend services."
          className="mb-12"
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filterOptions.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                filter === value ? 'text-white' : 'text-[#8b8b9e] hover:text-[#f0f0f5]'
              }`}
              style={
                filter === value
                  ? {
                      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                      boxShadow: '0 4px 15px rgba(99,102,241,0.3)',
                    }
                  : {
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }
              }
            >
              {label}
              <span className="ml-2 text-xs opacity-60">
                {value === 'all' ? projects.length : projects.filter((p) => p.category === value).length}
              </span>
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div
          key={filter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-[#8b8b9e] text-sm mb-4">
            More projects available on GitHub
          </p>
          <a
            href="https://github.com/vashisthnitish"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
