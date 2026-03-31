"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Globe, Users, Wifi, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    title: "Ultra Velocidade",
    subtitle: "Até 900MB",
    color: "text-yellow-400",
  },
  {
    icon: Shield,
    title: "100% Estável",
    subtitle: "Fibra Óptica",
    color: "text-blue-400",
  },
  {
    icon: Globe,
    title: "Ilimitada",
    subtitle: "Sem Franquia",
    color: "text-green-400",
  },
];

const values = [
  {
    icon: Wifi,
    title: "Conectividade",
  },
  {
    icon: Rocket,
    title: "Inovação",
  },
  {
    icon: Users,
    title: "Pessoas",
  },
];

export function HighlightsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Por que Escolher a <span className="text-blue-600">Up Telecom</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tecnologia de ponta que transforma vidas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index === 0 ? 0 : index === 1 ? 0.1 : 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group text-center border-2 border-blue-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div
                  className={`inline-block mb-4 ${
                    index === 0 ? 'animate-icon-rotate' : 
                    index === 1 ? 'animate-icon-rotate-delay-1' : 
                    'animate-icon-rotate-delay-2'
                  }`}
                >
                  <highlight.icon className={`w-12 h-12 ${highlight.color} mx-auto drop-shadow-lg`} />
                </div>
                <h3 className="text-gray-900 font-semibold text-lg mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm">{highlight.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center space-x-8 md:space-x-12"
        >
          {values.map((value, index) => (
            <div
              key={index}
              className={`flex flex-col items-center group ${
                index === 0 ? 'animate-float-values' : 
                index === 1 ? 'animate-float-values-delay-1' : 
                'animate-float-values-delay-2'
              }`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform border-2 border-blue-300">
                <value.icon className="w-8 h-8 text-blue-600" />
              </div>
              <span className="text-sm text-gray-700 font-medium">{value.title}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

