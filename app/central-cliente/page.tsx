import { UserCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Central do Cliente | Up Telecom",
  description: "Acesse todas as informações de usuário na área exclusiva de clientes da Up Telecom.",
};

export default function CentralClientePage() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-[30px] sm:px-8 lg:px-12 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6">
            <UserCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Central do Cliente
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Acesse todas as informações de usuário na área exclusiva de clientes
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <p className="text-gray-700 mb-6">
              Em breve você poderá acessar sua área exclusiva de cliente para gerenciar sua conta, 
              visualizar faturas, histórico de pagamentos e muito mais.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <span>Entre em Contato</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

