import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#ueber-marco", label: "Über Marco" },
    { href: "#methode", label: "Methode" },
    { href: "#video-ergebnisse", label: "Ergebnisse" },
    { href: "#standorte", label: "Standorte" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/96 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-10 max-w-7xl">
        {/* Logo */}
        <a href="#" className="font-inter font-black text-xl tracking-tight shrink-0">
          ML <span className="text-[#f59e0b]">COACHING</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7 lg:gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-inter text-white/45 hover:text-white transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA — always gold, always prominent */}
        <a
          href="#kontakt"
          className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#f59e0b] text-[#0a0a0a] font-inter text-sm font-black hover:brightness-110 transition-all duration-200 shadow-[0_2px_16px_rgba(245,158,11,0.3)] shrink-0"
        >
          Analyse-Gespräch buchen
          <ArrowRight className="w-3.5 h-3.5" />
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/60 hover:text-white transition p-1"
          aria-label={open ? "Menü schliessen" : "Menü öffnen"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[#0a0a0a]/98 backdrop-blur-xl border-t border-white/5 px-6 pb-8 pt-4 space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between text-white/55 hover:text-white py-3.5 font-inter text-base border-b border-white/5 last:border-0 transition-colors"
            >
              {l.label}
              <ArrowRight className="w-3.5 h-3.5 opacity-30" />
            </a>
          ))}
          <div className="pt-5">
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-[#f59e0b] text-[#0a0a0a] font-inter font-black text-base shadow-[0_4px_20px_rgba(245,158,11,0.3)]"
            >
              Analyse-Gespräch buchen
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
