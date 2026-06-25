"use client";
import { useState } from "react";
import { type Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const [current, setCurrent] = useState(0);
  const hasMultiple = product.images.length > 1;

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img src={product.images[current]} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        {hasMultiple && (
          <>
            <button onClick={() => setCurrent((current - 1 + product.images.length) % product.images.length)} className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-white/80 rounded-full flex items-center justify-center shadow hover:bg-white transition-all">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button onClick={() => setCurrent((current + 1) % product.images.length)} className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-white/80 rounded-full flex items-center justify-center shadow hover:bg-white transition-all">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {product.images.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all ${i === current ? "bg-blue-600 w-3" : "bg-white/70 w-1.5"}`} />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 text-base mb-1 group-hover:text-blue-600 transition-colors">{product.name}</h3>
        <p className="text-xs font-semibold text-blue-500 mb-2">{product.tagline}</p>
        <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{product.description}</p>
        <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-gray-50 rounded-xl text-center">
          <div>
            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">MOQ</p>
            <p className="text-xs font-bold text-gray-700 mt-0.5">{product.moq}</p>
          </div>
          <div className="border-x border-gray-200">
            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Lead Time</p>
            <p className="text-xs font-bold text-gray-700 mt-0.5">{product.leadTime}</p>
          </div>
          <div>
            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Custom</p>
            <p className="text-xs font-bold text-green-600 mt-0.5">{product.customLogo ? "✓ Logo" : "—"}</p>
          </div>
        </div>
        <a href="https://wa.me/8618822885445" className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 px-4 rounded-xl transition-all">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Send Inquiry via WhatsApp
        </a>
      </div>
    </div>
  );
}
