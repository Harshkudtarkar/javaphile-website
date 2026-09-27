import { useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import StorySection from '@/components/StorySection';
import SignatureSection from '@/components/SignatureSection';
import MenuTabs from '@/components/MenuTabs';
import CoffeeJourney from '@/components/CoffeeJourney';
import ExperienceGallery from '@/components/ExperienceGallery';
import HorizontalGallery from '@/components/HorizontalGallery';
import Testimonials from '@/components/Testimonials';
import VisitSection from '@/components/VisitSection';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import MenuModal from '@/components/MenuModal';
import type { MenuItem } from '@/data/menu';

function App() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectItem = useCallback((item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <StorySection />
        <SignatureSection />
        <MenuTabs onSelectItem={handleSelectItem} />
        <CoffeeJourney />
        <ExperienceGallery />
        <HorizontalGallery />
        <Testimonials />
        <VisitSection />
      </main>
      <Footer />
      <MenuModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default App;
