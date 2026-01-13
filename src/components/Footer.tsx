import { motion } from 'framer-motion';
import { footerContact } from '@/lib/contact';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.svg';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (link: string) => {
    // If we're on the home page, scroll to sections
    if (location.pathname === '/') {
      const sectionId = link.toLowerCase().replace(/\s+/g, '-').replace('|', '-');
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on a different page, navigate to home page first, then scroll
      navigate('/');
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        const sectionId = link.toLowerCase().replace(/\s+/g, '-').replace('|', '-');
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const socialLinks = [
    { name: 'Instagram', href: '#', className: 'social-instagram', icon: 'instagram' },
    { name: 'YouTube', href: '#', className: 'social-youtube', icon: 'youtube' },
    { name: 'Facebook', href: '#', className: 'social-facebook', icon: 'facebook' },
    { name: 'LinkedIn', href: '#', className: 'social-linkedin', icon: 'linkedin' },
  ];
  return (
    <footer className="relative overflow-hidden bg-gradient-card border-t border-white/10">
      {/* Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="text-7xl md:text-8xl font-display font-bold text-foreground/5 tracking-widest">
          AD~VIBES
        </span>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 text-center"
        >
          {/* Logo + Title */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-1.5">
              <img src={logo} alt="Company Logo" className="h-14 w-14 object-contain flex-shrink-0" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                AD~VIBES Media House
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Creative production and performance marketing to elevate your brand with storytelling, motion, and measurable growth.
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <motion.button
                key={item}
                onClick={() => handleNavigation(item)}
                whileHover={{ y: -2 }}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-label={item.name}
                className={`social-btn ${item.className}`}
              >
                <span className="icon">
                  {item.icon === 'instagram' && (
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2" fill="none"/>
                      <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" fill="none"/>
                      <circle cx="17" cy="7" r="1.5" fill="white"/>
                    </svg>
                  )}
                  {item.icon === 'youtube' && (
                    <svg className="w-5 h-5" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                      <path fill="white" d="M549.655 148.28c-6.281-23.64-24.041-42.396-47.655-48.685C462.923 85 288 85 288 85S113.077 85 74 99.595c-23.614 6.289-41.374 25.045-47.655 48.685-12.614 47.328-12.614 147.717-12.614 147.717s0 100.39 12.614 147.718c6.281 23.64 24.041 42.396 47.655 48.684C113.077 427 288 427 288 427s174.923 0 214-14.595c23.614-6.289 41.374-25.045 47.655-48.685 12.614-47.328 12.614-147.718 12.614-147.718s0-100.389-12.614-147.717zM240 336V176l144 80-144 80z"/>
                    </svg>
                  )}
                  {item.icon === 'facebook' && (
                    <svg className="w-5 h-5" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                      <path fill="white" d="M279.14 288l14.22-92.66h-88.91V129.08c0-25.35 12.42-50.06 52.24-50.06H296V6.26S259.5 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72V195.3H22.89V288h81.39v224h100.17V288z"/>
                    </svg>
                  )}
                  {item.icon === 'linkedin' && (
                    <svg className="w-5 h-5" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                      <path fill="white" d="M100.28 448H7.4V148.9h92.88zm-46.44-341a53.79 53.79 0 1 1 53.79-53.8 53.8 53.8 0 0 1-53.8 53.8zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.24-79.2-48.3 0-55.7 37.7-55.7 76.6V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.2 87.8-48.2 94 0 111.2 61.9 111.2 142.3V448z"/>
                    </svg>
                  )}
                </span>
                <span className="text">{item.name}</span>
              </a>
            ))}
          </div>

          {/* Contact Inline */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <span>{footerContact.phoneLabel}</span>
            <span className="hidden md:inline">•</span>
            <span>{footerContact.emailLabel} {footerContact.emailAddress}</span>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground"
        >
          <span>© 2024 AD~VIBES. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Terms</span>
          </div>
        </motion.div>
      </div>

      {/* Background Accent */}
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/6 rounded-full blur-3xl"></div>
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/6 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;