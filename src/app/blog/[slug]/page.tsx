import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

// Mock function for SEO metadata based on slug
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.replace(/-/g, ' ').toUpperCase();
  
  return {
    title: `${title} | Badgainz Blog`,
    description: `เรียนรู้เรื่อง ${title} กับ Badgainz เพื่อสร้างรายได้ออนไลน์`,
    keywords: ["สร้างรายได้ออนไลน์", "digital products", slug.replace(/-/g, ' ')],
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  
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

        <article className="prose prose-invert prose-headings:text-white prose-a:text-[var(--gold-primary)] max-w-none">
          <p className="text-[var(--gold-primary)] font-mono text-sm mb-4">16 กรกฎาคม 2026</p>
          
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-8 leading-tight">
            {slug.replace(/-/g, ' ')}
          </h1>
          
          <div className="w-full aspect-video bg-[#111] rounded-2xl mb-12 border border-white/5 flex items-center justify-center relative overflow-hidden">
             {/* Abstract grid */}
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--gold-primary)_1px,transparent_1px)] [background-size:20px_20px]" />
             <span className="text-neutral-600 font-mono relative z-10">Featured Image Placeholder</span>
          </div>

          <div className="text-neutral-300 leading-relaxed space-y-6 text-lg font-light">
            <p>
              นี่คือเนื้อหาจำลองสำหรับบทความ <strong>{slug}</strong> คุณสามารถนำข้อมูลจากฐานข้อมูลหรือ Headless CMS มาแสดงตรงส่วนนี้ได้ในอนาคตครับ
            </p>
            <p>
              การทำ SEO สำหรับหน้าบทความ สิ่งสำคัญคือการใช้ <code>generateMetadata</code> ของ Next.js (App Router) ซึ่งจะช่วยให้คุณสามารถดึงข้อมูล Title, Description ออกมาแสดงบน Google Search ได้อย่างแม่นยำ
            </p>
            
            <div className="bg-[#111] p-6 rounded-xl border-l-4 border-[var(--gold-primary)] my-8">
              <h3 className="text-xl font-bold text-white mb-2 mt-0">💡 เคล็ดลับการทำบทความเงินล้าน</h3>
              <p className="text-neutral-400 mb-0">อย่าลืมใส่ Call to Action (ปุ่มสั่งซื้อ) ที่ท้ายบทความเสมอ เพื่อแปลงคนอ่านให้กลายเป็นลูกค้า</p>
            </div>

            <p>
              ระบบที่เรากำลังใช้อยู่นี้ สามารถโหลดข้อมูลได้รวดเร็วมาก ทำให้ได้คะแนน PageSpeed สูง และเป็นที่ชื่นชอบของ Google Algorithm ครับ
            </p>
          </div>
        </article>

        {/* Article Footer CTA */}
        <div className="mt-16 pt-12 border-t border-white/10 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">พร้อมที่จะเริ่มสร้างธุรกิจของคุณแล้วหรือยัง?</h2>
          <Link 
            href="/checkout"
            className="inline-flex px-8 py-4 font-bold text-black bg-gradient-to-r from-[var(--gold-primary)] to-yellow-500 rounded-md hover:scale-105 transition-transform"
          >
            เริ่มสร้างธุรกิจกับ BADGAINZ
          </Link>
        </div>
      </main>
    </div>
  );
}
