import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const portfolioVideos = [
  {
    id: 1,
    title: 'Amruta Khanvilkar Ad',
    videoId: 'DS2gsPd-IkQ',
    gradient: 'from-gray-900 to-gray-800'
  },
  {
    id: 2,
    title: 'Upgrad Disha - Home',
    videoId: 'UrkRj6O18bU',
    gradient: 'from-gray-800 to-gray-900'
  },
  {
    id: 3,
    title: 'Island of Bliss',
    videoId: 'eVdCPNcwnfs',
    gradient: 'from-gray-900 to-gray-800'
  },
  {
    id: 4,
    title: 'Samrat Atta',
    videoId: 'sJbm9pjjA74',
    gradient: 'from-gray-800 to-gray-900'
  },
  {
    id: 5,
    title: 'Rising Spaces',
    videoId: 'Xf73E97XlBI',
    gradient: 'from-gray-900 to-gray-800'
  },
  {
    id: 6,
    title: 'Venkatesh Buildcon',
    videoId: 'Nsj8yxf4TWE',
    gradient: 'from-gray-800 to-gray-900'
  }
];

const PortfolioSection = () => {
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">
            Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our latest work and see how we've helped brands tell their stories
            through compelling video and media.
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioVideos.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, rotateX: 1.5, rotateY: -1.5 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-900/80 backdrop-blur-sm overflow-hidden border border-gray-800">
                <div className={`aspect-video bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  <iframe
                    src={`https://www.youtube.com/embed/${project.videoId}?rel=0`}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-bold group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* See More - link to full portfolio page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-6 text-base"
            onClick={() => navigate('/portfolio')}
          >
            See More
          </Button>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-hero-primary inline-block"
            >
              Start Your Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
export { portfolioVideos };
