"use client";

import { motion } from "framer-motion";

// URLs das imagens do Figma
const imgElipseLine = "https://www.figma.com/api/mcp/asset/c907b0d5-75ac-41f6-987e-b49d3a4129b4";
const imgGroup = "https://www.figma.com/api/mcp/asset/d470cd3e-d91a-48f1-b4af-2a9d7540450f";
const imgGroup2 = "https://www.figma.com/api/mcp/asset/e2d0333e-ceae-45b4-b5b2-db7c32f6f81d";
const imgGroup3 = "https://www.figma.com/api/mcp/asset/53b079f7-1312-4d33-80cc-ec9a46ce0282";

const services = [
  {
    icon: imgGroup,
    label: "Internet"
  },
  {
    icon: imgGroup2,
    label: "TV e streaming"
  },
  {
    icon: imgGroup3,
    label: "Entretenimento"
  }
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
              <div className="inline-grid grid-cols-[max-content] grid-rows-[max-content] justify-items-start leading-[0] relative shrink-0">
                {/* Elipse Line Background */}
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                  className="col-[1] ml-0 mt-0 relative row-[1] w-[224px] h-[224px]"
                >
                  <img 
                    alt="" 
                    className="block max-w-none w-full h-full" 
                    src={imgElipseLine}
                    style={{ objectFit: "contain" }}
                  />
                </motion.div>
                {/* Icon - Posicionado exatamente como no Figma */}
                <div className="col-[1] ml-[70px] mt-[70px] overflow-visible relative row-[1] w-[84px] h-[84px] flex items-center justify-center">
                  <img 
                    alt={service.label} 
                    className="block w-full h-full object-contain" 
                    src={service.icon}
                    style={{ objectFit: "contain", maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
              </div>
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
