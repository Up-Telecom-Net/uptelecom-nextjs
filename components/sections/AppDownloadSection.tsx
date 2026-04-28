"use client";

import { motion } from "framer-motion";
import { FileText, Wifi, MessageCircle } from "lucide-react";

const ANDROID_URL =
  "https://play.google.com/store/apps/details?id=br.com.appdoprovedor.uptelecom";
const IOS_URL = "https://apps.apple.com/us/app/up-telecom/id1593644411";

const features = [
  { icon: FileText, text: "2ª via de fatura na palma da mão" },
  { icon: Wifi, text: "Acompanhe seu plano e consumo" },
  { icon: MessageCircle, text: "Abra chamados de suporte 24/7" },
];

export function AppDownloadSection() {
  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #050118 0%, #0a0420 30%, #14082c 60%, #1a0a3e 100%)",
      }}
    >
      {/* Decoração de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-0 w-[500px] h-[500px] opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(99, 102, 241, 0.3) 50%, transparent 70%)",
            filter: "blur(80px)",
            borderRadius: "50%",
          }}
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 60, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 70%)",
            filter: "blur(100px)",
            borderRadius: "50%",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(147, 197, 253, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 197, 253, 0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-[30px] sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto"
        >
          <div
            className="relative overflow-hidden p-6 sm:p-8 md:p-10 lg:p-12"
            style={{
              background:
                "linear-gradient(135deg, #1e3a8a 0%, #2563eb 25%, #4f46e5 60%, #7c3aed 100%)",
              borderRadius: "32px",
              border: "1.5px solid rgba(167, 139, 250, 0.5)",
              boxShadow:
                "0 28px 70px rgba(124, 58, 237, 0.45), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.25)",
            }}
          >
            {/* Reflexo no topo */}
            <div
              className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)",
                borderRadius: "32px 32px 0 0",
              }}
            />
            {/* Linha de luz */}
            <div
              className="absolute top-0 left-8 right-8 h-px pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
              }}
            />
            {/* Glows */}
            <div
              className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none opacity-40"
              style={{
                background:
                  "radial-gradient(circle, rgba(167, 139, 250, 0.7) 0%, transparent 70%)",
                filter: "blur(50px)",
              }}
            />
            <div
              className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full pointer-events-none opacity-30"
              style={{
                background:
                  "radial-gradient(circle, rgba(96, 165, 250, 0.6) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
              {/* Coluna esquerda - Imagem do app (mockup dos celulares) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative flex items-center justify-center order-2 md:order-1"
              >
                {/* Glow atrás dos celulares */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(125, 211, 252, 0.35) 0%, transparent 60%)",
                    filter: "blur(40px)",
                  }}
                />
                <motion.img
                  src="/media/app-mobile.png"
                  alt="App Up Telecom no celular"
                  className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-full h-auto drop-shadow-2xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Coluna direita - Conteúdo + Botões */}
              <div className="order-1 md:order-2">
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4 leading-tight"
                  style={{
                    textShadow:
                      "0 2px 8px rgba(0,0,0,0.4), 0 0 30px rgba(167, 139, 250, 0.3)",
                  }}
                >
                  Baixe o app Up Telecom
                </h2>

                <ul className="space-y-3">
                  {features.map((f, i) => {
                    const Icon = f.icon;
                    return (
                      <li key={i} className="flex items-center gap-3 text-blue-50">
                        <div
                          className="flex items-center justify-center w-8 h-8 rounded-full shrink-0"
                          style={{
                            background: "rgba(255,255,255,0.15)",
                            border: "1px solid rgba(255,255,255,0.3)",
                          }}
                        >
                          <Icon className="w-4 h-4 text-blue-200" />
                        </div>
                        <span className="text-sm sm:text-base font-medium">
                          {f.text}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                {/* Botões de download */}
                <div className="flex flex-col gap-3 mt-6 sm:mt-7">
                {/* Google Play */}
                <motion.a
                  href={ANDROID_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative flex items-center gap-4 px-5 py-4 rounded-2xl backdrop-blur-3xl group"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 100%)",
                    border: "1.5px solid rgba(255, 255, 255, 0.3)",
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.3), 0 8px 24px rgba(0,0,0,0.2)",
                    backdropFilter: "blur(40px) saturate(1.5)",
                    WebkitBackdropFilter: "blur(40px) saturate(1.5)",
                  }}
                >
                  {/* Logo Google Play */}
                  <svg
                    viewBox="0 0 512 512"
                    className="w-10 h-10 sm:w-12 sm:h-12 shrink-0"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="gp-a" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#00C3FF" />
                        <stop offset="1" stopColor="#1BE2FA" />
                      </linearGradient>
                      <linearGradient id="gp-b" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0" stopColor="#FFCE00" />
                        <stop offset="1" stopColor="#FFEA00" />
                      </linearGradient>
                      <linearGradient id="gp-c" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#DE2453" />
                        <stop offset="1" stopColor="#FE3944" />
                      </linearGradient>
                      <linearGradient id="gp-d" x1="0" y1="1" x2="1" y2="0">
                        <stop offset="0" stopColor="#11D574" />
                        <stop offset="1" stopColor="#01F176" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#gp-a)"
                      d="M99.6 14.7c-7.2 4.2-11.6 12-11.6 22.7v437.2c0 10.7 4.4 18.5 11.6 22.7l261-261z"
                    />
                    <path
                      fill="url(#gp-b)"
                      d="M428.4 245.4 360.6 213.5 280.7 256l79.9 42.5 67.8-31.9c19.5-9.2 19.5-31 0-40.2z"
                    />
                    <path
                      fill="url(#gp-c)"
                      d="M99.6 497.3c5.7 3.3 13.1 3.3 21.7-1.3l259.3-149.5-79.9-42.5L99.6 497.3z"
                    />
                    <path
                      fill="url(#gp-d)"
                      d="M99.6 14.7 300.7 207.5l79.9-42.5L121.3 16C112.7 11.4 105.3 11.4 99.6 14.7z"
                    />
                  </svg>
                  <div className="flex-1 min-w-0">
                    <span className="block text-[11px] sm:text-xs text-blue-100/80 font-medium uppercase tracking-wider">
                      Disponível no
                    </span>
                    <span
                      className="block text-lg sm:text-xl font-black text-white leading-tight"
                      style={{ textShadow: "0 2px 6px rgba(0,0,0,0.3)" }}
                    >
                      Google Play
                    </span>
                  </div>
                </motion.a>

                {/* App Store */}
                <motion.a
                  href={IOS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative flex items-center gap-4 px-5 py-4 rounded-2xl backdrop-blur-3xl group"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 100%)",
                    border: "1.5px solid rgba(255, 255, 255, 0.3)",
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.3), 0 8px 24px rgba(0,0,0,0.2)",
                    backdropFilter: "blur(40px) saturate(1.5)",
                    WebkitBackdropFilter: "blur(40px) saturate(1.5)",
                  }}
                >
                  {/* Logo Apple */}
                  <svg
                    viewBox="0 0 384 512"
                    className="w-9 h-9 sm:w-11 sm:h-11 shrink-0 text-white"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                  <div className="flex-1 min-w-0">
                    <span className="block text-[11px] sm:text-xs text-blue-100/80 font-medium uppercase tracking-wider">
                      Baixar na
                    </span>
                    <span
                      className="block text-lg sm:text-xl font-black text-white leading-tight"
                      style={{ textShadow: "0 2px 6px rgba(0,0,0,0.3)" }}
                    >
                      App Store
                    </span>
                  </div>
                </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
