"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const productCategories = [
  { label: "Retainer Cases", href: "/products/retainer-case" },
  { label: "Cleaning Boxes", href: "/products/cleaning-box" },
  { label: "Gift Boxes", href: "/products/gift-box" },
  { label: "Dental Accessories", href: "/products/dental-accessories" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setProductsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setProductsOpen(false);
    }, 300); // 增加 300ms 缓冲，防止闪退
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md border-b border-blue-50" : "bg-white/80 backdrop-blur-sm"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-12 w-auto">
              <img src="/logo.jpg" alt="Uvcare Logo" className="h-full w-auto object-contain" />
            </div>
            <div className="leading-tight hidden sm:block">
              <span className="block text-xl font-bold text-gray-800 tracking-tight">Uvcare</span>
              <span className="block text-[10px] text-gray-400 font-semibold tracking-[0.2em] uppercase">B2B Supply</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <div className="relative group py-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Link href="/products" className="flex items-center gap-1.5 text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors">
                Products
                <svg className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
              </Link>
              {productsOpen && (
                <div className="absolute top-full left-0 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 z-50 animate-in fade-in slide-in-from-top-2">
                  {productCategories.map((cat) => (
                    <Link key={cat.href} href={cat.href} className="block px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      {cat.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/about" className="text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors">About</Link>
            <Link href="/faq" className="text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors">FAQ</Link>
          </nav>

          <a href="https://wa.me/8618822885445" className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-7 py-3 rounded-xl transition-all shadow-lg shadow-blue-200">
            Get a Quote
          </a>

          <button className="md:hidden p-2 text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-2 shadow-xl">
          <Link href="/" className="block py-3 px-4 text-sm font-bold text-gray-700" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/products" className="block py-3 px-4 text-sm font-bold text-blue-600 bg-blue-50 rounded-xl" onClick={() => setMenuOpen(false)}>All Products Catalog</Link>
          {productCategories.map((cat) => (
            <Link key={cat.href} href={cat.href} className="block py-3 px-4 pl-8 text-sm font-medium text-gray-600" onClick={() => setMenuOpen(false)}>{cat.label}</Link>
          ))}
          <Link href="/about" className="block py-3 px-4 text-sm font-bold text-gray-700" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/faq" className="block py-3 px-4 text-sm font-bold text-gray-700" onClick={() => setMenuOpen(false)}>FAQ</Link>
          <a href="https://wa.me/8618822885445" className="block text-center bg-blue-600 text-white text-sm font-bold px-6 py-4 rounded-xl mt-4" onClick={() => setMenuOpen(false)}>Get a Quote</a>
        </div>
      )}
    </header>
  );
}
