"use client";

import { motion } from "framer-motion";
import { MapPin, FileText } from "lucide-react";

export function InstitutionalBanner() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-[30px] sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl"
          style={{
            background:
              "linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%)",
            boxShadow:
              "0 24px 60px rgba(37, 99, 235, 0.35), inset 0 1px 0 rgba(255,255,255,0.25)",
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)",
            }}
          />
          <div
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none opacity-40"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />
          <div
            className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full pointer-events-none opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(96, 165, 250, 0.6) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-6 sm:p-8 md:p-10 lg:p-12 items-center">
            <div className="flex items-start gap-4">
              <div
                className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0 backdrop-blur-3xl"
                style={{
                  background: "rgba(255,255,255,0.2)",
                  border: "1px solid rgba(255,255,255,0.35)",
                }}
              >
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Onde estamos localizados
                </h3>
                <p className="text-sm sm:text-base text-blue-50/90 leading-relaxed">
                  Florianópolis, SC, Brasil
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 md:justify-end">
              <div className="flex flex-col items-start gap-2">
                <span className="text-xs sm:text-sm text-blue-50/90 font-medium">
                  Empresa homologada pela
                </span>
                <img
                  src="/media/anatel-51425.svg"
                  alt="ANATEL"
                  className="h-8 sm:h-10 w-auto brightness-0 invert"
                />
              </div>
              <a
                href="/PDF%20CONTRATO/Contrato%20Geral%20UP-Telecom%20assinado.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white font-semibold text-sm sm:text-base backdrop-blur-3xl transition-all duration-300 hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.08) 100%)",
                  border: "1.5px solid rgba(255,255,255,0.35)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.3), 0 4px 12px rgba(0,0,0,0.15)",
                }}
              >
                <FileText className="w-5 h-5 shrink-0" />
                <span>Contrato dos serviços</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
