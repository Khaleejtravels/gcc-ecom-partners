import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-ocean to-glow font-display text-lg font-bold text-brand">
                K
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                Khaleej<span className="text-glow">Partners</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Full-service e-commerce management for brands selling across the GCC.
            </p>
          </div>
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-white/80">Explore</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-white/50">
              <Link to="/" className="transition hover:text-white">Home</Link>
              <Link to="/services" className="transition hover:text-white">Services</Link>
              <Link to="/about" className="transition hover:text-white">About us</Link>
              <Link to="/contact" className="transition hover:text-white">Contact</Link>
            </div>
          </div>
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-white/80">Contact</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-white/50">
              <a href="mailto:hello@khaleejpartners.com" className="transition hover:text-white">
                hello@khaleejpartners.com
              </a>
              <a href="tel:+971500000000" className="transition hover:text-white">+971 50 000 0000</a>
              <span>KSA · UAE · Qatar · Bahrain · Oman · Kuwait</span>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row">
          <span>© {new Date().getFullYear()} Khaleej Partners. All rights reserved.</span>
          <span>Managing sellers on Noon · Amazon · Trendyol · Carrefour</span>
        </div>
      </div>
    </footer>
  );
}
