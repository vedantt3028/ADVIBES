import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (route: string) => {
    if (route === 'Home') {
      navigate('/');
    } else {
      navigate(`/${route.toLowerCase()}`);
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const isActiveRoute = (route: string) => {
    if (route === 'Home') {
      return location.pathname === '/';
    }
    return location.pathname === `/${route.toLowerCase()}`;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-card mx-4 mt-4 rounded-glass py-3 bg-black/80' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between relative">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-1 cursor-pointer flex-shrink-0"
              onClick={() => navigate('/')}
            >
              <img src={logo} alt="Company Logo" className="h-12 w-12 object-contain flex-shrink-0" />
              <span className="text-2xl font-display font-bold gradient-text leading-tight">
                AD~VIBES
              </span>
            </motion.div>

            {/* Desktop Navigation Links - Centered */}
            <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => handleNavigation(item)}
                  className={`text-foreground hover:text-primary transition-colors duration-300 font-medium ${
                    isActiveRoute(item) ? 'text-primary' : ''
                  }`}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden md:block flex-shrink-0"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="btn-hero-primary"
                  onClick={() => navigate('/contact')}
                >
                  Get Started
                </Button>
              </motion.div>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={toggleMobileMenu}
                className="p-3 text-foreground hover:text-primary min-h-[44px] min-w-[44px]"
                aria-label="Toggle mobile menu"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 bg-black border-l border-gray-800 shadow-2xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-800">
                  <div className="flex items-center space-x-1">
                    <img src={logo} alt="Company Logo" className="h-10 w-10 object-contain flex-shrink-0" />
                    <span className="text-lg font-display font-bold gradient-text leading-tight">
                      AD~VIBES
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-3 min-h-[44px] min-w-[44px]"
                    aria-label="Close mobile menu"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 p-6 space-y-2">
                  {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
                    <motion.button
                      key={item}
                      onClick={() => handleNavigation(item)}
                      className={`block w-full text-left px-4 py-3 min-h-[44px] text-foreground hover:text-white transition-colors duration-300 font-medium rounded-lg hover:bg-gray-900 active:bg-gray-800 ${
                        isActiveRoute(item) ? 'text-white bg-white/10' : ''
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item}
                    </motion.button>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="p-6 border-t border-gray-800">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        className="btn-hero-primary w-full"
                        onClick={() => {
                          navigate('/contact');
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        Get Started
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;