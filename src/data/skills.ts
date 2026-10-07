export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend & Architecture',
    skills: [
      { name: 'React.js', level: 96 },
      { name: 'TypeScript', level: 92 },
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'single-spa (Micro-frontends)', level: 90 },
      { name: 'Redux Toolkit & Context API', level: 90 },
      { name: 'Next.js', level: 82 },
      { name: 'Tailwind CSS / HTML5 / CSS3', level: 92 },
      { name: 'Storybook & Design Systems', level: 88 },
      { name: 'Data Virtualization', level: 86 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & Frameworks',
    skills: [
      { name: 'Java (Core Java / Java 17)', level: 92 },
      { name: 'Spring Boot & Spring MVC', level: 90 },
      { name: 'Spring Data JPA & Hibernate', level: 88 },
      { name: 'Multithreading & Concurrency', level: 85 },
      { name: 'RESTful APIs & Microservices', level: 94 },
      { name: 'GraphQL & WebSockets', level: 80 },
      { name: 'Node.js & Express', level: 75 },
    ],
  },
  {
    id: 'database',
    label: 'Databases & Caching',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MySQL', level: 85 },
      { name: 'Redis (Distributed Caching & Sessions)', level: 86 },
      { name: 'HikariCP Connection Pooling', level: 84 },
      { name: 'Query Indexing & Optimization', level: 88 },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps & Observability',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'GitHub Actions (CI/CD)', level: 84 },
      { name: 'Sentry & New Relic Telemetry', level: 82 },
      { name: 'Kibana & Log Aggregation', level: 80 },
      { name: 'Nginx & Linux / Bash', level: 78 },
    ],
  },
  {
    id: 'testing',
    label: 'Performance & Testing',
    skills: [
      { name: 'Core Web Vitals & PageSpeed (95%+)', level: 95 },
      { name: 'JUnit 5 & Mockito', level: 88 },
      { name: 'Jest & React Testing Library', level: 88 },
      { name: 'Code Splitting & Webpack', level: 85 },
      { name: 'WCAG 2.1 Accessibility & i18n', level: 86 },
      { name: 'Low-Level Design (LLD) & TDD', level: 90 },
    ],
  },
];
