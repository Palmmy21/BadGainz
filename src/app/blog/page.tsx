import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import { getAllPosts } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "บทความทั้งหมด | Badgainz",
  description: "อ่านบทความเกี่ยวกับการสร้างรายได้ออนไลน์ การทำธุรกิจ Digital Products และ Automation",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col relative overflow-hidden">
      <Navbar />
      
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--gold-primary)]/10 blur-[120px] rounded-full pointer-events-none" />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 pt-40 pb-20 relative z-10">
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
          บทความ <span className="text-[var(--gold-primary)]">ความรู้</span>
        </h1>
        <p className="text-neutral-400 mb-12 text-lg">
          รวบรวมเทคนิค ไอเดีย และแนวคิดในการเริ่มต้นสร้างรายได้ออนไลน์ 
          ด้วย Digital Products แบบไม่ต้องเหนื่อยฟรี
        </p>

        <div className="flex flex-col gap-8">
          {posts.map((article) => (
            <Link 
              key={article.slug} 
              href={`/blog/${article.slug}`}
              className="block group"
            >
              <article className="bg-[#111111] border border-white/10 p-8 rounded-2xl transition-all duration-300 hover:border-[var(--gold-primary)]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(212,175,55,0.2)]">
                <p className="text-sm text-[var(--gold-primary)] mb-3 font-mono">{article.date}</p>
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--gold-primary)] transition-colors">
                  {article.title}
                </h2>
                <p className="text-neutral-400 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="mt-6 flex items-center text-[var(--gold-primary)] text-sm font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                  อ่านเพิ่มเติม 
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
