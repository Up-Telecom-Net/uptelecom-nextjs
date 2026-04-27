"use client";

import { motion } from "framer-motion";
import {
  Headphones,
  Wifi,
  Users,
  Heart,
  Award,
  Globe2,
  Network,
} from "lucide-react";

type Feature = {
  icon: typeof Headphones;
  title: string;
  description: string;
  highlight?: boolean;
};

const features: Feature[] = [
  {
    icon: Headphones,
    title: "Suporte Especializado",
    description:
      "Equipe capacitada para realização de serviços solicitados prestando um atendimento e suporte funcional e de altíssima competência.",
  },
  {
    icon: Wifi,
    title: "Cobertura Ampliada",
    description:
      "Atendemos diversos bairros e regiões com internet fibra óptica, levando conectividade de qualidade para todos os lugares.",
  },
  {
    icon: Users,
    title: "Clientes Satisfeitos",
    description:
      "Tão importante quanto conseguir novos clientes é manter os clientes satisfeitos. Priorizamos qualidade e rapidez.",
  },
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description:
      "Valorizamos cada cliente como parte da nossa família. Seu bem-estar e satisfação são nossa prioridade.",
  },
  {
    icon: Network,
    title: "Tecnologia de Ponta",
    description:
      "Infraestrutura moderna e equipamentos de última geração garantindo a melhor experiência de conexão.",
    highlight: true,
  },
  {
    icon: Award,
    title: "Melhor Custo-Benefício",
    description:
      "Planos acessíveis com a melhor relação qualidade-preço do mercado, sem taxas escondidas ou surpresas na fatura.",
  },
];

export function FeaturesSection() {
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
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
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
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4 sm:mb-6"
          >
            <Globe2 className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4 px-4">
            Por que Escolher a Up Telecom?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto px-4">
            Descubra por que somos a melhor escolha para sua conexão em Florianópolis.
          </p>
        </motion.div>

        {/* Grid de features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <div
                  className="relative overflow-hidden p-5 sm:p-6 md:p-7 h-full"
                  style={{
                    background: feature.highlight
                      ? "linear-gradient(135deg, #1e3a8a 0%, #2563eb 25%, #4f46e5 60%, #7c3aed 100%)"
                      : "linear-gradient(135deg, #1e3a8a 0%, #1e40af 35%, #3730a3 70%, #4338ca 100%)",
                    borderRadius: "24px",
                    border: feature.highlight
                      ? "1.5px solid rgba(167, 139, 250, 0.5)"
                      : "1.5px solid rgba(147, 197, 253, 0.4)",
                    boxShadow: feature.highlight
                      ? "0 24px 60px rgba(124, 58, 237, 0.45), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.25)"
                      : "0 20px 50px rgba(37, 99, 235, 0.3), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.2)",
                  }}
                >
                  {/* Reflexo no topo */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 100%)",
                      borderRadius: "24px 24px 0 0",
                    }}
                  />
                  {/* Linha de luz no topo */}
                  <div
                    className="absolute top-0 left-6 right-6 h-px pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
                    }}
                  />
                  {/* Glow decorativo - move com o hover */}
                  <div
                    className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                    style={{
                      background: feature.highlight
                        ? "radial-gradient(circle, rgba(167, 139, 250, 0.7) 0%, transparent 70%)"
                        : "radial-gradient(circle, rgba(96, 165, 250, 0.6) 0%, transparent 70%)",
                      filter: "blur(40px)",
                    }}
                  />

                  <div className="relative">
                    {/* Ícone glassmorphism */}
                    <motion.div
                      whileHover={{ scale: 1.08, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 backdrop-blur-3xl"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.1) 100%)",
                        border: "1.5px solid rgba(255, 255, 255, 0.35)",
                        boxShadow:
                          "inset 0 1px 0 rgba(255,255,255,0.4), 0 8px 20px rgba(0,0,0,0.2)",
                        backdropFilter: "blur(40px) saturate(1.5)",
                        WebkitBackdropFilter: "blur(40px) saturate(1.5)",
                      }}
                    >
                      <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                    </motion.div>

                    <h3
                      className="text-lg sm:text-xl md:text-2xl font-black text-white mb-2 sm:mb-3 leading-tight"
                      style={{
                        textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
