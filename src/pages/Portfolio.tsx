import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Main portfolio page only: full list (user-provided 11 + unique from hero/home portfolio)
const fullPortfolioVideos = [
  { id: 1, title: '', videoId: 'Xf73E97XlBI', gradient: 'from-gray-900 to-gray-800' },
  { id: 2, title: '', videoId: 'IjFzZBgw-NM', gradient: 'from-gray-800 to-gray-900' },
  { id: 3, title: '', videoId: 'Nn8JJinFd0Q', gradient: 'from-gray-900 to-gray-800' },
  { id: 4, title: '', videoId: 'UrkRj6O18bU', gradient: 'from-gray-800 to-gray-900' },
  { id: 5, title: '', videoId: 'wrYAl9_Kjo8', gradient: 'from-gray-900 to-gray-800' },
  { id: 6, title: '', videoId: 'NXluB57O8Uo', gradient: 'from-gray-800 to-gray-900' },
  { id: 7, title: '', videoId: 'RAlEHYWH038', gradient: 'from-gray-900 to-gray-800' },
  { id: 8, title: '', videoId: 'UZQgz535zjg', gradient: 'from-gray-800 to-gray-900' },
  { id: 9, title: '', videoId: 'mAE1rb3LdXU', gradient: 'from-gray-900 to-gray-800' },
  { id: 10, title: '', videoId: '-z39IxThO0w', gradient: 'from-gray-800 to-gray-900' },
  { id: 11, title: '', videoId: 'w4u56oxGFac', gradient: 'from-gray-900 to-gray-800' },
  { id: 12, title: 'Amruta Khanvilkar Ad', videoId: 'DS2gsPd-IkQ', gradient: 'from-gray-800 to-gray-900' },
  { id: 13, title: 'Island of Bliss', videoId: 'eVdCPNcwnfs', gradient: 'from-gray-900 to-gray-800' },
  { id: 14, title: 'Samrat Atta', videoId: 'sJbm9pjjA74', gradient: 'from-gray-800 to-gray-900' },
  { id: 15, title: 'Venkatesh Buildcon', videoId: 'Nsj8yxf4TWE', gradient: 'from-gray-900 to-gray-800' },
];

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
              {fullPortfolioVideos.map((project, index) => (
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
                    {project.title ? (
                      <div className="p-6">
                        <h3 className="text-xl font-display font-bold group-hover:text-white transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                    ) : null}
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
