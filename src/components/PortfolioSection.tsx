import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: '🛒',
      description: 'A modern e-commerce platform with advanced features like AI-powered recommendations and seamless payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      image: '🏦',
      description: 'Secure and user-friendly mobile banking application with biometric authentication and real-time notifications.',
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      link: '#'
    },
    {
      id: 3,
      title: 'AI Chatbot Platform',
      category: 'AI/ML',
      image: '🤖',
      description: 'Intelligent chatbot platform that handles customer queries and provides personalized support.',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL'],
      link: '#'
    },
    {
      id: 4,
      title: 'Real Estate Dashboard',
      category: 'Web Development',
      image: '🏠',
      description: 'Comprehensive dashboard for real estate management with analytics and property tracking.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Chart.js'],
      link: '#'
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      category: 'Mobile Development',
      image: '💪',
      description: 'Fitness app that tracks workouts, nutrition, and provides personalized training plans.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'HealthKit'],
      link: '#'
    },
    {
      id: 6,
      title: 'Supply Chain Analytics',
      category: 'Data Analytics',
      image: '📊',
      description: 'Advanced analytics platform for supply chain optimization and predictive insights.',
      technologies: ['Python', 'Pandas', 'Tableau', 'AWS'],
      link: '#'
    }
  ];

  const categories = ['All', 'Web Development', 'Mobile Development', 'AI/ML', 'Data Analytics'];

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

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className="px-6 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              {category}
            </Badge>
          ))}
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
            >
              <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur-sm overflow-hidden">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/80 text-foreground">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      View Project →
                    </span>
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-sm">→</span>
                    </div>
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
