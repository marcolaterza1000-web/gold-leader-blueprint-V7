import portrait from "@/assets/marco-portrait.jpg";
import { ArrowRight, Star, TrendingUp, Zap, Shield } from "lucide-react";

const proofItems = [
  { icon: TrendingUp, label: "500+ Klienten transformiert" },
  { icon: Zap, label: "Ergebnisse in 3–6 Wochen" },
  { icon: Shield, label: "24× internationale Covers" },
];

const HeroSection = () => (
  <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden pt-20">
    {/* Subtle grid */}
    <div
      className="absolute inset-0 opacity-[0.022]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />

    {/* Gold glow top-right */}
    <div
      className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at top right, rgba(245,158,11,0.06) 0%, transparent 65%)",
      }}
    />

    <div className="container mx-auto max-w-7xl px-6 md:px-10 pb-20 min-h-screen flex items-center">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full py-16 lg:py-0">

        {/* ── LEFT: Copy ─────────────────────────────── */}
        <div className="relative z-10">
          {/* Niche label */}
          <div className="inline-flex items-center gap-2 border border-[#f59e0b]/30 bg-[#f59e0b]/6 rounded-full px-4 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" />
            <p className="font-inter text-xs text-[#f59e0b] tracking-[0.14em] uppercase">
              High Performance Coaching · Zürich
            </p>
          </div>

          {/* Main headline */}
          <h1
            className="font-inter font-black leading-[1.02] mb-7"
            style={{ fontSize: "clamp(34px, 5vw, 68px)" }}
          >
            <span className="text-white block">Dein Körper.</span>
            <span className="text-[#f59e0b] block">Dein schärfstes</span>
            <span className="text-white block">Führungsinstrument.</span>
          </h1>

          {/* Sub */}
          <p className="font-inter text-base md:text-lg text-white/50 max-w-lg mb-10 leading-relaxed">
            Als Ex-Banker weiss ich: Disziplin allein reicht nicht, wenn das
            System fehlt. Ich baue das System das Führungskräfte auf ihr
            biologisches Optimum bringt. Datenbasiert. Messbar. Ohne Zeitverlust.
          </p>

          {/* Proof pills */}
          <div className="flex flex-wrap gap-3 mb-10">
            {proofItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 border border-white/8 rounded-full px-4 py-2 bg-white/3"
              >
                <item.icon className="w-3.5 h-3.5 text-[#f59e0b]" />
                <span className="font-inter text-xs text-white/50">{item.label}</span>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#f59e0b] text-[#0a0a0a] font-inter font-black text-base hover:brightness-110 transition-all duration-200 shadow-[0_4px_28px_rgba(245,158,11,0.3)]"
            >
              Analyse-Gespräch buchen
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#video-ergebnisse"
              className="font-inter text-sm text-white/35 hover:text-white/70 transition-colors duration-200 flex items-center gap-1.5"
            >
              Ergebnisse ansehen
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-3 mt-8 pt-8 border-t border-white/5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-[#c89c4c] fill-[#c89c4c]" />
              ))}
            </div>
            <span className="text-white/35 text-sm font-inter">
              4.9 · 59 Google-Bewertungen
            </span>
            <span className="text-white/15">·</span>
            <span className="text-white/35 text-sm font-inter">500+ Klienten</span>
          </div>
        </div>

        {/* ── RIGHT: Dominant image ───────────────────── */}
        <div className="relative lg:h-[680px] flex items-center justify-center">
          {/* Outer glow ring */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(245,158,11,0.08) 0%, transparent 70%)",
            }}
          />

          {/* Main image */}
          <div className="relative w-full max-w-[440px] mx-auto">
            <img
              src={portrait}
              alt="Marco Laterza – Executive Performance Coach Zürich"
              className="w-full rounded-2xl object-cover"
              style={{ aspectRatio: "4/5", objectPosition: "center top" }}
              loading="eager"
              fetchPriority="high"
            />

            {/* Gold frame accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-[#f59e0b]/15 pointer-events-none" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[#f59e0b]/30 rounded-tl-2xl pointer-events-none" />

            {/* Cover badge */}
            <div
              className="absolute top-5 left-5 rounded-xl px-4 py-3 backdrop-blur-md"
              style={{
                background: "rgba(10,10,10,0.82)",
                border: "1px solid rgba(245,158,11,0.2)",
              }}
            >
              <p className="font-inter text-[9px] text-white/35 uppercase tracking-widest">
                International anerkannt
              </p>
              <p className="font-inter text-[#f59e0b] font-black text-xl leading-tight">
                24×
              </p>
              <p className="font-inter text-white/50 text-[10px]">Cover</p>
            </div>

            {/* Scarcity badge bottom */}
            <div
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full px-5 py-2.5 backdrop-blur-md whitespace-nowrap"
              style={{
                background: "rgba(10,10,10,0.90)",
                border: "1px solid rgba(245,158,11,0.25)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse" />
              <span className="font-inter text-xs text-white/60 font-medium">
                Aktuell{" "}
                <span className="text-[#f59e0b] font-bold">2 Plätze</span>{" "}
                verfügbar
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
      <span className="font-inter text-[10px] text-white/50 uppercase tracking-widest">
        Scroll
      </span>
      <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
    </div>
  </section>
);

export default HeroSection;
