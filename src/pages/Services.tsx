import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden w-full">
      <Navbar />
      <main>
        <div className="pt-20">
          <ServicesSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
