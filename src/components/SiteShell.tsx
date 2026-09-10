import { Header } from "./Header";
import { Footer } from "./Footer";
import type { ReactNode } from "react";

/** Dark commerce shell with a restrained, animated market-grid background. */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-brand font-sans text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="anim-grid-shift absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,color-mix(in_oklab,var(--ocean)_10%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--ocean)_10%,transparent)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
        <div className="anim-background-sweep absolute -inset-x-1/4 top-0 h-[34rem] rotate-[-8deg] bg-gradient-to-r from-transparent via-ocean/12 to-glow/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-glow/50 to-transparent" />
      </div>
      <Header />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
