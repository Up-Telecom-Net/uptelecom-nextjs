import { PlansSection } from "@/components/sections/PlansSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = {
  title: "Planos de internet fibra óptica em Florianópolis",
  description:
    "Planos de internet fibra óptica residenciais (550MB, 700MB e 900MB), empresariais (400MB e 600MB), gamer (1000MB) e telefone fixo. Wi-Fi em comodato, sem franquia e suporte local em Florianópolis.",
  keywords: [
    "planos de internet florianópolis",
    "planos fibra óptica",
    "planos internet residencial",
    "planos internet empresarial",
    "internet 550mb florianópolis",
    "internet 700mb florianópolis",
    "internet 900mb florianópolis",
    "internet 1000mb gamer",
    "telefone fixo florianópolis",
    "preço internet fibra florianópolis",
  ],
  alternates: { canonical: "/planos" },
  openGraph: {
    title: "Planos de internet - Up Telecom",
    description:
      "Planos de internet fibra óptica em Florianópolis com Wi-Fi em comodato e suporte local.",
    url: "https://uptelecomnet.com.br/planos",
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

