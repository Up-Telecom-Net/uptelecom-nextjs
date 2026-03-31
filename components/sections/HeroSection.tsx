"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Signal, Activity, Wifi, Rocket, Youtube, Instagram, Facebook, Twitter, Twitch, Play, Music, Video, Gamepad2, Film, Radio } from "lucide-react";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-950 to-blue-900">
      {/* Vídeo de fundo - Internet, cabos e conexão */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/media/wi-fi-digital.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Simple background overlay */}
      <div className="absolute inset-0 bg-blue-950/50 z-[1]" />
      
      {/* Animated Icons floating */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-20 hidden lg:block"
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Wifi className="w-16 h-16 text-blue-400/30" />
        </motion.div>
      </motion.div>
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-32 left-20 hidden lg:block"
      >
        <motion.div
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Signal className="w-20 h-20 text-blue-300/30" />
        </motion.div>
      </motion.div>
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 left-1/4 hidden lg:block"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Activity className="w-12 h-12 text-blue-500/20" />
        </motion.div>
      </motion.div>

      {/* Ícones PNG animados flutuantes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 hidden lg:block z-10"
      >
        <img 
          src="/media/usuario.png" 
          alt="Usuário" 
          className="w-16 h-16 object-contain filter brightness-0 invert opacity-80"
        />
      </motion.div>
      <motion.div
        animate={{ y: [0, 25, 0], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-1/3 right-1/3 hidden lg:block z-10"
      >
        <img 
          src="/media/conversar.png" 
          alt="Conversar" 
          className="w-14 h-14 object-contain filter brightness-0 invert opacity-80"
        />
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-2/3 right-1/5 hidden lg:block z-10"
      >
        <img 
          src="/media/curtir.png" 
          alt="Curtir" 
          className="w-12 h-12 object-contain filter brightness-0 invert opacity-80"
        />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-1/2 left-1/5 hidden lg:block z-10"
      >
        <img 
          src="/media/maps.png" 
          alt="Maps" 
          className="w-14 h-14 object-contain filter brightness-0 invert opacity-80"
        />
      </motion.div>
      <motion.div
        animate={{ y: [0, -18, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 left-1/3 hidden lg:block z-10"
      >
        <img 
          src="/media/arquivo.png" 
          alt="Arquivo" 
          className="w-12 h-12 object-contain filter brightness-0 invert opacity-80"
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mb-6"
            >
              <Sparkles className="w-16 h-16 text-blue-400 mb-4 animate-pulse-slow" />
            </motion.div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              <span className="block">
                Internet fibra óptica{" "}
                <span className="text-cyan-400">
                  em Florianópolis
                </span>
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-300 mb-6">
              para sua casa e para sua empresa
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-10 max-w-3xl leading-relaxed">
              Conectamos pessoas e vidas com uma internet estável, rápida e sem franquia, com roteador Wi-Fi em comodato, suporte local e planos que cabem no seu dia a dia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-start justify-start gap-4 mb-12"
          >
            <Link
              href="/planos"
              className="group flex items-center space-x-2 px-8 py-4 bg-cyan-500 text-white rounded-lg font-semibold text-lg hover:bg-cyan-400 transition-colors duration-300"
            >
              <Rocket className="w-5 h-5" />
              <span>Ver planos</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/5548996891962"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300"
            >
              <WhatsAppIcon size={20} className="text-green-600" />
              <span>Assine agora no WhatsApp</span>
            </a>
          </motion.div>
          </div>

          {/* Right Column - Animated Video/GIF */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
            style={{
              height: '495px',
              width: '827px',
              backdropFilter: 'blur(8px)'
            }}
          >
            {/* Elementos rotativos animados atrás do container do vídeo */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              {/* Círculo muito grande rotativo com ícones de apps */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[683px] h-[683px]"
              >
                <div className="absolute inset-0 rounded-full border-4 border-blue-400/50" />
                {/* YouTube - Top */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-500/50 transform rotate-12">
                    <Youtube className="w-7 h-7 text-white" />
                  </div>
                </motion.div>
                {/* Netflix - Bottom */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-700 to-red-900 rounded-full flex items-center justify-center shadow-lg shadow-red-700/50 transform -rotate-12">
                    <Film className="w-7 h-7 text-white" />
                  </div>
                </motion.div>
                {/* Instagram - Left */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/50 transform rotate-12">
                    <Instagram className="w-7 h-7 text-white" />
                  </div>
                </motion.div>
                {/* Spotify - Right */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50 transform -rotate-12">
                    <Radio className="w-7 h-7 text-white" />
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Círculo grande rotativo (sentido contrário) com ícones */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
              >
                <div className="absolute inset-0 rounded-full border-3 border-blue-300/40" />
                {/* Facebook - Top Left */}
                <motion.div
                  animate={{ scale: [1, 1.15, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/50 transform rotate-6">
                    <Facebook className="w-12 h-12 text-white" />
                  </div>
                </motion.div>
                {/* Twitch - Bottom Right */}
                <motion.div
                  animate={{ scale: [1, 1.15, 1], rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg shadow-purple-600/50 transform -rotate-6">
                    <Twitch className="w-12 h-12 text-white" />
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Círculo médio rotativo com ícones */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]"
              >
                <div className="absolute inset-0 rounded-full border-2 border-blue-200/40" />
                {/* Video - Top */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], y: [0, -5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50">
                    <Video className="w-10 h-10 text-white" />
                  </div>
                </motion.div>
                {/* Music - Bottom */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], y: [0, 5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/50">
                    <Music className="w-10 h-10 text-white" />
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Círculo pequeno rotativo (sentido contrário) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[502px] h-[502px]"
              >
                <div className="absolute inset-0 rounded-full border border-blue-200/30" />
                {/* Gamepad - Top */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/50">
                    <Gamepad2 className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                {/* Play - Bottom */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/50">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Elementos decorativos flutuantes maiores com ícones */}
              <motion.div
                animate={{ 
                  y: [0, -30, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center shadow-xl shadow-cyan-500/50 transform rotate-12">
                  <Twitter className="w-12 h-12 text-white" />
                </div>
              </motion.div>
              <motion.div
                animate={{ 
                  y: [0, 30, 0],
                  rotate: [360, 180, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 right-1/4"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center shadow-xl shadow-rose-500/50 transform -rotate-12">
                  <Video className="w-14 h-14 text-white" />
                </div>
              </motion.div>
              <motion.div
                animate={{ 
                  y: [0, -25, 0],
                  rotate: [0, 360]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-3/4 left-1/3"
              >
                <div className="w-18 h-18 bg-gradient-to-br from-violet-500 to-violet-600 rounded-full flex items-center justify-center shadow-xl shadow-violet-500/50 transform rotate-6">
                  <Music className="w-11 h-11 text-white" />
                </div>
              </motion.div>
            </div>

            {/* Container do vídeo/GIF */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-500/30 z-10 w-[280px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 -z-10" />
              {/* Vídeo/GIF animado - Tamanho de smartphone (proporção 9:16) */}
              <div className="aspect-[9/16] bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/media/wi-fi-digital.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

