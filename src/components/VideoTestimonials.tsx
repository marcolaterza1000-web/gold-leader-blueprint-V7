import { useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Kaspar Luginbühl",
    role: "Wirtschaftsanwalt, Partner",
    youtubeId: "36YypGRe3AI",
    quote: "Fitter mit 40 als mit 30",
  },
  {
    name: "Gabriela Weiss",
    role: "Senior Payroll Specialist",
    youtubeId: "rjvUqsvvGdA",
    quote: "Von 26% auf 17% Körperfett",
  },
  {
    name: "Diana Bossi",
    role: "Unternehmerin",
    youtubeId: "6rPeMAsCs1I",
    quote: "Energie und Klarheit zurückgewonnen",
  },
  {
    name: "Burkhard Boeckem",
    role: "CTO Hexagon AB",
    youtubeId: "iB7RMloXas8",
    quote: "Topform trotz globalem Führungsalltag",
  },
  {
    name: "Bill Walton",
    role: "Unternehmer",
    youtubeId: "atXuuwPwpn8",
    quote: "Das System das wirklich hält",
  },
  {
    name: "Pascal Zuberbühler",
    role: "Senior Football Expert, FIFA",
    youtubeId: "T4HbXhuLd9I",
    quote: "Zurück auf Top-Niveau",
  },
  {
    name: "Mark Arnall",
    role: "Performance Coach",
    youtubeId: "5JhEcScJZF4",
    quote: "Präzision die keine andere Methode bietet",
  },
  {
    name: "JT Foxx",
    role: "World's #1 Networker & Entrepreneur",
    youtubeId: "CrahSRxo3EE",
    quote: "Der Unterschied den nur Daten erklären",
  },
];

function VideoCard({
  item,
  priority = false,
}: {
  item: (typeof testimonials)[0];
  priority?: boolean;
}) {
  const [active, setActive] = useState(false);
  const thumb = `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`;

  return (
    <div className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/6 bg-[#111111] hover:border-[#f59e0b]/25 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(245,158,11,0.08)]">
      {/* Video area */}
      <div className="relative aspect-video bg-[#0a0a0a] overflow-hidden">
        {active ? (
          <iframe
            src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={`${item.name} Testimonial`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            loading="lazy"
          />
        ) : (
          <>
            <img
              src={thumb}
              alt={`${item.name} – Erfahrungsbericht`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading={priority ? "eager" : "lazy"}
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Play button */}
            <button
              onClick={() => setActive(true)}
              aria-label={`Video von ${item.name} abspielen`}
              className="absolute inset-0 flex items-center justify-center group/btn"
            >
              <div className="relative flex items-center justify-center">
                {/* Outer ring pulse */}
                <span className="absolute w-16 h-16 rounded-full bg-[#f59e0b]/20 animate-ping" />
                {/* Button circle */}
                <div className="relative w-14 h-14 rounded-full bg-[#f59e0b] flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all duration-200 group-hover/btn:scale-110 group-hover/btn:bg-[#fbbf24]">
                  <Play className="w-5 h-5 text-[#0a0a0a] fill-[#0a0a0a] ml-0.5" />
                </div>
              </div>
            </button>

            {/* Quote pill bottom left */}
            <div className="absolute bottom-3 left-3 right-3">
              <div className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-sm border border-[#f59e0b]/20 rounded-full px-3 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shrink-0" />
                <span className="font-inter text-[11px] text-[#f59e0b]/90 font-medium truncate">
                  {item.quote}
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Info bar */}
      <div className="px-5 py-4 flex items-center justify-between">
        <div>
          <p className="font-inter font-bold text-white text-sm leading-tight">
            {item.name}
          </p>
          <p className="font-inter text-white/35 text-xs mt-0.5">{item.role}</p>
        </div>
        {!active && (
          <button
            onClick={() => setActive(true)}
            className="flex items-center gap-1.5 text-[#f59e0b]/60 hover:text-[#f59e0b] transition-colors duration-200"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span className="font-inter text-[11px] font-semibold">Ansehen</span>
          </button>
        )}
      </div>
    </div>
  );
}

const VideoTestimonials = () => {
  const [page, setPage] = useState(0);
  const perPage = 4;
  const pages = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section
      id="video-ergebnisse"
      className="py-32 bg-[#080808] px-6 relative overflow-hidden"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Subtle gold glow top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(245,158,11,0.4), transparent)",
        }}
      />

      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-inter text-xs text-[#f59e0b] uppercase tracking-[0.18em] mb-3">
            Echte Menschen. Messbare Resultate.
          </p>
          <h2
            className="font-inter font-black text-white leading-tight mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
          >
            Ergebnisse, die für{" "}
            <span className="text-[#f59e0b]">sich sprechen.</span>
          </h2>
          <p className="font-inter text-white/40 max-w-xl mx-auto text-base leading-relaxed">
            Führungskräfte, Spitzensportler und Entscheider in ihren eigenen
            Worten. Ungefiltert.
          </p>
        </div>

        {/* Grid — desktop 4, tablet 2, mobile 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {visible.map((item, i) => (
            <VideoCard key={item.youtubeId} item={item} priority={i < 2} />
          ))}
        </div>

        {/* Pagination */}
        {pages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#f59e0b]/40 hover:text-[#f59e0b] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              aria-label="Vorherige"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`transition-all duration-200 rounded-full ${
                    i === page
                      ? "w-8 h-2 bg-[#f59e0b]"
                      : "w-2 h-2 bg-white/15 hover:bg-white/30"
                  }`}
                  aria-label={`Seite ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setPage((p) => Math.min(pages - 1, p + 1))}
              disabled={page === pages - 1}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#f59e0b]/40 hover:text-[#f59e0b] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              aria-label="Nächste"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="font-inter text-white/30 text-sm mb-5">
            Bereit für dein eigenes Ergebnis?
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-[#f59e0b] text-[#0a0a0a] font-inter font-black text-base hover:brightness-110 transition-all duration-200 shadow-[0_4px_24px_rgba(245,158,11,0.25)]"
          >
            Analyse-Gespräch buchen
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
