import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { landingPages } from "@/lib/landingPages";
import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = landingPages.find((p) => p.slug === params.slug);
  if (!page) return { title: "Page Not Found" };
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `https://www.dentalcarepack.com/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://www.dentalcarepack.com/${page.slug}`,
      type: "website",
    },
  };
}

export default function LandingPage({ params }: { params: { slug: string } }) {
  const page = landingPages.find((p) => p.slug === params.slug);
  if (!page) notFound();

  const relatedProducts = page.relatedProductIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => !!p);

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: page.title,
      description: page.metaDescription,
      url: `https://www.dentalcarepack.com/${page.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <Header />
      <main className="pt-24 pb-20 min-h-screen bg-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Uvcare — B2B Manufacturer
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">{page.h1}</h1>
            <p className="text-lg text-gray-500 leading-relaxed">{page.subtitle}</p>
          </div>

          {/* Key Facts */}
          <div className="mb-10 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-2xl">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">📋</span> Key Facts
            </h2>
            <ul className="space-y-2">
              {page.keyFacts.map((fact, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-blue-600 font-bold mt-0.5">•</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Content Sections */}
          {page.sections.map((section, i) => (
            <div key={i} className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">{section.heading}</h2>
              <p className="text-gray-600 leading-relaxed text-base">{section.body}</p>
            </div>
          ))}

          {/* FAQ */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-blue-600">💬</span> Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {page.faq.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <span className="font-semibold text-gray-900 text-base pr-4">{item.question}</span>
                      <span className="text-blue-600 text-xl flex-shrink-0 transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{item.answer}</div>
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
                {relatedProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
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

          {/* CTA */}
          <div className="mt-16 p-8 bg-blue-600 rounded-3xl text-center">
            <h3 className="text-xl font-bold text-white mb-2">Ready to source from a manufacturer?</h3>
            <p className="text-blue-100 mb-6">Contact us for free samples, OEM pricing, and custom product development.</p>
            <a
              href="https://wa.me/8618822885445"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Get a Free Quote
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
