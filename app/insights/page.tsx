import { posts } from "@/lib/insights";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Industry Insights & Dental Care Guides | Uvcare",
  description: "Stay updated with the latest trends in dental accessories, orthodontic care technology, and professional hygiene solutions."
};

export default function InsightsPage() {
  return (
    <main className="pt-24 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Industry Insights</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">Professional guides and technology updates from Uvcare's dental experts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-video">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{post.category}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h2>
                <p className="text-gray-500 text-sm mb-6 line-clamp-3">{post.excerpt}</p>
                <Link 
                  href={\`/insights/\${post.id}\`}
                  className="mt-auto text-blue-600 font-bold text-sm hover:text-blue-700 inline-flex items-center gap-1"
                >
                  Read Full Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
