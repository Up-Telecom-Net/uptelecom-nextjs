import { HeroSection } from "@/components/sections/HeroSection";
import { AttendBannerSection } from "@/components/sections/AttendBannerSection";
import { HighlightsSection } from "@/components/sections/HighlightsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ServicesBannerSection } from "@/components/sections/ServicesBannerSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PlansSection } from "@/components/sections/PlansSection";
import { CoverageSection } from "@/components/sections/CoverageSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = {
  title: "Internet Fibra Óptica em Florianópolis | Up Telecom",
  description: "Internet fibra óptica de alta velocidade em Florianópolis. Planos de 550MB a 900MB. Tecnologia de ponta, suporte especializado e internet ilimitada.",
  openGraph: {
    title: "Up Telecom - Internet Fibra Óptica em Florianópolis",
    description: "Internet fibra óptica de alta velocidade em Florianópolis. Planos de 550MB a 900MB.",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AttendBannerSection />
      <ServicesBannerSection />
      <StatsSection />
      <HighlightsSection />
      <ServicesSection />
      <FeaturesSection />
      <PlansSection />
      <CoverageSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

