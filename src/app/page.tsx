import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Check, Plus, Lock } from "lucide-react";
import { FaGithub, FaInstagram, FaLine } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBubble from "@/components/profile/HeroBubble";
import HeroActions from "@/components/profile/HeroActions";
import FreeEbookForm from "@/components/profile/FreeEbookForm";
import { formatThaiDate } from "@/lib/format";
import { getAllPosts } from "@/lib/markdown";
import { BUSINESSES, WORKS } from "@/lib/ventures";

const LINE_URL = "https://line.me/ti/p/33-eCQHkas";

const SOCIALS = [
  { name: "Instagram", handle: "@real.palmm", href: "https://www.instagram.com/real.palmm/", icon: FaInstagram },
  { name: "LINE", handle: "คุยงาน / สอบถาม", href: LINE_URL, icon: FaLine },
  { name: "GitHub", handle: "Palmmy21", href: "https://github.com/Palmmy21", icon: FaGithub },
];

// Real assets only: each card links to the thing it shows
const FLOAT_CARDS = [
  { src: "/first-step-ebook.jpg", alt: "ปก E-book Class A: First Step in Journey", title: "Class A: First Step", meta: "E-book · ฿259", href: "/checkout", ratio: "aspect-[4/5]", position: "object-top" },
  { src: "/covers/horcare.webp", alt: "หน้าเว็บ HorCare ระบบจัดการหอพัก", title: "HorCare", meta: "ใช้งานจริง 100+ หอพัก", href: "/business#horcare", ratio: "aspect-[4/3]", position: "object-left-top" },
  { src: "/ebook-cover-free.jpg", alt: "ปก E-book ฟรี Pain to Cash", title: "Pain to Cash", meta: "E-book · ฟรี", href: "#free", ratio: "aspect-[4/5]", position: "object-top" },
  { src: "/covers/botkit.webp", alt: "หน้าเว็บ BotKit OA รับทำ LINE OA Chatbot", title: "BotKit OA", meta: "LINE OA Chatbot", href: "/business#botkit", ratio: "aspect-[4/3]", position: "object-left-top" },
];

const FLOAT_PLACEMENT = [
  { className: "left-[max(1.5rem,calc(50%-41rem))] top-[6.5rem] w-52", tilt: "-6deg", delay: "160ms" },
  { className: "left-[max(1rem,calc(50%-42rem))] top-[27.5rem] w-52", tilt: "4deg", delay: "280ms" },
  { className: "right-[max(1.5rem,calc(50%-41rem))] top-[7.5rem] w-52", tilt: "5deg", delay: "220ms" },
  { className: "right-[max(1rem,calc(50%-42rem))] top-[28rem] w-52", tilt: "-4deg", delay: "340ms" },
];

