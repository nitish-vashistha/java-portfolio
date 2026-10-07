export interface Metric {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: string;
}

export const metrics: Metric[] = [
  {
    id: 'pagespeed',
    value: 95,
    suffix: '%+',
    label: 'PageSpeed & Web Vitals',
    description: 'Sustained across multi-tenant storefronts',
    icon: 'Zap',
  },
  {
    id: 'effort-reduction',
    value: 80,
    suffix: '%',
    label: 'Manual Effort Reduction',
    description: 'Achieved with Configurable Page Builder',
    icon: 'BarChart2',
  },
  {
    id: 'velocity',
    value: 35,
    suffix: '%',
    label: 'Release Velocity Increase',
    description: 'Via 40+ Storybook WCAG components',
    icon: 'Shield',
  },
  {
    id: 'uptime',
    value: 99.9,
    suffix: '%',
    label: 'Production Uptime',
    description: 'Telemetry via Sentry, New Relic & Kibana',
    icon: 'Calendar',
  },
];
