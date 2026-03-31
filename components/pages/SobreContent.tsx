"use client";

import { motion } from "framer-motion";
import { Target, Users, TrendingUp, Award } from "lucide-react";

export function SobreContent() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Up Telecom Florianópolis
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed">
              Visando atender clientes prejudicados pela falta de investimentos das grandes operadoras na região, criamos em 2017 a UP TELECOM, um provedor de internet que está em constante desenvolvimento e evolução contínua.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa História</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Nossa empresa investe tanto em tecnologia com cabeamentos e equipamentos de ótima qualidade quanto em funcionários que são capacitados para a realização de serviços solicitados prestando um atendimento e suporte funcional e de altíssima competência.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Possuímos foco na disponibilização de infraestrutura de conectividade para o mercado residencial, sempre priorizando a qualidade, estabilidade e satisfação dos nossos clientes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Valores</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              O que nos move todos os dias
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Foco no Cliente",
                description: "Priorizamos a satisfação e necessidades dos nossos clientes em tudo que fazemos.",
              },
              {
                icon: TrendingUp,
                title: "Inovação Contínua",
                description: "Investimos constantemente em tecnologia de ponta para oferecer o melhor serviço.",
              },
              {
                icon: Users,
                title: "Equipe Capacitada",
                description: "Funcionários treinados e comprometidos com a excelência no atendimento.",
              },
              {
                icon: Award,
                title: "Qualidade Garantida",
                description: "Equipamentos de primeira linha e infraestrutura robusta para máxima estabilidade.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

