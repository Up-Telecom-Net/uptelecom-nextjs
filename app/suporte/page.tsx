import { Headphones, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export const metadata = {
  title: "Suporte Técnico | Up Telecom",
  description: "Problemas técnicos? Entre em contato com o suporte da Up Telecom. (48) 3500-0962 ou (48) 99689-1962",
};

export default function SuportePage() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-[30px] sm:px-8 lg:px-12 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6">
              <Headphones className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Suporte
            </h1>
            <p className="text-xl text-gray-600">
              Problemas técnicos? Estamos aqui para ajudar!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <a
              href="https://wa.me/554835000962"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <WhatsAppIcon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    WhatsApp 1
                  </h3>
                  <p className="text-2xl font-bold text-blue-600">(48) 3500-0962</p>
                </div>
              </div>
            </a>
            
            <a
              href="https://wa.me/5548996891962"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <WhatsAppIcon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    WhatsApp 2
                  </h3>
                  <p className="text-2xl font-bold text-blue-600">(48) 99689-1962</p>
                </div>
              </div>
            </a>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-start space-x-4 mb-6">
              <Clock className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Horário de Atendimento</h3>
                <p className="text-gray-600">24 horas por dia, 7 dias por semana</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 mb-6">
              <Mail className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <a
                  href="mailto:contato@uptelecomnet.com.br"
                  className="text-blue-600 hover:text-blue-700"
                >
                  contato@uptelecomnet.com.br
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MessageCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Tipos de Suporte</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Problemas técnicos de conexão</li>
                  <li>• Instalação e configuração</li>
                  <li>• Dúvidas sobre planos</li>
                  <li>• Suporte geral</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

