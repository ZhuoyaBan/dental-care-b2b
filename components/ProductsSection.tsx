import { products, type Product } from "@/lib/products";

function ProductIcon({ type, className }: { type: string; className?: string }) {
  const icons: Record<string, React.ReactNode> = {
    case: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /><line x1="12" y1="13" x2="12" y2="16" strokeWidth="2" /></svg>
    ),
    uv: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>
    ),
    ultrasonic: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 10a10 10 0 000 4M6 7a7 7 0 000 10M22 10a10 10 0 010 4M18 7a7 7 0 010 10" /><circle cx="12" cy="12" r="2" /></svg>
    ),
  };
  return <div className={className}>{icons[type] ?? icons["case"]}</div>;
}

function ProductCard({ product }: { product: Product }) {  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 p-6 flex flex-col hover:shadimport ProductCard from "@/components/ProductCard";
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
      }ow-xl hover:border-blue-100 hover:-translate-y-1 transition-all duration-300">
      <span className="absolute top-4 right-4 text-[10px] font-bold text-gray-400 tracking-widest uppercase">{product.category}</span>
      {product.imageUrl && (
        <div className="aspect-square overflow-hidden rounded-xl mb-5">
          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>
      )}
      {!product.imageUrl && (
        <div className={`w-14 h-14 ${product.iconBg} rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
          <ProductIcon type={product.iconType} className={`w-7 h-7 ${product.iconColor}`} />
        </div>
      )}
      <h3 className="text-base font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-200">{product.name}</h3>
      <p className="text-xs font-semibold text-blue-500 mb-3">{product.tagline}</p>
      <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-6">{product.description}</p>
      <a href="https://wa.me/8618822885445" className="w-full flex items-center justify-center gap-2 bg-gray-50 hover:bg-blue-600 text-gray-700 hover:text-white border border-gray-200 hover:border-blue-600 text-sm font-semibold py-2.5 px-4 rounded-xl transition-all duration-200">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
        Send Inquiry
      </a>
    </div>
  );
}

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Our Product Range</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Aligner Care Solutions</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">From UV sterilizers to cleaning brushes — everything your clients need for a complete aligner care routine, all available under your brand.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (<ProductCard key={product.id} product={product} />))}
        </div>
        <div className="mt-14 text-center">
          <p className="text-gray-400 mb-5 text-sm">Don't see what you're looking for? We offer fully custom OEM / ODM development.</p>
          <a href="https://wa.me/8618822885445" className="btn-primary">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
            Discuss Custom Requirements
          </a>
        </div>
      </div>
    </section>
  );
}
