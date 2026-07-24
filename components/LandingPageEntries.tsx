import Link from "next/link";

const landingPageEntries = [
  {
    title: "Retainer Case Manufacturer in China",
    desc: "OEM and private-label retainer cases with custom logo. MOQ from 100 PCS. UV-C sterilizer cases available.",
    href: "/retainer-case-manufacturer-china",
    icon: "🏭",
  },
  {
    title: "UV Retainer Case Manufacturer",
    desc: "Germicidal UV-C sterilizer cases (254nm-275nm). 99.99% bacteria elimination. OEM logo, MOQ 1,000 PCS.",
    href: "/uv-retainer-case-manufacturer",
    icon: "☀️",
  },
  {
    title: "Custom Dental Product Development",
    desc: "Full ODM service from concept to mass production. Molds, electronics, assembly. MOQ from 5,000 PCS.",
    href: "/custom-dental-product-development-partner",
    icon: "🔧",
  },
] as const;

export default function LandingPageEntries() {
  return (
    <section className="py-12 bg-gray-50/60 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Sourcing & Manufacturing Guides</h2>
        <p className="text-sm text-gray-500 mb-8">Looking for a manufacturer or OEM partner? Start with these procurement guides.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {landingPageEntries.map((entry) => (
            <Link
              key={entry.href}
              href={entry.href}
              className="group block bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg hover:border-blue-300 transition-all"
            >
              <div className="text-2xl mb-3" aria-hidden="true">{entry.icon}</div>
              <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{entry.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{entry.desc}</p>
              <span className="mt-3 inline-flex items-center text-sm font-bold text-blue-600">
                Read guide <span aria-hidden="true" className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
