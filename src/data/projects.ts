export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'fullstack' | 'frontend' | 'backend';
  featured: boolean;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  accentColor: string;
}

export const projects: Project[] = [
  {
    id: 'configurable-page-builder',
    title: 'Configurable Page Builder Platform',
    description: 'Extensible drag-and-drop page builder module with micro-frontend integration, reducing manual page creation effort by 80%.',
    longDescription: 'Architected an extensible drag-and-drop page builder module with micro-frontend integration (single-spa). Engineered Spring Boot persistence APIs with JPA/Hibernate to store dynamic JSON layout schemas, reducing payload processing time by 30% through query indexing and eliminating async race conditions via memoized hooks.',
    category: 'fullstack',
    featured: true,
    accentColor: '#6366f1',
    technologies: ['React', 'TypeScript', 'single-spa', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'JPA/Hibernate'],
    highlights: [
      '80% reduction in manual page creation effort',
      'Extensible drag-and-drop page builder module',
      'Dynamic JSON layout schema persistence',
      '30% payload processing time cut via query indexing',
      'Eliminated async race conditions via memoized hooks',
    ],
    githubUrl: 'https://github.com/vashisthnitish',
    liveUrl: '#',
  },
  {
    id: 'unopim-platform',
    title: 'Unopim Enterprise Platform',
    description: 'Enterprise internationalized (i18n) catalog management platform boosting session engagement by 25% with 15,000+ line item virtualization.',
    longDescription: 'Shipped an enterprise internationalized (i18n) catalog management platform, boosting session engagement by 25% via dark theme and micro-interactions. Created Spring Boot REST controllers with custom filter chains and RBAC security; optimized SQL joins to cut catalog publication latency by 40% and rendered 15,000+ line items via data virtualization.',
    category: 'fullstack',
    featured: true,
    accentColor: '#8b5cf6',
    technologies: ['React', 'Redux', 'Java 17', 'Spring Boot', 'MySQL', 'Storybook', 'i18n', 'Data Virtualization'],
    highlights: [
      '25% boost in session engagement via dark theme & micro-interactions',
      '15,000+ line items rendered via data virtualization',
      '40% catalog publication latency cut via SQL join optimizations',
      'Spring Boot REST controllers with custom filter chains & RBAC security',
      'Multi-language i18n support & Storybook design system',
    ],
    githubUrl: 'https://github.com/vashisthnitish',
    liveUrl: '#',
  },
  {
    id: 'high-perf-commerce-engine',
    title: 'High-Performance Commerce Engine',
    description: 'Storefront and commerce system sustaining 95%+ PageSpeed scores with zero-downtime rolling updates.',
    longDescription: 'Achieved 95%+ PageSpeed scores across storefronts by optimizing LCP and CLS metrics and enforcing strict CSP web security headers. Containerized backend services with Docker and automated deployment workflows via GitHub Actions, establishing zero-downtime rolling updates and Sentry telemetry.',
    category: 'fullstack',
    featured: true,
    accentColor: '#06b6d4',
    technologies: ['TypeScript', 'React', 'Spring Boot', 'Docker', 'Web Vitals', 'Sentry', 'CI/CD', 'GitHub Actions'],
    highlights: [
      '95%+ PageSpeed scores sustained across storefronts',
      'Optimized Core Web Vitals (LCP & CLS metrics)',
      'Enforced strict Content Security Policy (CSP) headers',
      'Zero-downtime rolling updates via Docker & GitHub Actions CI/CD',
      'Real-time production monitoring & SRE observability',
    ],
    githubUrl: 'https://github.com/vashisthnitish',
    liveUrl: '#',
  },
  {
    id: 'enterprise-design-system',
    title: 'Storybook Enterprise Design System',
    description: 'Suite of 40+ reusable, WCAG 2.1-compliant accessible UI components accelerating cross-team release velocity by 35%.',
    longDescription: 'Engineered 40+ accessible UI components maintaining design consistency across multi-tenant deployments and 6 enterprise applications. Integrated automated regression tests using Jest and React Testing Library.',
    category: 'frontend',
    featured: false,
    accentColor: '#ec4899',
    technologies: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS', 'WCAG 2.1', 'Jest', 'RTL'],
    highlights: [
      '40+ reusable accessible components',
      '35% acceleration in cross-team release velocity',
      'Full WCAG 2.1 AA compliance',
      'Multi-tenant deployment consistency',
    ],
    githubUrl: 'https://github.com/vashisthnitish',
  },
  {
    id: 'microservice-monolith-migration',
    title: 'Monolith to Spring Boot Microservices Migration',
    description: 'Modernized legacy monolithic architectures into decoupled Spring Boot services and React SPAs, slashing deployment dependencies by 50%.',
    longDescription: 'Converted monolithic dependencies into decoupled Spring Boot services and single-spa micro-frontends with Redis distributed caching, HikariCP connection pooling, and stateless JWT/OAuth2 authentication.',
    category: 'backend',
    featured: false,
    accentColor: '#10b981',
    technologies: ['Java 17', 'Spring Boot', 'Spring Data JPA', 'Redis', 'PostgreSQL', 'single-spa', 'JWT/OAuth2'],
    highlights: [
      '50% reduction in cross-team deployment dependencies',
      'HikariCP connection pooling & transaction isolation',
      'Distributed Redis session & response caching',
      'Stateless JWT auth & CSRF protection',
    ],
    githubUrl: 'https://github.com/vashisthnitish',
  },
];
