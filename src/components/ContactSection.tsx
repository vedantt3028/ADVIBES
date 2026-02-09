import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactInfo as contactConfig, socialLinks } from '@/lib/contact';
import {
  validateName,
  validateEmail,
  validatePhone,
  validateCompany,
  validateMessage,
  validateService,
  checkRateLimit,
  safeOpenUrl,
} from '@/lib/security';

const ContactSection = () => {
  // Form state with validation
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    // Honeypot field (hidden from users, bots will fill it)
    website: '', // Security: honeypot field to catch bots
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle input changes with validation
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  // Real-time validation on blur
  const handleBlur = (field: string, value: string) => {
    let result: { valid: boolean; error?: string } = { valid: true };

    switch (field) {
      case 'firstName':
        result = validateName(value);
        break;
      case 'lastName':
        result = validateName(value);
        break;
      case 'email':
        result = validateEmail(value);
        break;
      case 'phone':
        result = validatePhone(value);
        break;
      case 'company':
        result = validateCompany(value);
        break;
      case 'service':
        result = validateService(value);
        break;
      case 'message':
        result = validateMessage(value);
        break;
      default:
        return;
    }

    if (!result.valid) {
      setErrors(prev => ({ ...prev, [field]: result.error || 'Invalid input' }));
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  // Validate all form fields
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Validate first name
    const firstNameResult = validateName(formData.firstName);
    if (!firstNameResult.valid) {
      newErrors.firstName = firstNameResult.error || 'Invalid first name';
    }

    // Validate last name
    const lastNameResult = validateName(formData.lastName);
    if (!lastNameResult.valid) {
      newErrors.lastName = lastNameResult.error || 'Invalid last name';
    }

    // Validate email
    const emailResult = validateEmail(formData.email);
    if (!emailResult.valid) {
      newErrors.email = emailResult.error || 'Invalid email';
    }

    // Validate phone
    const phoneResult = validatePhone(formData.phone);
    if (!phoneResult.valid) {
      newErrors.phone = phoneResult.error || 'Invalid phone';
    }

    // Validate company
    const companyResult = validateCompany(formData.company);
    if (!companyResult.valid) {
      newErrors.company = companyResult.error || 'Invalid company name';
    }

    // Validate service
    const serviceResult = validateService(formData.service);
    if (!serviceResult.valid) {
      newErrors.service = serviceResult.error || 'Please select a service';
    }

    // Validate message
    const messageResult = validateMessage(formData.message);
    if (!messageResult.valid) {
      newErrors.message = messageResult.error || 'Invalid message';
    }

    // Security: Check honeypot field (if filled, it's likely a bot)
    if (formData.website.trim() !== '') {
      // Silently reject - don't show error to avoid teaching bots
      console.warn('Form submission rejected: honeypot field filled');
      return false;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission with security checks
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Security: Rate limiting check
    if (!checkRateLimit('contact_form', 3, 60000)) {
      setErrors({ submit: 'Too many submission attempts. Please try again later.' });
      return;
    }

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Security: Sanitize all inputs before sending
      const sanitizedData = {
        firstName: validateName(formData.firstName).sanitized,
        lastName: validateName(formData.lastName).sanitized,
        email: validateEmail(formData.email).sanitized,
        phone: validatePhone(formData.phone).sanitized,
        company: validateCompany(formData.company).sanitized,
        service: validateService(formData.service).sanitized,
        message: validateMessage(formData.message).sanitized,
      };

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            first_name: sanitizedData.firstName,
            last_name: sanitizedData.lastName,
            email: sanitizedData.email,
            phone: sanitizedData.phone,
            company: sanitizedData.company,
            service: sanitizedData.service,
            message: sanitizedData.message,
          },
          { publicKey }
        );
      } else {
        console.log('Form submission (no EmailJS config):', sanitizedData);
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setSubmitSuccess(true);
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
        website: '',
      });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      // Security: Don't expose internal error details
      setErrors({ submit: 'An error occurred. Please try again later.' });
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // WhatsApp icon component
  const WhatsAppIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );

  const handleWhatsAppClick = () => {
    // Get WhatsApp number, fallback to phone number if not set
    let whatsappNumber = (contactConfig as any).whatsapp || contactConfig.phone;
    // Remove all non-digit characters and ensure country code is present
    whatsappNumber = whatsappNumber.replace(/\D/g, '');
    // If number doesn't start with country code, add India code (91)
    if (!whatsappNumber.startsWith('91') && whatsappNumber.length === 10) {
      whatsappNumber = '91' + whatsappNumber;
    }
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    safeOpenUrl(whatsappUrl, '_blank');
  };

  // Colored icon components for contact cards (matching reference design)
  const MapPinIcon = () => (
    <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
  const MailIcon = () => (
    <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
  const PhoneIcon = () => (
    <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
  const ClockIcon = () => (
    <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );

  const contactInfo: Array<{
    iconEl: React.ReactNode;
    title: string;
    details: string;
    onClick?: () => void;
    isClickable?: boolean;
  }> = [
    {
      iconEl: <MapPinIcon />,
      title: 'Our Locations',
      details: (contactConfig.addresses && contactConfig.addresses.length > 0)
        ? contactConfig.addresses.join('\n\n')
        : contactConfig.address,
      onClick: undefined
    },
    {
      iconEl: <MailIcon />,
      title: 'Email Us',
      details: contactConfig.email,
      onClick: undefined
    },
    {
      iconEl: <PhoneIcon />,
      title: 'Call Us',
      details: contactConfig.phone,
      onClick: undefined
    },
    {
      iconEl: <div className="text-[#25D366]"><WhatsAppIcon className="w-8 h-8" /></div>,
      title: 'Chat with Us',
      details: 'Click to start a conversation on WhatsApp',
      onClick: handleWhatsAppClick,
      isClickable: true
    },
    {
      iconEl: <ClockIcon />,
      title: 'Business Hours',
      details: contactConfig.businessHours,
      onClick: undefined
    }
  ];

  const services = [
    'Ad Films',
    'Video Marketing Reels',
    'Photography',
    'Motion Design',
    'Corporate Interviews',
    'Corporate Documentaries',
    'Short Films',
    'Web Series'
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
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
            <Card className="border-0 shadow-xl bg-[#1D1F28] border border-gray-800 rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-display font-bold mb-6 text-white">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Security: Honeypot field - hidden from users, bots will fill it */}
                  <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
                    <label htmlFor="website">Website (leave blank)</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        className={`w-full bg-gray-900/80 border rounded-lg text-foreground placeholder:text-muted-foreground transition-all ${errors.firstName ? 'border-red-500 focus:ring-red-500' : 'border-gray-700'}`}
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        onBlur={(e) => handleBlur('firstName', e.target.value)}
                        maxLength={100}
                        required
                      />
                      {errors.firstName && (
                        <p className="text-sm text-red-400 mt-1 flex items-center gap-1">
                          <span>⚠</span>
                          {errors.firstName}
                        </p>
                      )}
                      {!errors.firstName && formData.firstName && (
                        <p className="text-sm text-green-400 mt-1 flex items-center gap-1">
                          <span>✓</span>
                          Looks good!
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        className={`w-full bg-gray-900/80 border rounded-lg text-foreground placeholder:text-muted-foreground transition-all ${errors.lastName ? 'border-red-500 focus:ring-red-500' : 'border-gray-700'}`}
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        onBlur={(e) => handleBlur('lastName', e.target.value)}
                        maxLength={100}
                        required
                      />
                      {errors.lastName && (
                        <p className="text-sm text-red-400 mt-1 flex items-center gap-1">
                          <span>⚠</span>
                          {errors.lastName}
                        </p>
                      )}
                      {!errors.lastName && formData.lastName && (
                        <p className="text-sm text-green-400 mt-1 flex items-center gap-1">
                          <span>✓</span>
                          Looks good!
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className={`w-full bg-gray-900/80 border rounded-lg text-foreground placeholder:text-muted-foreground transition-all ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-700'}`}
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      onBlur={(e) => handleBlur('email', e.target.value)}
                      maxLength={254}
                      required
                    />
                    {errors.email && (
                      <p className="text-sm text-red-400 mt-1 flex items-center gap-1">
                        <span>⚠</span>
                        {errors.email}
                      </p>
                    )}
                    {!errors.email && formData.email && (
                      <p className="text-sm text-green-400 mt-1 flex items-center gap-1">
                        <span>✓</span>
                        Valid email format
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 8605816066"
                      className={`w-full bg-gray-900/80 border rounded-lg text-foreground placeholder:text-muted-foreground transition-all ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-700'}`}
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      onBlur={(e) => handleBlur('phone', e.target.value)}
                      maxLength={20}
                      required
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-400 mt-1 flex items-center gap-1">
                        <span>⚠</span>
                        {errors.phone}
                      </p>
                    )}
                    {!errors.phone && formData.phone && (
                      <p className="text-sm text-green-400 mt-1 flex items-center gap-1">
                        <span>✓</span>
                        Valid phone number
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Your Company Name"
                      className={`w-full bg-gray-900/80 border rounded-lg text-foreground placeholder:text-muted-foreground transition-all ${errors.company ? 'border-red-500 focus:ring-red-500' : 'border-gray-700'}`}
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      onBlur={(e) => handleBlur('company', e.target.value)}
                      maxLength={200}
                      required
                    />
                    {errors.company && (
                      <p className="text-sm text-red-400 mt-1 flex items-center gap-1">
                        <span>⚠</span>
                        {errors.company}
                      </p>
                    )}
                    {!errors.company && formData.company && (
                      <p className="text-sm text-green-400 mt-1 flex items-center gap-1">
                        <span>✓</span>
                        Looks good!
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">Service Interest</label>
                    <select
                      id="service"
                      className={`w-full px-3 py-2.5 border rounded-lg bg-gray-900/80 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all min-h-[44px] ${
                        errors.service ? 'border-red-500 focus:ring-red-500' : 'border-gray-700'
                      }`}
                      value={formData.service}
                      onChange={(e) => handleInputChange('service', e.target.value)}
                      onBlur={(e) => handleBlur('service', e.target.value)}
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service.toLowerCase().replace(/\s+/g, '-')}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-sm text-red-400 mt-1 flex items-center gap-1">
                        <span>⚠</span>
                        {errors.service}
                      </p>
                    )}
                    {!errors.service && formData.service && (
                      <p className="text-sm text-green-400 mt-1 flex items-center gap-1">
                        <span>✓</span>
                        Service selected
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Project Details
                      <span className="text-muted-foreground text-xs font-normal ml-2">
                        ({formData.message.length}/5000 characters)
                      </span>
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project, goals, and requirements..."
                      className={`w-full min-h-[120px] resize-y bg-gray-900/80 border rounded-lg text-foreground placeholder:text-muted-foreground transition-all ${
                        errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-700'
                      }`}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      onBlur={(e) => handleBlur('message', e.target.value)}
                      maxLength={5000}
                      required
                    />
                    {errors.message && (
                      <p className="text-sm text-red-400 mt-1 flex items-center gap-1">
                        <span>⚠</span>
                        {errors.message}
                      </p>
                    )}
                    {!errors.message && formData.message && formData.message.length >= 10 && (
                      <p className="text-sm text-green-400 mt-1 flex items-center gap-1">
                        <span>✓</span>
                        Message looks good!
                      </p>
                    )}
                    {!errors.message && formData.message && formData.message.length < 10 && (
                      <p className="text-sm text-yellow-400 mt-1 flex items-center gap-1">
                        <span>ℹ</span>
                        Please provide more details (minimum 10 characters)
                      </p>
                    )}
                  </div>

                  {/* Success/Error Messages */}
                  {submitSuccess && (
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-md text-green-400">
                      Thank you! Your message has been sent successfully.
                    </div>
                  )}
                  {errors.submit && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-md text-red-400">
                      {errors.submit}
                    </div>
                  )}
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit"
                      className="w-full bg-white hover:bg-gray-100 text-black font-semibold rounded-lg py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.div>
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
                  <motion.div
                    whileHover={info.isClickable ? { scale: 1.02 } : {}}
                    whileTap={info.isClickable ? { scale: 0.98 } : {}}
                  >
                    <Card 
                      className={`border-0 shadow-lg bg-[#1D1F28] border border-gray-800 rounded-2xl ${
                        info.isClickable ? 'cursor-pointer hover:border-white/30 transition-all duration-300' : ''
                      }`}
                      onClick={info.onClick}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex items-center justify-center w-12 h-12 flex-shrink-0">
                            {info.iconEl}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-lg mb-1 text-white">{info.title}</h4>
                            <p className="text-muted-foreground whitespace-pre-line text-sm">{info.details}</p>
                            {info.isClickable && (
                              <p className="text-sm text-[#25D366] mt-2 font-medium">
                                Click to chat →
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
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
              <Card className="border-0 shadow-lg bg-[#1D1F28] border border-gray-800 rounded-2xl">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-4 text-white">Why Choose AD~VIBES?</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <span className="text-[#22c55e] text-lg">✓</span>
                      <span>Expert team with 5+ years experience</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-[#22c55e] text-lg">✓</span>
                      <span>78+ successful projects delivered</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-[#22c55e] text-lg">✓</span>
                      <span>24/7 support and maintenance</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-[#22c55e] text-lg">✓</span>
                      <span>Competitive pricing and flexible packages</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Follow Us - full width below columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'Instagram', url: socialLinks.instagram, className: 'social-instagram', icon: 'instagram' },
              { name: 'YouTube', url: socialLinks.youtube, className: 'social-youtube', icon: 'youtube' },
              { name: 'LinkedIn', url: socialLinks.linkedin, className: 'social-linkedin', icon: 'linkedin' },
              { name: 'WhatsApp', url: typeof socialLinks.whatsapp === 'function' ? socialLinks.whatsapp() : '#', className: 'social-whatsapp', icon: 'whatsapp' },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => safeOpenUrl(item.url, '_blank')}
                className={`social-btn ${item.className}`}
                title={item.name}
                aria-label={item.name}
              >
                <span className="icon">
                  {item.icon === 'instagram' && (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  {item.icon === 'linkedin' && (
                    <svg className="w-5 h-5" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                      <path fill="white" d="M100.28 448H7.4V148.9h92.88zm-46.44-341a53.79 53.79 0 1 1 53.79-53.8 53.8 53.8 0 0 1-53.8 53.8zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.24-79.2-48.3 0-55.7 37.7-55.7 76.6V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.2 87.8-48.2 94 0 111.2 61.9 111.2 142.3V448z"/>
                    </svg>
                  )}
                  {item.icon === 'whatsapp' && (
                    <div className="text-white">
                      <WhatsAppIcon className="w-6 h-6" />
                    </div>
                  )}
                </span>
                <span className="text">{item.name}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
