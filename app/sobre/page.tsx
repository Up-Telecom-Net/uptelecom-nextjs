import { SobreContent } from "@/components/pages/SobreContent";

export const metadata = {
  title: "Sobre a Up Telecom em Florianópolis",
  description:
    "A Up Telecom é provedora de internet fibra óptica em Florianópolis desde 2017. Tecnologia de ponta, equipe capacitada, infraestrutura própria e foco na satisfação do cliente.",
  keywords: [
    "sobre up telecom",
    "provedor internet florianópolis",
    "história up telecom",
    "internet fibra óptica florianópolis",
    "empresa de internet florianópolis",
  ],
  alternates: { canonical: "/sobre" },
  openGraph: {
    title: "Sobre a Up Telecom",
    description:
      "Provedora de internet fibra óptica em Florianópolis com infraestrutura própria e suporte local desde 2017.",
    url: "https://uptelecomnet.com.br/sobre",
  },
};

export default function SobrePage() {
  return <SobreContent />;
}

