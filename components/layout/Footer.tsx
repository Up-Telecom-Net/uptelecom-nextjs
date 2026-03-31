import Link from "next/link";
import { Wifi, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const footerLinks = {
  empresa: [
    { href: "/sobre", label: "Sobre Nós" },
    { href: "/cobertura", label: "Área de Cobertura" },
    { href: "/contato", label: "Contato" },
  ],
  servicos: [
    { href: "/planos", label: "Planos Fibra Óptica" },
    { href: "/planos#radio", label: "Internet Via Rádio" },
    { href: "/suporte", label: "Suporte Técnico" },
  ],
  cliente: [
    { href: "/central-cliente", label: "Central do Cliente" },
    { href: "/faturas", label: "2ª Via de Fatura" },
    { href: "/suporte", label: "Suporte" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/media/logo/logo-uptelecom.png"
                alt="Up Telecom"
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm text-gray-400">
              Internet com velocidade para todos os lugares! Conectando você com o mundo através da tecnologia mais avançada.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/uptelecom"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/uptelecom"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/uptelecom"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {footerLinks.servicos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a
                    href="https://wa.me/554835000962"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm hover:text-blue-400 transition-colors"
                  >
                    <WhatsAppIcon size={16} className="text-green-500" />
                    <span>(48) 3500-0962</span>
                  </a>
                  <a
                    href="https://wa.me/5548996891962"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm hover:text-blue-400 transition-colors"
                  >
                    <WhatsAppIcon size={16} className="text-green-500" />
                    <span>(48) 99689-1962</span>
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contato@uptelecomnet.com.br"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  contato@uptelecomnet.com.br
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm">Florianópolis, SC</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Up Telecom - Internetup Telecomunicações Ltda. CNPJ: 27.865.116/0001-40
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacidade" className="hover:text-blue-400 transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos" className="hover:text-blue-400 transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

