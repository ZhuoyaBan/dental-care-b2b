import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { posts } from "@/lib/insights";
import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === params.id);
  if (!post) return { title: "Article Not Found" };
  return {
    title: `${post.title} | Uvcare Insights`,
    description: post.excerpt
  };
}

export default function ArticleDetailPage({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === params.id);
  if (!post) {
    notFound();
  }

  const relatedProducts = post.relatedProductIds
    .map(id => products.find(p => p.id === id))
    .filter((p): p is NonNullable<typeof p> => !!p);

  const relatedArticles = posts.filter(p => p.id !== post.id).slice(0, 2);

  // FAQPage + Article Schema
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      author: { "@type": "Organization", name: "Uvcare" },
      publisher: { "@type": "Organization", name: "Uvcare B2B Supply" }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faq.map(item => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer }
      }))
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <Header />
      <main className="pt-24 pb-20 min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{post.category}</span>
              <span className="text-gray-300">•</span>
              <span className="text-xs text-gray-500">{post.date}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <p className="text-lg text-gray-500">{post.excerpt}</p>
          </div>

          {/* Key Facts Box — GEO optimized */}
          <div className="mb-10 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-2xl">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">📋</span> Key Facts
            </h2>
            <ul className="space-y-2">
              {post.keyFacts.map((fact, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-blue-600 font-bold mt-0.5">•</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article body */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-gray-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* FAQ Section — GEO optimized */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-blue-600">💬</span> Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {post.faq.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <span className="font-semibold text-gray-900 text-base pr-4">{item.question}</span>
                      <span className="text-blue-600 text-xl flex-shrink-0 transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                      {item.answer}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Related Products</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {relatedProducts.map(product => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="block border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all group"
                  >
                    <div className="relative aspect-square bg-gray-50">
                      <Image
                        src={product.images[0]}
                        alt={`${product.name} - Wholesale Dental Supply by Uvcare`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-3">
                      <p className="font-semibold text-sm text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">{product.name}</p>
                      <p className="text-xs text-gray-400 mt-1">MOQ: {product.moq}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedArticles.map(related => (
                  <Link
                    key={related.id}
                    href={`/insights/${related.id}`}
                    className="block p-5 border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-md transition-all"
                  >
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{related.category}</span>
                    <h3 className="font-semibold text-gray-900 mt-2 text-sm leading-snug">{related.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 p-8 bg-blue-50 rounded-3xl border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Interested in our solutions?</h3>
              <p className="text-blue-600/80 font-medium">Contact us for bulk pricing and OEM customization.</p>
            </div>
            <Link href="/#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg shadow-blue-200 whitespace-nowrap">Get a Free Quote</Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
