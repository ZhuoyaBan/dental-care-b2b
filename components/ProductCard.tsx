"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/lib/products';
import { ChevronLeft, ChevronRight, Package, Truck, Award, MessageCircle } from 'lucide-react';

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
      {/* Image Section */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <Image
          src={product.images[currentImageIndex]}
          alt={`${product.name} - Wholesale Dental Supply by Uvcare`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
        />
        
        {product.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
            >
              <ChevronRight size={20} />
            </button>
            
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {product.images.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-4 bg-blue-600' : 'w-1.5 bg-gray-300'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">{product.name}</h3>
          <p className="text-sm text-blue-600 font-medium mb-2">{product.tagline}</p>
          <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{product.description}</p>
        </div>

        {/* B2B Specs */}
        <div className="grid grid-cols-3 gap-2 py-4 border-y border-gray-50 mb-5">
          <div className="text-center">
            <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">MOQ</span>
            <span className="block text-xs font-bold text-gray-900">{product.moq}</span>
          </div>
          <div className="text-center border-x border-gray-50">
            <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Lead Time</span>
            <span className="block text-xs font-bold text-gray-900">{product.leadTime}</span>
          </div>
          <div className="text-center">
            <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Custom</span>
            <span className="block text-xs font-bold text-green-600">✓ Logo</span>
          </div>
        </div>

        <button 
          onClick={openWhatsApp}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors mt-auto"
        >
          <MessageCircle size={18} />
          <span>Send Inquiry via WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
