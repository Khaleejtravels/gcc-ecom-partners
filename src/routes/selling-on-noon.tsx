import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/selling-on-noon")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "How to Sell on Noon UAE — Guide & FAQ | Khaleej Partners" },
      {
        name: "description",
        content:
          "How to sell on Noon in the UAE: account setup, SEO-optimised listings, images, stock management and FBN vs FBP. Answers from a GCC e-commerce agency.",
      },
      { property: "og:title", content: "How to Sell on Noon UAE — Guide & FAQ | Khaleej Partners" },
      {
        property: "og:description",
        content:
          "Account setup, listing optimisation, images and inventory on Noon — answered by GCC marketplace specialists.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://khaleejpartners.online/selling-on-noon" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://khaleejpartners.online/selling-on-noon" }],
  }),
  component: SellingOnNoonPage,
});

const sections = [
  {
    id: "getting-started",
    label: "Getting started",
    faqs: [
      {
        q: "How do I start selling on Noon in the UAE?",
        a: "You register a seller account on Noon's seller portal with your trade licence, VAT details, bank account and contact information. Once Noon verifies your documents, you can list products and choose a fulfilment model. Most new sellers are approved within a few working days if the paperwork is complete. We handle the full setup for our clients — documents, store profile, categories and first listings — so nothing gets bounced back.",
      },
      {
        q: "What documents do I need to open a Noon seller account?",
        a: "Typically: a valid UAE (or KSA) trade licence, a VAT registration certificate (or a declaration if you're below the threshold), an Emirates ID or passport of the owner, and a local bank account or IBAN letter. Requirements vary slightly by country and business type, which is where sellers most often get delayed.",
      },
      {
        q: "Can I sell on Noon without a trade licence?",
        a: "Noon requires a registered business with a trade licence in the UAE or Saudi Arabia for regular selling. If you don't have one yet, we can advise on the fastest licence options new sellers in the region commonly use, and get your account ready in the meantime.",
      },
    ],
  },
  {
    id: "listing-optimisation",
    label: "Listing optimisation",
    faqs: [
      {
        q: "How do I optimise my Noon product listings for search?",
        a: "Noon's search ranks on relevance and performance. The levers that matter most: a keyword-rich title in Noon's exact format (brand + product type + key attribute), complete attribute fields, Arabic and English content, competitive pricing, and strong images. We research the exact terms GCC shoppers type — including Arabic queries — and rewrite titles, bullets and descriptions around them.",
      },
      {
        q: "Why are my Noon listings not getting visibility?",
        a: "The usual causes: missing or wrong attributes (Noon filters rely on them), weak titles, suppressed images, uncompetitive pricing, or poor seller metrics dragging the listing down. A listing audit finds which of these is costing you impressions — it's rarely just one thing.",
      },
      {
        q: "What image requirements does Noon have?",
        a: "Noon requires high-resolution images on a clean background, accurate to the product, with no watermarks or promotional text on the main image. Listings with professional, compliant images convert noticeably better and avoid suppression. Our design team produces Noon-compliant main images, infographics and lifestyle shots for every SKU we manage.",
      },
    ],
  },
  {
    id: "stock-inventory",
    label: "Stock & inventory",
    faqs: [
      {
        q: "What is the difference between FBN and FBP on Noon?",
        a: "FBN (Fulfilled by Noon) means you send stock to Noon's warehouses and Noon stores, picks, packs and ships it — with faster delivery promises and better search placement. FBP (Fulfilled by Partner, also called direct ship) means you keep stock and ship orders yourself. Most growing brands use a mix: fast movers in FBN, long tail in FBP.",
      },
      {
        q: "How do I manage stock on Noon to avoid going out of stock?",
        a: "Going out of stock resets your listing's sales momentum and search position, so prevention matters. You need sales-velocity tracking per SKU, reorder points that account for inbound lead time into Noon warehouses, and seasonal planning around Ramadan, White Friday and National Day events. We run weekly stock reviews for clients and flag replenishment before it's urgent.",
      },
      {
        q: "How do I send inventory to a Noon warehouse (FBN inbound)?",
        a: "You create an ASN (advance shipping notice) in the seller portal, label units to Noon's barcode standards, book a delivery slot and ship. Rejected inbounds usually come down to labelling or packaging errors. We prepare and book FBN shipments for our clients end to end.",
      },
    ],
  },
  {
    id: "growth-support",
    label: "Growth & support",
    faqs: [
      {
        q: "How important is customer support response time on Noon?",
        a: "Very. Slow replies to customer questions and returns hurt your seller rating, which affects visibility and Buy Box-style placement. Our support team answers customer queries in English and Arabic within marketplace targets, every day.",
      },
      {
        q: "When should I run promotions and ads on Noon?",
        a: "The biggest moments are Ramadan/Eid, White Friday (November), UAE National Day and back-to-school. Sponsored product ads work best once the listing itself converts — driving paid traffic to a weak listing just burns budget. We fix the listing first, then scale ads into the seasonal peaks.",
      },
      {
        q: "Can an agency manage my whole Noon account?",
        a: "Yes — that's exactly what we do. Khaleej Partners runs the full account: setup, SEO-optimised listings, images, customer support, stock and inventory planning, and promotions. You keep ownership of the account; we run it day to day and report in plain language.",
      },
    ],
  },
];

function SellingOnNoonPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
            <span className="size-1.5 rounded-full bg-glow" />
            Noon seller guide
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance md:text-6xl">
            How to sell on Noon — answered.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            The questions UAE and GCC sellers ask us most about Noon: opening an account,
            getting listings found, managing stock and growing sales. Straight answers from a
            team that runs Noon stores every day.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur transition hover:border-glow/50 hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 space-y-16">
          {sections.map((section, si) => (
            <div key={section.id} id={section.id} className="scroll-mt-24">
              <Reveal>
                <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                  {section.label}
                </h2>
              </Reveal>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {section.faqs.map((faq, fi) => (
                  <Reveal key={faq.q} delay={si * 60 + fi * 80}>
                    <article className="glass professional-card h-full rounded-lg p-7">
                      <h3 className="font-display text-base font-semibold leading-snug text-white">
                        {faq.q}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/60">{faq.a}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="glass professional-card relative mt-16 overflow-hidden rounded-lg p-10 text-center md:p-14">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-balance md:text-4xl">
              Want your Noon store run for you?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
              Get a free audit of your Noon (or Amazon, Trendyol, Carrefour) store — listings,
              images, stock health and support metrics, with the fixes that matter first.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-lg bg-glow px-7 py-3 font-display text-sm font-semibold text-brand transition hover:brightness-110"
              >
                Get a free store audit
              </Link>
              <Link
                to="/services"
                className="rounded-lg border border-white/15 bg-white/5 px-7 py-3 font-display text-sm font-semibold text-white/80 backdrop-blur transition hover:text-white"
              >
                See our services
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
}
