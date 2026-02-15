/**
 * Shared service definitions. Used by ServicesSection and ServiceWorks page.
 * works = optional list of YouTube video IDs for the service works page.
 * photos = optional list of image URLs for services like Photography.
 */
export interface ServiceWork {
  videoId: string;
  title?: string;
}

export interface ServicePhoto {
  url: string;
  title?: string;
}

export interface Service {
  slug: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  works?: ServiceWork[];
  photos?: ServicePhoto[];
}

const adFilmsWorks: ServiceWork[] = [
  { videoId: 'Xf73E97XlBI', title: 'Ad Films 1' },
  { videoId: 'IjFzZBgw-NM', title: 'Ad Films 2' },
  { videoId: 'Nn8JJinFd0Q', title: 'Ad Films 3' },
  { videoId: 'UrkRj6O18bU', title: 'Ad Films 4' },
  { videoId: 'wrYAl9_Kjo8', title: 'Ad Films 5' },
  { videoId: 'NXluB57O8Uo', title: 'Ad Films 6' },
  { videoId: 'RAlEHYWH038', title: 'Ad Films 7' },
  { videoId: 'UZQgz535zjg', title: 'Ad Films 8' },
  { videoId: 'mAE1rb3LdXU', title: 'Ad Films 9' },
  { videoId: '-z39IxThO0w', title: 'Ad Films 10' },
  { videoId: 'w4u56oxGFac', title: 'Ad Films 11' },
];

export const services: Service[] = [
  {
    slug: 'ad-films',
    icon: '📺',
    title: 'Ad Films',
    description: 'Engaging advertisements that amplify your message and drive action from your target audience.',
    features: ['Creative Concepts', 'High Production Value', 'Strategic Messaging'],
    works: adFilmsWorks,
  },
  {
    slug: 'video-marketing-reels',
    icon: '📱',
    title: 'Video Marketing Reels',
    description: 'Eye-catching reels for social media impact that boost engagement and brand visibility.',
    features: ['Social Media Optimization', 'Trending Content', 'Viral Potential'],
    works: [
      { videoId: 'se-imKL3cAs', title: 'Reel 1' },
      { videoId: 'LkfqnjcqyuU', title: 'Reel 2' },
      { videoId: 'cioscxXOS-w', title: 'Reel 3' },
      { videoId: 'aZYfr7Zvmnk', title: 'Reel 4' },
      { videoId: 'myijvZjbArU', title: 'Reel 5' },
      { videoId: 'K8vwnDWqJIA', title: 'Reel 6' },
      { videoId: 'YwSdQNILH6U', title: 'Reel 7' },
    ],
  },
  {
    slug: 'photography',
    icon: '📸',
    title: 'Photography',
    description: 'High-quality brand and product images that showcase your offerings in the best possible light.',
    features: ['Product Photography', 'Corporate Events', 'Brand Photography'],
    photos: [
      { url: 'https://i.postimg.cc/3wf7sQGf/DSC-0338-copy.jpg' },
      { url: 'https://i.postimg.cc/FK65PgtP/DSC-0337-copy.jpg' },
      { url: 'https://i.postimg.cc/L5zc6cJD/DSC-0320-copy.jpg' },
      { url: 'https://i.postimg.cc/wM8KzqjR/DSC-0318-copy.jpg' },
      { url: 'https://i.postimg.cc/P56Bxzqq/DSC-0292-copy.jpg' },
      { url: 'https://i.postimg.cc/XvmmKjFF/DSC-0247-copy.jpg' },
      { url: 'https://i.postimg.cc/50zGnhSz/DSC-0240-copy.jpg' },
      { url: 'https://i.postimg.cc/d0kSVbXR/6.gif' },
      { url: 'https://i.postimg.cc/d3B5fwkJ/4.gif' },
      { url: 'https://i.postimg.cc/prx0kpdD/5.gif' },
      { url: 'https://i.postimg.cc/rFfhCy2G/1.gif' },
    ],
  },
  {
    slug: 'motion-design',
    icon: '✨',
    title: 'Motion Design',
    description: 'Animated visuals that captivate and bring your content to life with dynamic motion graphics.',
    features: ['2D Animation', 'Motion Graphics', 'Visual Effects'],
  },
  {
    slug: 'corporate-interviews',
    icon: '🎤',
    title: 'Corporate Interviews',
    description: 'Insightful interviews that humanize your brand and build trust with your audience.',
    features: ['Executive Interviews', 'Employee Stories', 'Customer Testimonials'],
  },
  {
    slug: 'corporate-documentaries',
    icon: '🎬',
    title: 'Corporate Documentaries',
    description: 'Showcase your brand story and achievements through compelling documentary-style videos that connect with your audience.',
    features: ['Brand Storytelling', 'Company Culture', 'Achievement Highlights'],
    works: [
      { videoId: 'Lhlh0C75Inc', title: 'Madhurima Documentary' },
    ],
  },
  {
    slug: 'short-films',
    icon: '🎞️',
    title: 'Short Films',
    description: 'Cinematic short-form storytelling that captures emotions and delivers powerful narratives for brands and festivals.',
    features: ['Narrative Storytelling', 'Festival Ready', 'Brand Films'],
  },
  {
    slug: 'web-series',
    icon: '📽️',
    title: 'Web Series',
    description: 'Engaging episodic content that keeps your audience hooked and builds lasting connection with your brand story.',
    features: ['Episodic Content', 'Series Production', 'Digital Storytelling'],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
