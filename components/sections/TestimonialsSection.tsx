"use client";

import { motion } from "framer-motion";
import { Star, Quote, MessageSquare } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    location: "Trindade",
    rating: 5,
    text: "Excelente serviço! A internet é muito rápida e estável. Nunca tive problemas e o suporte é sempre muito atencioso.",
  },
  {
    name: "João Santos",
    location: "Centro",
    rating: 5,
    text: "Melhor provedor de Florianópolis! A velocidade é exatamente o que prometem e o atendimento é impecável.",
  },
  {
    name: "Ana Costa",
    location: "Agronômica",
    rating: 5,
    text: "Contratei há 2 anos e nunca me arrependi. Internet ilimitada, velocidade constante e preço justo. Recomendo!",
  },
];

export function TestimonialsSection() {
  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #050118 0%, #0a0420 30%, #14082c 60%, #1a0a3e 100%)",
      }}
    >
      {/* Decoração de fundo - blobs animados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-0 w-[500px] h-[500px] opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(99, 102, 241, 0.3) 50%, transparent 70%)",
            filter: "blur(80px)",
            borderRadius: "50%",
          }}
        />
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 70%)",
            filter: "blur(100px)",
            borderRadius: "50%",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(147, 197, 253, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 197, 253, 0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-[30px] sm:px-8 lg:px-12 relative z-10">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 mb-4 px-4"
          >
            <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400 shrink-0" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
              O que Nossos Clientes Dizem
            </h2>
          </motion.div>
          <p className="text-base sm:text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto px-4">
            A satisfação dos nossos clientes é nossa prioridade
          </p>
        </motion.div>

        {/* Grid de depoimentos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <div
                className="relative overflow-hidden p-6 sm:p-7 h-full"
                style={{
                  background:
                    "linear-gradient(135deg, #1e3a8a 0%, #1e40af 35%, #3730a3 70%, #4338ca 100%)",
                  borderRadius: "24px",
                  border: "1.5px solid rgba(147, 197, 253, 0.4)",
                  boxShadow:
                    "0 20px 50px rgba(37, 99, 235, 0.3), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              >
                {/* Reflexo no topo */}
                <div
                  className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 100%)",
                    borderRadius: "24px 24px 0 0",
                  }}
                />
                {/* Linha de luz no topo */}
                <div
                  className="absolute top-0 left-6 right-6 h-px pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
                  }}
                />
                {/* Glow decorativo */}
                <div
                  className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(96, 165, 250, 0.6) 0%, transparent 70%)",
                    filter: "blur(40px)",
                  }}
                />

                {/* Quote icon */}
                <Quote className="absolute top-5 right-5 w-10 h-10 text-white/15" />

                <div className="relative">
                  {/* Estrelas */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                        style={{
                          filter: "drop-shadow(0 0 8px rgba(250, 204, 21, 0.5))",
                        }}
                      />
                    ))}
                  </div>

                  {/* Texto do depoimento */}
                  <p
                    className="text-sm sm:text-base text-blue-50 mb-6 leading-relaxed relative z-10"
                    style={{
                      textShadow: "0 1px 2px rgba(0,0,0,0.2)",
                    }}
                  >
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Divider */}
                  <div
                    className="h-px w-full mb-4"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(147, 197, 253, 0.4), transparent)",
                    }}
                  />

                  {/* Autor */}
                  <div className="flex items-center gap-3">
                    {/* Avatar com inicial */}
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-3xl shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.1) 100%)",
                        border: "1px solid rgba(255,255,255,0.35)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)",
                      }}
                    >
                      <span className="text-base font-black text-white">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm sm:text-base leading-tight">
                        {testimonial.name}
                      </p>
                      <p className="text-xs sm:text-sm text-blue-200/80 font-medium">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
