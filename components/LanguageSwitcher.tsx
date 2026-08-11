"use client";

import { useState, useEffect, useRef } from "react";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "zh-CN", name: "中文", flag: "🇨🇳" },
] as const;

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const ref = useRef<HTMLDivElement>(null);

  // Keep the default English page free of Google Translate's third-party
  // script. A translated visit still initializes it from the googtrans cookie.
  useEffect(() => {
    const match = document.cookie.match(/googtrans=\/[^/]+\/([^;]+)/);
    const savedLanguage = match?.[1] || "en";
    setCurrentLang(savedLanguage);

    if (savedLanguage === "en" || document.getElementById("google-translate-script")) {
      return;
    }

    window.googleTranslateElementInit = () => {
      try {
        new window.google.translate.TranslateElement({
          pageLanguage: "en",
          includedLanguages: languages.map(l => l.code).join(","),
          autoDisplay: false,
        }, "google-translate-widget");
      } catch (e) {
        console.error("Google Translate init error:", e);
      }
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.type = "text/javascript";
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const switchLanguage = (langCode: string) => {
    if (langCode === "en") {
      // Restore original language
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + window.location.hostname;
      window.location.reload();
      return;
    }

    // Set the googtrans cookie directly
    const cookieValue = `/en/${langCode}`;
    document.cookie = `googtrans=${cookieValue}; path=/`;
    document.cookie = `googtrans=${cookieValue}; path=/; domain=.${window.location.hostname}`;

    setIsOpen(false);
    window.location.reload();
  };

  const current = languages.find(l => l.code === currentLang) || languages[0];

  return (
    <div ref={ref} className="relative">
      {/* Hidden Google Translate widget */}
      <div id="google-translate-widget" className="hidden" aria-hidden="true" />

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
        aria-expanded={isOpen}
        className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition-colors px-2 py-1 rounded-lg hover:bg-gray-50"
      >
        <span className="text-base" aria-hidden="true">{current.flag}</span>
        <span className="hidden sm:inline">{current.name}</span>
        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 max-h-80 overflow-y-auto">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className={`w-full flex items-center gap-2.5 px-4 py-2 text-sm text-left transition-colors ${
                currentLang === lang.code ? "bg-blue-50 text-blue-600 font-bold" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span className="text-base" aria-hidden="true">{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
