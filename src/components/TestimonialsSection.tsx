import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Vaibhav Bhavaskar',
      role: 'CEO',
      company: 'Brand Company',
      avatar: '👨‍💼',
      quote: 'The ad films created have truly captured the essence of our brand. They went beyond just visuals; the story they crafted helped us connect with a much wider audience. We\'ve had excellent feedback from our customers, and it\'s clear that these films helped us stand out in a crowded market. Highly recommend them for anyone looking to make an impact!',
      rating: 5
    },
    {
      name: 'Amar Mote',
      role: 'Marketing Director',
      company: 'Growth Company',
      avatar: '👨‍💼',
      quote: 'We approached Ad vibes for an ad film, and they exceeded our expectations. The quality of production was top-notch, and they handled everything with such professionalism. The final product was impressive, with every detail carefully thought out. Our brand received amazing visibility thanks to their work, & we\'re looking forward to more projects with them!',
      rating: 5
    },
    {
      name: 'Tushar Genji',
      role: 'Founder',
      company: 'Startup Company',
      avatar: '👨‍💼',
      quote: 'Creating an ad film that feels genuine and compelling isn\'t easy, but ad~vibes nailed it. They told our brand story in a way that was engaging and impactful. The ad film helped us connect emotionally with our audience, and we saw a clear boost in brand recognition. Working with them has been one of our best investments.',
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
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
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with AD~VIBES Media House.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                rotateX: 2,
                rotateY: -2,
                transition: { type: "spring", stiffness: 180, damping: 16 }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card className="h-full border-0 shadow-lg bg-gray-900/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300 border border-gray-800">
                <CardContent className="p-8">
                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-white/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default TestimonialsSection;