import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedCounter from '@/components/AnimatedCounter';
import { Button } from '@/components/ui/button';
import { services } from '@/lib/services';

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleScheduleConsultation = () => {
    navigate('/contact');
  };

  const handleSeeWorks = (slug: string) => {
    navigate(`/works/${slug}`);
  };

  const stats = [
    { number: 35, suffix: '+', label: 'Happy Clients' },
    { number: 78, suffix: '+', label: 'Projects Done' },
    { number: 98, suffix: '%', label: 'Success Rate' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive video production and media solutions designed to elevate your brand's visual presence
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-6 md:gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-1">
                <AnimatedCounter value={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                rotateX: 2,
                rotateY: -2,
                transition: { type: "spring", stiffness: 180, damping: 16 }
              }}
              className="group"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="glass-card p-8 h-full transition-all duration-300 group-hover:shadow-glow">
                {/* Icon */}
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* See Works button */}
                <div className="mb-6">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                    onClick={() => handleSeeWorks(service.slug)}
                  >
                    See Works
                  </Button>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-glass pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-display font-bold mb-4">
              Ready to <span className="gradient-text">Transform</span> Your Brand?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how our video production services can help you achieve your marketing goals
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-hero-primary"
              onClick={handleScheduleConsultation}
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-white/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-white/3 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ServicesSection;