import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { BenefitsAndHowItWorksSection } from './components/BenefitsAndHowItWorksSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { InclusiveCareSection } from './components/InclusiveCareSection';
import { AccreditedNetworkSection } from './components/AccreditedNetworkSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaAndFooter } from './components/FinalCtaAndFooter';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#481284] text-[#241438]">
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-full focus:bg-[#E62E8A] focus:text-white focus:text-sm focus:font-semibold"
      >
        Ir para o conteúdo principal
      </a>

      <Navbar />

      <main id="conteudo-principal" className="flex-1">
        <HeroSection />
        <AboutSection />
        <BenefitsAndHowItWorksSection />
        <SpecialtiesSection />
        <InclusiveCareSection />
        <AccreditedNetworkSection />
        <FaqSection />
      </main>

      <FinalCtaAndFooter />
    </div>
  );
}
