export const contactInfo = {
  addresses: [
    'Location 1 : Ad Vibes, Ambar Bungalow, Lane No-3, Tukai darshan, Hadapsar, Pune. 412308',
    'Location 2 : 5th floor, Diamond House, Sanskruti Group, NDA Pashan Rd, Bavdhan, Pune, Maharashtra 411021',
  ],
  address: 'Ad Vibes, Ambar Bungalow, Lane No-3, Tukai darshan, Hadapsar, Pune. 412308',
  email: 'tejasramapawar@gmail.com',
  phone: '8605816066 / 7030929651',
  whatsapp: '918605816066', // WhatsApp number with country code (91 for India)
  businessHours: 'Mon – Fri: 10:00 AM – 07:00 PM',
  primaryCity: 'Pune, Maharashtra',
};

export const footerContact = {
  phoneLabel: 'Phone: 8605816066 / 7030929651',
  emailLabel: 'Email:',
  emailAddress: 'tejasramapawar@gmail.com',
  addressLines: [
    'Ambar Bungalow, Lane No-3, Tukai',
    'Darshan, Hadapsar, Pune. 412308',
  ],
};

export const socialLinks = {
  instagram: 'https://www.instagram.com/ad_vibes_media/',
  youtube: 'https://www.youtube.com/@advibesproductions/videos',
  linkedin: 'https://www.linkedin.com/in/tejas-pawar-4b84a189/',
  whatsapp: () => {
    const whatsappNumber = contactInfo.whatsapp || contactInfo.phone.replace(/\D/g, '').split('/')[0].trim();
    let number = whatsappNumber.replace(/\D/g, '');
    if (!number.startsWith('91') && number.length === 10) {
      number = '91' + number;
    }
    return `https://wa.me/${number}`;
  },
  email: () => `mailto:${contactInfo.email}`,
};


