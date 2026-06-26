import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { posts } from "@/lib/insights";
import { notFound } from "next/navigation";

export default function ArticleDetailPage({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-24 pb-20 min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{post.category}</span>
              <span className="text-gray-300">•</span>
              <span className="text-xs text-gray-500">{post.date}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <p className="text-lg text-gray-500">{post.excerpt}</p>
          </div>
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}