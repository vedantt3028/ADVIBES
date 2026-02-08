import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <div className="pt-20">
          <div className="container mx-auto px-6 py-16">
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-center mb-8">
              About <span className="gradient-text">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              Learn more about our mission, values, and the team behind our digital marketing success.
            </p>
          </div>
          
          {/* About Content */}
          <div className="container mx-auto px-6 pb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                  We're a team of passionate digital marketers
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At AD~VIBES Media House, we believe in the power of data-driven creativity. Our mission is to help businesses grow through innovative digital marketing strategies that deliver measurable results.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  With years of experience in the industry, we've helped hundreds of businesses transform their digital presence and achieve their growth goals.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-display font-bold gradient-text mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-display font-bold gradient-text mb-2">100+</div>
                    <div className="text-sm text-muted-foreground">Projects Done</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="glass-card p-8">
                  <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                    <span className="text-4xl">🎯</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Story Section */}
            <div className="glass-card p-8 mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-8 text-center">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>AD~VIBES Media House</strong> is a Dynamic Advertising company committed to elevating brands through comprehensive services tailored to meet your needs. Our key services encompass a spectrum of strategies:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Video Advertising</h4>
                        <p className="text-sm text-muted-foreground">Producing captivating and impactful video content to engage audiences across various platforms.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Advertising Campaigns</h4>
                        <p className="text-sm text-muted-foreground">Designing and implementing targeted and effective advertising strategies to maximize reach and conversion.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Television Commercials</h4>
                        <p className="text-sm text-muted-foreground">Crafting compelling and memorable TV commercials that resonate with viewers.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Performance Marketing</h4>
                        <p className="text-sm text-muted-foreground">Utilizing data-driven approaches to ensure optimal ROI and measurable results for your campaigns.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Motion Design Ads</h4>
                        <p className="text-sm text-muted-foreground">Creating visually stunning and attention-grabbing motion graphics to captivate audiences.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Product Videos and Photography</h4>
                        <p className="text-sm text-muted-foreground">We provide specialized services dedicated to creating enticing product videos and high-resolution photography, ensuring your products are showcased in the best light across various platforms.</p>
                      </div>
                    </div>
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

export default About;
