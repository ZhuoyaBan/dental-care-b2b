import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wholesale Retainer Cases | Custom Aligner Cases | Uvcare",
  description: "Wholesale retainer and aligner cases for dental clinics, orthodontic distributors, and clear aligner brands. Low MOQ, custom logo printing, and OEM/ODM support.",
  alternates: { canonical: "https://www.dentalcarepack.com/products/retainer-case" },
};

export default function RetainerCasePage() {
  const filtered = products.filter(p => p.category === "retainer-case");
  const categories = [
    { name: "Retainer Cases", slug: "retainer-case" },
    { name: "Cleaning Boxes", slug: "cleaning-box" },
    { name: "Gift Boxes", slug: "gift-box" },
    { name: "Dental Accessories", slug: "dental-accessories" },
    { name: "Dental Impression Kit", slug: "dental-impression-kit" },
  ];

  return (
    <>
      <Header />
      <main className="pt-24 bg-gray-50 min-h-screen">
        <section className="bg-white border-b border-gray-100 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-blue-600">Retainer Cases</h1>
            <p className="text-gray-500 text-lg max-w-2xl">Premium retainer and aligner cases for professional dental clinics. Featuring mirrors, silicone interiors and custom branding options.</p>
          </div>
        </section>

        <section className="sticky top-20 z-40 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 overflow-x-auto text-sm font-bold">
            <div className="flex space-x-8 py-4 whitespace-nowrap">
              <Link href="/products" className="text-gray-500 hover:text-blue-600 transition-colors uppercase">ALL PRODUCTS</Link>
              {categories.map(cat => (
                <Link key={cat.slug} href={`/products/${cat.slug}`} className={cat.slug === "retainer-case" ? "text-blue-600 border-b-2 border-blue-600 pb-4 -mb-4 uppercase" : "text-gray-500 hover:text-blue-600 transition-colors uppercase"}>{cat.name}</Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
