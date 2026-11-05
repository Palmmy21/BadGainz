import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { formatThaiDate } from "@/lib/format";
import { getPostBySlug, getPostSlugs } from "@/lib/markdown";

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
  } catch {
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
  } catch {
    notFound();
  }

  return (
    <div className="profile-page min-h-screen flex flex-col">
      <Navbar />
      <PageHero title={post.title} align="left" narrow>
        <div className="mt-5 flex items-center gap-3">
          <span className="relative w-10 h-10 rounded-full overflow-hidden bg-[var(--surface)] border-[1.5px] border-[var(--ink)] shrink-0">
            <Image src="/avatar-yellow.png" alt="" fill sizes="40px" className="object-cover" />
          </span>
          <p className="text-sm leading-tight">
            <span className="block font-medium">Palm Sakdidech</span>
            <time dateTime={post.date}>{formatThaiDate(post.date)}</time>
          </p>
        </div>
      </PageHero>

      <main className="flex-1 w-full max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 mb-6 text-sm font-medium text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden /> กลับไปหน้าบทความ
        </Link>

        <article className="article">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </article>

        {/* Article Footer CTA */}
        <div className="relative mt-14 rounded-[var(--radius-card)] overflow-hidden bg-[var(--accent)] border-[1.5px] border-[var(--ink)] p-7 sm:p-9 text-center">
          <div aria-hidden className="screentone absolute inset-0 [mask-image:linear-gradient(100deg,transparent_50%,#000)]" />
          <div className="relative">
            <h2 className="display text-2xl leading-snug mb-5">เริ่มสร้างรายได้จากไอเดียของคุณแล้วหรือยัง?</h2>
            <Link href="/#products" className="btn btn-dark px-7 py-3.5">
              ก๊อปปี้ระบบของเราไปใช้เลย
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
