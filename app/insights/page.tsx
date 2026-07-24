import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { posts } from "@/lib/insights";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const siteUrl = "https://www.dentalcarepack.com";

export const metadata: Metadata = {
  title: "Industry Insights & Dental Care Guides | Uvcare",
  description: "Stay updated with the latest trends in dental accessories, orthodontic care technology, and professional hygiene solutions.",
  alternates: {
    canonical: `${siteUrl}/insights`,
  },
  openGraph: {
    title: "Industry Insights & Dental Care Guides | Uvcare",
    description: "Professional guides and technology updates from Uvcare's dental experts.",
    url: `${siteUrl}/insights`,
    type: "website",
  },
};

export default function InsightsPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Uvcare Industry Insights",
    description: "Professional guides and technology updates from Uvcare's dental experts.",
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      url: `${siteUrl}/insights/${post.id}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Header />
      <main className="pt-24 pb-20 min-h-screen bg-white">
        <section className="bg-white border-b border-gray-100 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-blue-600">Industry Insights</h1>
            <p className="text-gray-500 text-lg max-w-2xl">Professional guides and technology updates from Uvcare&apos;s dental experts.</p>
          </div>
        </section>

        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/insights/${post.id}`}
                className="group flex flex-col border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image src={post.image} alt={`${post.title} | Uvcare Dental Care Guide`} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{post.category}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h2>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-3">{post.excerpt}</p>
                  <span className="mt-auto text-blue-600 font-bold text-sm inline-flex items-center gap-1">
                    Read Full Article
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
