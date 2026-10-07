import { motion } from 'framer-motion';
import { SectionHeading, FadeIn } from '@/components/ui';

// Architecture node types
interface ArchNode {
  id: string;
  label: string;
  x: number;
  y: number;
  color: string;
  tech: string;
  icon: string;
}

const nodes: ArchNode[] = [
  { id: 'browser', label: 'Browser', x: 50, y: 8, color: '#6366f1', tech: 'React / Next.js', icon: '🌐' },
  { id: 'shell', label: 'single-spa Shell', x: 50, y: 25, color: '#8b5cf6', tech: 'Micro-frontends', icon: '🧩' },
  { id: 'fe1', label: 'Page Builder', x: 20, y: 44, color: '#a78bfa', tech: 'React / Drag-Drop', icon: '🏗️' },
  { id: 'fe2', label: 'Unopim Catalog', x: 50, y: 44, color: '#a78bfa', tech: 'React / i18n', icon: '📦' },
  { id: 'fe3', label: 'Storefront MFE', x: 80, y: 44, color: '#a78bfa', tech: 'React / Web Vitals', icon: '🛒' },
  { id: 'gateway', label: 'API Gateway / BFF', x: 50, y: 62, color: '#06b6d4', tech: 'Spring Boot', icon: '🔀' },
  { id: 'svc1', label: 'Auth Service', x: 20, y: 78, color: '#10b981', tech: 'Java 17 / JWT', icon: '🔐' },
  { id: 'svc2', label: 'Catalog Service', x: 50, y: 78, color: '#10b981', tech: 'Spring Data JPA', icon: '⚙️' },
  { id: 'svc3', label: 'Schema Service', x: 80, y: 78, color: '#10b981', tech: 'JSON Schema APIs', icon: '📑' },
  { id: 'db', label: 'PostgreSQL / MySQL', x: 35, y: 93, color: '#f59e0b', tech: 'HikariCP Pooling', icon: '🗄️' },
  { id: 'cache', label: 'Redis Cache', x: 65, y: 93, color: '#ef4444', tech: 'Distributed Sessions', icon: '⚡' },
];

const edges = [
  ['browser', 'shell'],
  ['shell', 'fe1'],
  ['shell', 'fe2'],
  ['shell', 'fe3'],
  ['fe1', 'gateway'],
  ['fe2', 'gateway'],
  ['fe3', 'gateway'],
  ['gateway', 'svc1'],
  ['gateway', 'svc2'],
  ['gateway', 'svc3'],
  ['svc2', 'db'],
  ['svc2', 'cache'],
  ['svc1', 'db'],
  ['svc3', 'db'],
];

function getNodeCenter(node: ArchNode, w: number, h: number) {
  return { cx: (node.x / 100) * w, cy: (node.y / 100) * h };
}

export function Architecture() {
  const W = 700;
  const H = 520;

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="section-container">
        <SectionHeading
          badge="Architecture"
          title="How I architect"
          titleHighlight="distributed systems."
          subtitle="A visual overview of the micro-frontend and microservices architecture patterns I've worked with at scale."
          className="mb-14"
        />

        <FadeIn delay={0.2}>
          <div className="rounded-2xl overflow-hidden p-6 lg:p-10"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div className="w-full overflow-x-auto">
              <svg
                viewBox={`0 0 ${W} ${H}`}
                className="w-full"
                style={{ minWidth: 320, maxWidth: 700, margin: '0 auto', display: 'block' }}
                aria-label="Architecture diagram showing micro-frontend and microservices layers"
              >
                {/* Edges */}
                {edges.map(([from, to]) => {
                  const fromNode = nodes.find((n) => n.id === from)!;
                  const toNode = nodes.find((n) => n.id === to)!;
                  const { cx: x1, cy: y1 } = getNodeCenter(fromNode, W, H);
                  const { cx: x2, cy: y2 } = getNodeCenter(toNode, W, H);
                  return (
                    <motion.line
                      key={`${from}-${to}`}
                      x1={x1} y1={y1 + 12} x2={x2} y2={y2 - 12}
                      stroke="rgba(99,102,241,0.2)"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  );
                })}

                {/* Nodes */}
                {nodes.map((node, i) => {
                  const { cx, cy } = getNodeCenter(node, W, H);
                  return (
                    <motion.g
                      key={node.id}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06 + 0.3, ease: 'backOut' }}
                      style={{ transformOrigin: `${cx}px ${cy}px` }}
                    >
                      {/* Glow */}
                      <circle cx={cx} cy={cy} r={28} fill={node.color} opacity={0.08} />
                      {/* Circle */}
                      <circle cx={cx} cy={cy} r={22}
                        fill="#0d0d14"
                        stroke={node.color}
                        strokeWidth="1.5"
                        strokeOpacity={0.6}
                      />
                      {/* Icon */}
                      <text x={cx} y={cy + 2} textAnchor="middle" dominantBaseline="middle" fontSize={14}>
                        {node.icon}
                      </text>
                      {/* Label */}
                      <text x={cx} y={cy + 32} textAnchor="middle" fill="#f0f0f5" fontSize={10} fontFamily="Inter, sans-serif" fontWeight={500}>
                        {node.label}
                      </text>
                      {/* Tech label */}
                      <text x={cx} y={cy + 44} textAnchor="middle" fill="#8b8b9e" fontSize={8} fontFamily="Inter, sans-serif">
                        {node.tech}
                      </text>
                    </motion.g>
                  );
                })}

                {/* Layer labels */}
                {[
                  { label: 'Client Layer', y: 30, color: '#6366f1' },
                  { label: 'Micro-Frontend Layer', y: 165, color: '#8b5cf6' },
                  { label: 'API Gateway', y: 300, color: '#06b6d4' },
                  { label: 'Microservices Layer', y: 380, color: '#10b981' },
                  { label: 'Data Layer', y: 470, color: '#f59e0b' },
                ].map((layer) => (
                  <text
                    key={layer.label}
                    x={12}
                    y={layer.y}
                    fill={layer.color}
                    fontSize={9}
                    fontFamily="Inter, sans-serif"
                    fontWeight={600}
                    letterSpacing={1}
                    opacity={0.7}
                  >
                    {layer.label.toUpperCase()}
                  </text>
                ))}
              </svg>
            </div>

            {/* Legend */}
            <div className="mt-6 pt-5 border-t border-white/[0.06] flex flex-wrap gap-4">
              {[
                { color: '#6366f1', label: 'Frontend Shell' },
                { color: '#a78bfa', label: 'Micro-Frontends' },
                { color: '#06b6d4', label: 'API Gateway' },
                { color: '#10b981', label: 'Microservices' },
                { color: '#f59e0b', label: 'Data Layer' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ background: item.color }} />
                  <span className="text-[#8b8b9e] text-xs">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
