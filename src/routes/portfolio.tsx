import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/portfolio")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Portfolio — Khaleej Partners" },
      {
        name: "description",
        content:
          "See how Khaleej Partners grows brands across Noon, Amazon, Trendyol and Carrefour — real results from SEO listings, imagery, support and inventory management in the GCC.",
      },
      { property: "og:title", content: "Portfolio — Khaleej Partners" },
      {
        property: "og:description",
        content:
          "Case studies from GCC marketplace management across Noon, Amazon, Trendyol and Carrefour.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

const caseStudies = [
  {
    category: "Electronics brand — KSA",
    platforms: ["NOON", "Amazon"],
    work: ["SEO listings", "A+ content", "Inventory sync"],
    metric: "+182%",
    metricLabel: "Revenue lift in 6 months",
    summary:
      "Rebuilt 240 product listings with keyword-mapped titles and A+ content. Real-time stock sync cut out-of-stock flags by 70%.",
  },
  {
    category: "Home & living brand — UAE",
    platforms: ["NOON", "Carrefour"],
    work: ["Imagery", "Customer support", "SEO listings"],
    metric: "312",
    metricLabel: "Listings optimised",
    summary:
      "Studio photography and lifestyle shots lifted click-through by 34%. Dedicated support desk cut response time to under 4 hours.",
  },
  {
    category: "Fashion label — Qatar & Bahrain",
    platforms: ["Trendyol", "NOON"],
    work: ["Listings", "Promotions", "Support"],
    metric: "+96%",
    metricLabel: "Conversion rate increase",
    summary:
      "Localised Trendyol catalogues and seasonal campaign setup. Returns handling and Arabic-language support improved ratings to 4.8★.",
  },
  {
    category: "Beauty & personal care — GCC",
    platforms: ["Amazon", "NOON", "Carrefour"],
    work: ["SEO listings", "Inventory", "Support"],
    metric: "94",
    metricLabel: "Average SEO score",
    summary:
      "Keyword research across three marketplaces, price-parity management and daily inventory sync kept all 180 SKUs buyable across the region.",
  },
  {
    category: "Sports & outdoor — KSA",
    platforms: ["NOON", "Amazon"],
    work: ["Imagery", "A+ content", "Inventory"],
    metric: "+147%",
    metricLabel: "Repeat purchase rate",
    summary:
      "Video content and comparison A+ modules drove repeat orders. Noon Express onboarding placed the catalogue in next-day delivery slots.",
  },
  {
    category: "Baby & kids — UAE & Oman",
    platforms: ["Carrefour", "NOON", "Trendyol"],
    work: ["Listings", "Support", "Promotions"],
    metric: "4.9★",
    metricLabel: "Marketplace rating",
    summary:
      "Retail-ready Carrefour listings and price-parity management. Bilingual support desk resolved 1,200+ tickets with a 98% satisfaction score.",
  },
];

const platformWork = [
  {
    letter: "N",
    name: "NOON",
    points: ["Flagship storefront setup", "Noon Express onboarding", "Category-leader ranking"],
  },
  {
    letter: "A",
    name: "Amazon GCC",
    points: ["FBA inventory planning", "A+ content & Brand Store", "Multi-marketplace expansion"],
  },
  {
    letter: "T",
    name: "Trendyol",
    points: ["Localised catalogues", "Promotional campaigns", "Regional listings"],
  },
  {
    letter: "C",
    name: "Carrefour",
    points: ["Retail-ready listings", "Price parity", "In-store to online fulfilment"],
  },
];

const results = [
  { value: "40+", label: "Brands managed" },
  { value: "6", label: "GCC countries" },
  { value: "1,800+", label: "Listings optimised" },
  { value: "4.8★", label: "Avg. marketplace rating" },
];

function PortfolioPage() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
            <span className="size-1.5 rounded-full bg-glow" />
            Our work
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance md:text-6xl">
            Real stores. Real results across the GCC.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Four years managing sellers on Noon, Amazon, Trendyol and Carrefour. Here's a
            sample of the work we do — every engagement covers SEO listings, imagery, support
            and inventory, tuned to the Gulf.
          </p>
        </Reveal>
      </section>

      {/* RESULTS STRIP */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="glass professional-card grid gap-8 rounded-lg p-8 sm:grid-cols-2 md:p-10 lg:grid-cols-4">
          {results.map((r, i) => (
            <Reveal key={r.label} delay={i * 100}>
              <div>
                <p className="font-display text-4xl font-semibold text-glow">{r.value}</p>
                <p className="mt-2 text-sm text-white/60">{r.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Selected engagements
          </h2>
          <p className="mt-2 text-white/60">
            Representative case studies across categories and marketplaces.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c, i) => (
            <Reveal key={c.category} delay={i * 80}>
               <div className="glass professional-card flex h-full flex-col rounded-lg p-7 transition hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {c.platforms.map((p) => (
                      <span
                        key={p}
                        className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-glow"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{c.category}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{c.summary}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {c.work.map((w) => (
                    <span key={w} className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">
                      {w}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-end justify-between border-t border-white/10 pt-4">
                  <div>
                    <p className="font-display text-3xl font-semibold text-glow">{c.metric}</p>
                    <p className="text-xs text-white/50">{c.metricLabel}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PLATFORM BREAKDOWN */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            What we do on each marketplace
          </h2>
          <p className="mt-2 text-white/60">
            The same full-service operations, tuned per platform.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {platformWork.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
               <div className="glass professional-card h-full rounded-lg p-6 transition hover:-translate-y-1">
                <div className="grid size-11 place-items-center rounded-xl bg-white/10 font-display text-base font-bold text-glow">
                  {p.letter}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{p.name}</h3>
                <ul className="mt-3 space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-sm text-white/60">
                      <span className="size-1.5 rounded-full bg-glow/70" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <Reveal>
           <div className="glass professional-card relative overflow-hidden rounded-lg p-10 md:p-14">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-glow/25 blur-3xl" />
            <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                  Want results like these for your brand?
                </h2>
                <p className="mt-4 max-w-lg leading-relaxed text-white/70">
                  Tell us your products and the marketplaces you sell on — we'll show you exactly
                  how we'd run your storefronts across the GCC.
                </p>
              </div>
              <div className="md:text-right">
                <Link
                  to="/contact"
                  className="inline-block rounded-full bg-gradient-to-r from-ocean to-glow px-8 py-3.5 font-semibold text-brand shadow-lg shadow-ocean/30 transition hover:scale-[1.03]"
                >
                  Get a free audit
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
}
