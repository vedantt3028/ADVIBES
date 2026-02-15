import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getServiceBySlug } from '@/lib/services';

/**
 * Service-specific works page. Add video works per service later
 * (e.g. via a map serviceSlug -> video IDs or a shared works config).
 */
const ServiceWorks = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const navigate = useNavigate();
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceSlug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar />
        <main className="pt-20">
          <div className="container mx-auto px-6 py-24 text-center">
            <h1 className="text-3xl font-display font-bold mb-4">Service not found</h1>
            <p className="text-muted-foreground mb-6">The service you’re looking for doesn’t exist.</p>
            <button
              type="button"
              onClick={() => navigate('/services')}
              className="text-white underline hover:no-underline"
            >
              Back to Services
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black overflow-x-hidden w-full">
      <Navbar />
      <main>
        <div className="pt-16 sm:pt-20 pb-16">
          {/* Service header */}
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-4xl sm:text-5xl mb-4 inline-block" aria-hidden>
                {service.icon}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4">
                {service.title} <span className="gradient-text">Works</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {service.description}
              </p>
            </motion.div>

            {/* Works section – photos, videos, or placeholder */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-display font-semibold mb-6 text-center sm:text-left">
                Our {service.title} portfolio
              </h2>
              {service.photos && service.photos.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.photos.map((photo, index) => (
                    <motion.div
                      key={photo.url}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="glass-card overflow-hidden rounded-xl border border-white/10"
                    >
                      <div className="aspect-[4/3] bg-black/40 relative">
                        <img
                          src={photo.url}
                          alt={photo.title ?? `Photography ${index + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      {photo.title && (
                        <div className="p-4">
                          <p className="text-sm text-muted-foreground font-medium">{photo.title}</p>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              ) : service.works && service.works.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.works.map((work, index) => (
                    <motion.div
                      key={work.videoId}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="glass-card overflow-hidden rounded-xl border border-white/10"
                    >
                      <div className="aspect-video bg-black/40">
                        <iframe
                          src={`https://www.youtube.com/embed/${work.videoId}?rel=0`}
                          title={work.title ?? `Work ${index + 1}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                      {work.title && (
                        <div className="p-4">
                          <p className="text-sm text-muted-foreground font-medium">{work.title}</p>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="rounded-xl glass-card p-8 sm:p-12 text-center">
                  <p className="text-muted-foreground mb-6">
                    Service-related works will be added here soon.
                  </p>
                  <div className="aspect-video max-w-3xl mx-auto rounded-lg bg-white/5 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Works for {service.title} will appear here</span>
                  </div>
                </div>
              )}
            </motion.section>

            {/* Back to services */}
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={() => navigate('/services')}
                className="text-white/80 hover:text-white underline hover:no-underline text-sm"
              >
                ← Back to all services
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceWorks;
