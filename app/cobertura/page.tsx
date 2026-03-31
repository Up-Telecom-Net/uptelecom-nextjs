import { CoverageSection } from "@/components/sections/CoverageSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = {
  title: "Área de Cobertura | Up Telecom Florianópolis",
  description: "Confira os bairros de Florianópolis atendidos pela Up Telecom: Itacurubi, Agronômica, Monte Serrat, Trindade, Caeira, Saco dos Limões, Centro, Serrinha, Carvoeira, Pantanal.",
  openGraph: {
    title: "Área de Cobertura - Up Telecom",
    description: "Bairros atendidos pela Up Telecom em Florianópolis.",
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