const BELIEFS = [
  { title: "ไม่ยกให้เป็นเรื่องดวง", body: "งานไหนเวิร์กผมอยากรู้ว่าเพราะอะไร งานไหนไม่เวิร์กก็อยากรู้เหมือนกัน คำว่าโชคดีหรือโชคร้ายไม่ได้ช่วยให้รอบหน้าทำได้ดีขึ้น" },
  { title: "ดูจากสิ่งที่วัดได้", body: "มีคนใช้กี่ราย กลับมาใช้ต่อไหม ประหยัดเวลาได้จริงหรือเปล่า ตัวเลขพวกนี้มักบอกอะไรได้ตรงกว่าความรู้สึกของผมเอง" },
  { title: "แชร์เท่าที่ผ่านมาจริง", body: "ผมไม่ได้เก่งกว่าคนอ่าน แค่ลองไปก่อน เจออะไรมาก็เล่าตามนั้น สินค้าที่ขายอยู่ที่นี่ก็คือประสบการณ์ที่ผมอยากส่งต่อ" },
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

function SectionHeading({ title, note, action, onInk }: { title: string; note?: string; action?: React.ReactNode; onInk?: boolean }) {
  return (
    <div className="flex items-end justify-between gap-4 mb-6">
      <div>
        <h2 className="display text-[clamp(1.75rem,3.4vw,2.5rem)] leading-tight">{title}</h2>
        {note && <p className={`text-base mt-1.5 ${onInk ? "text-[var(--on-ink-soft)]" : "text-[var(--ink-soft)]"}`}>{note}</p>}
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

function FloatCard({ card, sizes }: { card: (typeof FLOAT_CARDS)[number]; sizes: string }) {
  return (
    <>
      <span className={`relative block ${card.ratio} bg-[var(--surface-sunk)] border-b-[1.5px] border-[var(--ink)]`}>
        <Image src={card.src} alt={card.alt} fill sizes={sizes} className={`object-cover ${card.position}`} />
      </span>
      <span className="block px-3.5 py-2.5">
        <span className="block font-[family-name:var(--font-display)] font-semibold text-[15px] leading-tight truncate">{card.title}</span>
        <span className="block text-[13px] text-[var(--ink-soft)] truncate">{card.meta}</span>
      </span>
    </>
  );
}

export default function Home() {
  const posts = getAllPosts();
  const [leadPost, ...otherPosts] = posts.slice(0, 4);

  return (
    <div className="profile-page min-h-screen flex flex-col">
      <Navbar />

      {/* HERO: the logo's yellow ground, with the portrait speaking */}
      <div className="under-nav relative bg-[var(--accent)] pb-24 sm:pb-28 overflow-x-clip">
        <div aria-hidden className="screentone hero-tone absolute inset-0" />

        <div className="hidden min-[1280px]:block">
          {FLOAT_CARDS.map((card, i) => (
            <Link
              key={card.title}
              href={card.href}
              className={`float-card !absolute ${FLOAT_PLACEMENT[i].className}`}
              style={{ "--tilt": FLOAT_PLACEMENT[i].tilt, "--delay": FLOAT_PLACEMENT[i].delay } as React.CSSProperties}
            >
              <FloatCard card={card} sizes="240px" />
            </Link>
          ))}
        </div>

        <header className="relative max-w-[42rem] mx-auto px-4 pt-10 sm:pt-14 flex flex-col items-center text-center">
          <HeroBubble />
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 mt-5">
            <Image
              src="/avatar-ink.png"
              alt="Palm Sakdidech ในลายเส้นมังงะ"
              fill
              loading="eager"
              sizes="(min-width: 640px) 208px, 160px"
              className="object-contain"
            />
          </div>
          <h1 className="display mt-2 text-[clamp(2.25rem,6vw,3.5rem)] leading-[1.1] tracking-[-0.01em]">Palm Sakdidech</h1>
          <p className="mt-2 mb-7 text-[var(--ink)] text-base sm:text-lg text-pretty max-w-[34rem]">
            ผมทำ HorCare กับ BotKit รับทำเว็บ และเอาประสบการณ์จากการทำของจริงมาแชร์ที่นี่
          </p>
          <HeroActions lineUrl={LINE_URL} />
        </header>

        {/* Below the wide layout the same cards become a swipeable rail */}
        <ul className="min-[1280px]:hidden relative mt-10 flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:justify-center">
          {FLOAT_CARDS.map((card, i) => (
            <li key={card.title} className="snap-center shrink-0 w-44">
              <Link
                href={card.href}
                className="float-card"
                style={{ "--tilt": i % 2 ? "2deg" : "-2deg", "--delay": `${160 + i * 80}ms` } as React.CSSProperties}
              >
                <FloatCard card={{ ...card, ratio: "aspect-[4/3]" }} sizes="176px" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* PROFILE FRAME */}
      <section aria-label="เกี่ยวกับ Palm" className="wrap relative -mt-16 sm:-mt-20">
        <div className="frame p-5 sm:p-7 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-6 lg:gap-8">
          <div className="min-w-0">
            <div className="flex items-center gap-4">
              <span className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full overflow-hidden border-[1.5px] border-[var(--ink)] bg-[var(--accent)]">
                <Image src="/avatar-yellow.png" alt="" fill sizes="80px" className="object-cover" />
              </span>
              <div className="min-w-0">
                <h2 className="display text-2xl sm:text-[1.75rem] leading-tight tracking-[0.02em]">BADGAINZ</h2>
                <a
                  href="https://www.instagram.com/real.palmm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-[var(--ink-soft)] underline underline-offset-4 decoration-[var(--line-strong)] hover:text-[var(--ink)] hover:decoration-[var(--ink)]"
                >
                  @real.palmm
                </a>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-[var(--ink-soft)] max-w-[60ch]">
              <p>ผมไม่ใช่คนเก่ง และก็ไม่ได้โดดเด่นกว่าใคร แต่ผมไม่เชื่อเรื่องดวง ผมเชื่อในสิ่งที่วัดค่าได้ ทำแล้วมีตัวเลขให้ดู ก็จะรู้ว่าควรไปต่อหรือควรแก้</p>
              <p>
                ผมไม่ได้สอนใครทำ Digital Product ผมแค่แชร์ประสบการณ์ ตอนนี้ผมทำ{" "}
                <Link href="/business#horcare" className="font-medium text-[var(--ink)] underline decoration-[var(--accent)] decoration-2 underline-offset-4 hover:decoration-[var(--ink)]">
                  HorCare
                </Link>{" "}
                ที่มีหอพักใช้งานจริงกว่า 100 แห่ง กับ{" "}
                <Link href="/business#botkit" className="font-medium text-[var(--ink)] underline decoration-[var(--accent)] decoration-2 underline-offset-4 hover:decoration-[var(--ink)]">
                  BotKit
                </Link>{" "}
                ที่ทำ LINE OA Chatbot ให้ร้านค้า
              </p>
            </div>

            <dl className="mt-5 inline-grid grid-cols-3 border border-[var(--line-strong)] rounded-[14px] divide-x divide-[var(--line-strong)]">
              <div className="px-4 py-2 text-center">
                <dd className="display text-lg leading-tight tabular-nums">100+</dd>
                <dt className="text-[13px] text-[var(--ink-soft)]">หอพักบน HorCare</dt>
              </div>
              <div className="px-4 py-2 text-center">
                <dd className="display text-lg leading-tight tabular-nums">{posts.length}</dd>
                <dt className="text-[13px] text-[var(--ink-soft)]">โพสต์</dt>
              </div>
              <div className="px-4 py-2 text-center">
                <dd className="display text-lg leading-tight tabular-nums">24 ชม.</dd>
                <dt className="text-[13px] text-[var(--ink-soft)]">ตอบงานจ้าง</dt>
              </div>
            </dl>
          </div>

          <div className="min-w-0 flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-3">
              {BUSINESSES.map((b) => (
                <Link
                  key={b.id}
                  href={`/business#${b.id}`}
                  aria-label={`ดูธุรกิจ ${b.name}`}
                  className="relative block aspect-[4/3] rounded-[16px] overflow-hidden border-[1.5px] border-[var(--ink)] bg-[var(--surface-sunk)]"
                >
                  <Image src={b.cover} alt={b.coverAlt} fill sizes="(min-width: 1024px) 270px, 50vw" className="object-cover object-left-top" />
                </Link>
              ))}
            </div>
            <ul className="flex flex-wrap gap-2">
              {SOCIALS.map(({ name, handle, href, icon: Icon }) => (
                <li key={name}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="chip hover:border-[var(--ink)] hover:text-[var(--ink)] transition-colors" title={handle}>
                    <Icon className="w-3.5 h-3.5" aria-hidden /> {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <main className="flex-1 w-full pt-14 sm:pt-20 flex flex-col gap-16 sm:gap-20">
        {/* PRODUCTS */}
        <section id="products" className="section-anchor wrap">
          <SectionHeading title="สินค้าดิจิทัล" note="ซีรีส์ Class A คือประสบการณ์ที่ผมอยากแชร์และส่งมอบ" />

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-5">
            <article className="card p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-[210px_minmax(0,1fr)] gap-5 sm:gap-6">
              <div className="relative w-44 sm:w-full mx-auto sm:mx-0 self-start aspect-[1414/2000] rounded-[12px] overflow-hidden border-[1.5px] border-[var(--ink)] bg-[var(--surface-sunk)]">
                <Image src="/first-step-ebook.jpg" alt="ปก E-book Class A: First Step in Journey" fill sizes="210px" className="object-cover" />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2.5">
                  <span className="chip">E-book</span>
                </div>
                <h3 className="display text-xl sm:text-2xl leading-snug">Class A: First Step in Journey</h3>
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

                <div className="mt-auto pt-5 flex flex-wrap items-end justify-between gap-4">
                  <p className="display text-[2.25rem] tabular-nums leading-none">฿259</p>
                  <Link href="/checkout" className="btn btn-primary px-7 py-3 text-base">
                    สั่งซื้อเลย
                  </Link>
                </div>
              </div>
            </article>

            <aside aria-label="สินค้าที่กำลังจะมา" className="flex flex-col gap-3">
              {UPCOMING.map((p) => (
                <article key={p.title} className="card p-5 flex-1 flex flex-col">
                  <span className="chip self-start mb-3">
                    <Lock className="w-3.5 h-3.5" strokeWidth={2} aria-hidden /> เร็วๆ นี้
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] font-semibold text-lg leading-snug">{p.title}</h3>
                  <p className="mt-1 text-sm text-[var(--ink-soft)] leading-relaxed flex-1">{p.desc}</p>
                  <p className="mt-3 text-sm text-[var(--ink-soft)]">
                    เริ่มต้น <span className="display text-lg text-[var(--ink)] tabular-nums">฿{p.price}</span>
                  </p>
                </article>
              ))}
            </aside>
          </div>

          {/* FREE E-BOOK */}
          <div id="free" className="section-anchor relative mt-5 rounded-[var(--radius-card)] overflow-hidden bg-[var(--accent)] border-[1.5px] border-[var(--ink)]">
            <div aria-hidden className="screentone absolute inset-0 [mask-image:linear-gradient(100deg,transparent_45%,#000)]" />
            <div className="relative grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto] gap-6 p-6 sm:p-8 items-center">
              <div>
                <h2 className="display text-[1.5rem] sm:text-[1.75rem] leading-tight">ยังไม่พร้อมซื้อ? เริ่มจาก E-book ฟรีก่อน</h2>
                <p className="mt-2 mb-5 max-w-[52ch] leading-relaxed">
                  &ldquo;Pain to Cash&rdquo; ไกด์เริ่มต้นสร้างรายได้ออนไลน์ ใส่อีเมลแล้วดาวน์โหลดได้ทันที
                </p>
                <FreeEbookForm />
              </div>
              <div className="relative hidden sm:block w-32 aspect-[1414/2000] rotate-[4deg] rounded-[10px] overflow-hidden border-[1.5px] border-[var(--ink)] shadow-[var(--shadow-raised)]">
                <Image src="/ebook-cover-free.jpg" alt="ปก E-book ฟรี Pain to Cash" fill sizes="128px" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

                {/* WHAT I BELIEVE */}
        <section aria-labelledby="beliefs-title" className="wrap grid grid-cols-1 md:grid-cols-[300px_minmax(0,1fr)] gap-6 md:gap-10 items-center">
          <div className="relative aspect-[4/3] md:aspect-[4/5] rounded-[20px] overflow-hidden border-[1.5px] border-[var(--ink)] bg-[var(--surface-sunk)]">
            <Image src="/profile.jpg" alt="Palm Sakdidech ยืนมองทะเล" fill sizes="(min-width: 768px) 300px, 100vw" className="object-cover object-[center_25%]" />
          </div>
          <div>
            <h2 id="beliefs-title" className="font-[family-name:var(--font-hand)] text-[clamp(1.75rem,3.6vw,2.5rem)] leading-snug">
              ผมไม่ใช่คนเก่ง แค่ไม่เชื่อเรื่องดวง
            </h2>
            <ul className="mt-4 flex flex-col divide-y divide-[var(--line-strong)]">
              {BELIEFS.map((b) => (
                <li key={b.title} className="py-4">
                  <h3 className="display text-lg">{b.title}</h3>
                  <p className="mt-1 text-[var(--ink-soft)] leading-relaxed max-w-[60ch]">{b.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* BUSINESSES */}
        <section id="business" className="section-anchor wrap">
          <SectionHeading title="ธุรกิจของผม" note="สองอย่างที่ผมทำอยู่ตอนนี้" action={<MoreLink href="/business">ดูรายละเอียด</MoreLink>} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {BUSINESSES.map((b) => (
              <article key={b.id} className="card card-link relative overflow-hidden flex flex-col">
                <div className="relative aspect-[16/10] bg-[var(--surface-sunk)] border-b border-[var(--line)]">
                  <Image src={b.cover} alt={b.coverAlt} fill sizes="(min-width: 768px) 540px, 100vw" className="object-cover object-top" />
                </div>
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <p className="text-sm text-[var(--ink-soft)]">{b.tagline}</p>
                  <h3 className="display text-2xl mt-0.5">
                    <Link href={`/business#${b.id}`} className="after:absolute after:inset-0">
                      {b.name}
                    </Link>
                  </h3>
                  <p className="mt-1.5 text-[15px] text-[var(--ink-soft)] leading-relaxed flex-1">{b.summary}</p>
                  <p className="chip chip-accent self-start mt-4">{b.linkMeta}</p>
                </div>
              </article>
            ))}
          </div>
          <Link href="/business" className="sm:hidden btn btn-outline w-full py-3 mt-4">
            ดูธุรกิจทั้งหมด
          </Link>
        </section>

        {/* SERVICES */}
        <section id="services" className="section-anchor wrap">
          <SectionHeading title="รับทำเว็บและระบบ" note="ประเมินราคาให้ก่อนเริ่มงานเสมอ" action={<MoreLink href="/services">ดูรายละเอียด</MoreLink>} />
          <ul className="flex flex-col gap-3">
            {SERVICES.map((s) => (
              <li key={s.name}>
                <article
                  className={`card p-5 sm:p-6 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_auto] gap-x-8 gap-y-4 md:items-center ${
                    s.featured ? "!bg-[var(--accent-soft)] !border-[var(--ink)] border-[1.5px]" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="display text-xl">{s.name}</h3>
                      {s.featured && <span className="chip chip-accent">แนะนำ</span>}
                    </div>
                    <p className="text-[15px] text-[var(--ink-soft)]">{s.label}</p>
                    <p className="mt-1.5 text-sm text-[var(--ink-soft)] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" aria-hidden /> ใช้เวลา {s.duration}
                    </p>
                  </div>

                  <div>
                    <ul className="flex flex-col gap-1.5 text-[15px]">
                      {s.features.map((f) => (
                        <li key={f} className="flex gap-2">
                          <Check className="w-4 h-4 mt-1 shrink-0" strokeWidth={2.5} aria-hidden />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-2 text-sm text-[var(--ink-soft)]">เหมาะกับ {s.forWho}</p>
                  </div>

                  <div className="flex md:flex-col items-center md:items-end justify-between gap-3">
                    <p className="whitespace-nowrap">
                      <span className="text-sm text-[var(--ink-soft)]">เริ่มต้น </span>
                      <span className="display text-2xl tabular-nums">฿{s.price}</span>
                    </p>
                    <Link href="/services#contact" className={`btn px-5 py-2.5 whitespace-nowrap ${s.featured ? "btn-dark" : "btn-outline"}`}>
                      ขอใบเสนอราคา
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>

        {/* WORK: an ink spread, like a full black manga panel */}
        <section id="work" className="section-anchor relative bg-[var(--ink)] text-[var(--on-ink)] py-16 sm:py-20 overflow-hidden">
          <div aria-hidden className="screentone absolute inset-x-0 top-0 h-48 [--tone:#ffffff] [--tone-opacity:0.1] [mask-image:linear-gradient(to_bottom,#000,transparent)]" />
          <div className="wrap relative">
            <SectionHeading title="ผลงาน" note="เว็บที่ผมทำและใช้งานจริง ภาพคือหน้าเว็บปัจจุบัน" onInk />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {WORKS.map((w) => (
                <article key={w.id} className="flex flex-col">
                  <a
                    href={w.url}
                    {...(w.url.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    aria-label={`เปิดเว็บ ${w.name}`}
                    className="relative block aspect-[16/10] rounded-[20px] overflow-hidden bg-[var(--surface-sunk)]"
                  >
                    <Image src={w.cover} alt={w.coverAlt} fill sizes="(min-width: 768px) 540px, 100vw" className="object-cover object-top" />
                  </a>
                  <p className="mt-4 text-sm text-[var(--on-ink-soft)]">{w.meta}</p>
                  <h3 className="display text-2xl mt-0.5">{w.name}</h3>
                  <p className="mt-1.5 text-[15px] text-[var(--on-ink-soft)] leading-relaxed flex-1">{w.desc}</p>
                </article>
              ))}
            </div>

            <Link href="/services" className="btn btn-primary px-6 py-3 mt-8">
              อยากได้เว็บแบบนี้ <ArrowUpRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
        </section>

        {/* POSTS */}
        <section id="posts" className="section-anchor wrap">
          <SectionHeading title="โพสต์ล่าสุด" note="ประสบการณ์และบทเรียนจากการทำธุรกิจจริง" action={<MoreLink href="/blog">ดูทั้งหมด</MoreLink>} />
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-5">
            {leadPost && (
              <article className="card card-link p-6 sm:p-7 relative flex flex-col bg-[var(--surface)]">
                <div className="flex items-center gap-3 mb-5">
                  <span className="relative w-10 h-10 rounded-full overflow-hidden bg-[var(--accent)] border-[1.5px] border-[var(--ink)] shrink-0">
                    <Image src="/avatar-yellow.png" alt="" fill sizes="40px" className="object-cover" />
                  </span>
                  <div className="leading-tight">
                    <p className="font-medium text-[15px]">Palm Sakdidech</p>
                    <p className="text-[13px] text-[var(--ink-faint)]">
                      <time dateTime={leadPost.date}>{formatThaiDate(leadPost.date)}</time>
                    </p>
                  </div>
                </div>
                <h3 className="display text-2xl sm:text-[1.75rem] leading-snug">
                  <Link href={`/blog/${leadPost.slug}`} className="after:absolute after:inset-0 after:rounded-[inherit]">
                    {leadPost.title}
                  </Link>
                </h3>
                <p className="mt-2 text-[var(--ink-soft)] leading-relaxed line-clamp-4">{leadPost.excerpt}</p>
              </article>
            )}

            <ol className="card divide-y divide-[var(--line)] overflow-hidden">
              {otherPosts.map((post) => (
                <li key={post.slug}>
                  <article className="relative p-5 hover:bg-[var(--accent-soft)] transition-colors">
                    <p className="text-[13px] text-[var(--ink-faint)]">
                      <time dateTime={post.date}>{formatThaiDate(post.date)}</time>
                    </p>
                    <h3 className="font-[family-name:var(--font-display)] font-semibold text-[17px] leading-snug mt-0.5">
                      <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-[var(--ink-soft)] leading-relaxed line-clamp-1">{post.excerpt}</p>
                  </article>
                </li>
              ))}
            </ol>
          </div>
          <Link href="/blog" className="sm:hidden btn btn-outline w-full py-3 mt-4">
            ดูโพสต์ทั้งหมด
          </Link>
        </section>

        {/* FAQ + LAST DOOR */}
        <section id="faq" className="section-anchor wrap pb-16 sm:pb-20 grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-5 items-start">
          <div>
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
          </div>

          <aside className="relative lg:mt-[4.25rem] rounded-[var(--radius-card)] overflow-hidden bg-[var(--accent)] border-[1.5px] border-[var(--ink)] p-6">
            <div aria-hidden className="screentone absolute inset-0 [mask-image:linear-gradient(200deg,#000,transparent_60%)]" />
            <div className="relative">
              <p className="font-[family-name:var(--font-hand)] text-2xl leading-snug">ยังมีคำถาม? ทักมาคุยกันได้เลย</p>
              <p className="mt-1.5 text-[15px]">ตอบกลับงานจ้างภายใน 24 ชม.</p>
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-dark w-full px-5 py-3 mt-5">
                <FaLine className="w-5 h-5" aria-hidden /> คุยทาง LINE
              </a>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  );
}
