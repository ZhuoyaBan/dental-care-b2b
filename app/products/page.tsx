import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import Link from "next/link";

export default function ProductsPage() {
  const categories = [
    { name: "Retainer Cases", slug: "retainer-case", desc: "Wholesale custom cases with mirror and ventilation." },
    { name: "Cleaning Boxes", slug: "cleaning-box", desc: "Professional UV-C and ultrasonic cleaning solutions." },
    { name: "Gift Boxes", slug: "gift-box", desc: "Premium packaging for dental orthodontic kits." },
    { name: "Dental Accessories", slug: "dental-accessories", desc: "Essential tools for aligner maintenance." },
  ];

  return (
    <>
      <Header />
      <main className="pt-24 bg-gray-50 min-h-screen">
        {/* Banner Section */}
        <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-3">Full Catalog</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Premium Aligner Care<br/><span className="text-blue-500">Master Collection</span></h1>
            <p className="text-gray-400 text-lg max-w-2xl">Professional manufacturing solutions for dental clinics. Explore our complete range of aligner accessories designed for patient comfort and hygiene.</p>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="sticky top-16 z-40 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
            <div className="flex space-x-8 py-4 whitespace-nowrap">
              <Link href="/products" className="text-sm font-bold text-blue-600 border-b-2 border-blue-600 pb-4 -mb-4">ALL PRODUCTS</Link>
              {categories.map(cat => (
                <Link key={cat.slug} href={`/products/${cat.slug}`} className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors uppercase">{cat.name}</Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Products Grid */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
