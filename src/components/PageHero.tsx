import type { ReactNode } from "react";

// Yellow masthead shared by the inner pages. Render it straight after <Navbar />,
// as a sibling: the nav has to stay a child of the page or it stops being sticky.
export default function PageHero({
  title,
  subtitle,
  children,
  align = "center",
  narrow = false,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  align?: "center" | "left";
  narrow?: boolean;
}) {
  const centered = align === "center";

  return (
    <header className="under-nav relative bg-[var(--accent)] overflow-hidden">
      <div aria-hidden className="screentone hero-tone absolute inset-0" />
      <div className={`relative mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-12 sm:pb-16 ${narrow ? "max-w-3xl" : "max-w-4xl"} ${centered ? "text-center" : ""}`}>
        <h1 className="display text-[clamp(2.1rem,5.5vw,3.5rem)] leading-[1.15] tracking-[-0.01em]">{title}</h1>
        {subtitle && (
          <p className={`mt-4 text-base sm:text-lg leading-relaxed text-pretty max-w-[42rem] ${centered ? "mx-auto" : ""}`}>{subtitle}</p>
        )}
        {children}
      </div>
    </header>
  );
}
