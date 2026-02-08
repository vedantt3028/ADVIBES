export const contactInfo = {
  addresses: [
    'Location 1 : Ad Vibes, Ambar Bungalow, Lane No-3, Tukai darshan, Hadapsar, Pune. 412308',
    'Location 2 : 5th floor, Diamond House, Sanskruti Group, NDA Pashan Rd, Bavdhan, Pune, Maharashtra 411021',
  ],
  address: 'Ad Vibes, Ambar Bungalow, Lane No-3, Tukai darshan, Hadapsar, Pune. 412308',
  email: 'tejas@advibesproductions.com',
  phone: '8605816066',
  whatsapp: '918605816066', // WhatsApp number with country code (91 for India)
  businessHours: 'Mon – Fri: 10:00 AM – 07:00 PM',
  primaryCity: 'Pune, Maharashtra',
};

export const footerContact = {
  phoneLabel: 'Phone: 8605816066',
  emailLabel: 'Email:',
  emailAddress: 'tejas@advibesproductions.com',
  addressLines: [
    'Ambar Bungalow, Lane No-3, Tukai',
    'Darshan, Hadapsar, Pune. 412308',
  ],
};

export const socialLinks = {
  facebook: 'https://facebook.com/advibes',
  instagram: 'https://instagram.com/advibes',
  youtube: 'https://youtube.com',
  linkedin: 'https://linkedin.com',
  whatsapp: () => {
    const whatsappNumber = contactInfo.whatsapp || contactInfo.phone.replace(/\D/g, '');
    let number = whatsappNumber.replace(/\D/g, '');
    if (!number.startsWith('91') && number.length === 10) {
      number = '91' + number;
    }
    return `https://wa.me/${number}`;
  },
  email: () => `mailto:${contactInfo.email}`,
};


