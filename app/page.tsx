import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero-section';
import { Impact } from '@/components/impact-section';
import { About } from '@/components/about-section';
import { Initiatives } from '@/components/initiatives-section';
import { CSRSection } from '@/components/csr-section';
import { DonateSection } from '@/components/donate-section';
import { Footer } from '@/components/footer-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfbfb]">
      <Navbar />
      <Hero />
      <Impact />
      <About />
      <Initiatives />
      <CSRSection />
      <DonateSection />
      <Footer />
    </main>
  );
}
