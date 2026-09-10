import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Khaleej Partners — GCC E-commerce Agency" },
      {
        name: "description",
        content:
          "Khaleej Partners manages your store on Noon, Amazon, Trendyol and Carrefour — SEO-optimised listings, images, customer support and inventory across the GCC.",
      },
      { property: "og:title", content: "Khaleej Partners — GCC E-commerce Agency" },
      {
        property: "og:description",
        content:
          "Full-service marketplace management across Noon, Amazon, Trendyol and Carrefour for the GCC.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const platforms = [
  {
    letter: "A",
    name: "Amazon GCC",
    text: "Multi-marketplace expansion with FBA inventory and A+ content across KSA, UAE and Qatar.",
  },
  {
    letter: "N",
    name: "NOON",
    text: "Flagship storefronts, Noon Express onboarding and category-leader ranking.",
  },
  {
    letter: "T",
    name: "Trendyol",
    text: "Regional catalogues, localised listings and promotional campaign setup.",
  },
  {
    letter: "C",
    name: "Carrefour",
    text: "Retail-ready listings, price parity and in-store to online fulfilment.",
  },
];

const services = [
  {
    icon: "◆",
    title: "SEO-optimised listings",
    text: "Keyword research, titles, bullet points and A+ detail tuned per marketplace and per region.",
    tags: ["Keyword mapping", "A+ content"],
  },
  {
    icon: "✦",
    title: "Imagery & content",
    text: "High-conversion product photos, lifestyle shots and video that lift click-through and conversion.",
    tags: ["Studio photos", "Video"],
  },
  {
    icon: "◈",
    title: "Support & inventory",
    text: "Full customer care, returns handling and real-time stock sync across every channel.",
    tags: ["Customer support", "Inventory sync"],
  },
];

const process = [
  { step: "01", title: "Audit the opportunity", text: "We review catalogue quality, search visibility, stock health and account performance across each marketplace." },
  { step: "02", title: "Build the growth system", text: "Your team receives a prioritised plan for listings, content, fulfilment and customer experience." },
  { step: "03", title: "Operate and improve", text: "We execute daily, monitor performance and keep every channel aligned as demand changes." },
];

const outcomes = [
  { value: "6", label: "GCC markets covered" },
  { value: "4", label: "Major platforms managed" },
  { value: "4+", label: "Years of regional experience" },
  { value: "1", label: "Accountable operating team" },
];

