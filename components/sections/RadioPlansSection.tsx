"use client";

import { motion } from "framer-motion";
import { Check, Radio } from "lucide-react";
import Link from "next/link";

const radioPlans = [
  {
    name: "5MB",
    price: "59,90",
    speed: "5MB",
  },
  {
    name: "10MB",
    price: "79,90",
    speed: "10MB",
  },
];

export function RadioPlansSection() {
  return (
    <section className="py-24 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
            className="inline-flex items-center space-x-2 mb-4"
          >
            <Radio className="w-6 h-6 text-blue-600" />
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-600">
              Internet Via Rádio
            </h2>
          </motion.div>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto mb-4">
            Atendemos zonas rurais e residenciais
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {radioPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border-2 border-cyan-200 hover:border-cyan-400"
            >
              <div className="text-left mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{plan.speed}</h3>
                <div className="flex items-baseline justify-start space-x-1">
                  <span className="text-3xl font-bold text-gray-900">R$</span>
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">/mês</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Roteador Wi-Fi em comodato</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Internet ilimitada, sem Franquia</span>
                </li>
              </ul>
              <Link
                href="/contato"
                className="block w-full text-center py-3 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-400 transition-colors duration-300"
              >
                Assine Agora
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
