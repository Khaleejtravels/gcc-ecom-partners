import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About us" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-ocean to-glow font-display text-lg font-bold text-brand">
            K
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Khaleej<span className="text-glow">Partners</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="transition hover:text-white"
              activeProps={{ className: "text-white font-medium" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/15 sm:block"
          >
            Book a consult
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="grid size-10 place-items-center rounded-lg border border-white/20 bg-white/5 md:hidden"
          >
            <div className="space-y-1.5">
              <span className={cn("block h-0.5 w-5 bg-white transition-transform", open && "translate-y-2 rotate-45")} />
              <span className={cn("block h-0.5 w-5 bg-white transition-opacity", open && "opacity-0")} />
              <span className={cn("block h-0.5 w-5 bg-white transition-transform", open && "-translate-y-2 -rotate-45")} />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass mx-6 rounded-2xl p-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
