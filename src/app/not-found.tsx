import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="profile-page relative flex-1 min-h-screen !bg-[var(--accent)] grid place-items-center px-4 py-12 text-center overflow-hidden">
      <div aria-hidden className="screentone hero-tone absolute inset-0" />
      <div className="relative flex flex-col items-center">
        <div className="bubble px-6 py-3">
          <p className="font-[family-name:var(--font-hand)] text-2xl">หาหน้านี้ไม่เจอครับ</p>
        </div>
        <div className="relative w-40 h-40 mt-5">
          <Image src="/avatar-ink.png" alt="" fill sizes="160px" className="object-contain" />
        </div>
        <h1 className="display text-5xl mt-2">404</h1>
        <Link href="/" className="btn btn-dark px-7 py-3 mt-6">
          กลับไปหน้าแรก
        </Link>
      </div>
    </main>
  );
}
