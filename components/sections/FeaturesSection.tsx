"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Infinity, Headphones, Wifi, TrendingUp, Users, Heart, Award, Globe2, Network } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Ultra Velocidade",
    description: "Tecnologia de fibra óptica mais avançada para você assistir vídeos, ouvir música ou navegar com alta velocidade de forma confiável.",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Shield,
    title: "100% Estável",
    description: "Garantimos assistência técnica de qualidade priorizando a rápida manutenção de nossos serviços para não deixar os clientes sem internet.",
    gradient: "from-blue-600 to-blue-700",
  },
  {
    icon: Infinity,
    title: "Internet Ilimitada",
    description: "Internet sem franquia de dados, você pode navegar tranquilamente sem bloqueios ou limitações.",
    gradient: "from-blue-400 to-blue-500",
  },
  {
    icon: Headphones,
    title: "Suporte Especializado",
    description: "Equipe capacitada para realização de serviços solicitados prestando um atendimento e suporte funcional e de altíssima competência.",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Wifi,
    title: "Cobertura Ampliada",
    description: "Atendemos zonas rurais e residenciais com internet via rádio, levando conectividade para todos os lugares.",
    gradient: "from-blue-600 to-blue-700",
  },
  {
    icon: Users,
    title: "Clientes Satisfeitos",
    description: "Tão importante quanto conseguir novos clientes é manter os clientes satisfeitos. Priorizamos qualidade e rapidez.",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Valorizamos cada cliente como parte da nossa família. Seu bem-estar e satisfação são nossa prioridade.",
    gradient: "from-blue-400 to-blue-500",
  },
  {
    icon: Network,
    title: "Tecnologia de Ponta",
    description: "Infraestrutura moderna e equipamentos de última geração garantindo a melhor experiência de conexão.",
    gradient: "from-blue-600 to-blue-700",
  },
  {
    icon: Award,
    title: "Melhor Custo-Benefício",
    description: "Planos acessíveis com a melhor relação qualidade-preço do mercado, sem taxas escondidas ou surpresas na fatura.",
    gradient: "from-blue-500 to-blue-600",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 via-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity as any, ease: "linear" }}
            className="inline-block mb-6"
          >
            <Globe2 className="w-12 h-12 text-blue-600" />
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Por que Escolher a Up Telecom?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra por que somos a melhor escolha para sua conexão em Florianópolis.
          </p>
        </motion.div>

        {/* Full Width Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border-2 border-gray-200 hover:border-cyan-400"
            >
              <div className="relative z-10">
                {feature.title === "Tecnologia de Ponta" ? (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center w-16 h-16 mb-6 transition-all duration-300"
                  >
                    <img 
                      src="/media/wired-outline-35-edit-hover-circle.gif" 
                      alt="Tecnologia" 
                      className="w-12 h-12 object-contain"
                    />
                  </motion.div>
                ) : feature.title === "Ultra Velocidade" ? (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center w-16 h-16 mb-6 transition-all duration-300"
                  >
                    <img 
                      src="/media/wired-outline-54-photo-hover-pinch.gif" 
                      alt="Velocidade" 
                      className="w-12 h-12 object-contain"
                    />
                  </motion.div>
                ) : feature.title === "Internet Ilimitada" ? (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center w-16 h-16 mb-6 transition-all duration-300"
                  >
                    <img 
                      src="/media/wired-outline-19-magnifier-zoom-search-hover-spin.gif" 
                      alt="Internet Ilimitada" 
                      className="w-12 h-12 object-contain"
                    />
                  </motion.div>
                ) : (
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500 rounded-xl mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

