import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const sectionIds = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useScrollSpy(sectionIds, 120);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.05]'
            : 'py-5 bg-transparent'
        }`}
      >
        <nav className="section-container flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white text-lg"
              style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
            >
              N
            </div>
            <span className="font-semibold text-[#f0f0f5] group-hover:text-indigo-400 transition-colors">
              Nitish
            </span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                    activeSection === link.id
                      ? 'text-indigo-400'
                      : 'text-[#8b8b9e] hover:text-[#f0f0f5]'
                  }`}
                >
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.2)' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA + socials */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/vashisthnitish"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[#8b8b9e] hover:text-[#f0f0f5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/vashisthnitish"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[#8b8b9e] hover:text-[#f0f0f5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary ml-2 text-sm py-2 px-5"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-[#8b8b9e] hover:text-[#f0f0f5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: 'rgba(10,10,15,0.97)', backdropFilter: 'blur(20px)' }}
          >
            <div className="flex flex-col h-full pt-24 pb-8 px-8">
              <ul className="flex flex-col gap-2 flex-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`w-full text-left px-5 py-4 rounded-xl text-lg font-medium transition-all ${
                        activeSection === link.id
                          ? 'text-indigo-400 bg-indigo-500/10'
                          : 'text-[#8b8b9e] hover:text-[#f0f0f5] hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
              <div className="flex items-center gap-4 pt-8 border-t border-white/[0.06]">
                <a href="https://github.com/vashisthnitish" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#8b8b9e] hover:text-white transition-colors">
                  <Github size={20} /> GitHub
                </a>
                <a href="https://linkedin.com/in/vashisthnitish" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#8b8b9e] hover:text-white transition-colors">
                  <Linkedin size={20} /> LinkedIn
                </a>
              </div>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary w-full justify-center mt-4"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
