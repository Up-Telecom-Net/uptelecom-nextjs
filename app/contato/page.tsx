import { ContatoContent } from "@/components/pages/ContatoContent";

export const metadata = {
  title: "Contato Up Telecom em Florianópolis",
  description:
    "Entre em contato com a Up Telecom em Florianópolis. WhatsApp (48) 99689-1962 ou (48) 3500-0962. E-mail contato@uptelecomnet.com.br.",
  keywords: [
    "contato up telecom",
    "telefone up telecom",
    "whatsapp up telecom",
    "atendimento internet florianópolis",
    "suporte up telecom",
  ],
  alternates: { canonical: "/contato" },
  openGraph: {
    title: "Contato - Up Telecom",
    description:
      "Fale com a Up Telecom em Florianópolis pelo WhatsApp e telefone.",
    url: "https://uptelecomnet.com.br/contato",
  },
};

export default function ContatoPage() {
  return <ContatoContent />;
}

