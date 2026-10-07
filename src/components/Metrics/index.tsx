import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Zap, BarChart2, Shield } from 'lucide-react';
import { SectionHeading } from '@/components/ui';
import { metrics } from '@/data/metrics';
import { useCounter } from '@/hooks/useCounter';

const iconMap = { Calendar, Zap, BarChart2, Shield };

function MetricCard({ metric, index }: { metric: typeof metrics[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useCounter(isInView ? metric.value : 0, 2200);

  const Icon = iconMap[metric.icon as keyof typeof iconMap];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="p-8 rounded-2xl text-center transition-all duration-300 group relative overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {/* Background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(99,102,241,0.06) 0%, transparent 70%)' }}
      />

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center mx-auto"
        style={{ background: 'rgba(99, 102, 241, 0.12)' }}>
        {Icon && <Icon size={22} className="text-indigo-400" />}
      </div>

      {/* Value */}
      <div className="text-4xl font-bold text-[#f0f0f5] mb-1 tabular-nums">
        {Number.isInteger(metric.value)
          ? Math.round(count)
          : count.toFixed(1)
        }
        <span className="gradient-text">{metric.suffix}</span>
      </div>

      {/* Label */}
      <div className="text-[#f0f0f5] font-semibold mb-1 text-sm">{metric.label}</div>

      {/* Description */}
      <div className="text-[#8b8b9e] text-xs">{metric.description}</div>
    </motion.div>
  );
}

export function Metrics() {
  return (
    <section className="py-20 relative">
      <div className="section-container">
        <SectionHeading
          badge="Impact"
          title="Engineering that"
          titleHighlight="moves the needle."
          subtitle="Measurable outcomes from production systems I've built and optimized."
          align="center"
          className="mb-12"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {metrics.map((metric, i) => (
            <MetricCard key={metric.id} metric={metric} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
