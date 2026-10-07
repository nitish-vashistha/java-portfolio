import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const footerLinks = [
  { label: 'Home', section: 'hero' },
  { label: 'About', section: 'about' },
  { label: 'Skills', section: 'skills' },
  { label: 'Experience', section: 'experience' },
  { label: 'Projects', section: 'projects' },
  { label: 'Contact', section: 'contact' },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/vashisthnitish' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/vashisthnitish' },
  { icon: Mail, label: 'Email', href: 'mailto:nitishvashistha00@gmail.com' },
];

export function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-8"
      style={{
        background: '#07070c',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white text-lg"
                style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
              >
                N
              </div>
              <span className="font-bold text-[#f0f0f5] text-lg">Nitish</span>
            </div>
            <p className="text-[#8b8b9e] text-sm leading-relaxed mb-6 max-w-xs">
              Full-Stack Software Engineer specializing in React.js &amp; Java / Spring Boot. Building scalable enterprise solutions from Noida, India.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-[#8b8b9e] hover:text-[#f0f0f5] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[#f0f0f5] font-semibold text-sm mb-5 uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2.5">
              {footerLinks.map(({ label, section }) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-[#8b8b9e] hover:text-indigo-400 transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div>
            <h3 className="text-[#f0f0f5] font-semibold text-sm mb-5 uppercase tracking-wider">Core Stack</h3>
            <ul className="space-y-2.5">
              {['React.js', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Docker'].map((tech) => (
                <li key={tech} className="text-[#8b8b9e] text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-indigo-500" />
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-[#8b8b9e] text-xs">
            © 2026 Nitish. All rights reserved. Built with React &amp; TypeScript.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-9 h-9 rounded-xl flex items-center justify-center text-[#8b8b9e] hover:text-[#f0f0f5] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 group"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
