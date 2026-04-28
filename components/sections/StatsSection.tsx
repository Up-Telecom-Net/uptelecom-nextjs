"use client";

import { motion } from "framer-motion";
import { Users, Wifi, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "3000+",
    label: "Clientes Satisfeitos",
    gradient: "from-blue-500 to-blue-600",
    shadow: "shadow-blue-500/50"
  },
  {
    icon: Wifi,
    value: "10+",
    label: "Bairros Atendidos",
    gradient: "from-green-500 to-green-600",
    shadow: "shadow-green-500/50"
  },
  {
    icon: Award,
    value: "10",
    label: "Anos de Experiência",
    gradient: "from-purple-500 via-pink-500 to-orange-500",
    shadow: "shadow-pink-500/50"
  },
];

export function StatsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-950 to-blue-900 relative overflow-hidden">
      <div className="container mx-auto px-[30px] sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto justify-items-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="text-center group bg-blue-800 rounded-xl p-8 lg:p-12 border-2 border-cyan-400 hover:border-cyan-300 transition-all duration-300 w-full"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 bg-cyan-500 rounded-full mb-6">
                <stat.icon className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
              </div>
              <div>
                <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-cyan-400 mb-3">
                  {stat.value}
                </h3>
                <p className="text-gray-200 font-medium text-base lg:text-lg">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

