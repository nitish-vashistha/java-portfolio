import { motion } from 'framer-motion';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -6 }}
      className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 h-full"
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {/* Card top accent bar */}
      <div
        className="h-1 w-full transition-all duration-500 group-hover:h-1.5"
        style={{ background: `linear-gradient(90deg, ${project.accentColor}, ${project.accentColor}88)` }}
      />

      <div className="p-6 sm:p-7 flex flex-col flex-1">
        {/* Category badge + featured */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
            style={{
              background: `${project.accentColor}18`,
              color: project.accentColor,
              border: `1px solid ${project.accentColor}30`,
            }}
          >
            {project.category === 'fullstack' ? 'Full Stack' : project.category === 'frontend' ? 'Frontend' : 'Backend'}
          </span>
          {project.featured && (
            <span
              className="text-xs text-[#a5b4fc] font-medium px-2.5 py-0.5 rounded-full"
              style={{
                background: 'rgba(99, 102, 241, 0.1)',
                border: '1px solid rgba(99, 102, 241, 0.2)',
              }}
            >
              Production Grade
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#f0f0f5] mb-3 group-hover:text-white transition-colors leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[#8b8b9e] text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mb-6 flex-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#f0f0f5]/80 mb-3">Key Highlights</p>
          <ul className="space-y-2">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-[#8b8b9e] leading-relaxed">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                  style={{ background: project.accentColor }}
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech tags */}
        <div className="pt-4 border-t border-white/[0.06]">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-medium"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  color: '#a5b4fc',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
