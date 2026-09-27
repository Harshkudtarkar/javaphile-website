/**
 * JAVAPHILE — Centralized Image Configuration
 * 
 * All image paths are stored here for easy replacement.
 * When actual Javaphile photography is available, simply update these paths.
 * 
 * Current images use Unsplash placeholders via direct URLs.
 * For production, replace with local optimized WebP/AVIF files.
 */

export interface ImageConfig {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

// ============================================================
// HERO IMAGES — Replace with actual Javaphile hero photography
// ============================================================
export const heroImages = {
  main: {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80&auto=format',
    alt: 'Cinematic coffee experience — placeholder image for Javaphile hero',
    width: 1920,
    height: 1080,
  },
  mobile: {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80&auto=format',
    alt: 'Cinematic coffee experience — placeholder image for Javaphile hero',
    width: 800,
    height: 1200,
  },
} as const;

// ============================================================
// STORY SECTION — Replace with actual Javaphile story imagery
// ============================================================
export const storyImages = {
  main: {
    src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&q=80&auto=format',
    alt: 'Coffee craftsmanship — placeholder image',
    width: 1200,
    height: 800,
  },
} as const;

// ============================================================
// SIGNATURE PRODUCTS — Replace with actual product photography
// ============================================================
export const signatureImages = {
  latte: {
    src: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=800&q=80&auto=format',
    alt: 'Signature Latte — placeholder product image',
  },
  coldBrew: {
    src: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80&auto=format',
    alt: 'Cold Brew — placeholder product image',
  },
  espresso: {
    src: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=800&q=80&auto=format',
    alt: 'Espresso — placeholder product image',
  },
  cappuccino: {
    src: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80&auto=format',
    alt: 'Cappuccino — placeholder product image',
  },
  specialty: {
    src: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=800&q=80&auto=format',
    alt: 'Specialty Drink — placeholder product image',
  },
} as const;

// ============================================================
// MENU ITEM IMAGES — Replace with actual menu photography
// ============================================================
export const menuImages = {
  pourOver: {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80&auto=format',
    alt: 'Pour Over coffee — placeholder image',
  },
  americano: {
    src: 'https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=600&q=80&auto=format',
    alt: 'Americano — placeholder image',
  },
  flatWhite: {
    src: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=600&q=80&auto=format',
    alt: 'Flat White — placeholder image',
  },
  macchiato: {
    src: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600&q=80&auto=format',
    alt: 'Macchiato — placeholder image',
  },
  icedLatte: {
    src: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600&q=80&auto=format',
    alt: 'Iced Latte — placeholder image',
  },
  coldBrew: {
    src: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80&auto=format',
    alt: 'Cold Brew — placeholder image',
  },
  icedMatcha: {
    src: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&q=80&auto=format',
    alt: 'Iced Matcha — placeholder image',
  },
  greenTea: {
    src: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=600&q=80&auto=format',
    alt: 'Green Tea — placeholder image',
  },
  chaiLatte: {
    src: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=80&auto=format',
    alt: 'Chai Latte — placeholder image',
  },
  croissant: {
    src: 'https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=600&q=80&auto=format',
    alt: 'Croissant — placeholder image',
  },
  avocadoToast: {
    src: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&q=80&auto=format',
    alt: 'Avocado Toast — placeholder image',
  },
  granola: {
    src: 'https://images.unsplash.com/photo-1517093728432-a0440f8d45af?w=600&q=80&auto=format',
    alt: 'Granola Bowl — placeholder image',
  },
  tiramisu: {
    src: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80&auto=format',
    alt: 'Tiramisu — placeholder image',
  },
  cheesecake: {
    src: 'https://images.unsplash.com/photo-1524351199432-d330df28850d?w=600&q=80&auto=format',
    alt: 'Cheesecake — placeholder image',
  },
} as const;

// ============================================================
// COFFEE JOURNEY — Replace with actual process photography
// ============================================================
export const journeyImages = {
  bean: {
    src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80&auto=format',
    alt: 'Coffee beans — placeholder journey image',
  },
  grind: {
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80&auto=format',
    alt: 'Coffee grinding — placeholder journey image',
  },
  brew: {
    src: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&q=80&auto=format',
    alt: 'Coffee brewing — placeholder journey image',
  },
  cup: {
    src: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=800&q=80&auto=format',
    alt: 'Coffee cup — placeholder journey image',
  },
} as const;

// ============================================================
// EXPERIENCE / GALLERY — Replace with actual café photography
// ============================================================
export const experienceImages = {
  interior1: {
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80&auto=format',
    alt: 'Café interior — placeholder image',
  },
  interior2: {
    src: 'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800&q=80&auto=format',
    alt: 'Café seating area — placeholder image',
  },
  barista: {
    src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80&auto=format',
    alt: 'Barista at work — placeholder image',
  },
  detail: {
    src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80&auto=format',
    alt: 'Café detail — placeholder image',
  },
  ambiance: {
    src: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1000&q=80&auto=format',
    alt: 'Café ambiance — placeholder image',
  },
} as const;

export const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80&auto=format',
    alt: 'Gallery image 1 — placeholder',
  },
  {
    src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80&auto=format',
    alt: 'Gallery image 2 — placeholder',
  },
  {
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80&auto=format',
    alt: 'Gallery image 3 — placeholder',
  },
  {
    src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80&auto=format',
    alt: 'Gallery image 4 — placeholder',
  },
  {
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80&auto=format',
    alt: 'Gallery image 5 — placeholder',
  },
  {
    src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80&auto=format',
    alt: 'Gallery image 6 — placeholder',
  },
  {
    src: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&q=80&auto=format',
    alt: 'Gallery image 7 — placeholder',
  },
] as const;
