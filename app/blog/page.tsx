import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog Up Telecom: dicas de internet em Florianópolis",
  description:
    "Conteúdo sobre internet fibra óptica em Florianópolis, escolha de planos, cobertura por bairro, internet empresarial, gamer e telefone fixo. Atualizado pela equipe Up Telecom.",
  keywords: [
    "blog up telecom",
    "internet fibra óptica Florianópolis",
    "dicas internet florianópolis",
    "provedor de internet Florianópolis",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog Up Telecom",
    description:
      "Conteúdo sobre internet fibra óptica em Florianópolis publicado pela equipe Up Telecom.",
    url: "https://uptelecomnet.com.br/blog",
  },
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-[30px] sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-14">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Blog Up Telecom
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Guias e dicas sobre internet fibra óptica em Florianópolis, escolha de planos, cobertura por bairro e suporte técnico.
            </p>
          </header>

          {posts.length === 0 ? (
            <p className="text-center text-gray-500">
              Nenhum post publicado ainda.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-xl border border-gray-200 hover:border-blue-300 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-500 mb-3">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.date)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {post.readingTime}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-blue-600 mb-3 leading-snug transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 mb-5 leading-relaxed">
                    {post.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:gap-3 transition-all">
                    Ler artigo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
