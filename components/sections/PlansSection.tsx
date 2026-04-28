"use client";

import { motion } from "framer-motion";
import { Zap, Wifi, Download, Upload, Infinity as InfinityIcon } from "lucide-react";
import Link from "next/link";

type Plan = {
  name: string;
  price: string;
  speed: string;
  upload: string;
  popular: boolean;
};

const fiberPlans: Plan[] = [
  {
    name: "Básico",
    price: "104,99",
    speed: "550",
    upload: "550",
    popular: false,
  },
  {
    name: "Premium",
    price: "129,99",
    speed: "700",
    upload: "700",
    popular: true,
  },
  {
    name: "Extreme",
    price: "149,99",
    speed: "900",
    upload: "900",
    popular: false,
  },
];

export function PlansSection() {
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
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
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
            <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400 shrink-0" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
              Internet Fibra Óptica
            </h2>
          </motion.div>
          <p className="text-base sm:text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto px-4">
            Conheça nossos planos de alta velocidade
          </p>
        </motion.div>

        {/* Grid de planos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 mb-12 max-w-md lg:max-w-none mx-auto">
          {fiberPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative"
            >
              {/* Badge "Mais Assinado!" para o plano popular */}
              {plan.popular && (
                <div
                  className="absolute -top-3 right-6 z-30 px-4 py-1.5 rounded-full"
                  style={{
                    background:
                      "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
                    boxShadow:
                      "0 8px 20px rgba(6, 182, 212, 0.5), inset 0 1px 0 rgba(255,255,255,0.4)",
                    border: "1px solid rgba(165, 243, 252, 0.5)",
                  }}
                >
                  <span className="text-xs font-black tracking-wider text-white uppercase">
                    Mais Assinado!
                  </span>
                </div>
              )}

              {/* Card principal */}
              <div
                className="relative overflow-hidden pt-8 pb-7 px-5 sm:pt-10 sm:pb-8 sm:px-7 h-full"
                style={{
                  background: plan.popular
                    ? "linear-gradient(135deg, #1e3a8a 0%, #2563eb 25%, #4f46e5 60%, #7c3aed 100%)"
                    : "linear-gradient(135deg, #1e3a8a 0%, #1e40af 35%, #3730a3 70%, #4338ca 100%)",
                  borderRadius: "28px",
                  border: plan.popular
                    ? "1.5px solid rgba(167, 139, 250, 0.5)"
                    : "1.5px solid rgba(147, 197, 253, 0.4)",
                  boxShadow: plan.popular
                    ? "0 28px 70px rgba(124, 58, 237, 0.5), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.25)"
                    : "0 24px 60px rgba(37, 99, 235, 0.35), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.2)",
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

                {/* Nome do plano */}
                <div className="relative mb-5 sm:mb-6">
                  <h3
                    className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-none tracking-tight"
                    style={{
                      textShadow:
                        "0 2px 8px rgba(0,0,0,0.4), 0 0 30px rgba(147, 197, 253, 0.25)",
                    }}
                  >
                    UP {plan.name.toUpperCase()}
                  </h3>
                </div>

                {/* Card interno - Velocidade + Preço (glassmorphism) */}
                <div
                  className="relative px-5 py-4 rounded-2xl mb-6 backdrop-blur-3xl"
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
                  <div className="flex items-baseline justify-between gap-2 sm:gap-3 flex-wrap">
                    <div className="flex items-baseline">
                      <span
                        className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-none"
                        style={{ textShadow: "0 2px 6px rgba(0,0,0,0.3)" }}
                      >
                        {plan.speed}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-blue-100 ml-1.5">
                        mb
                      </span>
                    </div>
                    <div
                      className="h-8 sm:h-10 w-px"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent, rgba(255,255,255,0.4), transparent)",
                      }}
                    />
                    <div className="flex items-baseline">
                      <span className="text-xs sm:text-sm font-bold text-blue-100 mr-1">
                        R$
                      </span>
                      <span
                        className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-none"
                        style={{ textShadow: "0 2px 6px rgba(0,0,0,0.3)" }}
                      >
                        {plan.price.split(",")[0]}
                      </span>
                      <span className="text-lg sm:text-xl lg:text-2xl font-black text-white">
                        ,{plan.price.split(",")[1]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Benefícios */}
                <ul className="relative space-y-3 mb-7">
                  <li className="flex items-center gap-3 text-blue-50">
                    <div
                      className="flex items-center justify-center w-8 h-8 rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.12)",
                        border: "1px solid rgba(255,255,255,0.25)",
                      }}
                    >
                      <Wifi className="w-4 h-4 text-blue-200" />
                    </div>
                    <span className="text-sm font-medium">
                      Roteador Wi-Fi em comodato
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-blue-50">
                    <div
                      className="flex items-center justify-center w-8 h-8 rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.12)",
                        border: "1px solid rgba(255,255,255,0.25)",
                      }}
                    >
                      <Download className="w-4 h-4 text-blue-200" />
                    </div>
                    <span className="text-sm font-medium">
                      Download {plan.speed}MB
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-blue-50">
                    <div
                      className="flex items-center justify-center w-8 h-8 rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.12)",
                        border: "1px solid rgba(255,255,255,0.25)",
                      }}
                    >
                      <Upload className="w-4 h-4 text-blue-200" />
                    </div>
                    <span className="text-sm font-medium">
                      Upload {plan.upload}MB
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-blue-50">
                    <div
                      className="flex items-center justify-center w-8 h-8 rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.12)",
                        border: "1px solid rgba(255,255,255,0.25)",
                      }}
                    >
                      <InfinityIcon className="w-4 h-4 text-blue-200" />
                    </div>
                    <span className="text-sm font-medium">
                      Internet ilimitada
                    </span>
                  </li>
                </ul>

                {/* CTA */}
                <Link
                  href="/contato"
                  className="relative block w-full text-center py-3.5 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105"
                  style={{
                    background: plan.popular
                      ? "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)"
                      : "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(219, 234, 254, 0.95) 100%)",
                    color: plan.popular ? "white" : "#1e3a8a",
                    boxShadow: plan.popular
                      ? "0 8px 24px rgba(6, 182, 212, 0.5), inset 0 1px 0 rgba(255,255,255,0.4)"
                      : "0 8px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.6)",
                    border: plan.popular
                      ? "1px solid rgba(165, 243, 252, 0.5)"
                      : "1px solid rgba(147, 197, 253, 0.4)",
                  }}
                >
                  Assine Agora
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
