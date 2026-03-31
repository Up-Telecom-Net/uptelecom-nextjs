import { FileText, Download } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export const metadata = {
  title: "2ª Via de Fatura | Up Telecom",
  description: "Baixe agora sua 2ª via de fatura da Up Telecom. Perdeu seu carnê de pagamento? Não se preocupe.",
};

export default function FaturasPage() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Up-telecom Faturas
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Perdeu seu carnê de pagamento? Não se preocupe. Baixe agora sua 2ª via de sua fatura.
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <p className="text-gray-700 mb-6">
              Para baixar sua 2ª via de fatura, entre em contato conosco através dos canais abaixo:
            </p>
            <div className="space-y-4 mb-8">
              <a
                href="https://wa.me/554835000962"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-blue-50 text-blue-600 rounded-lg font-semibold hover:bg-blue-100 transition-colors"
              >
                <WhatsAppIcon size={20} className="text-green-600" />
                <span>(48) 3500-0962</span>
              </a>
              <a
                href="https://wa.me/5548996891962"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-blue-50 text-blue-600 rounded-lg font-semibold hover:bg-blue-100 transition-colors"
              >
                <WhatsAppIcon size={20} className="text-green-600" />
                <span>(48) 99689-1962</span>
              </a>
              <a
                href="mailto:contato@uptelecomnet.com.br"
                className="block px-6 py-3 bg-blue-50 text-blue-600 rounded-lg font-semibold hover:bg-blue-100 transition-colors"
              >
                contato@uptelecomnet.com.br
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Download className="w-5 h-5" />
              <span className="text-sm">Em breve: download direto pela área do cliente</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

