import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Khaleej Partners" },
      {
        name: "description",
        content:
          "Khaleej Partners is a GCC e-commerce agency with 4+ years of regional experience, managing sellers on Noon, Amazon, Trendyol and Carrefour.",
      },
      { property: "og:title", content: "About Us — Khaleej Partners" },
      {
        property: "og:description",
        content:
          "Meet the GCC e-commerce specialists behind Khaleej Partners.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: "◆",
    title: "Regional expertise",
    text: "Four years selling into KSA, UAE, Qatar, Bahrain, Oman and Kuwait. We know the seasons, the shoppers and the platforms.",
  },
  {
    icon: "✦",
    title: "A real team, not a freelancer",
    text: "Listings, design, support and inventory specialists working together on your account — every day.",
  },
  {
    icon: "◈",
    title: "Transparent reporting",
    text: "You always know what's happening: sales, stock, support metrics and next steps, in plain language.",
  },
];

const stats = [
  { value: "4+", label: "Years in the GCC market" },
  { value: "4", label: "Marketplaces managed" },
  { value: "6", label: "GCC countries covered" },
  { value: "100%", label: "Focus on your growth" },
];

function AboutPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
            <span className="size-1.5 rounded-full bg-glow" />
            About us
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance md:text-6xl">
            GCC e-commerce, run by people who know the Gulf.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Khaleej Partners was founded after four years working inside the GCC e-commerce
            market. We saw brands struggle to manage Noon, Amazon, Trendyol and Carrefour at
            once — so we built the team that does it for them.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="glass professional-card grid gap-8 rounded-lg p-8 sm:grid-cols-2 md:p-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div>
                <p className="font-display text-4xl font-semibold text-glow">{s.value}</p>
                <p className="mt-2 text-sm text-white/60">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Why brands choose us
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
               <div className="glass professional-card h-full rounded-lg p-7 transition hover:-translate-y-1">
                <div className="grid size-10 place-items-center rounded-full bg-ocean/20 text-glow">{v.icon}</div>
                <h3 className="mt-4 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <Reveal>
           <div className="glass professional-card relative overflow-hidden rounded-lg p-10 md:p-14">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-glow/25 blur-3xl" />
            <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                  Let's grow your brand in the Gulf.
                </h2>
                <p className="mt-4 max-w-lg leading-relaxed text-white/70">
                  Tell us about your products and we'll show you exactly how we'd run your
                  storefronts across the region.
                </p>
              </div>
              <div className="md:text-right">
                <Link
                  to="/contact"
                  className="inline-block rounded-full bg-gradient-to-r from-ocean to-glow px-8 py-3.5 font-semibold text-brand shadow-lg shadow-ocean/30 transition hover:scale-[1.03]"
                >
                  Talk to our team
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
}
