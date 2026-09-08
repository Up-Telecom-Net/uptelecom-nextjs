import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { PlansSection } from "@/components/sections/PlansSection";
import { CTASection } from "@/components/sections/CTASection";
import { bairros, getBairro, bairroKeywords } from "@/lib/bairros";

type Params = { bairro: string };

const SITE = "https://uptelecomnet.com.br";

export function generateStaticParams() {
  return bairros.map((b) => ({ bairro: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { bairro: slug } = await params;
  const b = getBairro(slug);
  if (!b) return {};
  const title = `Internet fibra óptica ${b.local}`;
  const description = `Internet fibra óptica ${b.local}, Florianópolis: planos de 600 e 700 Mega, Plano Gamer com ExitLag, Wi-Fi em comodato, sem franquia e suporte local. Consulte a cobertura do seu endereço pelo WhatsApp.`;
  return {
    title,
    description,
    keywords: bairroKeywords(b),
    alternates: { canonical: `/cobertura/${b.slug}` },
    openGraph: {
      title: `${title} - Up Telecom`,
      description,
      url: `${SITE}/cobertura/${b.slug}`,
      type: "website",
    },
  };
}

export default async function BairroPage({ params }: { params: Promise<Params> }) {
  const { bairro: slug } = await params;
  const b = getBairro(slug);
  if (!b) notFound();

  const whatsapp = `https://wa.me/554835000962?text=${encodeURIComponent(
    `Olá! Quero saber se a Up Telecom atende meu endereço ${b.local}.`,
  )}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Internet fibra óptica ${b.local}`,
    serviceType: "Internet fibra óptica",
    provider: {
      "@type": "InternetServiceProvider",
      name: "Up Telecom",
      url: SITE,
      telephone: "+55-48-3500-0962",
    },
    areaServed: {
      "@type": "Neighborhood",
      name: b.nome,
      containedInPlace: { "@type": "City", name: "Florianópolis" },
    },
    url: `${SITE}/cobertura/${b.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE },
      { "@type": "ListItem", position: 2, name: "Cobertura", item: `${SITE}/cobertura` },
      { "@type": "ListItem", position: 3, name: b.nome, item: `${SITE}/cobertura/${b.slug}` },
    ],
  };

  const outros = bairros.filter((o) => o.slug !== b.slug);

  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section
        className="relative overflow-hidden py-14 sm:py-20"
        style={{
          background:
            "linear-gradient(135deg, #050118 0%, #0a0420 30%, #14082c 60%, #1a0a3e 100%)",
        }}
      >
        <div className="container mx-auto px-[30px] sm:px-8 lg:px-12 relative z-10">
          <nav aria-label="Navegação estrutural" className="mb-6 text-sm text-blue-200/70">
            <Link href="/" className="hover:text-white">Início</Link>
            <span className="mx-2">/</span>
            <Link href="/cobertura" className="hover:text-white">Cobertura</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{b.nome}</span>
          </nav>

          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-200 text-xs font-bold tracking-wide uppercase">
            <MapPin className="w-4 h-4" />
            Bairro atendido em Florianópolis
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-5">
            Internet fibra óptica {b.local}
          </h1>

          <p className="text-base sm:text-lg text-blue-100/85 max-w-3xl leading-relaxed mb-4">
            {b.destaque}
          </p>
          <p className="text-base sm:text-lg text-blue-100/85 max-w-3xl leading-relaxed mb-8">
            Planos residenciais de 600 e 700 Mega com roteador Wi-Fi em comodato e sem franquia,
            Plano Gamer com ExitLag, planos empresariais com IP fixo e suporte prioritário, e
            telefone fixo com ligações ilimitadas. Atendimento de segunda a sexta, das 8h30 às 18h,
            e sábado, das 8h às 12h.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
                boxShadow: "0 8px 24px rgba(6, 182, 212, 0.45)",
              }}
            >
              <WhatsAppIcon size={20} className="text-white" />
              <span>Consultar cobertura {b.local}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/planos"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 transition-all duration-300"
            >
              Ver planos
            </Link>
          </div>

          <h2 className="text-sm font-bold text-blue-200/80 uppercase tracking-wide mb-3">
            Outros bairros atendidos
          </h2>
          <ul className="flex flex-wrap gap-2">
            {outros.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/cobertura/${o.slug}`}
                  className="inline-block px-3 py-1.5 rounded-lg text-sm text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
                >
                  {o.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PlansSection />
      <CTASection />
    </div>
  );
}
