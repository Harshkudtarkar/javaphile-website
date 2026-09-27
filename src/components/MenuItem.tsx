import { motion } from 'framer-motion';
import { type MenuItem as MenuItemType } from '@/data/menu';

interface MenuItemProps {
  item: MenuItemType;
  onSelect: (item: MenuItemType) => void;
}

export default function MenuItem({ item, onSelect }: MenuItemProps) {
  return (
    <motion.div
      className="group flex flex-col rounded-sm overflow-hidden cursor-pointer transition-colors duration-300 hover:bg-[#FFF9F0]"
      data-cursor="pointer"
      onClick={() => onSelect(item)}
      whileHover="hover"
    >
      <div className="w-full aspect-[4/3] overflow-hidden bg-[#FFF9F0]">
        <motion.img
          src={item.image.src}
          alt={item.image.alt}
          className="w-full h-full object-cover"
          variants={{
            hover: { scale: 1.03 },
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          loading="lazy"
        />
      </div>

      <div className="p-4 md:p-6 flex flex-col gap-2">
        <div className="flex justify-between items-baseline gap-4">
          <h3 className="font-serif text-xl text-[#211712] truncate">
            {item.name}
          </h3>
          <span className="font-sans text-sm text-[#A66A3F] font-medium shrink-0">
            {item.price}
          </span>
        </div>
        <p className="font-sans text-sm text-[#75685F] line-clamp-2 leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
