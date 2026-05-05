import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InstitutionalBanner } from "@/components/sections/InstitutionalBanner";

const inter = Inter({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });

export const metadata: Metadata = {
  title: {
    default: "Up Telecom - Internet fibra óptica em Florianópolis",
    template: "%s | Up Telecom",
  },
  description:
    "Internet fibra óptica de alta velocidade em Florianópolis com planos residenciais e empresariais de 400MB a 1000MB. Wi-Fi em comodato, suporte local e internet ilimitada para os bairros Itacurubi, Agronômica, Monte Serrat, Trindade, Caeira, Saco dos Limões, Centro, Serrinha, Carvoeira, Pantanal, Monte Verde e Saco Grande.",
  applicationName: "Up Telecom",
  category: "Telecomunicações",
  keywords: [
    "internet fibra óptica florianópolis",
    "provedor de internet florianópolis",
    "internet residencial florianópolis",
    "internet empresarial florianópolis",
    "internet fibra óptica santa catarina",
    "wifi fibra florianópolis",
    "banda larga florianópolis",
    "internet ilimitada florianópolis",
    "internet gamer florianópolis",
    "internet alta velocidade",
    "up telecom",
    "uptelecom",
    "up-telecom",
    "internet trindade",
    "internet centro florianópolis",
    "internet agronômica",
    "internet itacurubi",
    "internet monte serrat",
    "internet caeira",
    "internet saco dos limões",
    "internet serrinha",
    "internet carvoeira",
    "internet pantanal",
    "internet monte verde",
    "internet saco grande",
    "telefone fixo florianópolis",
    "fibra óptica residencial",
    "instalação internet florianópolis",
    "plano de internet com roteador",
  ],
  authors: [{ name: "Up Telecom", url: "https://uptelecomnet.com.br" }],
  creator: "Up Telecom",
  publisher: "Up Telecom",
  metadataBase: new URL("https://uptelecomnet.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://uptelecomnet.com.br",
    siteName: "Up Telecom",
    title: "Up Telecom - Internet fibra óptica em Florianópolis",
    description:
      "Internet fibra óptica de alta velocidade em Florianópolis. Planos residenciais e empresariais com Wi-Fi em comodato, suporte local e internet ilimitada.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Up Telecom - Internet fibra óptica em Florianópolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Up Telecom - Internet fibra óptica em Florianópolis",
    description:
      "Internet fibra óptica de alta velocidade em Florianópolis. Planos residenciais e empresariais com Wi-Fi em comodato e suporte local.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  verification: {
    google: "9c8hQXRMWJuij1gNDdPExZFNqfyRGdT7TBxIlc3hO88",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InternetServiceProvider",
  name: "Up Telecom",
  legalName: "Internetup Telecomunicações Ltda",
  description:
    "Provedor de internet fibra óptica em Florianópolis com planos residenciais e empresariais.",
  url: "https://uptelecomnet.com.br",
  logo: "https://uptelecomnet.com.br/media/logo/logo_uptelelcom.png",
  image: "https://uptelecomnet.com.br/og-image.jpg",
  telephone: ["+55-48-3500-0962", "+55-48-99689-1962"],
  email: "contato@uptelecomnet.com.br",
  taxID: "27.865.116/0001-40",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Florianópolis",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "City", name: "Florianópolis" },
    { "@type": "Neighborhood", name: "Itacurubi" },
    { "@type": "Neighborhood", name: "Agronômica" },
    { "@type": "Neighborhood", name: "Monte Serrat" },
    { "@type": "Neighborhood", name: "Trindade" },
    { "@type": "Neighborhood", name: "Caeira" },
    { "@type": "Neighborhood", name: "Saco dos Limões" },
    { "@type": "Neighborhood", name: "Centro" },
    { "@type": "Neighborhood", name: "Serrinha" },
    { "@type": "Neighborhood", name: "Carvoeira" },
    { "@type": "Neighborhood", name: "Pantanal" },
    { "@type": "Neighborhood", name: "Monte Verde" },
    { "@type": "Neighborhood", name: "Saco Grande" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [
    "https://facebook.com/uptelecom",
    "https://instagram.com/uptelecom",
    "https://linkedin.com/company/uptelecom",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${rubik.variable}`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        <main className="min-h-screen pt-21">{children}</main>
        <InstitutionalBanner />
        <Footer />
      </body>
    </html>
  );
}

