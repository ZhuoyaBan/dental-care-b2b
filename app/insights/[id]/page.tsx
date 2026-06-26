import { posts } from "@/lib/insights";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === params.id);
  if (!post) return { title: "Article Not Found" };
  return {
    title: \`\${post.title} | Uvcare Insights\`,
    description: post.excerpt
  };
}

export default function InsightDetailPage({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === params.id);
  if (!post) notFound();

  return (
    <main className="pt-24 pb-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/insights" 
          className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <ChevronLeft size={18} />
          Back to Insights
        </Link>

        <article>
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-gray-300">|</span>
            <span className="text-sm text-gray-500">{post.date}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
            {post.title}
          </h1>

          <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl">
            <Image 
              src={post.image} 
              alt={post.title} 
              fill 
              className="object-cover"
              priority
            />
          </div>

          <div 
            className="prose prose-lg prose-blue max-w-none text-gray-600 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 p-8 bg-blue-50 rounded-3xl border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Interested in our solutions?</h3>
              <p className="text-blue-600/80 font-medium">Contact us for bulk pricing and OEM customization.</p>
            </div>
            <Link 
              href="/#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg shadow-blue-200"
            >
              Get a Free Quote
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
