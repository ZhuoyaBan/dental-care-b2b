import { categoryDescriptions } from "@/lib/categoryDescriptions";

interface CategoryDescriptionProps {
  categoryKey: string;
}

export default function CategoryDescription({ categoryKey }: CategoryDescriptionProps) {
  const desc = categoryDescriptions[categoryKey];
  if (!desc) return null;

  return (
    <section className="py-16 px-4 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        {/* Key Facts — GEO optimized for AI citation */}
        <div className="mb-10 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-2xl">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-blue-600">📋</span> Key Facts
          </h2>
          <ul className="space-y-2">
            {desc.keyFacts.map((fact, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-blue-600 font-bold mt-0.5">•</span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* SEO Content Sections */}
        {desc.sections.map((section, i) => (
          <div key={i} className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">{section.heading}</h2>
            <p className="text-gray-600 leading-relaxed text-base">{section.body}</p>
          </div>
        ))}

        {/* CTA */}
        <div className="mt-10 p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center">
          <p className="text-gray-700 font-medium mb-4">{desc.ctaText}</p>
          <a
            href="https://wa.me/8618822885445"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-xl transition-colors"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