function HomePage() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-20 md:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="anim-rise inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur" style={{ animationDelay: "0.1s" }}>
              <span className="size-1.5 rounded-full bg-glow" />
              E-commerce agency for the GCC
            </span>
            <h1 className="anim-rise mt-6 font-display text-5xl leading-[1.05] font-semibold tracking-tight text-balance md:text-6xl" style={{ animationDelay: "0.2s" }}>
              We run your store across every GCC marketplace.
            </h1>
            <p className="anim-rise mt-6 max-w-xl text-lg leading-relaxed text-white/70" style={{ animationDelay: "0.3s" }}>
              From NOON to Carrefour, our team of 4+ year GCC specialists manages SEO
              listings, imagery, inventory and customer support — so you scale without the chaos.
            </p>
            <div className="anim-rise mt-8 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.4s" }}>
              <Link
                to="/contact"
                className="rounded-full bg-gradient-to-r from-ocean to-glow px-7 py-3.5 font-semibold text-brand shadow-lg shadow-ocean/30 transition hover:scale-[1.03]"
              >
                Get a free audit
              </Link>
              <Link
                to="/services"
                className="rounded-full border border-white/20 px-7 py-3.5 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                See our services
              </Link>
            </div>
            <div className="anim-rise mt-10 flex gap-8" style={{ animationDelay: "0.5s" }}>
              <div>
                <div className="font-display text-3xl font-semibold">4+</div>
                <div className="text-sm text-white/60">Years in GCC</div>
              </div>
              <div className="border-l border-white/15 pl-8">
                <div className="font-display text-3xl font-semibold">4</div>
                <div className="text-sm text-white/60">Marketplaces</div>
              </div>
              <div className="border-l border-white/15 pl-8">
                <div className="font-display text-3xl font-semibold">100%</div>
                <div className="text-sm text-white/60">Listing coverage</div>
              </div>
            </div>
          </div>

          <div className="anim-rise relative" style={{ animationDelay: "0.2s" }}>
              <div className="glass professional-card rounded-2xl p-5">
              <div className="flex items-center justify-between px-2 pb-4">
                <span className="text-sm font-medium text-white/80">Live marketplace dashboard</span>
                <span className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-red-400/80" />
                  <span className="size-2.5 rounded-full bg-amber-400/80" />
                  <span className="size-2.5 rounded-full bg-emerald-400/80" />
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/5 p-4">
                  <div className="text-xs text-white/50">Revenue · 30d</div>
                  <div className="font-display text-2xl font-semibold text-white">$48,290</div>
                  <div className="mt-1 text-xs font-medium text-emerald-300">+18.4% vs last month</div>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <div className="text-xs text-white/50">Active listings</div>
                  <div className="font-display text-2xl font-semibold text-white">312</div>
                  <div className="mt-1 text-xs font-medium text-glow">SEO score 94</div>
                </div>
              </div>
              <div className="relative mt-3 h-28 overflow-hidden rounded-2xl bg-white/5 p-4">
                <div className="absolute top-4 right-4 flex size-16 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[10px] font-semibold text-white/70 backdrop-blur">
                  92%
                </div>
                <div className="flex h-full items-end gap-1.5 pt-6">
                  {[40, 55, 48, 68, 78, 62, 88, 96].map((h, i) => (
                    <div
                      key={i}
                      className={`w-full rounded-t ${i < 5 ? `bg-ocean/${50 + i * 10}` : i === 5 ? "bg-glow/70" : i === 6 ? "bg-glow/80" : "bg-glow"}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-3 flex items-center gap-3 rounded-2xl bg-white/5 p-3">
                <div className="grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-ocean to-glow font-display text-sm font-bold text-brand">
                  N
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-medium">NOON · Riyadh store</div>
                  <div className="text-xs text-white/50">Inventory synced · 6,240 units</div>
                </div>
                <span className="ml-auto rounded-full bg-emerald-400/15 px-2.5 py-1 text-[10px] font-semibold text-emerald-300">
                  Healthy
                </span>
              </div>
            </div>
            <div className="glass anim-floaty absolute -bottom-6 -left-6 hidden rounded-2xl px-5 py-4 shadow-xl md:block">
              <div className="text-xs text-white/60">Support tickets resolved</div>
              <div className="font-display text-xl font-semibold text-glow">1,204 this quarter</div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM MARQUEE STRIP */}
      <section className="border-y border-white/10 bg-white/[0.03] py-5">
        <div className="relative overflow-hidden">
          <div className="anim-marquee flex w-max items-center gap-12 pr-12">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center gap-12" aria-hidden={copy === 1}>
                {["NOON", "AMAZON", "TRENDYOL", "CARREFOUR"].map((p) => (
                  <span key={p} className="flex items-center gap-12">
                    <span className="font-display text-xl font-semibold tracking-[0.2em] text-white/50">{p}</span>
                    <span className="size-1.5 rounded-full bg-glow/50" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Four marketplaces. One partner.
          </h2>
          <p className="mt-2 text-white/60">
            We manage your presence on every major GCC platform.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {platforms.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
               <div className="glass professional-card h-full rounded-lg p-6 transition hover:-translate-y-1">
                <div className="grid size-11 place-items-center rounded-xl bg-white/10 font-display text-base font-bold text-glow">
                  {p.letter}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/60">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Everything managed, one partner.
          </h2>
          <p className="mt-2 text-white/60">
            Full-stack operations so your products sell while you build the brand.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
               <div className="glass professional-card h-full rounded-lg p-7 transition hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-full bg-ocean/20 text-glow">{s.icon}</div>
                  <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/60">{s.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROOF */}
      <section className="border-y border-white/10 bg-ink/45">
        <div className="mx-auto grid max-w-7xl gap-px px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((item, i) => (
            <Reveal key={item.label} delay={i * 80}>
              <div className="border-l border-glow/25 px-6 py-3">
                <p className="font-display text-4xl font-semibold text-glow">{item.value}</p>
                <p className="mt-2 text-sm text-white/60">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-glow">How we work</p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
                From scattered storefronts to one clear operation.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/60">
              A practical operating rhythm designed for brands entering or scaling across the Gulf.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {process.map((item, i) => (
            <Reveal key={item.step} delay={i * 100}>
              <div className="glass professional-card h-full rounded-lg p-7 transition hover:-translate-y-1">
                <span className="font-display text-sm font-semibold text-glow">{item.step}</span>
                <h3 className="mt-8 font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY / PROCESS CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl p-10 md:p-14">
            <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-glow/25 blur-3xl" />
            <div className="relative grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                  Built for the GCC, by GCC specialists.
                </h2>
                <p className="mt-4 max-w-lg leading-relaxed text-white/70">
                  Four years navigating regional marketplaces means we know the buyers, the
                  platforms and the compliance. You get a full team, not a freelancer.
                </p>
                <Link
                  to="/contact"
                  className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 font-semibold text-brand transition hover:scale-[1.03]"
                >
                  Start your growth plan
                </Link>
              </div>
              <div className="space-y-3">
                {[
                  ["Multi-marketplace launch", "Week 1–2"],
                  ["SEO & content build", "Week 3"],
                  ["Ongoing operations", "Always-on"],
                ].map(([label, time]) => (
                  <div key={label} className="flex items-center justify-between rounded-2xl bg-white/5 px-5 py-4">
                    <span className="text-sm text-white/70">{label}</span>
                    <span className="font-display font-semibold text-glow">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
}
