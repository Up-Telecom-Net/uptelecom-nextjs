import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });

export const metadata: Metadata = {
  title: {
    default: "Up Telecom - Internet Fibra Óptica em Florianópolis | Ultra Velocidade",
    template: "%s | Up Telecom",
  },
  description: "Internet fibra óptica de alta velocidade em Florianópolis. Planos de 200MB a 900MB. Internet via rádio para zonas rurais. Suporte técnico especializado.",
  keywords: [
    "internet fibra óptica",
    "internet Florianópolis",
    "provedor internet",
    "internet alta velocidade",
    "internet via rádio",
    "up telecom",
    "banda larga Florianópolis",
    "internet ilimitada",
  ],
  authors: [{ name: "Up Telecom" }],
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
    title: "Up Telecom - Internet Fibra Óptica em Florianópolis",
    description: "Internet fibra óptica de alta velocidade em Florianópolis. Planos de 200MB a 900MB com tecnologia de ponta.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Up Telecom - Internet Fibra Óptica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Up Telecom - Internet Fibra Óptica em Florianópolis",
    description: "Internet fibra óptica de alta velocidade em Florianópolis. Planos de 200MB a 900MB.",
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
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${rubik.variable}`} suppressHydrationWarning>
        <Header />
        <main className="min-h-screen pt-21">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

