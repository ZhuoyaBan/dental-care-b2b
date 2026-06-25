import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import Link from "next/link";

export default function Page() {
  const items = products.filter(p => p.category === "dental-accessories");
  const categories = [
    { name: "Retainer Cases", slug: "retainer-case" },
    { name: "Cleaning Boxes", slug: "cleaning-box" },
    { name: "Gift Boxes", slug: "gift-box" },
    { name: "Dental Accessories", slug: "dental-accessories" },
  ];

  return (
    <>
      <Header />
      <main className="pt-24 bg-gray-50 min-h-screen">
        {/* Banner Section - Updated to White Background and Blue Text */}
        <section className="bg-white border-b border-gray-100 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-blue-600">Dental Accessories</h1>
            <p className="text-gray-500 text-lg max-w-2xl">Essential tools including removers, chewies, and brushes.</p>
          </div>
        </section>
        
        <section className="sticky top-20 z-40 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 overflow-x-auto text-sm font-bold">
            <div className="flex space-x-8 py-4 whitespace-nowrap">
              <Link href="/products" className="text-gray-500 hover:text-blue-600 transition-colors uppercase">ALL PRODUCTS</Link>
              {categories.map(cat => (
                <Link key={cat.slug} href={`/products/${cat.slug}`} 
                  className={`uppercase pb-4 -mb-4 border-b-2 transition-all ${cat.slug === "dental-accessories" ? "text-blue-600 border-blue-600" : "text-gray-500 border-transparent hover:text-blue-600"}`}>
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 max-w-7xl mx-auto">
          {items.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {items.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
              <p className="text-gray-400">Coming soon. Stay tuned for our new Dental Accessories collection.</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
