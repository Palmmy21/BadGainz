import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Metadata } from "next";
import { getPostBySlug, getPostSlugs } from "@/lib/markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate metadata dynamically for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const post = getPostBySlug(slug);
    return {
      title: `${post.title} | Badgainz Blog`,
      description: post.excerpt,
      keywords: ["สร้างรายได้ออนไลน์", "digital products", "business"],
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: "article",
        publishedTime: post.date,
      }
    };
  } catch (e) {
    return {
      title: "Blog Post Not Found",
    };
  }
}

// Generate static pages at build time for best SEO
export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs
    .filter((slug) => slug.endsWith(".md"))
    .map((slug) => ({
      slug: slug.replace(/\.md$/, ""),
    }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  
  let post;
  try {
    post = getPostBySlug(slug);
  } catch (e) {
    return <div className="text-white text-center mt-40">ไม่พบบทความ</div>;
  }
  
  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col relative overflow-hidden">
      <Navbar />
      
      {/* Glow Effect */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--gold-primary)]/5 blur-[120px] rounded-full pointer-events-none" />

      <main className="flex-1 max-w-3xl mx-auto w-full px-6 pt-40 pb-20 relative z-10">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-neutral-400 hover:text-[var(--gold-primary)] mb-8 transition-colors font-medium text-sm"
        >
          <svg className="w-4 h-4 mr-2 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          กลับไปหน้าบทความ
        </Link>

        <article className="prose prose-invert prose-headings:text-white prose-a:text-[var(--gold-primary)] prose-strong:text-[var(--gold-primary)] max-w-none">
          <p className="text-[var(--gold-primary)] font-mono text-sm mb-4">{post.date}</p>
          
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-12 leading-tight">
            {post.title}
          </h1>
          
          <div className="text-neutral-300 leading-relaxed space-y-6 text-lg font-light">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </article>

        {/* Article Footer CTA */}
        <div className="mt-16 pt-12 border-t border-white/10 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">เริ่มสร้างรายได้จากไอเดียของคุณแล้วหรือยัง?</h2>
          <Link 
            href="/#products"
            className="inline-flex px-8 py-4 font-bold text-black bg-gradient-to-r from-[var(--gold-primary)] to-yellow-500 rounded-md hover:scale-105 transition-transform shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          >
            ก๊อปปี้ระบบของเราไปใช้เลย
          </Link>
        </div>
      </main>
    </div>
  );
}
