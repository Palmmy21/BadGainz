import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { Star } from "lucide-react";

export const metadata = {
  title: "ผลลัพธ์ | Badgainz",
  description: "ผลลัพธ์ที่ตรวจสอบได้ ระบบที่มีคนใช้จริงและเว็บที่เปิดดูได้",
};

function Stars() {
  return (
    <div className="flex gap-1 mb-3" aria-hidden>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className="w-5 h-5 text-[var(--ink)] fill-[var(--accent)]" />
      ))}
    </div>
  );
}

export default function ProofPage() {
  return (
    <div className="profile-page min-h-screen flex flex-col">
      <Navbar />
      <PageHero
        title={<>ผลลัพธ์ที่จับต้องได้ <br />ของจริง ไม่ขายฝัน</>}
        subtitle="ผมเก็บไว้เฉพาะสิ่งที่ตรวจสอบได้ ระบบที่มีคนใช้จริง และเว็บที่เปิดดูได้เอง"
      />

      <main className="flex-1 w-full flex flex-col">
        {/* Featured results on an ink spread, matching the homepage work section */}
        <section aria-label="ผลงานเด่น" className="bg-[var(--ink)] text-[var(--on-ink)] py-14 sm:py-20">
          <div className="wrap flex flex-col gap-14 sm:gap-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
              <div className="relative aspect-video rounded-[20px] overflow-hidden bg-[var(--surface-sunk)]">
                <Image src="/covers/horcare.webp" alt="HorCare Dashboard" fill sizes="(min-width: 768px) 540px, 100vw" className="object-cover object-top" />
              </div>
              <div>
                <Stars />
                <h2 className="display text-2xl sm:text-[2rem] leading-tight mb-3">&ldquo;จาก 0 ถึง 100 ธุรกิจในไม่ถึงปี&rdquo;</h2>
                <p className="text-[var(--on-ink-soft)] mb-5 leading-relaxed">
                  &ldquo;HorCare เป็นสินค้าตัวแรกที่สามารถสร้างลูกค้าจริงได้ในไม่กี่สัปดาห์ จนมีหอพักจริงในระบบถึง 100 เจ้า ภายในระยะเวลาไม่ถึงปี นี่คือเครื่องพิสูจน์ว่าหากเราสร้างโปรดักต์ที่แก้ Pain Point ได้ถูกจุด ตลาดก็พร้อมที่จะจ่ายให้คุณ&rdquo;
                </p>
                <p className="font-semibold">Palm Sakdidech</p>
                <p className="text-[var(--accent)] text-sm">Founder of Badgainz &amp; HorCare</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
              <div className="md:order-2 relative aspect-video rounded-[20px] overflow-hidden bg-[var(--surface-sunk)]">
                <Image src="/covers/blackace.webp" alt="หน้าเว็บ BlackAce ของ Zack Puttipong" fill sizes="(min-width: 768px) 540px, 100vw" className="object-cover object-top" />
              </div>
              <div className="md:order-1">
                <Stars />
                <h2 className="display text-2xl sm:text-[2rem] leading-tight mb-3">&ldquo;เปลี่ยนสกิลที่มี ให้กลายเป็น Digital Product&rdquo;</h2>
                <p className="text-[var(--on-ink-soft)] mb-5 leading-relaxed">
                  &ldquo;แซ็คเอาสิ่งที่ตัวเองมีมาต่อยอดได้ดีมาก เขาเปลี่ยนทักษะและตัวตนให้กลายเป็น Digital Product ระดับพรีเมียม จนสร้างเว็บโปรไฟล์ (PageSpeed 99/100) ที่ดึงดูดลูกค้าและต่อยอดเป็นธุรกิจส่วนตัวที่สร้างรายได้จริง นี่คือผลลัพธ์ของคนที่ลงมือทำจริง&rdquo;
                </p>
                <p className="font-semibold">Palm Sakdidech</p>
                <p className="text-[var(--accent)] text-sm">พูดถึง Zack Puttipong, Founder of BlackAce</p>
              </div>
            </div>
          </div>
        </section>

        <section className="wrap py-12 sm:py-16 text-center">
          <h2 className="display text-[clamp(1.5rem,3vw,2rem)] leading-tight">อยากดูตัวจริง</h2>
          <p className="mt-2 text-[var(--ink-soft)]">ทั้งธุรกิจและผลงานเปิดดูได้เลย</p>
          <div className="mt-5 flex flex-col sm:flex-row justify-center gap-2.5">
            <Link href="/business" className="btn btn-dark px-7 py-3">
              ดูธุรกิจของผม
            </Link>
            <Link href="/services" className="btn btn-outline px-7 py-3">
              ดูบริการรับทำเว็บ
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
