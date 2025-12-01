import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Services = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="pt-20">
          <div className="container mx-auto px-6 py-16">
            <h1 className="text-5xl lg:text-6xl font-poppins font-bold text-center mb-8">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              Discover our comprehensive range of video production and media services designed to elevate your brand's visual presence.
            </p>
          </div>
          
          {/* Services Content */}
          <div className="container mx-auto px-6 pb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🎬</span>
                </div>
                <h3 className="text-xl font-poppins font-bold mb-3">Corporate Documentaries</h3>
                <p className="text-muted-foreground">
                  Showcase your brand story and achievements through compelling documentary-style videos that connect with your audience.
                </p>
              </div>
              
              <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">📺</span>
                </div>
                <h3 className="text-xl font-poppins font-bold mb-3">Ad Films</h3>
                <p className="text-muted-foreground">
                  Engaging advertisements that amplify your message and drive action from your target audience.
                </p>
              </div>
              
              <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-poppins font-bold mb-3">Video Marketing Reels</h3>
                <p className="text-muted-foreground">
                  Eye-catching reels for social media impact that boost engagement and brand visibility.
                </p>
              </div>
              
              <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-poppins font-bold mb-3">Motion Design</h3>
                <p className="text-muted-foreground">
                  Animated visuals that captivate and bring your content to life with dynamic motion graphics.
                </p>
              </div>
              
              <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">📸</span>
                </div>
                <h3 className="text-xl font-poppins font-bold mb-3">Photography</h3>
                <p className="text-muted-foreground">
                  High-quality brand and product images that showcase your offerings in the best possible light.
                </p>
              </div>
              
              <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🎤</span>
                </div>
                <h3 className="text-xl font-poppins font-bold mb-3">Corporate Interviews</h3>
                <p className="text-muted-foreground">
                  Insightful interviews that humanize your brand and build trust with your audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
