import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CrisisSection from "@/components/CrisisSection";
import IntentSection from "@/components/IntentSection";
import BiocharSection from "@/components/BiocharSection";
import BiocharBoomSection from "@/components/BiocharBoomSection";
import ProjectsSection from "@/components/ProjectsSection";
import B3Section from "@/components/B3Section";
import ImpactSection from "@/components/ImpactSection";
import MRVSection from "@/components/MRVSection";
import PathwaysSection from "@/components/PathwaysSection";
import VisionSection from "@/components/VisionSection";
import TeamSection from "@/components/TeamSection";
import CareersSection from "@/components/CareersSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CrisisSection />
        <IntentSection />
        <BiocharSection />
        <BiocharBoomSection />
        <ProjectsSection />
        <B3Section />
        <ImpactSection />
        <MRVSection />
        <PathwaysSection />
        <VisionSection />
        <TeamSection />
        <CareersSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
