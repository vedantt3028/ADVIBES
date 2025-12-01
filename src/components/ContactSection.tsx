import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactInfo as contactConfig, socialLinks } from '@/lib/contact';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: '📍',
      title: 'Our Locations',
      details: (contactConfig.addresses && contactConfig.addresses.length > 0)
        ? contactConfig.addresses.join('\n\n')
        : contactConfig.address
    },
    {
      icon: '📧',
      title: 'Email Us',
      details: contactConfig.email
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: contactConfig.phone
    },
    {
      icon: '⏰',
      title: 'Business Hours',
      details: contactConfig.businessHours
    }
  ];

  const services = [
    'Web Development',
    'Mobile App Development',
    'Digital Marketing',
    'UI/UX Design',
    'Cloud Solutions',
    'AI & Machine Learning'
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can help bring your 
            digital vision to life. We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl bg-white/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input
                        type="text"
                        placeholder="John"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input
                        type="text"
                        placeholder="Doe"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <Input
                      type="text"
                      placeholder="Your Company Name"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Interest</label>
                    <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service.toLowerCase().replace(/\s+/g, '-')}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Details</label>
                    <Textarea
                      placeholder="Tell us about your project, goals, and requirements..."
                      className="w-full min-h-[120px]"
                    />
                  </div>
                  
                  <Button className="w-full btn-hero-primary">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">{info.icon}</div>
                        <div>
                          <h4 className="font-semibold text-lg mb-1">{info.title}</h4>
                          <p className="text-muted-foreground whitespace-pre-line">{info.details}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-4">Why Choose AD~VIBES?</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <span className="text-primary">✓</span>
                      <span>Expert team with 5+ years experience</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-primary">✓</span>
                      <span>100+ successful projects delivered</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-primary">✓</span>
                      <span>24/7 support and maintenance</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-primary">✓</span>
                      <span>Competitive pricing and flexible packages</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                             <div className="flex justify-center space-x-4">
                 {[
                   { 
                     name: 'Facebook', 
                     url: socialLinks.facebook, 
                     color: 'from-blue-500 to-blue-600',
                     icon: (
                       <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                       </svg>
                     )
                   },
                   { 
                     name: 'Instagram', 
                     url: socialLinks.instagram, 
                     color: 'from-pink-500 to-purple-600',
                     icon: (
                       <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.875-1.418-2.026-1.418-3.323s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.323z"/>
                       </svg>
                     )
                   },
                   { 
                     name: 'Email', 
                     url: socialLinks.email(), 
                     color: 'from-green-500 to-green-600',
                     icon: (
                       <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z"/>
                       </svg>
                     )
                   }
                 ].map((social) => (
                   <motion.div
                     key={social.name}
                     whileHover={{ scale: 1.1, y: -2 }}
                     className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-300`}
                     onClick={() => window.open(social.url, '_blank')}
                     title={social.name}
                   >
                     {social.icon}
                   </motion.div>
                 ))}
               </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <div className="text-xl font-semibold">Interactive Map</div>
                <div className="text-muted-foreground">Our office location</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
