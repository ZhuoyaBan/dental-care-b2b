import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Our Product Range
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Aligner Care Solutions
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From UV sterilizers to cleaning brushes — everything your clients need, all available under your brand.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-14 text-center">
          <p className="text-gray-400 mb-5 text-sm">
            Don't see what you're looking for? We offer fully custom OEM / ODM development.
          </p>
          <a
            href="https://wa.me/8618822885445"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors shadow-sm"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
            Discuss Custom Requirements
          </a>
        </div>
      </div>
    </section>
  );
}
