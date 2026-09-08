"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Zap } from "lucide-react";

type Plan = {
  name: string;
  image: string;
  alt: string;
  whatsappMessage: string;
  popular: boolean;
};

// Artes em public/PLANOS (508x907, fundo transparente). O preço, a velocidade e
// os benefícios estão na própria arte; o alt replica o conteúdo para acessibilidade/SEO.
const fiberPlans: Plan[] = [
  {
    name: "600 Mega",
    image: "/PLANOS/600MEGA.png",
    alt: "Plano 600 Mega: internet para a família toda, apps inclusos (+Q Nutri, E+ e mais), roteador incluso via comodato, R$ 109,90 por mês",
    whatsappMessage: "Olá! Quero assinar o plano de 600 Mega.",
    popular: false,
  },
  {
    name: "700 Mega",
    image: "/PLANOS/700MEGA.png",
    alt: "Plano 700 Mega: navegue sem travar, HBO Max, Deezer e Disney+ inclusos, roteador incluso via comodato, R$ 119,90 por mês",
    whatsappMessage: "Olá! Quero assinar o plano de 700 Mega.",
    popular: true,
  },
  {
    name: "Plano Gamer",
    image: "/PLANOS/PLANOGAMER.png",
    alt: "Plano Gamer com ExitLag: mais estabilidade nos jogos, roteador incluso via comodato, R$ 169,90 por mês",
    whatsappMessage: "Olá! Quero assinar o Plano Gamer.",
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
              Internet fibra óptica
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
              key={plan.name}
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

              {/* Arte do plano */}
              <Image
                src={plan.image}
                alt={plan.alt}
                width={508}
                height={907}
                sizes="(min-width: 1024px) 33vw, 448px"
                className="w-full h-auto"
              />

              {/* CTA - largura acompanha o corpo do card na arte (~64% da largura da imagem) */}
              <a
                href={`https://wa.me/554835000962?text=${encodeURIComponent(plan.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-[64%] mx-auto -mt-3 text-center py-3.5 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105"
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
                Assine agora
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
