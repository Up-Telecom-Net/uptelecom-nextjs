"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function AttendBannerSection() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden">
      {/* Animated Holographic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blob 1 - Large Blue to Cyan */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-40"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(6, 182, 212, 0.4) 50%, transparent 70%)",
            filter: "blur(80px)",
            borderRadius: "50%",
          }}
        />
        
        {/* Blob 2 - Cyan to Pink */}
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-35"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.5) 0%, rgba(236, 72, 153, 0.3) 50%, transparent 70%)",
            filter: "blur(100px)",
            borderRadius: "50%",
          }}
        />
        
        {/* Blob 3 - Pink to Blue */}
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-1/2 left-1/3 w-[400px] h-[400px] opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 70%)",
            filter: "blur(90px)",
            borderRadius: "50%",
          }}
        />
        
        {/* Blob 4 - Small accent */}
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 70, 0],
            scale: [1, 1.4, 1],
            rotate: [0, 270, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/4 right-1/4 w-[300px] h-[300px] opacity-25"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.5) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 70%)",
            filter: "blur(70px)",
            borderRadius: "50%",
          }}
        />
        
        {/* Mesh gradient overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(ellipse at top right, rgba(59, 130, 246, 0.3), transparent 50%), radial-gradient(ellipse at bottom left, rgba(236, 72, 153, 0.2), transparent 50%)",
            mixBlendMode: "screen",
          }}
        />
      </div>
      
      <div className="container mx-auto px-[30px] sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Zap className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold">Atendimento Especializado</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Assine Agora e Conecte-se ao Futuro!
              </h2>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Internet fibra óptica de alta velocidade com tecnologia de ponta. 
                Nossa equipe está pronta para te ajudar a escolher o melhor plano.
              </p>

              {/* CTA Button */}
              <div className="flex items-start">
                <a
                  href="https://wa.me/5548996891962"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center space-x-3 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <WhatsAppIcon size={24} className="text-green-600" />
                  <span>Assinar no WhatsApp</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Right Column - Contact Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* WhatsApp GIF Animado */}
              <motion.a
                href="https://wa.me/5548996891962"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                className="block transition-all duration-300"
              >
                <img
                  src="/media/wifi.webp"
                  alt="Internet Wi-Fi Up Telecom"
                  className="w-full h-auto object-cover"
                />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
