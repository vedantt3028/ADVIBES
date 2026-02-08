import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedCounter from '@/components/AnimatedCounter';

const servicesData = [
  { icon: '📺', title: 'Ad Films', description: 'Engaging advertisements that amplify your message and drive action from your target audience.' },
  { icon: '📱', title: 'Video Marketing Reels', description: 'Eye-catching reels for social media impact that boost engagement and brand visibility.' },
  { icon: '📸', title: 'Photography', description: 'High-quality brand and product images that showcase your offerings in the best possible light.' },
  { icon: '✨', title: 'Motion Design', description: 'Animated visuals that captivate and bring your content to life with dynamic motion graphics.' },
  { icon: '🎤', title: 'Corporate Interviews', description: 'Insightful interviews that humanize your brand and build trust with your audience.' },
  { icon: '🎬', title: 'Corporate Documentaries', description: 'Showcase your brand story and achievements through compelling documentary-style videos that connect with your audience.' },
  { icon: '🎞️', title: 'Short Films', description: 'Cinematic short-form storytelling that captures emotions and delivers powerful narratives for brands and festivals.' },
  { icon: '📽️', title: 'Web Series', description: 'Engaging episodic content that keeps your audience hooked and builds lasting connection with your brand story.' }
];

const stats = [
  { number: 35, suffix: '+', label: 'Happy Clients' },
  { number: 78, suffix: '+', label: 'Projects Done' },
  { number: 98, suffix: '%', label: 'Success Rate' }
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <div className="pt-20">
          <div className="container mx-auto px-6 py-16">
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-center mb-8">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              Discover our comprehensive range of video production and media services designed to elevate your brand's visual presence.
            </p>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 md:gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-1">
                    <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Services Content */}
          <div className="container mx-auto px-6 pb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => (
                <div key={index} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
