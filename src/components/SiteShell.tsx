import { Header } from "./Header";
import { Footer } from "./Footer";
import type { ReactNode } from "react";

/** Dark frosted page shell: gradient glow blobs behind frosted-glass content. */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-brand font-sans text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="anim-drift absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-ocean/40 blur-[120px]" />
        <div className="anim-drift absolute top-1/3 -right-24 h-[480px] w-[480px] rounded-full bg-glow/30 blur-[130px]" style={{ animationDelay: "2s" }} />
        <div className="anim-drift absolute bottom-0 left-1/4 h-[380px] w-[380px] rounded-full bg-indigo-500/30 blur-[120px]" style={{ animationDelay: "4s" }} />
      </div>
      <Header />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
