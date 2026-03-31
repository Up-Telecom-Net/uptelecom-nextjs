"use client";

import { motion } from "framer-motion";
import { Wifi, Tv, Gamepad2 } from "lucide-react";

const services = [
  {
    icon: Wifi,
    label: "Internet",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Tv,
    label: "TV e streaming",
    color: "from-purple-500 to-blue-500",
  },
  {
    icon: Gamepad2,
    label: "Entretenimento",
    color: "from-cyan-400 to-blue-600",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-white relative w-full py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section - Exatamente como no Figma */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5 items-center text-center mb-16"
          style={{ fontFamily: "var(--font-rubik), sans-serif" }}
        >
          <p className="leading-[1.3] text-[#008cff] text-[20px] font-normal">
            Nossos serviços
          </p>
          <p className="leading-[1.3] text-[#23214b] text-[40px] font-normal">
            Provedora de internet de confiança
          </p>
          <p className="leading-[1.7] text-[#222] text-[16px] max-w-[678px] whitespace-pre-wrap">
            A Up Telecomnet entrega internet fibra óptica de alta performance em Florianópolis, com estabilidade, baixa latência e suporte local que resolve, para que a sua casa ou a sua empresa tenha Wi-Fi de qualidade para streaming, jogos on-line, trabalho remoto e casa inteligente, sempre sem franquia e com roteador em comodato.
          </p>
        </motion.div>

        {/* Cards Section - Exatamente como no Figma */}
        <div className="flex flex-wrap justify-center gap-[30px] items-start">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col gap-5 items-center relative shrink-0"
            >
              {/* Icon Frame */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
                className={`w-[200px] h-[200px] rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-xl`}
              >
                <service.icon className="w-20 h-20 text-white" />
              </motion.div>
              {/* Label */}
              <p 
                className="font-normal leading-none text-[#23214b] text-[20px] text-center"
                style={{ fontFamily: "var(--font-rubik), sans-serif" }}
              >
                {service.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
