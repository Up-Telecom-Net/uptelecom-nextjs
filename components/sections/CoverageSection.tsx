"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Map } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const neighborhoods = [
  "ITACURUBI",
  "AGRONÔMICA",
  "MONTE SERRAT",
  "TRINDADE",
  "CAEIRA",
  "SACO DOS LIMÕES",
  "CENTRO",
  "SERRINHA",
  "CARVOEIRA",
  "PANTANAL",
];

export function CoverageSection() {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left mb-16"
        >
          <div className="inline-flex items-center justify-start w-16 h-16 mb-6 relative">
            <img 
              src="/media/wired-outline-18-location-pin-hover-jump.gif" 
              alt="Localização" 
              className="w-12 h-12 object-contain"
            />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Conheça os Bairros que Atendemos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Estamos expandindo nossa cobertura em Florianópolis para levar internet de qualidade para mais lugares
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Column - Map/GIF */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 blur-3xl -z-10" />
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center relative overflow-hidden">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-blue-500/20"
                />
                <motion.div
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-blue-500/20"
                />
                <div className="relative z-10 text-center p-8">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Map className="w-32 h-32 text-white/80 mx-auto mb-4" />
                  </motion.div>
                  <p className="text-white/90 text-xl font-semibold mb-2">
                    Mapa de Cobertura
                  </p>
                  <p className="text-white/70 text-sm">
                    Adicione GIF/vídeo do mapa animado
                  </p>
                </div>
                {/* Substitua por: <Image src="/coverage-map.gif" alt="Mapa de cobertura" width={800} height={600} /> */}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Neighborhoods */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center lg:text-left">
              Bairros Atendidos
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {neighborhoods.map((neighborhood, index) => {
                const isSelected = selectedNeighborhood === neighborhood;
                return (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index === 0 ? 0 : index === 1 ? 0.05 : index === 2 ? 0.1 : index === 3 ? 0.15 : index === 4 ? 0.2 : index === 5 ? 0.25 : index === 6 ? 0.3 : index === 7 ? 0.35 : index === 8 ? 0.4 : 0.45 }}
                    onClick={() => setSelectedNeighborhood(isSelected ? null : neighborhood)}
                    className={`
                      rounded-xl p-4 text-center font-semibold transition-all duration-300 cursor-pointer relative overflow-hidden
                      ${isSelected 
                        ? 'bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 text-white shadow-[0_0_30px_rgba(59,130,246,0.8),0_0_60px_rgba(37,99,235,0.4)] border-2 border-blue-300 scale-105' 
                        : 'bg-gradient-to-br from-blue-200/40 via-blue-400/30 to-blue-600/40 text-blue-900 shadow-[0_0_15px_rgba(59,130,246,0.3)] border-2 border-blue-400/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.6),0_0_50px_rgba(37,99,235,0.3)] hover:border-blue-300 hover:from-blue-300/50 hover:via-blue-500/40 hover:to-blue-700/50 hover:scale-105 backdrop-blur-sm'
                      }
                    `}
                    whileHover={!isSelected ? { scale: 1.05, y: -2 } : {}}
                    whileTap={{ scale: 0.98 }}
                  >
                    {!isSelected && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/40 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000" />
                    )}
                    <p className={`relative z-10 ${isSelected ? 'text-white font-bold drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]' : 'text-blue-800 font-bold'}`}>{neighborhood}</p>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16"
        >
          <div className="w-full bg-blue-600 rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Column - Content */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Não encontrou seu bairro?
                </h3>
                <p className="text-xl text-white/90 mb-8">
                  Entre em contato conosco e verifique se atendemos sua região!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Digite seu bairro ou endereço"
                      className="w-full px-6 py-4 rounded-lg border-2 border-white/40 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-cyan-300 transition-all duration-300"
                    />
                  </div>
                  <a
                    href="https://wa.me/5548996891962"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
                  >
                    <WhatsAppIcon size={20} className="text-green-600" />
                    <span>Verificar Cobertura</span>
                  </a>
                </div>
              </div>
              
              {/* Right Column - GIF */}
              <div className="flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="w-full max-w-md"
                >
                  <img 
                    src="/media/wired-outline-18-location-pin-hover-jump.gif" 
                    alt="Localização" 
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

