import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Offers from '@/components/Offers';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <Navbar />
      <Hero />
      <Offers />
      <About />
      <Testimonials />
      <CtaSection />
      <Footer />
    </main>
  );
}
