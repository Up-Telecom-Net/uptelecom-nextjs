"use client";

import { motion } from "framer-motion";
import { Phone, PhoneCall, Infinity as InfinityIcon, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function PhonePlanSection() {
  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #050118 0%, #0a0420 30%, #14082c 60%, #1a0a3e 100%)",
      }}
    >
      {/* Decoração de fundo - blobs animados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
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
          animate={{
            x: [0, -60, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 70%)",
            filter: "blur(100px)",
            borderRadius: "50%",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(147, 197, 253, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 197, 253, 0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 mb-4 px-4"
          >
            <PhoneCall className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400 shrink-0" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
              Fale sem preocupações
            </h2>
          </motion.div>
          <p className="text-base sm:text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto px-4">
            Sua jornada para um mundo conectado começa agora
          </p>
        </motion.div>

        {/* Card Telefone Fixo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -6, scale: 1.01 }}
          className="relative max-w-4xl mx-auto"
        >
          <div
            className="relative overflow-hidden p-6 sm:p-8 md:p-10"
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

            {/* Sparkles decorativos */}
            <motion.div
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 right-8 hidden md:block pointer-events-none"
            >
              <Sparkles className="w-6 h-6 text-violet-200" />
            </motion.div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              {/* Coluna esquerda - Título e features */}
              <div>
                {/* Ícone do telefone */}
                <motion.div
                  whileHover={{ scale: 1.08, rotate: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl mb-5 backdrop-blur-3xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.1) 100%)",
                    border: "1.5px solid rgba(255, 255, 255, 0.4)",
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.4), 0 8px 24px rgba(0,0,0,0.2)",
                    backdropFilter: "blur(40px) saturate(1.5)",
                    WebkitBackdropFilter: "blur(40px) saturate(1.5)",
                  }}
                >
                  <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2.5} />
                </motion.div>

                <h3
                  className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 leading-none tracking-tight"
                  style={{
                    textShadow:
                      "0 2px 8px rgba(0,0,0,0.4), 0 0 30px rgba(167, 139, 250, 0.3)",
                  }}
                >
                  TELEFONE FIXO
                </h3>
                <p className="text-base sm:text-lg text-violet-100/90 mb-6 leading-relaxed">
                  Ligações ilimitadas para você falar à vontade!
                </p>

                <ul className="space-y-2.5 mb-2">
                  <li className="flex items-center gap-3 text-blue-50">
                    <div
                      className="flex items-center justify-center w-7 h-7 rounded-full shrink-0"
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        border: "1px solid rgba(255,255,255,0.3)",
                      }}
                    >
                      <InfinityIcon className="w-3.5 h-3.5 text-blue-200" />
                    </div>
                    <span className="text-sm sm:text-base font-medium">
                      Ligações ilimitadas para fixos e celulares
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-blue-50">
                    <div
                      className="flex items-center justify-center w-7 h-7 rounded-full shrink-0"
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        border: "1px solid rgba(255,255,255,0.3)",
                      }}
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-blue-200" />
                    </div>
                    <span className="text-sm sm:text-base font-medium">
                      Aparelho em comodato incluso
                    </span>
                  </li>
                </ul>
              </div>

              {/* Coluna direita - Preço + CTA */}
              <div className="flex flex-col items-start md:items-end gap-5">
                {/* Card interno glassmorphism com preço */}
                <div
                  className="relative w-full md:w-auto px-5 py-4 sm:px-6 sm:py-5 rounded-2xl backdrop-blur-3xl"
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
                  <span className="block text-xs sm:text-sm font-bold tracking-[0.2em] text-blue-100/90 uppercase mb-1">
                    A partir de
                  </span>
                  <div className="flex items-baseline">
                    <span className="text-base sm:text-lg font-bold text-blue-100 mr-1">
                      R$
                    </span>
                    <span
                      className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-none"
                      style={{ textShadow: "0 2px 6px rgba(0,0,0,0.3)" }}
                    >
                      29
                    </span>
                    <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                      ,90
                    </span>
                    <span className="text-sm sm:text-base font-bold text-blue-100 ml-2">
                      /mensal
                    </span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <a
                    href="https://wa.me/5548996891962?text=Ol%C3%A1%21%20Tenho%20interesse%20no%20plano%20de%20Telefone%20Fixo."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105"
                    style={{
                      background:
                        "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
                      color: "white",
                      boxShadow:
                        "0 8px 24px rgba(6, 182, 212, 0.5), inset 0 1px 0 rgba(255,255,255,0.4)",
                      border: "1px solid rgba(165, 243, 252, 0.5)",
                    }}
                  >
                    <WhatsAppIcon size={18} className="text-white shrink-0" />
                    <span>Assine já</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <Link
                    href="/contato"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 transition-all duration-300 backdrop-blur-sm"
                  >
                    Saiba mais
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
