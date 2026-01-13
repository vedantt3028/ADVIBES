import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Brand',
      icon: '🏢',
      description: 'Complete digital transformation for a leading retail brand, increasing online sales by 300%.',
      tags: ['Social Media', 'PPC'],
      gradient: 'from-primary/20 to-secondary/20'
    },
    {
      id: 2,
      title: 'SaaS Platform',
      icon: '💼',
      description: 'Lead generation campaign that resulted in 50+ qualified leads and 25% conversion rate.',
      tags: ['Content Marketing', 'SEO'],
      gradient: 'from-secondary/20 to-accent/20'
    },
    {
      id: 3,
      title: 'Healthcare Startup',
      icon: '🎯',
      description: 'Brand awareness campaign that increased social media engagement by 400% in 6 months.',
      tags: ['Branding', 'Social Media'],
      gradient: 'from-accent/20 to-primary/20'
    },
    {
      id: 4,
      title: 'Automotive Company',
      icon: '🚗',
      description: 'Local SEO campaign that improved search rankings and increased dealership visits by 150%.',
      tags: ['Local SEO', 'Google Ads'],
      gradient: 'from-primary/20 to-secondary/20'
    },
    {
      id: 5,
      title: 'Restaurant Chain',
      icon: '🍕',
      description: 'Social media campaign that increased online orders by 200% and improved customer engagement.',
      tags: ['Social Media', 'Influencer Marketing'],
      gradient: 'from-secondary/20 to-accent/20'
    },
    {
      id: 6,
      title: 'Education Platform',
      icon: '📚',
      description: 'Content marketing strategy that increased organic traffic by 350% and student enrollments by 180%.',
      tags: ['Content Marketing', 'Email Marketing'],
      gradient: 'from-accent/20 to-primary/20'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our latest projects and see how we've helped businesses achieve their digital goals 
            through innovative technology solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, rotateX: 1.5, rotateY: -1.5 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur-sm overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-5xl group-hover:scale-105 transition-transform duration-300`}>
                  {project.icon}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help bring your digital vision to life with our 
              expertise and innovative solutions.
            </p>
            <button className="btn-hero-primary">
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
