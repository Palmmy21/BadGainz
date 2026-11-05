# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences, all confirmed by the owner (2026-10-29):

- **People curious about online income**: students, office workers and young Thais who want to read what actually happened when someone tried it. They arrive from Instagram or LINE, usually on a phone.
- **Clients hiring web/system work**: creators, SMEs and founders who want a landing page, an e-commerce site or a custom web app/SaaS built.
- **Followers of Palm as a person**: people who follow his story, experience and posts and want to keep up with what he builds and writes.

## Product Purpose

BADGAINZ is the personal portfolio and storefront of Palm Sakdidech. One place where visitors can see who he is, his businesses (HorCare and BotKit OA) and client work, buy his digital products (the Class A e-book series), hire him for web/SaaS work, and read his posts. The owner wants it to work like his own social media profile. Success means a first-time visitor knows within seconds what he offers, then buys, downloads the free e-book, or contacts him.

## Positioning

Palm does not teach; he shares his experience, and the products he sells are that experience. In his words: he is not especially talented and stands out from no one, but he does not believe in luck, only in what can be measured. His businesses are HorCare (dormitory-management SaaS, 100+ dormitories) and BotKit OA (LINE OA chatbots for shops, https://botkit-oa.vercel.app/). Never describe him as a teacher, coach or course seller, and never call anyone his student.

## Operating Context

- Traffic comes mostly from Instagram (@real.palmm) and LINE. Contact happens on LINE (https://line.me/ti/p/33-eCQHkas) and through the inquiry form at /services.
- Payments run through Stripe Checkout (/checkout). The free e-book is gated by email (/api/subscribe → /free/download).
- Posts are Markdown files in `content/blog/`.

## Capabilities and Constraints

- Next.js 16 App Router, Tailwind v4, deployed on Vercel. Thai-first copy (`lang="th"`).
- Products: "Class A: First Step in Journey" e-book (฿259, no promotional or struck-through price, live). "Content to Cash" and "The Closer System" are listed as coming soon.
- Service tiers (from /services): Starter ฿1,990–3,990, Business ฿4,990–9,990, Custom System ฿9,990–29,990.
- An A/B test (`hero_headline_v1`) runs on the homepage headline.

## Brand Commitments

- Name: BADGAINZ. Founder: Palm Sakdidech.
- Logo and avatar: a hand-inked black-and-white manga portrait. One version sits on a signal-yellow ground (`public/avatar-yellow.png`), the other is ink-only with a transparent background (`public/avatar-ink.png`). The owner made this the identity the UI must match.
- The owner asked for a profile/marketplace feel like fastwork.co: a profile header and product/service cards with prices. In-page tabs were tried and removed at the owner's request (2026-11-05): one navbar only.

## Evidence on Hand

- Real: HorCare (https://horcare-landing.vercel.app/, 100+ dormitories), BotKit OA, with live-site screenshots in `public/covers/`. BlackAce, a personal-brand site built for Zack Puttipong (https://blackace-five.vercel.app/), with his testimonial on /proof. The Badgainz platform itself. Six blog posts. The e-book covers (`public/first-step-ebook.jpg`, `public/ebook-cover-free.jpg`). `public/profile.jpg`.
- The student testimonials (คุณนก, คุณสมชาย, คุณเอิร์ท, คุณแพรว) were removed on 2026-11-05 because they were not verifiable. Do not bring them back without confirmation.
- `SalesNotification` and `LiveStripeDashboard` generate random fake purchase events. They are not evidence and must not be presented as real activity.

## Product Principles

1. Show the work before the pitch. Shipped products and real numbers come first.
2. One profile, three doors: buy, hire, follow. Each is reachable from the first screen.
3. The identity is Palm himself, not a faceless "academy".
4. Never invent proof: no fabricated reviews, sales counters or scarcity.
