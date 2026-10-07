import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Architecture } from '@/components/Architecture';
import { Metrics } from '@/components/Metrics';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Metrics />
        <Skills />
        <Experience />
        <Architecture />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
