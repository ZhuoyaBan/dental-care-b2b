import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Retainer & Aligner Cases",
    description: "Ready-to-brand storage cases in multiple shapes, materials and color options for clinics, brands and distributors.",
    detail: "MOQ from 100 PCS · Logo customization available",
    href: "/products/retainer-case",
    image: "/images/products/aligner-case-v1-blue.webp",
  },
  {
    name: "Cleaning & Soaking Solutions",
    description: "Cleaning boxes, ultrasonic cleaners and UV-C care products designed for daily aligner and denture hygiene programs.",
    detail: "MOQ from 200 PCS · Multiple technology options",
    href: "/products/cleaning-box",
    image: "/images/products/planet-cleaning-box-blue.webp",
  },
  {
    name: "Orthodontic Gift Packaging",
    description: "Premium patient welcome-kit packaging that helps orthodontic practices deliver a complete branded experience.",
    detail: "MOQ from 100 PCS · Custom inserts and finish options",
    href: "/products/gift-box",
    image: "/images/products/dental-gift-box-v1-1.webp",
  },
  {
    name: "Dental Accessories",
    description: "Aligner removers, chewies and practical add-ons for brands building a complete oral-care product line.",
    detail: "MOQ varies by item · OEM/ODM support",
    href: "/products/dental-accessories",
    image: "/images/products/aligner-remover-chewie.webp",
  },
] as const;

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Source by Product Category
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Build a Complete Aligner Care Line
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Start with a proven product category, then tailor materials, colors, logo printing and packaging around your market.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.href} href={category.href} className="group overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <Image src={category.image} alt={`${category.name} wholesale products`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600">{category.name}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{category.description}</p>
                <p className="mt-4 border-t border-gray-100 pt-4 text-xs font-bold text-blue-700">{category.detail}</p>
                <span className="mt-5 inline-flex items-center text-sm font-bold text-blue-600">Explore category <span aria-hidden="true" className="ml-1 transition-transform group-hover:translate-x-1">→</span></span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-14 text-center">
          <p className="text-gray-500 mb-5 text-sm">
            Need a product combination or custom development plan? Share your market and target quantity with us.
          </p>
          <a
            href="https://wa.me/8618822885445?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20dental%20accessory%20sourcing%20plan."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors shadow-sm"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
            Discuss Your Sourcing Plan
          </a>
        </div>
      </div>
    </section>
  );
}
