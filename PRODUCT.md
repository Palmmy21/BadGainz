# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences, all confirmed by the owner (2026-10-29):

- **Beginners who want online income**: students, office workers and young Thais who are curious about selling digital products but don't know where to start. They arrive from Instagram or LINE, usually on a phone.
- **Clients hiring web/system work**: creators, SMEs and founders who want a landing page, an e-commerce site or a custom web app/SaaS built.
- **Followers of Palm as a person**: people who follow his story, experience and posts and want to keep up with what he builds and writes.

## Product Purpose

BADGAINZ is the personal portfolio and storefront of Palm Sakdidech. One place where visitors can see who he is and what he has built, buy his digital products (the Class A e-book series), hire him for web/SaaS work, and read his posts. The owner wants it to work like his own social media profile. Success means a first-time visitor knows within seconds what he offers, then buys, downloads the free e-book, or contacts him.

## Positioning

Palm builds the products he teaches about. HorCare, his dormitory-management SaaS, has 100+ dormitories using it. Both the teaching and the client work come from someone who has shipped and sold real software, not from a pure course seller.

## Operating Context

- Traffic comes mostly from Instagram (@palm.sakdidech) and LINE. Contact happens on LINE (https://line.me/ti/p/33-eCQHkas) and through the inquiry form at /services.
- Payments run through Stripe Checkout (/checkout). The free e-book is gated by email (/api/subscribe → /free/download).
- Posts are Markdown files in `content/blog/`.

## Capabilities and Constraints

- Next.js 16 App Router, Tailwind v4, deployed on Vercel. Thai-first copy (`lang="th"`).
- Products: "Class A: First Step in Journey" e-book (฿99, regular price ฿590, live). "Content to Cash" and "The Closer System" are listed as coming soon.
- Service tiers (from /services): Starter ฿1,990–3,990, Business ฿4,990–9,990, Custom System ฿9,990–29,990.
- An A/B test (`hero_headline_v1`) runs on the homepage headline.

## Brand Commitments

- Name: BADGAINZ. Founder: Palm Sakdidech.
- Logo and avatar: a hand-inked black-and-white manga portrait. One version sits on a signal-yellow ground (`public/avatar-yellow.png`), the other is ink-only with a transparent background (`public/avatar-ink.png`). The owner made this the identity the UI must match.
- The owner asked for a profile/marketplace feel like fastwork.co: a profile header, tabs, and product/service cards with prices.

## Evidence on Hand

- Real: HorCare (https://horcare-landing.vercel.app/, `public/horcare-preview.png`, 100+ dormitories). BlackAce, a personal-brand site built for Zack Puttipong (https://blackace-five.vercel.app/), with his testimonial on /proof. The Badgainz platform itself. Six blog posts. The e-book covers (`public/first-step-ebook.jpg`, `public/ebook-cover-free.jpg`). `public/profile.jpg`.
- Owner said the other testimonials (คุณนก, คุณสมชาย, คุณเอิร์ท, คุณแพรว and their result figures) are only partly real. New surfaces must not show them until they are confirmed.
- `SalesNotification` and `LiveStripeDashboard` generate random fake purchase events. They are not evidence and must not be presented as real activity.

## Product Principles

1. Show the work before the pitch. Shipped products and real numbers come first.
2. One profile, three doors: buy, hire, follow. Each is reachable from the first screen.
3. The identity is Palm himself, not a faceless "academy".
4. Never invent proof: no fabricated reviews, sales counters or scarcity.
