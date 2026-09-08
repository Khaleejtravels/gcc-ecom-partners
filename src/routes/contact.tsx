import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Khaleej Partners" },
      {
        name: "description",
        content:
          "Get in touch with Khaleej Partners for a free audit and a growth plan for your Noon, Amazon, Trendyol and Carrefour stores in the GCC.",
      },
      { property: "og:title", content: "Contact Us — Khaleej Partners" },
      {
        property: "og:description",
        content: "Book a free consultation with our GCC marketplace specialists.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { label: "Email", value: "hello@khaleejpartners.com", href: "mailto:hello@khaleejpartners.com" },
  { label: "Phone", value: "+971 50 000 0000", href: "tel:+971500000000" },
  { label: "WhatsApp", value: "+971 50 000 0000", href: "https://wa.me/971500000000" },
];

function ContactPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-20 md:pt-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
              <span className="size-1.5 rounded-full bg-glow" />
              Contact us
            </span>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance md:text-6xl">
              Let's talk about your growth.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              Tell us about your brand and the platforms you sell on. We'll come back with a
              free audit and a plan for the GCC.
            </p>
            <div className="mt-10 space-y-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="glass flex items-center justify-between rounded-2xl px-6 py-4 transition hover:-translate-y-0.5 hover:border-white/25"
                >
                  <span className="text-sm text-white/60">{c.label}</span>
                  <span className="font-display font-semibold text-glow">{c.value}</span>
                </a>
              ))}
            </div>
            <p className="mt-8 text-sm text-white/50">
              Serving sellers across KSA · UAE · Qatar · Bahrain · Oman · Kuwait
            </p>
          </Reveal>

          <Reveal delay={150}>
            <form
              className="glass rounded-3xl p-8"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const subject = encodeURIComponent(`New enquiry from ${data.get("name")}`);
                const body = encodeURIComponent(
                  `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPlatforms: ${data.get("platforms")}\n\n${data.get("message")}`,
                );
                window.location.href = `mailto:hello@khaleejpartners.com?subject=${subject}&body=${body}`;
              }}
            >
              <h2 className="font-display text-2xl font-semibold">Request your free audit</h2>
              <div className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm text-white/70">Name</label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-glow focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm text-white/70">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-glow focus:outline-none"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="platforms" className="mb-1.5 block text-sm text-white/70">
                    Platforms you sell on (or want to)
                  </label>
                  <input
                    id="platforms"
                    name="platforms"
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-glow focus:outline-none"
                    placeholder="e.g. Noon, Amazon"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm text-white/70">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-glow focus:outline-none"
                    placeholder="Tell us about your products and goals"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-ocean to-glow px-7 py-3.5 font-semibold text-brand shadow-lg shadow-ocean/30 transition hover:scale-[1.02]"
                >
                  Send enquiry
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
