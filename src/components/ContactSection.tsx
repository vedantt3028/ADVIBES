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
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: 'Instagram', url: socialLinks.instagram, className: 'social-instagram', icon: 'instagram' },
                  { name: 'YouTube', url: socialLinks.youtube, className: 'social-youtube', icon: 'youtube' },
                  { name: 'Facebook', url: socialLinks.facebook, className: 'social-facebook', icon: 'facebook' },
                  { name: 'LinkedIn', url: socialLinks.linkedin, className: 'social-linkedin', icon: 'linkedin' },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => window.open(item.url, '_blank')}
                    className={`social-btn ${item.className}`}
                    title={item.name}
                    aria-label={item.name}
                  >
                    <span className="icon">
                      {item.icon === 'instagram' && (
                        <svg
                          className="w-6 h-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2" fill="none"/>
                          <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" fill="none"/>
                          <circle cx="17" cy="7" r="1.5" fill="white"/>
                        </svg>
                      )}
                      {item.icon === 'youtube' && (
                        <svg className="w-5 h-5" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                          <path fill="white" d="M549.655 148.28c-6.281-23.64-24.041-42.396-47.655-48.685C462.923 85 288 85 288 85S113.077 85 74 99.595c-23.614 6.289-41.374 25.045-47.655 48.685-12.614 47.328-12.614 147.717-12.614 147.717s0 100.39 12.614 147.718c6.281 23.64 24.041 42.396 47.655 48.684C113.077 427 288 427 288 427s174.923 0 214-14.595c23.614-6.289 41.374-25.045 47.655-48.685 12.614-47.328 12.614-147.718 12.614-147.718s0-100.389-12.614-147.717zM240 336V176l144 80-144 80z"/>
                        </svg>
                      )}
                      {item.icon === 'facebook' && (
                        <svg className="w-5 h-5" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                          <path fill="white" d="M279.14 288l14.22-92.66h-88.91V129.08c0-25.35 12.42-50.06 52.24-50.06H296V6.26S259.5 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72V195.3H22.89V288h81.39v224h100.17V288z"/>
                        </svg>
                      )}
                      {item.icon === 'linkedin' && (
                        <svg className="w-5 h-5" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                          <path fill="white" d="M100.28 448H7.4V148.9h92.88zm-46.44-341a53.79 53.79 0 1 1 53.79-53.8 53.8 53.8 0 0 1-53.8 53.8zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.24-79.2-48.3 0-55.7 37.7-55.7 76.6V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.2 87.8-48.2 94 0 111.2 61.9 111.2 142.3V448z"/>
                        </svg>
                      )}
                    </span>
                    <span className="text">{item.name}</span>
                  </button>
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
