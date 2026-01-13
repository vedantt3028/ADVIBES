import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Portfolio = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <div className="pt-20">
          <div className="container mx-auto px-6 py-16">
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-center mb-8">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              Explore our diverse collection of successful projects and creative solutions that have driven real results for our clients.
            </p>
          </div>
          
          {/* Portfolio Content */}
          <div className="container mx-auto px-6 pb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-card overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-4xl">🏢</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-2">E-commerce Brand</h3>
                  <p className="text-muted-foreground mb-4">
                    Complete digital transformation for a leading retail brand, increasing online sales by 300%.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Social Media</span>
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">PPC</span>
                  </div>
                </div>
              </div>
              
              <div className="glass-card overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="h-48 bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-4xl">💼</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-2">SaaS Platform</h3>
                  <p className="text-muted-foreground mb-4">
                    Lead generation campaign that resulted in 50+ qualified leads and 25% conversion rate.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Content Marketing</span>
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">SEO</span>
                  </div>
                </div>
              </div>
              
              <div className="glass-card overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <span className="text-4xl">🎯</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-2">Healthcare Startup</h3>
                  <p className="text-muted-foreground mb-4">
                    Brand awareness campaign that increased social media engagement by 400% in 6 months.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Branding</span>
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Social Media</span>
                  </div>
                </div>
              </div>
              
              <div className="glass-card overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-4xl">🚗</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-2">Automotive Company</h3>
                  <p className="text-muted-foreground mb-4">
                    Local SEO campaign that improved search rankings and increased dealership visits by 150%.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Local SEO</span>
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Google Ads</span>
                  </div>
                </div>
              </div>
              
              <div className="glass-card overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="h-48 bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-4xl">🍕</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-2">Restaurant Chain</h3>
                  <p className="text-muted-foreground mb-4">
                    Social media campaign that increased online orders by 200% and improved customer engagement.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Social Media</span>
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Influencer Marketing</span>
                  </div>
                </div>
              </div>
              
              <div className="glass-card overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <span className="text-4xl">📚</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-2">Education Platform</h3>
                  <p className="text-muted-foreground mb-4">
                    Content marketing strategy that increased organic traffic by 350% and student enrollments by 180%.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Content Marketing</span>
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Email Marketing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
