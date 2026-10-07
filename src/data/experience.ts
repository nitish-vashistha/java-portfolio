export interface Achievement {
  text: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  duration: string;
  type: 'full-time' | 'intern';
  current: boolean;
  description: string;
  achievements: Achievement[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 'webkul',
    role: 'Software Engineer (Full-Stack / React + Java)',
    company: 'Webkul Software Pvt. Ltd.',
    companyUrl: 'https://webkul.com',
    location: 'Noida, India',
    period: 'Jan 2023 – Sept 2026',
    duration: '3 yrs 9 mos (~4 years)',
    type: 'full-time',
    current: false,
    description:
      'Architected resilient, scalable enterprise web applications across decoupled React frontends and Spring Boot microservices adopted across 6 enterprise websites.',
    achievements: [
      { text: 'Authored modular Low-Level Design (LLD) specs converting product roadmaps into decoupled React frontends and Spring Boot microservices adopted across 6 enterprise websites.' },
      { text: 'Engineered high-throughput RESTful services using Spring Boot, Spring Data JPA, and Hibernate with HikariCP connection pooling, transaction management, and indexing strategies across PostgreSQL and MySQL.' },
      { text: 'Architected client-side micro-frontends with single-spa integrated with backend-for-frontend (BFF) layers; implemented custom hooks, Redis caching, optimistic UI updates, and token authentication (JWT/OAuth2).' },
      { text: 'Built 40+ reusable, WCAG 2.1-compliant accessible UI components via Storybook, accelerating cross-team release velocity by 35% and maintaining design consistency across multi-tenant deployments.' },
      { text: 'Sustained 95%+ Web Vitals and PageSpeed scores via bundle minimization and DOM virtualization; instrumented Sentry, New Relic, and Kibana telemetry for 99.9% uptime.' },
      { text: 'Authored comprehensive automated test suites using JUnit 5, Mockito, Jest, and React Testing Library (TDD approach).' },
      { text: 'Modernized legacy monolithic modules into modular Spring Boot microservices and decoupled React SPAs, decreasing cross-team deployment dependencies by 50%.' },
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Java 17',
      'Spring Boot',
      'single-spa',
      'PostgreSQL',
      'MySQL',
      'Redis',
      'Docker',
      'GitHub Actions',
      'Storybook',
      'New Relic / Sentry',
    ],
  },
];
