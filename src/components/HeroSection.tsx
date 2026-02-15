import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import AnimatedCounter from '@/components/AnimatedCounter';

// YouTube videos for slideshow (unique only)
const slideshowVideos = [
  { videoId: 'Xf73E97XlBI', title: 'AD~VIBES Marketing Video 1', embedUrl: 'https://www.youtube.com/embed/Xf73E97XlBI?autoplay=1&mute=1&loop=1&playlist=Xf73E97XlBI&controls=0&modestbranding=1&rel=0' },
  { videoId: 'IjFzZBgw-NM', title: 'AD~VIBES Marketing Video 2', embedUrl: 'https://www.youtube.com/embed/IjFzZBgw-NM?autoplay=1&mute=1&loop=1&playlist=IjFzZBgw-NM&controls=0&modestbranding=1&rel=0' },
  { videoId: 'Nn8JJinFd0Q', title: 'AD~VIBES Marketing Video 3', embedUrl: 'https://www.youtube.com/embed/Nn8JJinFd0Q?autoplay=1&mute=1&loop=1&playlist=Nn8JJinFd0Q&controls=0&modestbranding=1&rel=0' },
  { videoId: 'UrkRj6O18bU', title: 'AD~VIBES Marketing Video 4', embedUrl: 'https://www.youtube.com/embed/UrkRj6O18bU?autoplay=1&mute=1&loop=1&playlist=UrkRj6O18bU&controls=0&modestbranding=1&rel=0' },
  { videoId: 'wrYAl9_Kjo8', title: 'AD~VIBES Marketing Video 5', embedUrl: 'https://www.youtube.com/embed/wrYAl9_Kjo8?autoplay=1&mute=1&loop=1&playlist=wrYAl9_Kjo8&controls=0&modestbranding=1&rel=0' },
  { videoId: 'NXluB57O8Uo', title: 'AD~VIBES Marketing Video 6', embedUrl: 'https://www.youtube.com/embed/NXluB57O8Uo?autoplay=1&mute=1&loop=1&playlist=NXluB57O8Uo&controls=0&modestbranding=1&rel=0' },
  { videoId: 'RAlEHYWH038', title: 'AD~VIBES Marketing Video 7', embedUrl: 'https://www.youtube.com/embed/RAlEHYWH038?autoplay=1&mute=1&loop=1&playlist=RAlEHYWH038&controls=0&modestbranding=1&rel=0' },
  { videoId: 'UZQgz535zjg', title: 'AD~VIBES Marketing Video 8', embedUrl: 'https://www.youtube.com/embed/UZQgz535zjg?autoplay=1&mute=1&loop=1&playlist=UZQgz535zjg&controls=0&modestbranding=1&rel=0' },
  { videoId: 'mAE1rb3LdXU', title: 'AD~VIBES Marketing Video 9', embedUrl: 'https://www.youtube.com/embed/mAE1rb3LdXU?autoplay=1&mute=1&loop=1&playlist=mAE1rb3LdXU&controls=0&modestbranding=1&rel=0' },
  { videoId: '-z39IxThO0w', title: 'AD~VIBES Marketing Video 10', embedUrl: 'https://www.youtube.com/embed/-z39IxThO0w?autoplay=1&mute=1&loop=1&playlist=-z39IxThO0w&controls=0&modestbranding=1&rel=0' },
  { videoId: 'w4u56oxGFac', title: 'AD~VIBES Marketing Video 11', embedUrl: 'https://www.youtube.com/embed/w4u56oxGFac?autoplay=1&mute=1&loop=1&playlist=w4u56oxGFac&controls=0&modestbranding=1&rel=0' },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoMaximized, setIsVideoMaximized] = useState(false);
  const iframeRefs = slideshowVideos.map(() => useRef<HTMLIFrameElement>(null));
  const maximizedIframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Only auto-advance if video is not maximized
    if (!isVideoMaximized) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slideshowVideos.length);
      }, 40000); // 40 seconds
      return () => clearInterval(interval);
    }
  }, [isVideoMaximized]);

  // YouTube videos autoplay via iframe parameters, no manual control needed
  // The iframe embed URLs already have autoplay=1 parameter

  const handleVideoClick = () => {
    setIsVideoMaximized(true);
  };

  const handleCloseMaximized = () => {
    setIsVideoMaximized(false);
  };

  const handleNextVideo = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowVideos.length);
  };

  const handlePreviousVideo = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowVideos.length) % slideshowVideos.length);
  };

  const handleSeeOurWork = () => {
    navigate('/portfolio');
  };

  return (
    <section id="home" className="min-h-[100dvh] min-h-screen flex items-center justify-center relative overflow-x-hidden overflow-y-auto pt-16 sm:pt-20 py-8 sm:py-0">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/2 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-full grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative z-10 w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left min-w-0"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-outfit font-semibold leading-tight mb-4 sm:mb-6"
          >
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
              Giving your Brand
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-5xl mt-1 sm:mt-2">
              a <span className="gradient-text">Beat</span> of its own
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 px-0"
          >
            From ultra-luxury real estate sagas to local culinary stories, Ad Vibes crafts cinematic narratives that turn viewers into lifelong believers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl"
            >
              <Button 
                className="btn-hero-secondary text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                onClick={handleSeeOurWork}
              >
                See Our Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 border-t border-white/20"
          >
            {[
              { number: 35, suffix: '+', label: 'Happy Clients' },
              { number: 78, suffix: '+', label: 'Projects Done' },
              { number: 98, suffix: '%', label: 'Success Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center lg:text-left min-w-0">
                <div className="text-xl sm:text-2xl lg:text-3xl font-display font-bold gradient-text">
                  <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative w-full min-w-0"
        >
          <motion.div 
            className="relative glass-card p-4 sm:p-6 lg:p-8 animate-glow overflow-hidden w-full max-w-full"
            whileHover={{ rotateX: 2, rotateY: -2, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative w-full h-full min-h-[200px] sm:min-h-[280px] lg:min-h-[360px] aspect-video max-w-full">
              {slideshowVideos.map((video, index) => (
                <motion.div
                  key={video.videoId}
                  className="absolute inset-0 w-full h-full rounded-lg overflow-hidden cursor-pointer group"
                  initial={false}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    scale: currentSlide === index ? 1 : 0.98,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{ willChange: 'opacity, transform' }}
                  onClick={handleVideoClick}
                  whileHover={{ scale: currentSlide === index ? 1.02 : 0.98 }}
                >
                  {currentSlide === index && (
                    <iframe
                      ref={iframeRefs[index]}
                      src={video.embedUrl}
                      className="w-full h-full rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      title={video.title}
                      style={{ 
                        border: 'none',
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0
                      }}
                    />
                  )}
                  {/* Optional: Video overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  {/* Click indicator - shows on hover */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="glass-card p-4 rounded-full bg-black/50 backdrop-blur-sm"
                    >
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              ))}

              {/* Dots */}
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-10">
                {slideshowVideos.map((video, index) => (
                  <button
                    key={video.videoId}
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white shadow-glow sm:w-5' : 'bg-gray-600'}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Floating Elements - hidden on mobile to avoid overflow */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass-card p-4 hidden lg:block"
            >
              <div className="text-2xl">📈</div>
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 glass-card p-4 hidden lg:block"
            >
              <div className="text-2xl">🎯</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - smaller and lower on mobile to avoid overlap */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="glass-card p-3 cursor-pointer"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Maximized Video Modal */}
      <AnimatePresence>
        {isVideoMaximized && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={handleCloseMaximized}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-6xl mx-4 aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseMaximized}
                className="absolute -top-12 right-0 glass-card p-3 rounded-full hover:bg-white/20 transition-colors z-10"
                aria-label="Close video"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Maximized Video */}
              <iframe
                ref={maximizedIframeRef}
                src={`https://www.youtube.com/embed/${slideshowVideos[currentSlide].videoId}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&loop=0`}
                className="w-full h-full object-contain rounded-lg shadow-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={slideshowVideos[currentSlide].title}
                style={{ border: 'none' }}
              />

              {/* Navigation Buttons */}
              <button
                onClick={handlePreviousVideo}
                className="absolute left-4 top-1/2 -translate-y-1/2 glass-card p-4 rounded-full hover:bg-white/20 transition-colors z-10"
                aria-label="Previous video"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={handleNextVideo}
                className="absolute right-4 top-1/2 -translate-y-1/2 glass-card p-4 rounded-full hover:bg-white/20 transition-colors z-10"
                aria-label="Next video"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;