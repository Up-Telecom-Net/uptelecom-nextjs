import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";

type Params = { slug: string };

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://uptelecomnet.com.br/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "Up Telecom" },
    publisher: {
      "@type": "Organization",
      name: "Up Telecom",
      logo: {
        "@type": "ImageObject",
        url: "https://uptelecomnet.com.br/media/logo/logo_uptelelcom.png",
      },
    },
    mainEntityOfPage: `https://uptelecomnet.com.br/blog/${post.slug}`,
    keywords: post.keywords?.join(", "),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="container mx-auto px-[30px] sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao blog
          </Link>

          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </span>
            </div>
          </header>

          <div className="max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => (
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4 leading-snug">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-3 leading-snug">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-5">
                    {children}
                  </p>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal pl-6 mb-5 space-y-2 text-base sm:text-lg text-gray-700 leading-relaxed">
                    {children}
                  </ol>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc pl-6 mb-5 space-y-2 text-base sm:text-lg text-gray-700 leading-relaxed">
                    {children}
                  </ul>
                ),
                li: ({ children }) => <li className="pl-1">{children}</li>,
                strong: ({ children }) => (
                  <strong className="font-semibold text-gray-900">{children}</strong>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-blue-600 hover:underline"
                    target={href?.startsWith("http") ? "_blank" : undefined}
                    rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          <div className="mt-14 pt-10 border-t border-gray-200">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-3">
                Quer falar com a Up Telecom?
              </h2>
              <p className="text-blue-50 mb-6">
                Confirme cobertura no seu endereço e descubra qual plano de internet fibra óptica em Florianópolis combina com o seu uso.
              </p>
              <a
                href="https://wa.me/5548996891962"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-7 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:scale-105 transition-transform"
              >
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
