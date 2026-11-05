import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { formatThaiDate } from "@/lib/format";
import { getAllPosts } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "บทความทั้งหมด | Badgainz",
  description: "อ่านบทความเกี่ยวกับการสร้างรายได้ออนไลน์ การทำธุรกิจ Digital Products และ Automation",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="profile-page min-h-screen flex flex-col">
      <Navbar />
      <PageHero
        title="บทความ ความรู้"
        subtitle="รวบรวมเทคนิค ไอเดีย และแนวคิดในการเริ่มต้นสร้างรายได้ออนไลน์ ด้วย Digital Products แบบไม่ต้องเหนื่อยฟรี"
      />

      <main className="flex-1 wrap py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {posts.map((article, i) => (
            <article key={article.slug} className={`card card-link relative p-6 sm:p-7 flex flex-col ${i === 0 ? "md:col-span-2" : ""}`}>
              <p className="text-sm text-[var(--ink-faint)]">
                <time dateTime={article.date}>{formatThaiDate(article.date)}</time>
              </p>
              <h2 className={`display leading-snug mt-1.5 ${i === 0 ? "text-2xl sm:text-[2rem]" : "text-xl"}`}>
                <Link href={`/blog/${article.slug}`} className="after:absolute after:inset-0 after:rounded-[inherit]">
                  {article.title}
                </Link>
              </h2>
              <p className="mt-2 text-[var(--ink-soft)] leading-relaxed flex-1 max-w-[65ch]">{article.excerpt}</p>
              <p className="mt-5 inline-flex items-center gap-1.5 font-[family-name:var(--font-display)] font-semibold text-sm">
                อ่านเพิ่มเติม <ArrowRight className="w-4 h-4" aria-hidden />
              </p>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
