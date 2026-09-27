import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';
import MenuItem from './MenuItem';
import { menuCategories, menuItems, type MenuItem as MenuItemType } from '@/data/menu';

interface MenuTabsProps {
  onSelectItem: (item: MenuItemType) => void;
}

export default function MenuTabs({ onSelectItem }: MenuTabsProps) {
  const [activeCategory, setActiveCategory] = useState<string>(
    menuCategories.length > 0 ? menuCategories[0]!.id : ''
  );

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section className="py-24 md:py-32 bg-[#F5F0E8] w-full min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16">
          <SectionHeading label="DISCOVER" title="THE MENU" />
        </div>

        <div className="flex overflow-x-auto hide-scrollbar border-b border-[#211712]/10 mb-12" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="flex mx-auto min-w-max">
            {menuCategories.map((category) => {
              const isActive = activeCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative py-4 px-6 md:px-8 font-sans text-[0.75rem] uppercase tracking-[0.15em] transition-colors duration-300 ${
                    isActive ? 'text-[#211712]' : 'text-[#75685F] hover:text-[#7A4F35]'
                  }`}
                >
                  {category.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#211712]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div 
          layout
          className="min-h-[500px]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] as const }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  <MenuItem 
                    item={item} 
                    onSelect={onSelectItem} 
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
