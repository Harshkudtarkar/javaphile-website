/**
 * JAVAPHILE — Site Configuration
 * 
 * DEMO DATA — Replace all placeholder information with actual business details.
 * None of this data represents real Javaphile business information.
 */

export const siteConfig = {
  name: 'Javaphile',
  tagline: 'Brewed for Coffee Lovers',
  description: 'A premium specialty coffee experience crafted for true coffee lovers.',

  // DEMO DATA — Replace with actual Javaphile contact information
  contact: {
    address: '123 Coffee Street, Downtown District',
    city: 'Your City, ST 10001',
    phone: '+1 (555) 123-4567',
    email: 'hello@javaphile.com',
    instagram: '@javaphile',
    instagramUrl: 'https://instagram.com/javaphile',
  },

  // DEMO DATA — Replace with actual opening hours
  hours: {
    weekdays: '7:00 AM — 8:00 PM',
    weekends: '8:00 AM — 9:00 PM',
    special: 'Closed on major holidays',
  },

  // DEMO DATA — Replace with actual URLs
  links: {
    googleMaps: 'https://maps.google.com',
    instagram: 'https://instagram.com/javaphile',
    orderOnline: '#',
  },

  // SEO — Replace with actual metadata
  seo: {
    title: 'Javaphile — Brewed for Coffee Lovers',
    description: 'Experience premium specialty coffee at Javaphile. Carefully sourced beans, expertly crafted drinks, and a warm atmosphere for true coffee lovers.',
    ogImage: '/og-image.jpg',
  },

  navigation: [
    { label: 'Menu', href: '#menu' },
    { label: 'Story', href: '#story' },
    { label: 'Experience', href: '#experience' },
    { label: 'Visit', href: '#visit' },
  ],
} as const;
