import { motion } from 'framer-motion';
import { footerContact } from '@/lib/contact';
import { useNavigate, useLocation } from 'react-router-dom';

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
  const usefulLinks = [
    'Home',
    'About', 
    'Services',
    'Portfolio',
    'Contact'
  ];

  const ourServices = [
    'Corporate Documentaries',
    'Ad Films',
    'Video Marketing Reels',
    'Motion Design',
    'Photography',
    'Corporate Interviews'
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-card border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* USEFULL LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-poppins font-semibold text-xl mb-6 text-foreground">
              USEFULL LINKS
            </h3>
            <ul className="space-y-3">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => handleNavigation(link)}
                    whileHover={{ x: 5 }}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 block text-left w-full cursor-pointer"
                  >
                    {link}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* OUR SERVICES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-poppins font-semibold text-xl mb-6 text-foreground">
              OUR SERVICES
            </h3>
            <ul className="space-y-3">
              {ourServices.map((service, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => handleNavigation('Services')}
                    whileHover={{ x: 5 }}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 block text-left w-full cursor-pointer"
                  >
                    {service}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT US */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-poppins font-semibold text-xl mb-6 text-foreground">
              CONTACT US
            </h3>
            <div className="space-y-3 text-muted-foreground">
              <div>{footerContact.phoneLabel}</div>
              <div>
                {footerContact.emailLabel} {footerContact.emailAddress}
              </div>
              <div>
                <div className="font-medium mb-2">Address:</div>
                {footerContact.addressLines.map((line, i) => (
                  <div key={i} className="ml-2">{line}</div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-center text-muted-foreground">
            © 2024 AD~VIBES. All rights reserved.
          </p>

          <div className="flex space-x-6 text-sm">
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Cookie Policy
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;