import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export const metadata = { 
  title: "TITLE_PLACEHOLDER", 
  description: "Global supplier of premium dental retainer cases. Low MOQ and OEM service." 
};

export default function Page() {
  const items = products.filter(p => p.category === "retainer-case");
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "TITLE_PLACEHOLDER",
    "description": "Global supplier of premium dental retainer cases. Low MOQ and OEM service.",
    "itemListElement": items.map((p, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": p.name,
        "description": p.description,
        "image": `https://dentalcarepack.com${p.images[0]}`,
        "brand": { "@type": "Brand", "name": "Uvcare" },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD",
          "price": "0.00",
          "itemCondition": "https://schema.org/NewCondition"
        }
      }
    }))
  };

  return (
    <main className="pt-24 pb-20 min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Uvcare Professional Series</span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Dental Retainer Cases</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">Premium invisible aligner storage solutions for professional clinics.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </main>
  );
}
