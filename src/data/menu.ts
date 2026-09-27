/**
 * JAVAPHILE — Menu Data
 * 
 * DEMO DATA — All items below are placeholder content.
 * None of these represent actual Javaphile menu items or prices.
 * Replace with actual menu data when available.
 */

import { menuImages, signatureImages } from './images';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: { src: string; alt: string };
  category: MenuCategory;
  isSignature?: boolean;
}

export type MenuCategory = 'coffee' | 'cold' | 'tea' | 'food' | 'dessert';

export const menuCategories: { id: MenuCategory; label: string }[] = [
  { id: 'coffee', label: 'Coffee' },
  { id: 'cold', label: 'Cold' },
  { id: 'tea', label: 'Tea' },
  { id: 'food', label: 'Food' },
  { id: 'dessert', label: 'Dessert' },
];

// DEMO DATA — Replace with actual Javaphile menu
export const menuItems: MenuItem[] = [
  // Coffee
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'A bold, concentrated shot of our single-origin beans, pulled to perfection with a rich golden crema.',
    price: '$4.50',
    image: signatureImages.espresso,
    category: 'coffee',
    isSignature: true,
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    description: 'Equal parts espresso, steamed milk, and silky microfoam. Classic Italian perfection.',
    price: '$5.50',
    image: signatureImages.cappuccino,
    category: 'coffee',
    isSignature: true,
  },
  {
    id: 'pour-over',
    name: 'Pour Over',
    description: 'Hand-poured to highlight the delicate flavors and aromatics of our seasonal single-origin selection.',
    price: '$6.00',
    image: menuImages.pourOver,
    category: 'coffee',
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    description: 'Double ristretto with velvety steamed milk. A perfectly balanced, smooth coffee experience.',
    price: '$5.50',
    image: menuImages.flatWhite,
    category: 'coffee',
  },
  {
    id: 'americano',
    name: 'Americano',
    description: 'Espresso lengthened with hot water. Clean, smooth, and full of character.',
    price: '$4.50',
    image: menuImages.americano,
    category: 'coffee',
  },
  {
    id: 'macchiato',
    name: 'Macchiato',
    description: 'Espresso stained with a touch of foamed milk. Intense and aromatic.',
    price: '$4.75',
    image: menuImages.macchiato,
    category: 'coffee',
  },

  // Cold
  {
    id: 'signature-latte',
    name: 'Signature Latte',
    description: 'Our house specialty — espresso with silky oat milk and a touch of vanilla bean.',
    price: '$6.50',
    image: signatureImages.latte,
    category: 'cold',
    isSignature: true,
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew',
    description: 'Steeped for 18 hours. Exceptionally smooth with notes of dark chocolate and caramel.',
    price: '$5.50',
    image: menuImages.coldBrew,
    category: 'cold',
    isSignature: true,
  },
  {
    id: 'iced-latte',
    name: 'Iced Latte',
    description: 'Double shot over ice with your choice of milk. Refreshing and perfectly balanced.',
    price: '$5.50',
    image: menuImages.icedLatte,
    category: 'cold',
  },
  {
    id: 'iced-matcha',
    name: 'Iced Matcha',
    description: 'Ceremonial-grade matcha whisked with ice and your choice of milk.',
    price: '$6.00',
    image: menuImages.icedMatcha,
    category: 'cold',
  },

  // Tea
  {
    id: 'green-tea',
    name: 'Sencha Green Tea',
    description: 'Premium Japanese green tea with a grassy sweetness and clean finish.',
    price: '$4.00',
    image: menuImages.greenTea,
    category: 'tea',
  },
  {
    id: 'chai-latte',
    name: 'Chai Latte',
    description: 'House-blended spices simmered with black tea and steamed milk.',
    price: '$5.50',
    image: menuImages.chaiLatte,
    category: 'tea',
  },

  // Food
  {
    id: 'croissant',
    name: 'Butter Croissant',
    description: 'Flaky, golden, and made fresh each morning. The perfect coffee companion.',
    price: '$4.50',
    image: menuImages.croissant,
    category: 'food',
  },
  {
    id: 'avocado-toast',
    name: 'Avocado Toast',
    description: 'Smashed avocado on sourdough with chili flakes, microgreens, and a poached egg.',
    price: '$12.00',
    image: menuImages.avocadoToast,
    category: 'food',
  },
  {
    id: 'granola',
    name: 'Granola Bowl',
    description: 'House-made granola with Greek yogurt, seasonal fruits, and raw honey.',
    price: '$10.00',
    image: menuImages.granola,
    category: 'food',
  },

  // Dessert
  {
    id: 'tiramisu',
    name: 'Espresso Tiramisu',
    description: 'Classic Italian dessert made with our house espresso and mascarpone cream.',
    price: '$9.00',
    image: menuImages.tiramisu,
    category: 'dessert',
  },
  {
    id: 'cheesecake',
    name: 'Basque Cheesecake',
    description: 'Caramelized, creamy, and subtly burnt. Served with seasonal berries.',
    price: '$8.50',
    image: menuImages.cheesecake,
    category: 'dessert',
  },
];

// Signature items for the featured section
export const signatureItems = menuItems.filter((item) => item.isSignature);
