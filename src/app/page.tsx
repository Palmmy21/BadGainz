import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Check, Plus, Lock, Building2, FileText, MessageCircle } from "lucide-react";
import { FaGithub, FaInstagram, FaLine } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBubble from "@/components/profile/HeroBubble";
import HeroActions from "@/components/profile/HeroActions";
import TabStrip from "@/components/profile/TabStrip";
import FreeEbookForm from "@/components/profile/FreeEbookForm";
import { getAllPosts } from "@/lib/markdown";

const LINE_URL = "https://line.me/ti/p/33-eCQHkas";

const SOCIALS = [
  { name: "Instagram", handle: "@palm.sakdidech", href: "https://www.instagram.com/palm.sakdidech/", icon: FaInstagram },
  { name: "LINE", handle: "คุยงาน / สอบถาม", href: LINE_URL, icon: FaLine },
  { name: "GitHub", handle: "Palmmy21", href: "https://github.com/Palmmy21", icon: FaGithub },
];

const TABS = [
  { id: "products", label: "สินค้า" },
  { id: "services", label: "บริการ" },
  { id: "work", label: "ผลงาน" },
  { id: "posts", label: "โพสต์" },
  { id: "faq", label: "คำถาม" },
];

const BONUSES = [
  { title: "Framework หา Pain Point", desc: "หาจุดเจ็บของลูกค้าที่พร้อมจ่ายเงินให้คุณแก้", value: "1,290" },
  { title: "Framework ปิดการขาย 1 หน้า", desc: "โครงเซลล์เพจสั้นที่ปิดการขายได้โดยไม่ต้องตอบแชท", value: "1,590" },
  { title: "Hook Template 30 แบบ", desc: "พาดหัวหยุดนิ้ว 5–6 หมวด หยิบไปใช้ได้ทันที", value: "590" },
];

const UPCOMING = [
  { title: "Class A: Content to Cash", desc: "ทำคอนเทนต์ให้ยอดไลก์กลายเป็นยอดขาย โดยไม่ต้องยิงแอด", price: "699" },
  { title: "Class A: The Closer System", desc: "ระบบหลังบ้านอัตโนมัติ พร้อม Prompt และสคริปต์ปิดการขาย", price: "1,190" },
];

const SERVICES = [
  {
    name: "Starter",
    label: "Landing Page / เว็บธุรกิจ",
    price: "1,990",
    duration: "3–7 วัน",
    features: ["ออกแบบ 1–3 หน้า", "Responsive ทุกขนาดจอ", "SEO พื้นฐาน + Contact Form"],
    forWho: "Creator / Freelancer / ธุรกิจเริ่มต้น",
  },
  {
    name: "Business",
    label: "เว็บธุรกิจ / E-Commerce",
    price: "4,990",
    duration: "2–4 สัปดาห์",
    features: ["ระบบตะกร้า / ชำระเงิน", "Admin Dashboard", "SEO ครบชุด + Blog, support 3 เดือน"],
    forWho: "SME / ร้านค้าออนไลน์ / แบรนด์",
    featured: true,
  },
  {
    name: "Custom System",
    label: "Web App / ระบบ Custom",
    price: "9,990",
    duration: "1–3 เดือน",
    features: ["Login, Database + API", "Payment Gateway, Real-time", "Maintenance 6 เดือน"],
    forWho: "Startup / ธุรกิจที่ต้องการระบบเฉพาะ",
  },
];

const FAQ = [
  { q: "ไม่มีพื้นฐานเลย เริ่มจาก E-book ได้ไหม?", a: "ได้ครับ เนื้อหาเขียนให้คนเริ่มจากศูนย์ทำตามได้ทีละขั้น ตั้งแต่หา Pain Point เช็ค Demand สร้าง จนถึงขาย" },
  { q: "ต้องใช้เงินลงทุนเพิ่มไหม?", a: "แทบไม่ต้องครับ เน้นเครื่องมือฟรีที่มีอยู่แล้ว และการตลาดที่ไม่ต้องยิงแอด" },
  { q: "ซื้อแล้วอ่านได้นานแค่ไหน?", a: "ตลอดไปครับ ไม่มีวันหมดอายุ กลับมาทบทวนได้ทุกเมื่อ" },
  { q: "จ้างทำเว็บ เริ่มยังไง?", a: "ทัก LINE หรือกรอกฟอร์มในหน้าบริการ ผมจะคุยรายละเอียด แล้วประเมินราคาและเวลาให้ก่อนเริ่มงาน ตอบกลับภายใน 24 ชม." },
];

