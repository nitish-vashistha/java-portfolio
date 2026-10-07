import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, Send, CheckCircle, AlertCircle, MapPin } from 'lucide-react';
import { SectionHeading, FadeIn } from '@/components/ui';

const contactCards = [
  {
    icon: Mail,
    label: 'Email',
    value: 'nitishvashistha00@gmail.com',
    href: 'mailto:nitishvashistha00@gmail.com',
    description: 'Best for project discussions',
    color: '#6366f1',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/vashisthnitish',
    href: 'https://linkedin.com/in/vashisthnitish',
    description: 'Connect professionally',
    color: '#0077b5',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/vashisthnitish',
    href: 'https://github.com/vashisthnitish',
    description: 'View my open source work',
    color: '#f0f0f5',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 93067 35003',
    href: 'tel:+919306735003',
    description: 'For urgent discussions',
    color: '#10b981',
  },
];

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitStatus = 'idle' | 'success' | 'error';

function validateForm(data: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required';
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email';
  }
  if (!data.message.trim()) {
    errors.message = 'Message is required';
  } else if (data.message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters';
  }
  return errors;
}

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const newErrors = validateForm({ ...form, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validateForm(form);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitStatus('success');
    setForm({ name: '', email: '', message: '' });
    setTouched({});
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const fieldClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3.5 rounded-xl text-[#f0f0f5] text-sm transition-all duration-200 outline-none focus:ring-2 ${
      errors[field] && touched[field]
        ? 'ring-2 ring-red-500/50'
        : 'focus:ring-indigo-500/40'
    }`;

  const fieldStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)' }} />
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(99,102,241,0.06) 0%, transparent 70%)' }} />
      </div>

      <div className="section-container">
        <SectionHeading
          badge="Contact"
          title="Let's build something"
          titleHighlight="scalable."
          subtitle="I'm open to opportunities where I can contribute to challenging frontend, backend, and full-stack engineering problems."
          className="mb-14"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact cards */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactCards.map((card, i) => (
                <motion.a
                  key={card.label}
                  href={card.href}
                  target={card.label !== 'Email' && card.label !== 'Phone' ? '_blank' : undefined}
                  rel={card.label !== 'Email' && card.label !== 'Phone' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  whileHover={{ y: -3 }}
                  className="p-5 rounded-2xl flex flex-col gap-3 group transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${card.color}18` }}>
                    <card.icon size={18} style={{ color: card.color }} />
                  </div>
                  <div>
                    <div className="text-[#f0f0f5] font-semibold text-sm mb-0.5">{card.label}</div>
                    <div className="text-[#8b8b9e] text-xs truncate">{card.value}</div>
                    <div className="text-[#8b8b9e] text-xs mt-1 opacity-70">{card.description}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Location */}
            <FadeIn delay={0.5}>
              <div className="p-4 rounded-xl flex items-center gap-3"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <MapPin size={16} className="text-indigo-400 flex-shrink-0" />
                <div>
                  <span className="text-[#f0f0f5] text-sm font-medium">Noida, India</span>
                  <span className="text-[#8b8b9e] text-xs ml-2">IST (UTC+5:30)</span>
                </div>
              </div>
            </FadeIn>

            {/* Availability */}
            <FadeIn delay={0.6} className="mt-4">
              <div className="p-4 rounded-xl flex items-center gap-3"
                style={{
                  background: 'rgba(16, 185, 129, 0.06)',
                  border: '1px solid rgba(16, 185, 129, 0.15)',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <div>
                  <span className="text-emerald-400 text-sm font-medium">Available for new opportunities</span>
                  <span className="text-[#8b8b9e] text-xs block mt-0.5">Typical response time: 24 hours</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Contact form */}
          <FadeIn delay={0.3} direction="left">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-8 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <h3 className="text-[#f0f0f5] font-bold text-xl mb-6">Send a message</h3>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-[#8b8b9e] text-xs font-medium mb-2 uppercase tracking-wider">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your name"
                    autoComplete="name"
                    className={fieldClass('name')}
                    style={fieldStyle}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={!!(errors.name && touched.name)}
                  />
                  {errors.name && touched.name && (
                    <p id="name-error" className="mt-1.5 text-red-400 text-xs flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-[#8b8b9e] text-xs font-medium mb-2 uppercase tracking-wider">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="your@email.com"
                    autoComplete="email"
                    className={fieldClass('email')}
                    style={fieldStyle}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!(errors.email && touched.email)}
                  />
                  {errors.email && touched.email && (
                    <p id="email-error" className="mt-1.5 text-red-400 text-xs flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-[#8b8b9e] text-xs font-medium mb-2 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell me about your project or opportunity..."
                    className={`${fieldClass('message')} resize-none`}
                    style={fieldStyle}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!(errors.message && touched.message)}
                  />
                  {errors.message && touched.message && (
                    <p id="message-error" className="mt-1.5 text-red-400 text-xs flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Status messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 rounded-xl text-sm text-emerald-400"
                    style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}
                  >
                    <CheckCircle size={16} />
                    Message sent! I'll get back to you within 24 hours.
                  </motion.div>
                )}
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
