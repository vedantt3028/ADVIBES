import { motion } from 'framer-motion';
import { footerContact, socialLinks } from '@/lib/contact';
import { useNavigate, useLocation } from 'react-router-dom';
import { safeOpenUrl } from '@/lib/security';
import logo from '@/assets/logo.svg';

// WhatsApp icon component
const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

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

  const handleWhatsAppClick = () => {
    const whatsappUrl = typeof socialLinks.whatsapp === 'function' ? socialLinks.whatsapp() : '#';
    safeOpenUrl(whatsappUrl, '_blank');
  };

  const socialLinksList = [
    { name: 'Instagram', href: socialLinks.instagram, className: 'social-instagram', icon: 'instagram' },
    { name: 'YouTube', href: socialLinks.youtube, className: 'social-youtube', icon: 'youtube' },
    { name: 'LinkedIn', href: socialLinks.linkedin, className: 'social-linkedin', icon: 'linkedin' },
    { name: 'WhatsApp', href: '#', className: 'social-whatsapp', icon: 'whatsapp', onClick: handleWhatsAppClick },
  ];
  return (
    <footer className="relative overflow-hidden bg-black border-t border-gray-800">
      {/* Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="text-7xl md:text-8xl font-display font-bold text-white/15 tracking-widest">
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
            {['Home', 'About', 'Services', 'Portfolio', 'Behind the Build', 'Contact'].map((item) => (
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
            {socialLinksList.map((item) => (
              item.onClick ? (
                <button
                  key={item.name}
                  onClick={item.onClick}
                  aria-label={item.name}
                  className={`social-btn ${item.className}`}
                >
                  <span className="icon">
                    {item.icon === 'whatsapp' && (
                      <div className="text-white">
                        <WhatsAppIcon className="w-6 h-6" />
                      </div>
                    )}
                  </span>
                  <span className="text">{item.name}</span>
                </button>
              ) : (
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
                    {item.icon === 'linkedin' && (
                      <svg className="w-5 h-5" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path fill="white" d="M100.28 448H7.4V148.9h92.88zm-46.44-341a53.79 53.79 0 1 1 53.79-53.8 53.8 53.8 0 0 1-53.8 53.8zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.24-79.2-48.3 0-55.7 37.7-55.7 76.6V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.2 87.8-48.2 94 0 111.2 61.9 111.2 142.3V448z"/>
                      </svg>
                    )}
                  </span>
                  <span className="text">{item.name}</span>
                </a>
              )
            ))}
          </div>

          {/* Contact Inline */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <a href="tel:+918605816066" className="hover:text-primary transition-colors">{footerContact.phoneLabel}</a>
            <span className="hidden md:inline">•</span>
            <a href={`mailto:${footerContact.emailAddress}`} className="hover:text-primary transition-colors">{footerContact.emailLabel} {footerContact.emailAddress}</a>
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
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-white/3 rounded-full blur-3xl"></div>
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/3 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;