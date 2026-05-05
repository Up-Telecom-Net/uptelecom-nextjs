import { CoverageSection } from "@/components/sections/CoverageSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = {
  title: "Área de cobertura em Florianópolis",
  description:
    "Bairros de Florianópolis atendidos pela Up Telecom com internet fibra óptica: Itacurubi, Agronômica, Monte Serrat, Trindade, Caeira, Saco dos Limões, Centro, Serrinha, Carvoeira, Pantanal, Monte Verde e Saco Grande.",
  keywords: [
    "cobertura internet florianópolis",
    "bairros atendidos florianópolis",
    "internet itacurubi",
    "internet agronômica",
    "internet monte serrat",
    "internet trindade",
    "internet caeira",
    "internet saco dos limões",
    "internet centro florianópolis",
    "internet serrinha",
    "internet carvoeira",
    "internet pantanal",
    "internet monte verde",
    "internet saco grande",
  ],
  alternates: { canonical: "/cobertura" },
  openGraph: {
    title: "Área de cobertura - Up Telecom",
    description:
      "Bairros de Florianópolis atendidos pela Up Telecom com internet fibra óptica.",
    url: "https://uptelecomnet.com.br/cobertura",
  },
};

export default function CoberturaPage() {
  return (
    <div className="pt-20">
      <CoverageSection />
      <CTASection />
    </div>
  );
}

