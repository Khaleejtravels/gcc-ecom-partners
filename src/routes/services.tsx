import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Our Services — Khaleej Partners" },
      {
        name: "description",
        content:
          "SEO-optimised listings, product imagery, customer support and stock & inventory management for Noon, Amazon, Trendyol and Carrefour sellers in the GCC.",
      },
      { property: "og:title", content: "Our Services — Khaleej Partners" },
      {
        property: "og:description",
        content:
          "Full-service marketplace management: listings, imagery, support and inventory across the GCC.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: "◆",
    title: "SEO-optimised listings",
    text: "We research the exact keywords GCC buyers use on each platform, then build titles, bullet points, attributes and A+ content that rank and convert.",
    points: ["Keyword research per marketplace", "Arabic & English copywriting", "A+ / brand content", "Category & attribute optimisation"],
  },
  {
    icon: "✦",
    title: "Product images & content",
    text: "Scroll-stopping visuals built for marketplace rules and Gulf shoppers — from clean packshots to lifestyle scenes and short-form video.",
    points: ["Studio product photography", "Lifestyle & infographic images", "Short-form product video", "Marketplace-ready formatting"],
  },
  {
    icon: "◈",
    title: "Customer support",
    text: "We handle your buyers end to end — questions, orders, returns and reviews — in Arabic and English, protecting your ratings on every platform.",
    points: ["Pre & post-sale support", "Returns & refunds handling", "Review & rating management", "Arabic & English coverage"],
  },
  {
    icon: "▤",
    title: "Stock & inventory management",
    text: "Real-time stock sync, demand forecasting and fulfilment routing across all four marketplaces, so you never oversell or run dry in peak season.",
    points: ["Real-time inventory sync", "Demand forecasting", "FBA / FBN / fulfilment routing", "Account health monitoring"],
  },
];

function ServicesPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
            <span className="size-1.5 rounded-full bg-glow" />
            Our services
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance md:text-6xl">
            Every part of your marketplace operation, handled.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            One team managing your listings, images, customers and stock across Noon, Amazon,
            Trendyol and Carrefour — so nothing slips and everything sells.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 100}>
              <div className="glass professional-card h-full rounded-lg p-8 transition hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="grid size-11 place-items-center rounded-full bg-ocean/20 text-lg text-glow">
                    {s.icon}
                  </div>
                  <h2 className="font-display text-2xl font-semibold">{s.title}</h2>
                </div>
                <p className="mt-5 leading-relaxed text-white/60">{s.text}</p>
                <ul className="mt-6 space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-white/75">
                      <span className="size-1.5 shrink-0 rounded-full bg-glow" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <Reveal>
           <div className="glass professional-card relative overflow-hidden rounded-lg p-10 text-center md:p-14">
            <div className="pointer-events-none absolute -top-16 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-glow/25 blur-3xl" />
            <h2 className="relative font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Not sure where to start?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-white/70">
              Get a free audit of your current listings and a growth plan for every marketplace
              you sell on — or want to sell on.
            </p>
            <Link
              to="/contact"
              className="relative mt-8 inline-block rounded-full bg-gradient-to-r from-ocean to-glow px-8 py-3.5 font-semibold text-brand shadow-lg shadow-ocean/30 transition hover:scale-[1.03]"
            >
              Get a free audit
            </Link>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
}
