import { motion } from 'framer-motion';

const ClientLogos = () => {
  const clientLogos = [
    {
      id: 1,
      name: 'Client 1',
      logo: 'https://i.postimg.cc/0NMHLLYQ/images-1-removebg-preview.png'
    },
    {
      id: 2,
      name: 'Client 2',
      logo: 'https://i.postimg.cc/jj7Z8yTn/images-removebg-preview.png'
    },
    {
      id: 3,
      name: 'Client 3',
      logo: 'https://i.postimg.cc/90WbFS7y/kanchan-removebg-preview.png'
    },
    {
      id: 4,
      name: 'Client 4',
      logo: 'https://i.postimg.cc/c4C79fM1/mountainor-removebg-preview.png'
    },
    {
      id: 5,
      name: 'Client 5',
      logo: 'https://i.postimg.cc/g0Fv2Q9r/samrat-logo.png'
    },
    {
      id: 6,
      name: 'Client 6',
      logo: 'https://i.postimg.cc/XJNBZ0sN/Swaroma-Logo-1-1.png'
    },
    {
      id: 7,
      name: 'Client 7',
      logo: 'https://i.postimg.cc/4464D0PB/test-2-300x300.png'
    },
    {
      id: 8,
      name: 'Client 8',
      logo: 'https://i.postimg.cc/3wTncdxL/Venkatesh-Buildcon-Logo-removebg-preview.png'
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-center mb-4">
            Our Clients
          </h2>
        </motion.div>

        {/* Logos Container with Continuous Scrolling */}
        <div className="relative overflow-visible">
          <motion.div
            animate={{ x: [-1000, 0] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex space-x-16 items-center"
          >
            {/* First set of logos */}
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex-shrink-0 group"
              >
                <div className="bg-gray-900 p-6 min-w-[180px] h-[88px] flex items-center justify-center rounded-lg border border-gray-700 ring-1 ring-gray-800 shadow-[0_1px_3px_rgba(255,255,255,0.05)] transition-all duration-600 ease-out group-hover:border-white group-hover:ring-white/30 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2),0_0_70px_rgba(255,255,255,0.15),0_0_120px_rgba(255,255,255,0.1)]">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="w-[72px] h-[72px] object-contain filter group-hover:brightness-110 transition-all duration-500 ease-out opacity-80 group-hover:opacity-100"
                  />
                </div>
              </motion.div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {clientLogos.map((client, index) => (
              <motion.div
                key={`duplicate-${index}`}
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex-shrink-0 group"
              >
                <div className="bg-gray-900 p-6 min-w-[180px] h-[88px] flex items-center justify-center rounded-lg border border-gray-700 ring-1 ring-gray-800 shadow-[0_1px_3px_rgba(255,255,255,0.05)] transition-all duration-600 ease-out group-hover:border-white group-hover:ring-white/30 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2),0_0_70px_rgba(255,255,255,0.15),0_0_120px_rgba(255,255,255,0.1)]">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="w-[72px] h-[72px] object-contain filter group-hover:brightness-110 transition-all duration-500 ease-out opacity-80 group-hover:opacity-100"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;