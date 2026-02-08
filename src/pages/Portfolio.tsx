import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { portfolioVideos } from '@/components/PortfolioSection';

const Portfolio = () => {
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
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              Explore our diverse collection of successful projects and creative work that have brought brands to life.
            </p>
          </div>

          {/* Portfolio Videos */}
          <div className="container mx-auto px-6 pb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioVideos.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="glass-card overflow-hidden border border-gray-800 hover:shadow-xl transition-all duration-300">
                    <div className={`aspect-video bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                      <iframe
                        src={`https://www.youtube.com/embed/${project.videoId}?rel=0`}
                        title={project.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-display font-bold group-hover:text-white transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-display font-bold mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Let's discuss how we can help bring your vision to life with our
                  video production and creative expertise.
                </p>
                <Link to="/contact" className="btn-hero-primary inline-block">
                  Start Your Project
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
