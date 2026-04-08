import HeroSection from "@/components/HeroSection";
import TamilNaduMap from "@/components/TamilNaduMap";
import ProgramSection from "@/components/ProgramSection";
import AboutProgram from "@/components/AboutProgram";
import SpeakersSection from "@/components/SpeakersSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      <TamilNaduMap />
      <ProgramSection />
      <AboutProgram />
      <SpeakersSection />

      {/* Footer */}
      <footer className="bg-foreground py-10">
        <div className="section-container text-center">
          <h3 className="font-heading font-bold text-2xl text-background mb-2">Adutha Ilakku</h3>
          <p className="text-background/60 text-sm">
            Empowering students across Tamil Nadu with free career guidance since 2022.
          </p>
          <div className="mt-4 text-background/40 text-xs">
            © {new Date().getFullYear()} Adutha Ilakku. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
