import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "บทความทั้งหมด | Badgainz",
  description: "อ่านบทความเกี่ยวกับการสร้างรายได้ออนไลน์ การทำธุรกิจ Digital Products และ Automation",
};

const MOCK_ARTICLES = [
  {
    slug: "grand-slam-offer-creation",
    title: "สร้าง 'Grand Slam Offer' ข้อเสนอที่ลูกค้าดูโง่ถ้าปฏิเสธ",
    excerpt: "ถ้าคุณต้องพยายามขายแปลว่าข้อเสนอคุณยังไม่ดีพอ เรียนรู้วิธีสร้างข้อเสนอที่ทำให้ลูกค้ารู้สึกว่า 'เขาจะพลาดมากถ้าไม่จ่ายเงินให้คุณ' (แนวคิดจาก $100M Offers)",
    date: "16 กรกฎาคม 2026",
  },
  {
    slug: "the-value-equation",
    title: "สมการสร้างมูลค่า: ทำไมลูกค้าถึงยอมจ่ายแพงกว่า 10 เท่า",
    excerpt: "ความลับของการตั้งราคาสินค้า Digital Product ไม่ได้อยู่ที่ต้นทุน แต่อยู่ที่ (ผลลัพธ์ที่ลูกค้าฝันถึง x ความเชื่อมั่น) / (เวลาที่ใช้ x ความพยายาม)",
    date: "14 กรกฎาคม 2026",
  },
  {
    slug: "charge-more-money",
    title: "หยุดตัดราคา: ทำไมการ 'ขายแพง' ถึงทำให้คุณได้ลูกค้าที่ดีกว่า",
    excerpt: "เมื่อคุณลดราคา คุณดึงดูดลูกค้าที่จุกจิก เมื่อคุณขึ้นราคา คุณดึงดูดลูกค้าที่ตั้งใจจริงและเคารพคุณค่าของคุณ จงเป็นคนที่แพงที่สุดในตลาด",
    date: "12 กรกฎาคม 2026",
  },
  {
    slug: "risk-reversal-guarantees",
    title: "Risk Reversal: การรับความเสี่ยงแทนลูกค้าเพื่อปิดการขายทันที",
    excerpt: "คนไม่ซื้อเพราะเขากลัวพลาด ถ้าย้ายความเสี่ยงทั้งหมดมาที่คุณด้วย Guarantee ที่บ้าคลั่ง ยอดขายคุณจะพุ่งขึ้นทันทีแบบไม่มีข้อแม้",
    date: "10 กรกฎาคม 2026",
  },
  {
    slug: "niche-down-make-millions",
    title: "Niche Down: ยิ่งตลาดย่อย คุณยิ่งชาร์จราคาได้แพง",
    excerpt: "อย่าเป็นคนสอนทำธุรกิจให้ 'ทุกคน' จงเป็นคนสอนทำธุรกิจให้ 'หมอฟัน' เมื่อคุณแก้ปัญหาเฉพาะกลุ่ม คุณคือผู้เชี่ยวชาญ ไม่ใช่สินค้าทั่วไป",
    date: "8 กรกฎาคม 2026",
  },
  {
    slug: "sell-results-not-process",
    title: "จงขาย 'ผลลัพธ์' ไม่ใช่ 'กระบวนการ'",
    excerpt: "ไม่มีใครอยากซื้อคอร์สเรียน 50 ชั่วโมงหรอก พวกเขาอยากซื้อ 'อิสรภาพทางการเงิน' เลิกขายจำนวนวิดีโอ แล้วเริ่มขายชีวิตใหม่ให้ลูกค้า",
    date: "5 กรกฎาคม 2026",
  },
  {
    slug: "creating-real-scarcity",
    title: "ศิลปะการสร้าง Scarcity (ความขาดแคลน) ให้คนแย่งกันซื้อ",
    excerpt: "ถ้าสินค้าคุณมีขายตลอดไป ลูกค้าก็จะเลื่อนการซื้อไปตลอดกาล เรียนรู้วิธีสร้างความจำกัดที่ 'สมเหตุสมผลและเป็นจริง' เพื่อเร่งการตัดสินใจ",
    date: "1 กรกฎาคม 2026",
  },
  {
    slug: "core-4-lead-generation",
    title: "Core 4: สี่เสาหลักของการสร้าง Lead แบบไม่มีวันหมด",
    excerpt: "มีแค่ 4 วิธีเท่านั้นที่จะให้คนรู้จักคุณ: บอกคนรู้จัก, ทักคนไม่รู้จัก, ทำคอนเทนต์, ยิงแอด เริ่มจากทำ 1 อย่างให้สุดก่อนขยายไปอย่างอื่น",
    date: "28 มิถุนายน 2026",
  }
];

export default function BlogPage() {
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
          {MOCK_ARTICLES.map((article) => (
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
