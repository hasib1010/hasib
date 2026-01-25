import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Team from '@/components/sections/Team';
import CaseStudies from '@/components/sections/CaseStudies';
import Process from '@/components/sections/Process';
import TechStack from '@/components/sections/TechStack';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <Team />
        <Process />
        <TechStack />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
