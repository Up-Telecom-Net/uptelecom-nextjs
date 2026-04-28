"use client";

import { motion } from "framer-motion";
import { Briefcase, Shield, Globe, ArrowRight, Sparkles, Zap, Crown } from "lucide-react";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

type BusinessPlan = {
  speed: string;
  price: string;
  tag: string;
  highlight?: boolean;
};

const businessPlans: BusinessPlan[] = [
  { speed: "400", price: "159,99", tag: "Essencial" },
  { speed: "600", price: "179,99", tag: "Mais Pedido", highlight: true },
];

export function BusinessPlanSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#0a0420] bg-no-repeat bg-cover bg-center lg:bg-right"
      style={{
        backgroundImage: "url('/media/Man_holding_payment_202604271942.jpeg')",
      }}
    >
      {/* Overlay gradient azul-marinho com tom de sky-blue para diferenciar do violeta do gamer */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(8, 25, 60, 0.95) 0%, rgba(12, 74, 110, 0.85) 25%, rgba(7, 89, 133, 0.5) 55%, rgba(3, 105, 161, 0.15) 80%, transparent 100%)",
        }}
      />

      {/* Vinheta */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(8, 25, 60, 0.45) 0%, transparent 18%, transparent 82%, rgba(8, 25, 60, 0.45) 100%)",
        }}
      />

      {/* Sparkles decorativos */}
      <motion.div
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 right-32 hidden md:block pointer-events-none"
      >
        <Sparkles className="w-10 h-10 text-sky-300" />
      </motion.div>
      <motion.div
        animate={{
          opacity: [0.4, 1, 0.4],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute bottom-20 left-16 hidden md:block pointer-events-none"
      >
        <Sparkles className="w-7 h-7 text-cyan-300" />
      </motion.div>

      <div className="container mx-auto px-[30px] sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:min-h-[700px] py-12 sm:py-16 lg:py-20">
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
                <span className="text-sky-300">fibra</span>
              </span>
            </div>

            {/* Badge título */}
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, #0369a1 0%, #0284c7 50%, #38bdf8 100%)",
                boxShadow:
                  "0 8px 24px rgba(2, 132, 199, 0.5), inset 0 1px 0 rgba(255,255,255,0.4)",
                border: "1px solid rgba(186, 230, 253, 0.5)",
              }}
            >
              <Briefcase className="w-5 h-5 text-white shrink-0" />
              <span
                className="text-sm sm:text-base font-black tracking-wide text-white uppercase"
                style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
              >
                Planos Empresariais
              </span>
            </motion.div>

            <p className="text-base sm:text-lg md:text-xl text-sky-50/90 mb-6 sm:mb-8 max-w-xl leading-relaxed">
              Conexão estável e velocidade de sobra para o seu negócio crescer sem limites.
            </p>

            {/* Cards de planos */}
            <div className="space-y-5 sm:space-y-6 mb-6 sm:mb-8 max-w-xl pt-3">
              {businessPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="relative"
                >
                  {/* Tab badge no topo */}
                  <div
                    className="absolute -top-3 left-5 z-20 inline-flex items-center gap-1.5 px-4 py-1.5"
                    style={{
                      background: plan.highlight
                        ? "linear-gradient(135deg, #facc15 0%, #f59e0b 50%, #f97316 100%)"
                        : "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
                      borderRadius: "12px 12px 14px 4px",
                      boxShadow: plan.highlight
                        ? "0 8px 20px rgba(245, 158, 11, 0.55), inset 0 1px 0 rgba(255,255,255,0.45)"
                        : "0 6px 16px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.18)",
                      border: plan.highlight
                        ? "1px solid rgba(254, 243, 199, 0.6)"
                        : "1px solid rgba(148, 163, 184, 0.45)",
                    }}
                  >
                    {plan.highlight ? (
                      <Crown className="w-3.5 h-3.5 text-amber-950 shrink-0" />
                    ) : (
                      <Zap className="w-3.5 h-3.5 text-sky-300 shrink-0" />
                    )}
                    <span
                      className={`text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase ${
                        plan.highlight ? "text-amber-950" : "text-white"
                      }`}
                      style={{
                        textShadow: plan.highlight
                          ? "0 1px 0 rgba(255,255,255,0.3)"
                          : "0 1px 2px rgba(0,0,0,0.4)",
                      }}
                    >
                      {plan.tag}
                    </span>
                  </div>

                  <div
                    className="relative overflow-hidden p-5 sm:p-6 pt-7 sm:pt-8"
                    style={{
                      background: plan.highlight
                        ? "linear-gradient(135deg, #0c4a6e 0%, #0369a1 25%, #0284c7 55%, #06b6d4 100%)"
                        : "linear-gradient(135deg, rgba(8, 47, 73, 0.55) 0%, rgba(15, 23, 42, 0.7) 100%)",
                      borderRadius: "24px",
                      border: plan.highlight
                        ? "2px solid rgba(125, 211, 252, 0.85)"
                        : "1.5px solid rgba(125, 211, 252, 0.35)",
                      boxShadow: plan.highlight
                        ? "0 24px 60px rgba(6, 182, 212, 0.55), 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.35), 0 0 40px rgba(56, 189, 248, 0.4)"
                        : "0 12px 32px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255,255,255,0.12)",
                      backdropFilter: plan.highlight ? undefined : "blur(20px)",
                      WebkitBackdropFilter: plan.highlight ? undefined : "blur(20px)",
                    }}
                  >
                    {/* Reflexo no topo */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none"
                      style={{
                        background: plan.highlight
                          ? "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 100%)"
                          : "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 100%)",
                        borderRadius: "24px 24px 0 0",
                      }}
                    />
                    {/* Linha de luz */}
                    <div
                      className="absolute top-0 left-6 right-6 h-px pointer-events-none"
                      style={{
                        background: plan.highlight
                          ? "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)"
                          : "linear-gradient(90deg, transparent, rgba(125, 211, 252, 0.5), transparent)",
                      }}
                    />
                    {/* Glow */}
                    <div
                      className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
                      style={{
                        background: plan.highlight
                          ? "radial-gradient(circle, rgba(34, 211, 238, 0.85) 0%, transparent 70%)"
                          : "radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, transparent 70%)",
                        filter: "blur(40px)",
                        opacity: plan.highlight ? 0.55 : 0.4,
                      }}
                    />

                    <div className="relative flex items-center justify-between gap-3 sm:gap-4 flex-wrap">
                      {/* Velocidade */}
                      <div className="flex flex-col">
                        <span
                          className={`text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-1 ${
                            plan.highlight ? "text-cyan-100" : "text-sky-300/80"
                          }`}
                        >
                          Até
                        </span>
                        <div className="flex items-baseline">
                          <span
                            className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-none"
                            style={{
                              textShadow: plan.highlight
                                ? "0 2px 8px rgba(0,0,0,0.35), 0 0 30px rgba(34, 211, 238, 0.5)"
                                : "0 2px 6px rgba(0,0,0,0.5)",
                            }}
                          >
                            {plan.speed}
                          </span>
                          <span
                            className={`text-lg sm:text-xl font-bold ml-1.5 ${
                              plan.highlight ? "text-cyan-100" : "text-sky-200"
                            }`}
                          >
                            mb
                          </span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div
                        className="hidden sm:block h-14 w-px"
                        style={{
                          background: plan.highlight
                            ? "linear-gradient(180deg, transparent, rgba(255,255,255,0.55), transparent)"
                            : "linear-gradient(180deg, transparent, rgba(125, 211, 252, 0.4), transparent)",
                        }}
                      />

                      {/* Preço */}
                      <div
                        className="relative px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl backdrop-blur-3xl"
                        style={{
                          background: plan.highlight
                            ? "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.15) 100%)"
                            : "linear-gradient(135deg, rgba(15, 23, 42, 0.75) 0%, rgba(8, 47, 73, 0.6) 100%)",
                          border: plan.highlight
                            ? "1.5px solid rgba(255, 255, 255, 0.4)"
                            : "1.5px solid rgba(125, 211, 252, 0.45)",
                          boxShadow: plan.highlight
                            ? "inset 0 1px 0 rgba(255,255,255,0.55), 0 8px 24px rgba(0,0,0,0.3)"
                            : "inset 0 1px 0 rgba(125, 211, 252, 0.25), 0 8px 24px rgba(0,0,0,0.4)",
                          backdropFilter: "blur(40px) saturate(1.8)",
                          WebkitBackdropFilter: "blur(40px) saturate(1.8)",
                        }}
                      >
                        <div className="flex items-baseline">
                          <span
                            className={`text-xs sm:text-sm font-bold mr-1 ${
                              plan.highlight ? "text-cyan-100" : "text-sky-300"
                            }`}
                          >
                            R$
                          </span>
                          <span
                            className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-none"
                            style={{ textShadow: "0 2px 6px rgba(0,0,0,0.4)" }}
                          >
                            {plan.price.split(",")[0]}
                          </span>
                          <span className="text-xl sm:text-2xl font-black text-white">
                            ,{plan.price.split(",")[1]}
                          </span>
                        </div>
                        <div
                          className={`text-[10px] sm:text-xs font-semibold tracking-wider uppercase mt-0.5 text-right ${
                            plan.highlight ? "text-cyan-100/80" : "text-sky-300/70"
                          }`}
                        >
                          /mês
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Benefícios bottom */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 100%)",
                  border: "1px solid rgba(186, 230, 253, 0.4)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
              >
                <Shield className="w-4 h-4 text-sky-200 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-white">
                  Suporte prioritário
                </span>
              </div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 100%)",
                  border: "1px solid rgba(186, 230, 253, 0.4)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
              >
                <Globe className="w-4 h-4 text-sky-200 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-white">
                  1 IP fixo incluso
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://wa.me/5548996891962?text=Ol%C3%A1%21%20Tenho%20interesse%20nos%20planos%20empresariais%20da%20Up%20Telecom."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/50"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(224, 242, 254, 0.95) 100%)",
                  color: "#0c4a6e",
                  boxShadow:
                    "0 8px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.6)",
                  border: "1px solid rgba(186, 230, 253, 0.6)",
                }}
              >
                <WhatsAppIcon size={20} className="text-green-600" />
                <span>Quero para minha empresa</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-base sm:text-lg border-2 border-sky-300/60 text-white hover:bg-sky-500/20 hover:border-sky-200 transition-all duration-300 backdrop-blur-sm"
              >
                Falar com consultor
              </Link>
            </div>
          </motion.div>

          {/* Coluna direita - vazia para destacar a imagem */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
