"use client";

import { motion } from "framer-motion";
import { Gamepad2, Wifi, Zap, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function GamerPlanSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#0a0420] bg-no-repeat bg-cover bg-center lg:bg-right"
      style={{
        backgroundImage: "url('/media/banner-gamer.jpeg')",
      }}
    >
      {/* Overlay gradient para legibilidade do texto à esquerda, deixando o gamer visível à direita */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10, 4, 32, 0.95) 0%, rgba(20, 8, 50, 0.85) 25%, rgba(30, 13, 70, 0.5) 50%, rgba(30, 13, 70, 0.15) 75%, transparent 100%)",
        }}
      />

      {/* Vinheta sutil nas bordas verticais */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(10, 4, 32, 0.4) 0%, transparent 20%, transparent 80%, rgba(10, 4, 32, 0.4) 100%)",
        }}
      />

      {/* Estrelas/sparkles decorativos animados */}
      <motion.div
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 right-32 hidden md:block"
      >
        <Sparkles className="w-10 h-10 text-purple-300" />
      </motion.div>
      <motion.div
        animate={{
          opacity: [0.4, 1, 0.4],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute bottom-20 left-16 hidden md:block"
      >
        <Sparkles className="w-7 h-7 text-violet-400" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:min-h-[600px] py-12 sm:py-16 lg:py-20">
          {/* Coluna esquerda - Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-white"
          >
            {/* Hashtag #melhorfibra */}
            <div className="mb-4 sm:mb-6">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold">
                <span className="text-white">#melhor</span>
                <span className="text-violet-400">fibra</span>
              </span>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-violet-100/90 mb-6 sm:mb-8 max-w-xl leading-relaxed">
              Velocidade extrema para você dominar o jogo. Sem lag, sem travamento, com latência baixa e ping reduzido.
            </p>

            {/* Card de preço estilo Speed Plan - design moderno tech */}
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative mb-8 w-full max-w-2xl"
            >
              {/* Badge SPEED PLAN CARD - tab no topo-esquerdo */}
              <div
                className="absolute -top-3 left-6 z-20 px-6 py-2.5"
                style={{
                  background:
                    "linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #60a5fa 100%)",
                  borderRadius: "14px 14px 18px 4px",
                  boxShadow:
                    "0 8px 24px rgba(37, 99, 235, 0.5), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.2)",
                  border: "1px solid rgba(147, 197, 253, 0.5)",
                }}
              >
                <span
                  className="text-xs sm:text-sm font-black tracking-[0.25em] text-white uppercase"
                  style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
                >
                  Speed Plan Card
                </span>
              </div>

              {/* Card principal */}
              <div
                className="relative overflow-hidden pt-10 pb-5 px-4 sm:pb-6 sm:px-8"
                style={{
                  background:
                    "linear-gradient(135deg, #1e3a8a 0%, #2563eb 30%, #4f46e5 65%, #6d28d9 100%)",
                  borderRadius: "28px",
                  border: "1.5px solid rgba(147, 197, 253, 0.4)",
                  boxShadow:
                    "0 24px 60px rgba(37, 99, 235, 0.45), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.2)",
                }}
              >
                {/* Brilho/reflexo no topo */}
                <div
                  className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 100%)",
                    borderRadius: "28px 28px 0 0",
                  }}
                />

                {/* Linha de luz no topo */}
                <div
                  className="absolute top-0 left-8 right-8 h-px pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                  }}
                />

                {/* Glow decorativo */}
                <div
                  className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none opacity-40"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(96, 165, 250, 0.6) 0%, transparent 70%)",
                    filter: "blur(40px)",
                  }}
                />

                {/* Conteúdo */}
                <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
                  {/* UP GAMER */}
                  <div className="flex-1 sm:min-w-[180px]">
                    <h3
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight"
                      style={{
                        fontFamily: "system-ui, -apple-system, sans-serif",
                      }}
                    >
                      <span
                        className="text-white"
                        style={{
                          textShadow:
                            "0 2px 8px rgba(0,0,0,0.4), 0 0 30px rgba(147, 197, 253, 0.3)",
                        }}
                      >
                        UP GAMER
                      </span>
                    </h3>
                  </div>

                  {/* Card interno - Velocidade + Preço */}
                  <div
                    className="relative px-4 sm:px-5 py-3 sm:py-4 rounded-2xl backdrop-blur-3xl self-stretch sm:self-auto"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.14) 100%)",
                      border: "1.5px solid rgba(255, 255, 255, 0.35)",
                      boxShadow:
                        "inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(255,255,255,0.1), 0 12px 40px rgba(0,0,0,0.35)",
                      backdropFilter: "blur(80px) saturate(1.8)",
                      WebkitBackdropFilter: "blur(80px) saturate(1.8)",
                    }}
                  >
                    <div className="flex items-baseline justify-end">
                      <span
                        className="text-4xl sm:text-5xl font-black text-white leading-none"
                        style={{
                          textShadow: "0 2px 6px rgba(0,0,0,0.3)",
                        }}
                      >
                        1000
                      </span>
                      <span className="text-base sm:text-lg font-bold text-blue-100 ml-1.5">
                        mb
                      </span>
                    </div>
                    <div
                      className="my-2 h-px"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(219, 234, 254, 0.7), transparent)",
                      }}
                    />
                    <div className="flex items-baseline justify-end">
                      <span className="text-sm font-bold text-blue-100 mr-1">
                        R$
                      </span>
                      <span
                        className="text-3xl sm:text-4xl font-black text-white leading-none"
                        style={{
                          textShadow: "0 2px 6px rgba(0,0,0,0.3)",
                        }}
                      >
                        189
                      </span>
                      <span className="text-2xl sm:text-3xl font-black text-white">
                        ,90
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Benefícios */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-violet-100">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-500/20 border border-violet-400/40">
                  <Wifi className="w-4 h-4 text-violet-300" />
                </div>
                <span className="font-medium">Roteador Wi-Fi incluso em comodato</span>
              </li>
              <li className="flex items-center gap-3 text-violet-100">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-500/20 border border-violet-400/40">
                  <Zap className="w-4 h-4 text-violet-300" />
                </div>
                <span className="font-medium">Latência ultra baixa para games online</span>
              </li>
              <li className="flex items-center gap-3 text-violet-100">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-500/20 border border-violet-400/40">
                  <Gamepad2 className="w-4 h-4 text-violet-300" />
                </div>
                <span className="font-medium">Internet ilimitada para streams e downloads</span>
              </li>
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://wa.me/5548996891962?text=Ol%C3%A1%21%20Tenho%20interesse%20no%20plano%20UP%20GAMER%20de%201000MB."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/50"
                style={{
                  background: "linear-gradient(135deg, #8b5cf6, #6366f1)",
                  color: "white",
                }}
              >
                <WhatsAppIcon size={20} className="text-white" />
                <span>Assinar UP GAMER</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/planos"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-base sm:text-lg border-2 border-violet-400/50 text-white hover:bg-violet-500/20 hover:border-violet-300 transition-all duration-300 backdrop-blur-sm"
              >
                Consulte mais planos
              </Link>
            </div>
          </motion.div>

          {/* Coluna direita - vazia para destacar a imagem do gamer */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
