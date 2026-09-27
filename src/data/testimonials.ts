/**
 * JAVAPHILE — Testimonials Data
 * 
 * DEMO DATA — These are NOT real customer reviews.
 * All testimonials below are placeholder content for design purposes only.
 * Replace with actual customer testimonials when available.
 */

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

// DEMO DATA — These are fictional placeholder testimonials
export const testimonials: Testimonial[] = [
  {
    id: 'demo-1',
    quote: 'The attention to detail in every cup is remarkable. This is what coffee should be.',
    author: 'Demo Reviewer',
    role: 'Placeholder testimonial',
  },
  {
    id: 'demo-2',
    quote: 'Walking into Javaphile feels like stepping into a different world. The atmosphere, the aroma, the craft — it all comes together beautifully.',
    author: 'Demo Reviewer',
    role: 'Placeholder testimonial',
  },
  {
    id: 'demo-3',
    quote: 'I have traveled the world for coffee, and this place holds its own against the best specialty cafés in Tokyo and Melbourne.',
    author: 'Demo Reviewer',
    role: 'Placeholder testimonial',
  },
  {
    id: 'demo-4',
    quote: 'Not just a café — a genuine experience. Every visit reveals something new about the craft of coffee.',
    author: 'Demo Reviewer',
    role: 'Placeholder testimonial',
  },
];
