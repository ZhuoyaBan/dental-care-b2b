"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/products';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const openWhatsApp = () => {
    const message = `Hi, I am interested in ${product.name}. Could you please provide more details and price list?`;
    window.open(`https://wa.me/8618822885445?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
      <Link href={`/products/${product.id}`} className="relative aspect-square bg-gray-50 overflow-hidden block">
        <Image
          src={product.images[currentImageIndex]}
          alt={`${product.name} - Wholesale Dental Supply by Uvcare`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {product.images.length > 1 && (
          <>
            <button onClick={prevImage} aria-label={`Previous image of ${product.name}`} className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity z-10"><ChevronLeft size={20} aria-hidden="true" /></button>
            <button onClick={nextImage} aria-label={`Next image of ${product.name}`} className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity z-10"><ChevronRight size={20} aria-hidden="true" /></button>
          </>
        )}
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600">{product.name}</h3>
        </Link>
        <p className="text-sm text-blue-600 font-medium mb-2">{product.tagline}</p>
        <div className="grid grid-cols-3 gap-2 py-4 border-y border-gray-50 my-4">
          <div className="text-center"><span className="block text-[10px] text-gray-500 font-bold">MOQ</span><span className="text-xs font-bold">{product.moq}</span></div>
          <div className="text-center border-x"><span className="block text-[10px] text-gray-500 font-bold">LEAD TIME</span><span className="text-xs font-bold">{product.leadTime}</span></div>
          <div className="text-center"><span className="block text-[10px] text-gray-500 font-bold">CUSTOM</span><span className="text-xs font-bold text-green-600">✓ Logo</span></div>
        </div>
        <button onClick={openWhatsApp} aria-label={`Send WhatsApp inquiry about ${product.name}`} className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 mt-auto hover:bg-blue-700 transition-colors">
          <MessageCircle size={18} aria-hidden="true" /> Send Inquiry
        </button>
      </div>
    </div>
  );
};
export default ProductCard;