"use client";

import { motion } from "framer-motion";
import { Check, Zap, Wifi, Download, Upload, Infinity as InfinityIcon } from "lucide-react";
import Link from "next/link";

const fiberPlans = [
  {
    name: "Básico",
    price: "89,90",
    speed: "200MB",
    upload: "200MB",
    popular: false,
  },
  {
    name: "Premium",
    price: "99,90",
    speed: "500MB",
    upload: "500MB",
    popular: true,
  },
  {
    name: "Extreme",
    price: "149,90",
    speed: "900MB",
    upload: "900MB",
    popular: false,
  },
];

export function PlansSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fibra Óptica */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center space-x-2 mb-4"
          >
            <Zap className="w-6 h-6 text-blue-600" />
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Internet Fibra Óptica
            </h2>
          </motion.div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça nossos planos de alta velocidade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {fiberPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border-2 ${
                plan.popular
                  ? "border-cyan-400"
                  : "border-gray-200 hover:border-cyan-300"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
                  <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Assinado!
                  </span>
                </div>
              )}
              <div className="text-left mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-start space-x-1">
                  <span className="text-4xl font-bold text-gray-900">R$</span>
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">/mês</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex flex-col items-start">
                <li className="flex items-center space-x-3 justify-start">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                    <Wifi className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Roteador Wi-Fi em comodato</span>
                </li>
                <li className="flex items-center space-x-3 justify-start">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                    <Download className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Download {plan.speed}</span>
                </li>
                <li className="flex items-center space-x-3 justify-start">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                    <Upload className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Upload {plan.upload}</span>
                </li>
                <li className="flex items-center space-x-3 justify-start">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                    <InfinityIcon className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Internet ilimitada</span>
                </li>
              </ul>
              <Link
                href="/contato"
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-cyan-500 text-white hover:bg-cyan-400"
                    : "bg-gray-100 text-gray-900 hover:bg-cyan-50 hover:border-cyan-300"
                }`}
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

