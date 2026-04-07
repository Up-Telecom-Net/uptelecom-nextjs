"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Wifi, Phone, ChevronDown, UserCircle, Gauge, MapPin, Users, Smartphone, Gift, LogIn, Zap, Home, FileText, ArrowRight, Package, Map, Info, Mail, Search } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [];

const planosItems = [
  {
    label: "Ver Planos",
    href: "/planos",
    description: "Conheça nossos planos",
    icon: Package,
  },
  {
    label: "Cobertura",
    href: "/cobertura",
    description: "Bairros atendidos",
    icon: Map,
  },
];

const servicesItems = [
  {
    icon: LogIn,
    label: "Central do assinante",
    href: "/central-cliente",
    description: "Acesse sua área exclusiva",
  },
  {
    icon: Gauge,
    label: "Teste de conexão",
    href: "/teste-conexao",
    description: "Verifique sua velocidade",
  },
  {
    icon: MapPin,
    label: "Mudança de Endereço",
    href: "/mudanca-endereco",
    description: "Solicite transferência",
  },
  {
    icon: ArrowRight,
    label: "Mudança de Plano",
    href: "/mudanca-plano",
    description: "Altere seu plano",
  },
  {
    icon: Smartphone,
    label: "Aplicativo GB",
    href: "/app-gb",
    description: "Baixe nosso app",
  },
  {
    icon: Gift,
    label: "Indique e ganhe",
    href: "/indique-ganhe",
    description: "Indique amigos e ganhe",
  },
];

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

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPlanosOpen, setIsPlanosOpen] = useState(false);
  const [isNeighborhoodsOpen, setIsNeighborhoodsOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [neighborhoodSearch, setNeighborhoodSearch] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-[55] bg-blue-600 h-10 overflow-visible">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full overflow-visible">
          <div className="flex items-center justify-between h-full overflow-visible">
            {/* Informações de contato à esquerda */}
            <div className="flex items-center space-x-6">
              {/* WhatsApp */}
              <a
                href="https://wa.me/5548996891962"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 text-xs font-medium transition-colors"
              >
                <WhatsAppIcon size={16} className="text-blue-300" />
                <span className="text-white/90">(48) 99689-1962</span>
              </a>
              
              {/* Telefone */}
              <a
                href="tel:4835000962"
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 text-xs font-medium transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-300" />
                <span className="text-white/90">(48) 3500-0962</span>
              </a>
            </div>
            
            {/* Links à direita */}
            <div className="flex items-center space-x-6">
              <Link
                href="/sobre"
                className="text-white/90 hover:text-white text-xs font-medium transition-colors"
              >
                Sobre a Uptelecom
              </Link>
              <Link
                href="/trabalhe-conosco"
                className="text-white/90 hover:text-white text-xs font-medium transition-colors"
              >
                Trabalhe Conosco
              </Link>
              <Link
                href="/contato"
                className="text-white/90 hover:text-white text-xs font-medium transition-colors"
              >
                Contatos
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "fixed top-10 left-0 right-0 z-[60] transition-all duration-300 bg-white shadow-md"
        )}
        style={{
          boxSizing: "content-box",
          marginLeft: "0px",
          marginRight: "0px",
          paddingLeft: "0px",
          paddingRight: "0px",
        }}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
        <div className="flex items-center justify-between w-full h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img
              src="/media/logo/logo_uptelelcom.png"
              alt="Up Telecom"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation (md and up) */}
          <div className="hidden lg:flex items-center space-x-4 ml-8">
            {/* Home */}
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-400 hover:bg-blue-50 px-3 py-2 rounded-lg font-medium transition-all duration-300 relative group flex items-center space-x-1"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            
            {/* Serviços Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-gray-700 hover:text-blue-400 hover:bg-blue-50 px-3 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-1">
                <span>Serviços</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Mega Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-2xl shadow-2xl border-2 border-blue-100 p-6 z-[100]">
                  <div className="grid grid-cols-2 gap-4">
                    {servicesItems.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-start space-x-3 p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 group"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {service.label}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Planos Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsPlanosOpen(true)}
              onMouseLeave={() => setIsPlanosOpen(false)}
            >
              <button className="text-gray-700 hover:text-blue-400 hover:bg-blue-50 px-3 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-1">
                <Package className="w-4 h-4" />
                <span>Planos</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isPlanosOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isPlanosOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border-2 border-blue-100 p-4 z-[100]">
                  <div className="space-y-2">
                    {planosItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 group"
                      >
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {item.label}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>


            {/* Other nav items */}
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-400 hover:bg-blue-50 px-3 py-2 rounded-lg font-medium transition-all duration-300 relative group flex items-center space-x-1"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3 ml-6">
            <Link
              href="/central-cliente"
              className="px-6 py-2.5 bg-white border-2 border-blue-600 text-blue-600 rounded-[50px] font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <LogIn className="w-5 h-5" />
              <span>Sua Central</span>
            </Link>
            <Link
              href="/planos"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-[50px] font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 glow flex items-center space-x-2"
            >
              <Zap className="w-5 h-5" />
              <span>Assine Agora</span>
            </Link>
          </div>

          {/* Tablet Navigation (md to lg) */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-400 hover:bg-blue-50 px-2 py-2 rounded-lg font-medium transition-all duration-300"
            >
              <Home className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-gray-700 hover:text-blue-400 hover:bg-blue-50 px-2 py-2 rounded-lg font-medium transition-all duration-300 relative"
            >
              <span className="text-sm">Serviços</span>
            </button>
            <button
              onClick={() => setIsPlanosOpen(!isPlanosOpen)}
              className="text-gray-700 hover:text-blue-400 hover:bg-blue-50 px-2 py-2 rounded-lg font-medium transition-all duration-300 relative"
            >
              <Package className="w-5 h-5" />
            </button>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-400 hover:bg-blue-50 px-2 py-2 rounded-lg font-medium transition-all duration-300"
              >
                <item.icon className="w-5 h-5" />
              </Link>
            ))}
            <Link
              href="/central-cliente"
              className="px-4 py-2 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 text-sm"
            >
              <LogIn className="w-4 h-4" />
            </Link>
            <Link
              href="/planos"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm"
            >
              <Zap className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-400 hover:bg-blue-50 rounded-lg transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Tablet Dropdowns */}
      {isServicesOpen && (
        <div className="hidden md:block lg:hidden fixed top-[104px] left-0 right-0 bg-white border-t border-gray-200 shadow-xl z-50">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-2 gap-4">
              {servicesItems.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  onClick={() => setIsServicesOpen(false)}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{service.label}</h3>
                    <p className="text-xs text-gray-600 mt-1">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {isPlanosOpen && (
        <div className="hidden md:block lg:hidden fixed top-[104px] left-0 right-0 bg-white border-t border-gray-200 shadow-xl z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-2">
              {planosItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setIsPlanosOpen(false)}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-all duration-300"
                >
                  <item.icon className="w-5 h-5 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{item.label}</h3>
                    <p className="text-xs text-gray-600">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-lg fixed top-[104px] left-0 right-0 bottom-0 overflow-y-auto z-50"
          >
            <div className="container mx-auto px-4 py-6 space-y-3 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {/* Home */}
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-2 py-2 px-4 text-gray-700 hover:text-blue-400 hover:bg-blue-50 rounded-lg font-medium transition-all duration-300"
              >
                <Home className="w-5 h-5 text-blue-600" />
                <span>Home</span>
              </Link>
              
              {/* Serviços Mobile */}
              <div className="space-y-2">
                <div className="px-4 py-2 text-gray-700 font-semibold text-sm uppercase tracking-wide">
                  Serviços
                </div>
                {servicesItems.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 py-2 px-4 text-gray-700 hover:text-blue-400 hover:bg-blue-50 rounded-lg transition-all duration-300"
                  >
                    <service.icon className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">{service.label}</span>
                  </Link>
                ))}
              </div>

              {/* Planos Mobile */}
              <div className="space-y-2">
                <div className="px-4 py-2 text-gray-700 font-semibold text-sm uppercase tracking-wide flex items-center space-x-2">
                  <Package className="w-4 h-4 text-blue-600" />
                  <span>Planos</span>
                </div>
                {planosItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 py-2 px-4 text-gray-700 hover:text-blue-400 hover:bg-blue-50 rounded-lg transition-all duration-300"
                  >
                    <item.icon className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </div>

              {/* Other nav items */}
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-2 py-2 px-4 text-gray-700 hover:text-blue-400 hover:bg-blue-50 rounded-lg font-medium transition-all duration-300"
                >
                  <item.icon className="w-5 h-5 text-blue-600" />
                  <span>{item.label}</span>
                </Link>
              ))}
              <a
                href="https://wa.me/5548996891962"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 py-2 px-4 text-gray-700 hover:text-blue-400 hover:bg-blue-50 rounded-lg transition-all duration-300"
              >
                <WhatsAppIcon size={18} className="text-green-600" />
                <span className="font-medium">(48) 99689-1962</span>
              </a>
              <Link
                href="/central-cliente"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all mb-3"
              >
                Sua Central
              </Link>
              <Link
                href="/planos"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Assine Agora
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
}

