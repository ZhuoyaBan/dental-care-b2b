import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
export const metadata = { title: "Wholesale Custom Retainer Cases | Dental Box Supplier - Uvcare", description: "Global supplier of premium dental retainer cases. Low MOQ and OEM service." };
export default function Page() {
  const items = products.filter(p => p.category === "retainer-case");
  const jsonLd = { "@context": "https://schema.org", "@type": "ItemList", "name": "Wholesale Custom Retainer Cases", "itemListElement": items.map((p, i) => ({ "@type": "ListItem", "position": i + 1, "item": { "@type": "Product", "name": p.name, "image": `https://dentalcarepack.com${p.images[0]}` } })) };
  return (
    <main className="pt-24 pb-20 min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Dental Retainer Cases</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">{items.map(p => <ProductCard key={p.id} product={p} />)}</div>
      </div>
    </main>
  );
}
