import AboutSection from "@/components/sections/AboutSection";
import CallToAction from "@/components/sections/CallToAction";
import FeatureSlider from "@/components/sections/FeatureSlider";
import HeroSection from "@/components/sections/HeroSection";
import HistorySection from "@/components/sections/HistorySection";
import ProjectGrid from "@/components/sections/ProjectGrid";
import ServiceGrid from "@/components/sections/ServiceGrid";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectGrid projects={projects} />
      <ServiceGrid />
      <HistorySection />
      <FeatureSlider />
      <CallToAction />
    </>
  );
}
