import type { Metadata } from "next";
import { Anuphan, Noto_Sans_Thai, Sriracha, Geist_Mono } from "next/font/google";
import "./globals.css";

const anuphan = Anuphan({
  weight: ["500", "600", "700"],
  subsets: ["latin", "thai"],
  variable: "--font-anuphan",
});

const notoThai = Noto_Sans_Thai({
  weight: ["400", "500", "600"],
  subsets: ["latin", "thai"],
  variable: "--font-noto-thai",
});

const sriracha = Sriracha({
  weight: "400",
  subsets: ["latin", "thai"],
  variable: "--font-sriracha",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Badgainz | Palm Sakdidech — สินค้าดิจิทัล รับทำเว็บ และเรื่องราวของผม",
  description: "เรียนรู้การสร้าง digital products แบบมือโปร เริ่มต้นสร้างรายได้ออนไลน์ด้วยระบบ Automation จัดการทุกอย่างอัตโนมัติ สำหรับวัยรุ่นยุคใหม่",
  icons: { icon: "/avatar-yellow.png", apple: "/avatar-yellow.png" },
  keywords: ["เริ่มต้นสร้างรายได้ออนไลน์", "สร้าง digital products", "หาเงินออนไลน์", "รายได้เสริม", "automation business"],
  openGraph: {
    title: "Badgainz | เริ่มต้นสร้างรายได้ออนไลน์ ด้วย Digital Products",
    description: "เรียนรู้การสร้าง digital products แบบมือโปร เริ่มต้นสร้างรายได้ออนไลน์ด้วยระบบ Automation",
    images: [{
      url: '/badgainz-meta.jpg',
      width: 1200,
      height: 630,
      alt: 'Badgainz - เริ่มต้นสร้างธุรกิจออนไลน์'
    }],
    locale: 'th_TH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Badgainz | เริ่มต้นสร้างรายได้ออนไลน์ ด้วย Digital Products",
    description: "เรียนรู้การสร้าง digital products แบบมือโปร เริ่มต้นสร้างรายได้ออนไลน์ด้วยระบบ Automation",
    images: ['/badgainz-meta.jpg'],
  },
  verification: {
    google: 'is3R3b0jDhti7UKit2pi4GkxO2OFCQ0xwdqHeUWvlws',
  },
};

import AnalyticsTracker from "@/components/AnalyticsTracker";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${anuphan.variable} ${notoThai.variable} ${sriracha.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Suspense fallback={null}>
          <AnalyticsTracker />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
