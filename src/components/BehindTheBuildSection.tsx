import { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * BTS images: place files in public/images/behind-the-build/{projectId}/
 * Named 1.png, 2.png, ... in the order you want them displayed.
 */
const btsProjects: Array<{
  id: string;
  title: string;
  images: string[];
}> = [
  {
    id: 'kanchan-city',
    title: 'Kanchan BTS',
    images: ['1.avif', '2.avif', '3.avif', '4.avif', '5.jpg'],
  },
  {
    id: 'mountainor-selected',
    title: 'Mountainor BTS',
    images: ['1.png', '2.png', '3.jpg', '4.png', '5.jpg', '6.png'],
  },
  {
    id: 'samrat-bts',
    title: 'SAMRAT BTS',
    images: ['1.jpg', '2.jpg', '3.avif', '4.avif', '5.avif', '6.jpg', '7.jpg', '8.avif'],
  },
  {
    id: 'crown-estate',
    title: 'Crown Estate BTS',
    images: ['1.jpg', '2.avif', '3.avif', '4.jpg', '5.jpg'],
  },
];

const getImageSrc = (projectId: string, filename: string) =>
  `/images/behind-the-build/${projectId}/${filename}`;

const BTSImage = ({ src, alt }: { src: string; alt: string }) => {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="w-full h-full min-h-[140px] flex items-center justify-center bg-gray-800/80 text-muted-foreground text-xs text-center px-2">
        Add image
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      onError={() => setFailed(true)}
    />
  );
};

const BehindTheBuildSection = () => {
  return (
    <section id="behind-the-build" className="py-16 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">
            Behind the Build
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A peek into our process—see how we bring ideas to life on set and in the edit.
          </p>
        </motion.div>

        <div className="space-y-10">
          {btsProjects.map((project, projectIndex) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-display font-semibold text-white mb-4 px-1">
                {project.title}
              </h3>
              {project.images.length > 0 ? (
                <div className="relative overflow-hidden rounded-xl">
                  <motion.div
                    animate={{
                      x: [0, -(project.images.length * (220 + 16))],
                    }}
                    transition={{
                      duration: 25 + project.images.length * 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="flex gap-4 w-max"
                  >
                    {project.images.map((filename, imgIndex) => (
                      <motion.div
                        key={`${filename}-${imgIndex}`}
                        whileHover={{ scale: 1.03, y: -4 }}
                        className="flex-shrink-0 w-[220px] h-[220px] rounded-xl overflow-hidden border border-gray-800 bg-gray-900/80 shadow-lg"
                      >
                        <BTSImage
                          src={getImageSrc(project.id, filename)}
                          alt={`${project.title} BTS ${imgIndex + 1}`}
                        />
                      </motion.div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {project.images.map((filename, imgIndex) => (
                      <motion.div
                        key={`dup-${filename}-${imgIndex}`}
                        whileHover={{ scale: 1.03, y: -4 }}
                        className="flex-shrink-0 w-[220px] h-[220px] rounded-xl overflow-hidden border border-gray-800 bg-gray-900/80 shadow-lg"
                      >
                        <BTSImage
                          src={getImageSrc(project.id, filename)}
                          alt={`${project.title} BTS ${imgIndex + 1}`}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              ) : (
                <div className="flex items-center justify-center py-8 rounded-xl bg-gray-900/40 border border-gray-800 border-dashed text-muted-foreground text-sm">
                  Add BTS images to <code className="px-1.5 py-0.5 bg-gray-800 rounded">public/images/behind-the-build/{project.id}/</code>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BehindTheBuildSection;
export { btsProjects, getImageSrc };
