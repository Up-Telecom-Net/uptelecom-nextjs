"use client";

import { motion } from "framer-motion";
import { MapPin, Radio, ArrowRight, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const neighborhoods = [
  "ITACURUBI",
  "AGRONÔMICA",
  "MONTE SERRAT",
  "TRINDADE",
  "CAEIRA",
  "SACO DOS LIMÕES",
  "CENTRO",
  "SERRINHA",
  "CARVOEIRA",
  "PANTANAL",
];

export function CoverageSection() {
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

        {/* Grid pattern decorativo */}
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
            <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400 shrink-0" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">
              Conheça os Bairros que Atendemos
            </h2>
          </motion.div>
          <p className="text-base sm:text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto px-4">
            Estamos expandindo nossa cobertura em Florianópolis para levar internet de qualidade para mais lugares
          </p>
        </motion.div>

        {/* Grid de duas colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Coluna 1 - Bairros Atendidos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div
              className="relative overflow-hidden p-6 sm:p-8 h-full"
              style={{
                background:
                  "linear-gradient(135deg, #1e3a8a 0%, #1e40af 35%, #3730a3 70%, #4338ca 100%)",
                borderRadius: "28px",
                border: "1.5px solid rgba(147, 197, 253, 0.4)",
                boxShadow:
                  "0 24px 60px rgba(37, 99, 235, 0.35), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
            >
              {/* Reflexo no topo */}
              <div
                className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 100%)",
                  borderRadius: "28px 28px 0 0",
                }}
              />
              {/* Linha de luz no topo */}
              <div
                className="absolute top-0 left-8 right-8 h-px pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
                }}
              />
              {/* Glow decorativo */}
              <div
                className="absolute -top-20 -right-20 w-56 h-56 rounded-full pointer-events-none opacity-40"
                style={{
                  background:
                    "radial-gradient(circle, rgba(96, 165, 250, 0.6) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />

              <div className="relative">
                {/* Título com badge */}
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0"
                    style={{
                      background: "rgba(255,255,255,0.15)",
                      border: "1px solid rgba(255,255,255,0.3)",
                    }}
                  >
                    <Radio className="w-5 h-5 text-blue-200" />
                  </div>
                  <div>
                    <h3
                      className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight"
                      style={{
                        textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                      }}
                    >
                      Bairros Atendidos
                    </h3>
                    <span className="text-xs sm:text-sm text-blue-200/80 font-medium">
                      {neighborhoods.length} regiões em Florianópolis
                    </span>
                  </div>
                </div>

                {/* Lista de bairros em chips glassmorphism */}
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3">
                  {neighborhoods.map((neighborhood, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.04 }}
                      whileHover={{ scale: 1.04, y: -2 }}
                      className="relative px-2.5 sm:px-3 py-2.5 sm:py-3 rounded-xl backdrop-blur-3xl flex items-center gap-1.5 sm:gap-2 cursor-default"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 100%)",
                        border: "1px solid rgba(255, 255, 255, 0.25)",
                        boxShadow:
                          "inset 0 1px 0 rgba(255,255,255,0.3), 0 4px 12px rgba(0,0,0,0.2)",
                        backdropFilter: "blur(40px) saturate(1.5)",
                        WebkitBackdropFilter: "blur(40px) saturate(1.5)",
                      }}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-300 shrink-0" />
                      <span className="text-[11px] sm:text-xs md:text-sm font-bold text-white tracking-wide truncate">
                        {neighborhood}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coluna 2 - Não encontrou seu bairro? */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div
              className="relative overflow-hidden p-6 sm:p-8 h-full flex flex-col"
              style={{
                background:
                  "linear-gradient(135deg, #1e3a8a 0%, #2563eb 25%, #4f46e5 60%, #7c3aed 100%)",
                borderRadius: "28px",
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
                className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none opacity-50"
                style={{
                  background:
                    "radial-gradient(circle, rgba(167, 139, 250, 0.6) 0%, transparent 70%)",
                  filter: "blur(50px)",
                }}
              />

              <div className="relative flex flex-col h-full">
                {/* Ícone destacado */}
                <div className="mb-6">
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 100%)",
                      border: "1.5px solid rgba(255,255,255,0.4)",
                      boxShadow:
                        "inset 0 1px 0 rgba(255,255,255,0.4), 0 8px 24px rgba(0,0,0,0.2)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                    }}
                  >
                    <MapPin className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                <h3
                  className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4 leading-tight"
                  style={{
                    textShadow:
                      "0 2px 8px rgba(0,0,0,0.4), 0 0 30px rgba(167, 139, 250, 0.3)",
                  }}
                >
                  Não encontrou seu bairro?
                </h3>
                <p className="text-base sm:text-lg text-violet-100/90 mb-6 sm:mb-8 leading-relaxed">
                  Entre em contato conosco e verifique se atendemos sua região!
                </p>

                {/* Form glassmorphism */}
                <div className="mt-auto space-y-4">
                  <input
                    type="text"
                    placeholder="Digite seu bairro ou endereço"
                    className="w-full px-5 py-4 rounded-xl text-white placeholder-white/50 focus:outline-none transition-all duration-300 backdrop-blur-3xl"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 100%)",
                      border: "1.5px solid rgba(255, 255, 255, 0.3)",
                      boxShadow:
                        "inset 0 1px 0 rgba(255,255,255,0.3), 0 4px 12px rgba(0,0,0,0.15)",
                      backdropFilter: "blur(40px) saturate(1.5)",
                      WebkitBackdropFilter: "blur(40px) saturate(1.5)",
                    }}
                  />
                  <a
                    href="https://wa.me/5548996891962?text=Ol%C3%A1%21%20Gostaria%20de%20verificar%20se%20atendem%20a%20minha%20regi%C3%A3o."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 sm:gap-3 w-full px-4 sm:px-6 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 text-center"
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
                    <span className="leading-tight">Verificar Cobertura no WhatsApp</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
