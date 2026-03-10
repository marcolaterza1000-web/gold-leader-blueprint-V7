import { MapPin, Clock, Shield, ExternalLink } from "lucide-react";

const locations = [
  {
    id: "urdorf",
    name: "Privatstudio Urdorf",
    subtitle: "Hauptstandort",
    address: "Dorfstrasse 11c, 8902 Urdorf",
    mapUrl: "https://maps.google.com/?q=Dorfstrasse+11c,+8902+Urdorf",
    highlights: ["Vollausgestattetes Privatstudio", "Absolute Diskretion", "Parkplätze direkt vor Ort"],
    badge: "Hauptstandort",
    badgeColor: "#f59e0b",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.5!2d8.425!3d47.383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDIyJzU5LjIiTiA4wrAyNSczMC4wIkU!5e0!3m2!1sde!2sch!4v1",
  },
  {
    id: "city",
    name: "Zürich City",
    subtitle: "Innenstadt",
    address: "Jenatschstrasse 4, 8002 Zürich",
    mapUrl: "https://maps.google.com/?q=Jenatschstrasse+4,+8002+Zürich",
    highlights: ["Zentrale Lage", "S-Bahn & Tram direkt vor Ort", "Flexible Zeiten"],
    badge: "City",
    badgeColor: "#a78bfa",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.5!2d8.535!3d47.366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDIxJzU4LjYiTiA4wrAzMicwNi4wIkU!5e0!3m2!1sde!2sch!4v1",
  },
  {
    id: "seefeld",
    name: "Zürich Seefeld",
    subtitle: "Exklusivviertel",
    address: "Seefeldquartier, 8008 Zürich",
    mapUrl: "https://maps.google.com/?q=Seefeld+8008+Zürich",
    highlights: ["Exklusivste Lage Zürichs", "Direkt am See", "VIP-Klienten auf Anfrage"],
    badge: "VIP",
    badgeColor: "#34d399",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.5!2d8.556!3d47.356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDIxJzIxLjYiTiA4wrAzMyczMy42IkU!5e0!3m2!1sde!2sch!4v1",
  },
];

const LocationsSection = () => (
  <section
    id="standorte"
    className="py-32 bg-[#0a0a0a] px-6"
    style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
  >
    <div className="container mx-auto max-w-6xl">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="font-inter text-xs text-[#f59e0b] uppercase tracking-[0.18em] mb-3">
          Exklusiv in Zürich
        </p>
        <h2
          className="font-inter font-black text-white leading-tight mb-4"
          style={{ fontSize: "clamp(28px, 4vw, 50px)" }}
        >
          Wo wir{" "}
          <span className="text-[#f59e0b]">zusammenarbeiten.</span>
        </h2>
        <p className="font-inter text-white/40 max-w-xl mx-auto text-base leading-relaxed">
          Drei Standorte. Höchste Diskretion. Flexible Zeiten, die sich
          deinem Kalender anpassen, nicht umgekehrt.
        </p>
      </div>

      {/* Location cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {locations.map((loc) => (
          <div
            key={loc.id}
            className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/6 bg-[#111111] hover:border-[#f59e0b]/20 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(245,158,11,0.06)]"
          >
            {/* Map placeholder area */}
            <div className="relative h-44 bg-[#0d0d0d] overflow-hidden">
              {/* Static map background with grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(245,158,11,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.8) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              {/* Centered pin */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    backgroundColor: loc.badgeColor + "20",
                    border: `1px solid ${loc.badgeColor}40`,
                  }}
                >
                  <MapPin
                    className="w-5 h-5"
                    style={{ color: loc.badgeColor }}
                  />
                </div>
                <div className="text-center">
                  <p className="font-inter font-bold text-white text-sm">
                    {loc.name}
                  </p>
                  <p className="font-inter text-white/35 text-xs mt-0.5">
                    {loc.address}
                  </p>
                </div>
              </div>

              {/* Badge top right */}
              <div className="absolute top-3 right-3">
                <span
                  className="font-inter text-[10px] font-bold px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: loc.badgeColor + "18",
                    color: loc.badgeColor,
                    border: `1px solid ${loc.badgeColor}35`,
                  }}
                >
                  {loc.badge}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-inter font-bold text-white text-base leading-tight">
                    {loc.name}
                  </h3>
                  <p className="font-inter text-white/30 text-xs mt-0.5">
                    {loc.subtitle}
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2 mb-6 flex-1">
                {loc.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <span
                      className="w-1 h-1 rounded-full shrink-0"
                      style={{ backgroundColor: loc.badgeColor }}
                    />
                    <span className="font-inter text-white/45 text-sm">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href={loc.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/25 hover:text-[#f59e0b] font-inter text-xs font-medium transition-colors duration-200 group/link"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>In Google Maps öffnen</span>
                <ExternalLink className="w-3 h-3 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom strip */}
      <div className="rounded-2xl bg-[#f59e0b]/5 border border-[#f59e0b]/12 p-7 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row gap-6 md:gap-10">
          {[
            { icon: Shield, text: "Absolute Diskretion garantiert" },
            { icon: Clock, text: "Termine früh morgens bis abends" },
            { icon: MapPin, text: "Auch remote & on-location auf Anfrage" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 text-white/40 font-inter text-sm"
            >
              <item.icon className="w-4 h-4 text-[#f59e0b] shrink-0" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
        <a
          href="#kontakt"
          className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#f59e0b] text-[#0a0a0a] font-inter font-black text-sm hover:brightness-110 transition-all duration-200 whitespace-nowrap"
        >
          Standort anfragen
        </a>
      </div>
    </div>
  </section>
);

export default LocationsSection;
