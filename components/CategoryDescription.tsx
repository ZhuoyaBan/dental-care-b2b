import Link from "next/link";
import { categoryDescriptions } from "@/lib/categoryDescriptions";

interface CategoryDescriptionProps {
  categoryKey: string;
}

export default function CategoryDescription({ categoryKey }: CategoryDescriptionProps) {
  const desc = categoryDescriptions[categoryKey];
  if (!desc) return null;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: desc.title,
        description: desc.summary,
        url: desc.url,
        mainEntityOfPage: desc.url,
        about: {
          "@type": "Organization",
          name: "Uvcare",
          url: "https://www.dentalcarepack.com",
        },
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Dental labs, orthodontic clinics, clear aligner brands, distributors, and private-label buyers",
        },
        significantLink: desc.links.map((link) => `https://www.dentalcarepack.com${link.href}`),
      },
      {
        "@type": "FAQPage",
        mainEntity: desc.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <section className="border-t border-gray-100 bg-white px-4 py-16" aria-labelledby={`${categoryKey}-overview`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="mx-auto max-w-4xl">
        <header className="mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">For B2B sourcing</span>
          <h2 id={`${categoryKey}-overview`} className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl">{desc.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">{desc.summary}</p>
        </header>

        <div className="mb-10 rounded-r-2xl border-l-4 border-blue-600 bg-blue-50 p-6">
          <h3 className="mb-4 text-lg font-bold text-gray-900">Procurement snapshot</h3>
          <ul className="space-y-2">
            {desc.keyFacts.map((fact) => (
              <li key={fact} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="mt-0.5 font-bold text-blue-600">•</span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          {desc.sections.map((section) => (
            <div key={section.heading}>
              <h3 className="mb-3 text-xl font-bold text-gray-900">{section.heading}</h3>
              <p className="text-base leading-relaxed text-gray-600">{section.body}</p>
            </div>
          ))}
        </div>

        <nav className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6" aria-label="Related products and sourcing pages">
          <h3 className="text-base font-bold text-gray-900">Explore relevant products and sourcing routes</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {desc.links.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-gray-200 transition-colors hover:bg-blue-50">
                {link.label} →
              </Link>
            ))}
          </div>
        </nav>

        <div className="mt-10 border-t border-gray-200 pt-10">
          <h3 className="text-xl font-bold text-gray-900">Buyer questions</h3>
          <div className="mt-5 space-y-3">
            {desc.faqs.map((faq) => (
              <details key={faq.question} className="rounded-xl border border-gray-200 bg-white px-5 py-4">
                <summary className="cursor-pointer pr-5 font-semibold text-gray-900">{faq.question}</summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-6 text-center">
          <p className="mb-4 font-medium text-gray-700">{desc.ctaText}</p>
          <a
            href={`https://wa.me/8618822885445?text=${encodeURIComponent(desc.whatsAppMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-blue-600 px-8 py-3 font-bold text-white transition-colors hover:bg-blue-700"
          >
            Discuss This Category
          </a>
        </div>
      </div>
    </section>
  );
}
