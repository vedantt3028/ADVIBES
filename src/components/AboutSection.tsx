import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedCounter from '@/components/AnimatedCounter';

const AboutSection = () => {
  const stats = [
    { number: 50, suffix: '+', label: 'Happy Clients' },
    { number: 100, suffix: '+', label: 'Projects Done' },
    { number: 98, suffix: '%', label: 'Success Rate' },
    { number: 24, suffix: '/7', label: 'Support' },
  ];

  const values = [
    {
      icon: '🎬',
      title: 'Creative Excellence',
      description: 'We deliver stunning visual content that captivates and engages your audience.'
    },
    {
      icon: '🤝',
      title: 'Client Partnership',
      description: 'We build long-term relationships based on trust and mutual success.'
    },
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality.'
    },
    {
      icon: '💎',
      title: 'Quality Assured',
      description: 'Every project meets our high standards of excellence.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            About AD~VIBES Media House
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a dynamic advertising company committed to elevating brands through comprehensive 
            video production and media services tailored to meet your needs.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg bg-gray-900/80 backdrop-blur-sm border border-gray-800">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Our Story
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              AD~VIBES Media House is a Dynamic Advertising company committed to elevating brands 
              through comprehensive services tailored to meet your needs. Our key services encompass 
              a spectrum of strategies including Video Advertising, Advertising Campaigns, Television 
              Commercials, Performance Marketing, Motion Design Ads, and Product Videos & Photography.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We specialize in producing captivating and impactful video content that engages audiences 
              across various platforms, while ensuring optimal ROI and measurable results for your campaigns.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">🎬</span>
              </div>
              <div>
                <div className="font-semibold">Expert Team</div>
                <div className="text-sm text-muted-foreground">Creative professionals</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-80 bg-gray-900 rounded-2xl flex items-center justify-center border border-gray-700">
              <div className="text-center">
                <div className="text-6xl mb-4">🎬</div>
                <div className="text-xl font-semibold">Video Production</div>
                <div className="text-muted-foreground">Transforming brands through visual storytelling</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
