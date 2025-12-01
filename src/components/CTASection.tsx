import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main CTA Card */}
          <div className="glass-card p-12 lg:p-16 relative overflow-hidden">
            {/* Floating Elements */}
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-primary rounded-full opacity-20"
            ></motion.div>

            <motion.div
              animate={{ 
                rotate: [360, 0],
                scale: [1.1, 1, 1.1]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-primary rounded-full opacity-20"
            ></motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-6xl font-poppins font-bold mb-6">
                Ready to <span className="gradient-text">Grow</span> Your Business?
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of successful businesses that trust AD~VIBES with their digital marketing.
              </p>

              {/* Features List */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-6 mb-12"
              >
                {[
                  { icon: '🎯', text: 'Targeted Campaigns' },
                  { icon: '📊', text: 'Data-Driven Results' },
                  { icon: '🚀', text: 'Rapid Growth' }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center space-x-3 glass-button p-4"
                  >
                    <span className="text-2xl">{feature.icon}</span>
                    <span className="font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="btn-hero-primary text-lg px-10 py-6">
                    Start Your Journey
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="btn-hero-secondary text-lg px-10 py-6">
                    Schedule a Call
                  </Button>
                </motion.div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-12 pt-8 border-t border-white/20"
              >
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-2xl font-poppins font-bold gradient-text">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                  <div>
                    <div className="text-2xl font-poppins font-bold gradient-text">30-Day</div>
                    <div className="text-sm text-muted-foreground">Guarantee</div>
                  </div>
                  <div>
                    <div className="text-2xl font-poppins font-bold gradient-text">Free</div>
                    <div className="text-sm text-muted-foreground">Consultation</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;