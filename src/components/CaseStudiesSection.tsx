import { motion } from 'framer-motion';

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: 'E-Commerce Growth',
      client: 'Fashion Retailer',
      metric: '+285%',
      description: 'Revenue Growth',
      details: 'Increased online sales through strategic PPC campaigns and conversion optimization.',
      image: '🛒',
      color: 'from-pink-400 to-purple-600'
    },
    {
      title: 'Brand Awareness',
      client: 'Tech Startup',
      metric: '+150%',
      description: 'Social Engagement',
      details: 'Built brand presence from zero to 100K followers across multiple platforms.',
      image: '🚀',
      color: 'from-blue-400 to-cyan-600'
    },
    {
      title: 'SEO Success',
      client: 'Local Business',
      metric: '+400%',
      description: 'Organic Traffic',
      details: 'Dominated local search results and increased website visibility.',
      image: '📍',
      color: 'from-green-400 to-blue-600'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
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
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real clients. See how we've helped businesses achieve their goals.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                rotateY: 6,
                rotateX: 2,
                transition: { type: "spring", stiffness: 180, damping: 16 }
              }}
              viewport={{ once: true }}
              className="group perspective-1000"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="glass-card p-8 h-full relative overflow-hidden transition-all duration-300 group-hover:shadow-glow">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-glass`}></div>
                
                {/* Icon */}
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {study.image}
                </div>

                {/* Metric */}
                <div className="mb-4">
                  <div className="text-4xl font-display font-bold gradient-text mb-2">
                    {study.metric}
                  </div>
                  <div className="text-lg font-semibold text-foreground">
                    {study.description}
                  </div>
                </div>

                {/* Title & Client */}
                <h3 className="text-xl font-display font-semibold mb-2 text-foreground">
                  {study.title}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {study.client}
                </p>

                {/* Details */}
                <p className="text-muted-foreground leading-relaxed">
                  {study.details}
                </p>

                {/* Learn More Link */}
                <motion.div
                  className="mt-6 flex items-center text-primary font-medium cursor-pointer group-hover:translate-x-2 transition-transform duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-hero-secondary"
          >
            View All Case Studies
          </motion.button>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-1/4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
    </section>
  );
};

export default CaseStudiesSection;