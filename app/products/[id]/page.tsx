"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProductById, products } from "@/lib/products";
import { posts } from "@/lib/insights";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id, 10);
  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-gray-500 text-lg">Product not found.</p>
      </div>
    );
  }

  const currentIndex = products.findIndex(p => p.id === productId);
  const prevProduct = currentIndex > 0 ? products[currentIndex - 1] : null;
  const nextProduct = currentIndex < products.length - 1 ? products[currentIndex + 1] : null;

  return (
    <ProductDetailContent
      product={product}
      productId={productId}
      prevProduct={prevProduct}
      nextProduct={nextProduct}
    />
  );
}

function ProductDetailContent({
  product,
  productId,
  prevProduct,
  nextProduct,
}: {
  product: NonNullable<ReturnType<typeof getProductById>>;
  productId: number;
  prevProduct: ReturnType<typeof getProductById> | null;
  nextProduct: ReturnType<typeof getProductById> | null;
}) {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  // Click background → go back to /products
  const handleBackgroundClick = useCallback(() => {
    router.push("/products");
  }, [router]);

  // Stop clicks inside the product card from propagating
  const handleCardClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <>
      <Header />
      {/* Full-page backdrop: click anywhere outside the card → go to /products */}
      <div className="min-h-screen bg-white pt-20 cursor-pointer" onClick={handleBackgroundClick}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 cursor-default" onClick={handleCardClick}>
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-blue-600 transition-colors">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-600">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[70vh] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            {/* Left: Image area */}
            <div className="lg:col-span-7 bg-gray-50 relative flex items-center justify-center min-h-[400px] lg:min-h-0">
              <div className="relative w-full h-full aspect-square lg:aspect-auto lg:min-h-[500px]">
                <Image
                  src={product.images[currentImageIndex]}
                  alt={`${product.name} - Wholesale Dental Supply by Uvcare`}
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
              </div>

              {/* Image navigation arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    aria-label="Previous product image"
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-all z-10"
                  >
                    <ChevronLeft size={22} className="text-gray-700" aria-hidden="true" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    aria-label="Next product image"
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-all z-10"
                  >
                    <ChevronRight size={22} className="text-gray-700" aria-hidden="true" />
                  </button>
                </>
              )}

              {/* Image dots indicator */}
              {product.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {product.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      aria-label={`View image ${idx + 1} of ${product.images.length}`}
                      aria-current={idx === currentImageIndex}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        idx === currentImageIndex ? "bg-blue-600 w-6" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Right: Dark info panel */}
            <div className="lg:col-span-5 bg-[#1a1a2e] text-white p-8 lg:p-10 flex flex-col">
              {/* Eco badge */}
              <div className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1.5 rounded-full mb-6 w-fit">
                <span>🌿</span> BPA-FREE & FOOD GRADE
              </div>

              <h1 className="text-2xl lg:text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-gray-300 text-sm leading-relaxed mb-8 flex-grow">
                {product.description}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-1">MOQ</p>
                  <p className="text-sm font-bold">{product.moq}</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-1">LEAD TIME</p>
                  <p className="text-sm font-bold">{product.leadTime}</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-1">CUSTOM</p>
                  <p className="text-sm font-bold text-green-400">✓ Logo</p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-2">KEY FEATURES</p>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="text-xs bg-white/10 text-gray-200 px-3 py-1.5 rounded-full">{feature}</span>
                  ))}
                  <span className="text-xs bg-white/10 text-gray-200 px-3 py-1.5 rounded-full">BPA Free</span>
                  <span className="text-xs bg-white/10 text-gray-200 px-3 py-1.5 rounded-full">Food Grade</span>
                  <span className="text-xs bg-white/10 text-gray-200 px-3 py-1.5 rounded-full">ODM Available</span>
                </div>
              </div>

              {/* WhatsApp button */}
              <a
                href={`https://wa.me/8618822885445?text=${encodeURIComponent(
                  `Hi, I'm interested in ${product.name}. Could you send me free samples and price list?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Send WhatsApp inquiry about ${product.name}`}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-600/25 text-base"
              >
                <MessageCircle size={20} aria-hidden="true" />
                Get Free Samples
              </a>

              {/* Prev / Next navigation */}
              <div className="flex justify-between mt-6 pt-6 border-t border-white/10">
                {prevProduct ? (
                  <Link href={`/products/${prevProduct.id}`} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group">
                    <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="truncate max-w-[160px]">{prevProduct.name}</span>
                  </Link>
                ) : <div />}
                {nextProduct ? (
                  <Link href={`/products/${nextProduct.id}`} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group">
                    <span className="truncate max-w-[160px]">{nextProduct.name}</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : <div />}
              </div>
            </div>
          </div>

          {/* Related Articles — internal linking */}
          {(() => {
            const relatedPosts = posts.filter(p => p.relatedProductIds.includes(productId));
            if (relatedPosts.length === 0) return null;
            return (
              <div className="mt-12 pt-8 border-t border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 mb-5">Learn More in Our Blog</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedPosts.map(article => (
                    <Link
                      key={article.id}
                      href={`/insights/${article.id}`}
                      className="block p-5 border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-md transition-all group bg-white"
                    >
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">{article.category}</span>
                      <h3 className="font-semibold text-gray-900 mt-2 text-sm leading-snug group-hover:text-blue-600 transition-colors">{article.title}</h3>
                      <p className="text-xs text-gray-400 mt-2">Read article →</p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </div>
      <Footer />
    </>
  );
}
