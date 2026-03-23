import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import MenuPreviewSection from '../components/sections/MenuPreviewSection';
import GallerySectionHome from '../components/sections/GallerySectionHome';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import ReservationSection from '../components/sections/ReservationSection';
import LocationSection from '../components/sections/LocationSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <MenuPreviewSection />
      <GallerySectionHome />
      <ReservationSection />
      <TestimonialsSection />
      <LocationSection />
    </>
  );
}