function formatThaiDate(date: string) {
  return new Date(date).toLocaleDateString("th-TH", { day: "numeric", month: "short", year: "numeric" });
}

function SectionHeading({ title, note, action }: { title: string; note?: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-end justify-between gap-4 mb-4">
      <div>
        <h2 className="font-[family-name:var(--font-display)] font-bold text-[1.375rem] sm:text-2xl leading-tight">{title}</h2>
        {note && <p className="text-[var(--ink-soft)] text-[15px] mt-1">{note}</p>}
      </div>
      {action}
    </div>
  );
}

function MoreLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="hidden sm:inline-flex items-center gap-1 text-[15px] font-medium text-[var(--ink-soft)] hover:text-[var(--ink)] underline-offset-4 hover:underline"
    >
      {children} <ArrowUpRight className="w-4 h-4" aria-hidden />
    </Link>
  );
}

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="profile-page min-h-screen flex flex-col">
      <Navbar />

      {/* COVER + PROFILE CARD */}
      <header className="relative">
        <div className="relative h-36 sm:h-52 bg-[var(--accent)] overflow-hidden">
          <div aria-hidden className="cover-pattern absolute inset-0" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 -mt-16 sm:-mt-24">
          <div className="card p-5 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-[auto_minmax(0,1fr)] gap-x-8 gap-y-4">
              <div className="relative -mt-20 sm:-mt-24 md:-mt-28 w-32 sm:w-40 md:w-48 aspect-square rounded-full bg-[var(--surface)] ring-[6px] ring-[var(--surface)] shadow-[var(--shadow-raised)] overflow-hidden">
                <Image
                  src="/avatar-yellow.png"
                  alt="Palm Sakdidech ในลายเส้นมังงะ"
                  fill
                  priority
                  sizes="(min-width: 768px) 192px, 160px"
                  className="object-cover"
                />
              </div>

              <div className="min-w-0 flex flex-col gap-4">
                <div>
                  <h1 className="font-[family-name:var(--font-display)] font-bold text-[clamp(1.9rem,4vw,2.6rem)] leading-[1.1] tracking-[-0.01em]">
                    Palm Sakdidech
                  </h1>
                  <p className="mt-1.5 text-[var(--ink-soft)] text-base sm:text-lg text-pretty">
                    ผู้ก่อตั้ง BADGAINZ และ HorCare · สร้างเว็บและระบบ SaaS · สอนทำ Digital Product จากของที่ทำขายจริง
                  </p>
                </div>

                <ul className="flex flex-wrap gap-2" aria-label="ข้อมูลโปรไฟล์">
                  <li className="chip chip-accent">
                    <Building2 className="w-3.5 h-3.5" strokeWidth={2} aria-hidden /> HorCare ใช้งานจริง 100+ หอพัก
                  </li>
                  <li className="chip">
                    <FileText className="w-3.5 h-3.5" strokeWidth={2} aria-hidden /> <span className="tabular-nums">{posts.length}</span> โพสต์
                  </li>
                  <li className="chip">
                    <MessageCircle className="w-3.5 h-3.5" strokeWidth={2} aria-hidden /> ตอบกลับงานจ้างภายใน 24 ชม.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[var(--line)] grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-6 items-center">
              <div className="md:pl-4 lg:pl-3">
                <HeroBubble />
              </div>
              <HeroActions lineUrl={LINE_URL} />
            </div>
          </div>
        </div>
      </header>

      <div className="mt-6">
        <TabStrip tabs={TABS} />
      </div>

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)] gap-6 lg:gap-8">
        {/* SIDEBAR: ABOUT + CONTACT */}
        <aside id="about" className="order-2 lg:order-1 scroll-mt-36 lg:sticky lg:top-36 self-start flex flex-col gap-4">
          <div className="card overflow-hidden">
            <div className="relative aspect-[4/3] bg-[var(--surface-sunk)]">
              <Image src="/profile.jpg" alt="Palm Sakdidech" fill sizes="(min-width: 1024px) 300px, 100vw" className="object-cover object-[center_25%]" />
            </div>
            <div className="p-5">
              <h2 className="font-[family-name:var(--font-display)] font-semibold text-lg mb-2">เกี่ยวกับผม</h2>
              <div className="space-y-3 text-[15px] leading-relaxed text-[var(--ink-soft)]">
                <p>
                  ผมสร้าง{" "}
                  <a
                    href="https://horcare-landing.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[var(--ink)] underline decoration-[var(--accent)] decoration-2 underline-offset-4 hover:decoration-[var(--ink)]"
                  >
                    HorCare
                  </a>{" "}
                  ระบบบริหารหอพักแบบ SaaS ที่มีหอพักใช้งานจริงกว่า 100 แห่ง เริ่มจากศูนย์ และพิสูจน์แล้วว่าซอฟต์แวร์กับ Digital Product สร้างรายได้ระยะยาวได้จริง
                </p>
                <p>ที่นี่คือที่ที่ผมแชร์ประสบการณ์ ขายสินค้าที่ทำเอง และรับทำเว็บให้คนที่อยากมีระบบแบบนี้บ้าง</p>
              </div>
            </div>
          </div>

          <div className="card p-5">
            <h2 className="font-[family-name:var(--font-display)] font-semibold text-lg mb-3">ติดตาม / ติดต่อ</h2>
            <ul className="flex flex-col gap-1">
              {SOCIALS.map(({ name, handle, href, icon: Icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-[12px] -mx-2 px-2 py-2 hover:bg-[var(--ground)] transition-colors"
                  >
                    <span className="w-10 h-10 grid place-items-center rounded-full bg-[var(--surface-sunk)] border border-[var(--line)]">
                      <Icon className="w-[18px] h-[18px]" aria-hidden />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block font-medium leading-tight">{name}</span>
                      <span className="block text-sm text-[var(--ink-soft)] truncate">{handle}</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[var(--ink-faint)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--ink)]" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="order-1 lg:order-2 flex flex-col gap-12 min-w-0">
          {/* PRODUCTS */}
          <section id="products" className="scroll-mt-36">
            <SectionHeading title="สินค้าดิจิทัล" note="ซีรีส์ Class A: เรียนสร้างรายได้จาก Digital Product ตั้งแต่ศูนย์" />

            <article className="card p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-[200px_minmax(0,1fr)] gap-5 sm:gap-6">
              <div className="relative w-44 sm:w-full mx-auto sm:mx-0 self-start aspect-[1414/2000] rounded-[10px] overflow-hidden bg-[var(--surface-sunk)] shadow-[var(--shadow-card)]">
                <Image src="/first-step-ebook.jpg" alt="ปก E-book Class A: First Step in Journey" fill sizes="200px" className="object-cover" />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2.5">
                  <span className="chip">E-book</span>
                  <span className="chip chip-accent">ราคาพิเศษ 100 ท่านแรก</span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-xl sm:text-2xl leading-snug">Class A: First Step in Journey</h3>
                <p className="mt-1.5 text-[var(--ink-soft)] leading-relaxed">
                  หาเงินก้อนแรกจาก Digital Product ครบทั้งเส้นทาง: หา Pain Point › เช็ค Demand › สร้าง › ขาย
                </p>

                <p className="mt-5 mb-1 text-sm font-semibold text-[var(--ink-soft)]">แถมในเล่ม</p>
                <ul className="flex flex-col divide-y divide-[var(--line)]">
                  {BONUSES.map((b) => (
                    <li key={b.title} className="flex items-start gap-3 py-2.5">
                      <Plus className="w-4 h-4 mt-1 shrink-0 text-[var(--ink-faint)]" aria-hidden />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium leading-snug">{b.title}</p>
                        <p className="text-sm text-[var(--ink-soft)]">{b.desc}</p>
                      </div>
                      <span className="text-sm text-[var(--ink-soft)] whitespace-nowrap tabular-nums">มูลค่า ฿{b.value}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-5 border-t border-[var(--line)] flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="text-sm text-[var(--ink-faint)]">
                      ราคาปกติ <span className="line-through tabular-nums">฿590</span>
                    </p>
                    <p className="font-[family-name:var(--font-display)] font-bold text-[2rem] tabular-nums leading-none mt-1">฿99</p>
                  </div>
                  <Link href="/checkout" className="btn btn-primary px-7 py-3 text-base">
                    สั่งซื้อเลย
                  </Link>
                </div>
              </div>
            </article>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {UPCOMING.map((p) => (
                <article key={p.title} className="card p-5 flex flex-col">
                  <span className="chip self-start mb-3">
                    <Lock className="w-3.5 h-3.5" strokeWidth={2} aria-hidden /> เร็วๆ นี้
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] font-semibold text-lg leading-snug">{p.title}</h3>
                  <p className="mt-1 text-sm text-[var(--ink-soft)] leading-relaxed flex-1">{p.desc}</p>
                  <p className="mt-4 text-sm text-[var(--ink-soft)]">
                    เริ่มต้น <span className="font-[family-name:var(--font-display)] font-bold text-lg text-[var(--ink)] tabular-nums">฿{p.price}</span>
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* FREE E-BOOK */}
          <section id="free" className="scroll-mt-36 card overflow-hidden bg-[var(--accent-soft)] border-[#f6e08a]">
            <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto] gap-6 p-6 sm:p-8 items-center">
              <div>
                <h2 className="font-[family-name:var(--font-display)] font-bold text-[1.375rem] sm:text-2xl leading-tight">
                  ยังไม่พร้อมซื้อ? เริ่มจาก E-book ฟรีก่อน
                </h2>
                <p className="mt-2 mb-5 max-w-[52ch] leading-relaxed text-[#5a4a10]">
                  &ldquo;Pain to Cash&rdquo; ไกด์เริ่มต้นสร้างรายได้ออนไลน์ ใส่อีเมลแล้วดาวน์โหลดได้ทันที
                </p>
                <FreeEbookForm />
              </div>
              <div className="relative hidden sm:block w-32 aspect-[1414/2000] rotate-[4deg] rounded-[8px] overflow-hidden shadow-[var(--shadow-raised)]">
                <Image src="/ebook-cover-free.jpg" alt="ปก E-book ฟรี Pain to Cash" fill sizes="128px" className="object-cover" />
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section id="services" className="scroll-mt-36">
            <SectionHeading title="รับทำเว็บและระบบ" note="ประเมินราคาให้ก่อนเริ่มงานเสมอ" action={<MoreLink href="/services">ดูรายละเอียด</MoreLink>} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SERVICES.map((s) => (
                <article
                  key={s.name}
                  className={`card flex flex-col ${s.featured ? "border-[var(--ink)] border-[1.5px] shadow-[var(--shadow-raised)]" : ""}`}
                >
                  <div className="p-5 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-[family-name:var(--font-display)] font-bold text-lg">{s.name}</p>
                      {s.featured && <span className="chip chip-accent">ยอดนิยม</span>}
                    </div>
                    <p className="text-sm text-[var(--ink-soft)]">{s.label}</p>
                    <p className="mt-2 text-sm text-[var(--ink-soft)] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" aria-hidden /> ใช้เวลา {s.duration}
                    </p>
                    <ul className="mt-4 flex flex-col gap-2 text-[15px]">
                      {s.features.map((f) => (
                        <li key={f} className="flex gap-2">
                          <Check className="w-4 h-4 mt-1 shrink-0 text-[var(--accent-ink)]" strokeWidth={2.25} aria-hidden />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm text-[var(--ink-soft)]">เหมาะกับ {s.forWho}</p>
                  </div>
                  <div className="border-t border-[var(--line)] p-5">
                    <p>
                      <span className="text-sm text-[var(--ink-soft)]">เริ่มต้น </span>
                      <span className="font-[family-name:var(--font-display)] font-bold text-2xl tabular-nums">฿{s.price}</span>
                    </p>
                    <Link href="/services#contact" className={`btn w-full mt-4 py-2.5 ${s.featured ? "btn-primary" : "btn-outline"}`}>
                      ขอใบเสนอราคา
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* WORK */}
          <section id="work" className="scroll-mt-36">
            <SectionHeading title="ผลงาน" note="ระบบและเว็บที่ใช้งานจริง" />
            <article className="card card-link overflow-hidden">
              <a href="https://horcare-landing.vercel.app/" target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative aspect-[1919/943] bg-[var(--surface-sunk)] border-b border-[var(--line)] overflow-hidden">
                  <Image
                    src="/horcare-preview.png"
                    alt="หน้าเว็บ HorCare ระบบบริหารหอพัก"
                    fill
                    sizes="(min-width: 1024px) 760px, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
                  <div>
                    <p className="text-sm text-[var(--ink-soft)]">SaaS · Fullstack · ผลงานของผมเอง</p>
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-xl sm:text-2xl mt-1">HorCare: ระบบบริหารหอพัก</h3>
                    <p className="mt-1.5 text-[var(--ink-soft)] max-w-[60ch] leading-relaxed">
                      หอพักใช้งานจริงกว่า 100 แห่งในเวลาไม่ถึงปี ช่วยเจ้าของหอลดเวลาเก็บค่าเช่าได้กว่า 80%
                    </p>
                  </div>
                  <span className="btn btn-outline px-5 py-2.5 shrink-0 group-hover:border-[var(--ink)]">
                    เปิดเว็บ <ArrowUpRight className="w-4 h-4" aria-hidden />
                  </span>
                </div>
              </a>
            </article>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <article className="card p-5 flex flex-col">
                <p className="text-sm text-[var(--ink-soft)]">Personal Branding · Landing Page</p>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-lg mt-1">BlackAce</h3>
                <p className="mt-1 text-[15px] text-[var(--ink-soft)] leading-relaxed flex-1">
                  เว็บโปรไฟล์ของ Zack Puttipong ลูกศิษย์ที่เปลี่ยนสกิลเป็น Digital Product ได้ PageSpeed 99/100
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <a href="https://blackace-five.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline px-4 py-2 text-sm">
                    เปิดเว็บ <ArrowUpRight className="w-4 h-4" aria-hidden />
                  </a>
                  <Link href="/proof" className="px-3 py-2 text-sm font-medium text-[var(--ink-soft)] hover:text-[var(--ink)] underline underline-offset-4">
                    อ่านเรื่องของแซ็ค
                  </Link>
                </div>
              </article>
              <article className="card p-5 flex flex-col">
                <p className="text-sm text-[var(--ink-soft)]">Landing Page · E-Commerce</p>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-lg mt-1">Badgainz</h3>
                <p className="mt-1 text-[15px] text-[var(--ink-soft)] leading-relaxed flex-1">
                  เว็บที่คุณกำลังดูอยู่ ขาย Digital Product, รับชำระผ่าน Stripe และส่ง E-book ทางอีเมลอัตโนมัติ
                </p>
                <div className="mt-4">
                  <Link href="/services" className="btn btn-outline px-4 py-2 text-sm">
                    อยากได้แบบนี้ <ArrowUpRight className="w-4 h-4" aria-hidden />
                  </Link>
                </div>
              </article>
            </div>
          </section>

          {/* POSTS FEED */}
          <section id="posts" className="scroll-mt-36">
            <SectionHeading title="โพสต์ล่าสุด" note="ประสบการณ์และบทเรียนจากการทำธุรกิจจริง" action={<MoreLink href="/blog">ดูทั้งหมด</MoreLink>} />
            <ol className="flex flex-col gap-3">
              {posts.slice(0, 4).map((post) => (
                <li key={post.slug}>
                  <article className="card card-link p-5 relative">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="relative w-9 h-9 rounded-full overflow-hidden bg-[var(--accent)] ring-1 ring-[var(--line)] shrink-0">
                        <Image src="/avatar-yellow.png" alt="" fill sizes="36px" className="object-cover" />
                      </span>
                      <div className="leading-tight">
                        <p className="font-medium text-[15px]">Palm Sakdidech</p>
                        <p className="text-[13px] text-[var(--ink-faint)]">
                          <time dateTime={post.date}>{formatThaiDate(post.date)}</time>
                        </p>
                      </div>
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] font-semibold text-lg leading-snug text-pretty">
                      <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 after:rounded-[inherit]">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-[15px] text-[var(--ink-soft)] leading-relaxed line-clamp-2">{post.excerpt}</p>
                  </article>
                </li>
              ))}
            </ol>
            <Link href="/blog" className="sm:hidden btn btn-outline w-full py-3 mt-4">
              ดูโพสต์ทั้งหมด
            </Link>
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-36">
            <SectionHeading title="คำถามที่พบบ่อย" />
            <div className="card divide-y divide-[var(--line)]">
              {FAQ.map((item) => (
                <details key={item.q} className="group">
                  <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden flex items-center justify-between gap-4 px-5 py-4 font-[family-name:var(--font-display)] font-semibold text-base sm:text-[17px]">
                    {item.q}
                    <Plus className="w-5 h-5 shrink-0 text-[var(--ink-soft)] transition-transform duration-300 group-open:rotate-45" aria-hidden />
                  </summary>
                  <p className="px-5 pb-5 -mt-1 text-[15px] text-[var(--ink-soft)] leading-relaxed max-w-[65ch]">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
