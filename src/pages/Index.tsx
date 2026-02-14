import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ClientLogos from '@/components/ClientLogos';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import BehindTheBuildSection from '@/components/BehindTheBuildSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

// Homepage section order (do not change): Hero → Client Logos → Services → About → Portfolio → Behind the Build → Testimonials → Contact
const Index = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden w-full">
      <Navbar />
      <main>
        <HeroSection />
        <ClientLogos />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
        <BehindTheBuildSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
