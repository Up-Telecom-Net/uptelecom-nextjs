"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      <div className="container mx-auto px-[30px] sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Pronto para Conectar?
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Entre em contato com nossa central e descubra o plano ideal para você
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://wa.me/5548996891962"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <WhatsAppIcon size={24} className="text-green-600" />
              <span>(48) 99689-1962</span>
            </a>
            <a
              href="https://wa.me/554835000962"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <WhatsAppIcon size={24} className="text-green-600" />
              <span>(48) 3500-0962</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

