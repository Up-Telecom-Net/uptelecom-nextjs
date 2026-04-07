import { PlansSection } from "@/components/sections/PlansSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = {
  title: "Planos de Internet | Fibra Óptica e Via Rádio",
  description: "Conheça nossos planos de internet fibra óptica (550MB a 900MB) e internet via rádio (5MB e 10MB). Preços acessíveis e internet ilimitada.",
  openGraph: {
    title: "Planos de Internet - Up Telecom",
    description: "Planos de internet fibra óptica e via rádio em Florianópolis.",
  },
};

export default function PlanosPage() {
  return (
    <div className="pt-20">
      <PlansSection />
      <CTASection />
    </div>
  );
}

