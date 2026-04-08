import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      {/* Footer */}
      <footer className="bg-foreground py-10">
        <div className="section-container text-center">
          <h3 className="font-heading font-bold text-2xl text-background mb-2">
            Adutha Ilakku
          </h3>
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