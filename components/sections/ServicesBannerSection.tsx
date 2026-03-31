"use client";

import { motion } from "framer-motion";
import { UserCircle, FileText, Headphones, ArrowRight, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: UserCircle,
    title: "Central de Acesso",
    description: "Acesse todas as informações de usuário em na área exclusiva de clientes.",
    href: "/central-cliente",
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
    bgGif: "/gifs/central-acesso.gif", // GIF animado de fundo
  },
  {
    icon: FileText,
    title: "Up-telecom Faturas",
    description: "Perdeu seu carne de pagamento? Não se preocupe. baixe agora sua a 2º via de sua fatura.",
    href: "/faturas",
    gradient: "from-blue-600 to-blue-700",
    bgGradient: "from-blue-100 to-blue-200",
    bgGif: "/gifs/faturas.gif", // GIF animado de fundo
  },
  {
    icon: Headphones,
    title: "Suporte",
    description: "Problemas técnicos diretamente com o suporte.",
    phone: "(48) 3500-0962",
    phone2: "(48) 99689-1962",
    href: "/suporte",
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
    bgGif: "/gifs/suporte.gif", // GIF animado de fundo
  },
];

export function ServicesBannerSection() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden" style={{ height: '700px' }}>
      {/* Overlay para melhorar legibilidade */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-white/80 via-blue-50/50 to-white/80 z-0" 
        style={{ left: '15px', top: '-365px' }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative h-full"
            >
              <div className="relative rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 bg-white overflow-hidden h-full flex flex-col">
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-800 leading-relaxed mb-6 flex-grow font-medium">
                    {service.description}
                  </p>
                  
                  {/* Phone numbers for support */}
                  {service.phone && (
                    <div className="mb-6 flex items-center flex-wrap gap-4">
                      <a
                        href={`https://wa.me/55${service.phone.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span>{service.phone}</span>
                      </a>
                      {service.phone2 && (
                        <a
                          href={`https://wa.me/55${service.phone2.replace(/\D/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                        >
                          <MessageCircle className="w-5 h-5" />
                          <span>{service.phone2}</span>
                        </a>
                      )}
                    </div>
                  )}
                  
                  {/* CTA Button */}
                  <Link
                    href={service.href}
                    className={`inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${service.gradient} text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 group/btn mt-auto`}
                  >
                    <span>Acessar</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

