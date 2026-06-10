import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";

const NAV = [
  { label: "About",    id: "about" },
  { label: "Skills",   id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Certs",    id: "certifications" },
  { label: "Contact",  id: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [open, setOpen]           = useState(false);
  const [active, setActive]       = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = NAV.map(n => document.getElementById(n.id));
      const current = sections.findLast(s => s && s.getBoundingClientRect().top < 120);
      setActive(current?.id ?? "");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(4,7,13,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(47,124,246,0.1)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-[64px] flex items-center justify-between"
          style={{ paddingTop: 'env(safe-area-inset-top)', height: 'calc(64px + env(safe-area-inset-top))' }}>
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "rgba(47,124,246,0.15)", border: "1px solid rgba(47,124,246,0.3)" }}
            >
              <Terminal className="w-4 h-4" style={{ color: "#2f7cf6" }} />
            </div>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", color: "#eef2f8", fontSize: "0.875rem", fontWeight: 600 }}>
              <span style={{ color: "#2f7cf6" }}>ASU</span>
              <span style={{ color: "#4a5a75" }}>.dev</span>
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV.map(n => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="relative px-3.5 py-2 rounded-lg text-sm transition-all duration-200"
                style={{
                  color: active === n.id ? "#eef2f8" : "#4a5a75",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: active === n.id ? 500 : 400,
                  background: active === n.id ? "rgba(47,124,246,0.08)" : "transparent",
                }}
              >
                {n.label}
                {active === n.id && (
                  <span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: "#2f7cf6" }}
                  />
                )}
              </button>
            ))}
            <button
              onClick={() => go("contact")}
              className="ml-3 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-[1.04] hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #2f7cf6, #1d5fcc)",
                color: "#fff",
                fontFamily: "'Inter', sans-serif",
                boxShadow: "0 4px 20px rgba(47,124,246,0.35)",
              }}
            >
              Hire Me
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "#eef2f8", zIndex: 60 }}
            onClick={() => setOpen(v => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{ maxHeight: open ? "400px" : "0" }}
        >
          <div
            className="px-5 pb-6 pt-2 space-y-1 border-t"
            style={{ background: "rgba(4,7,13,0.97)", borderColor: "rgba(47,124,246,0.1)", backdropFilter: "blur(24px)" }}
          >
            {NAV.map(n => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="block w-full text-left px-4 py-3 rounded-xl text-sm transition-colors"
                style={{
                  color: active === n.id ? "#2f7cf6" : "#8899b4",
                  fontFamily: "'Inter', sans-serif",
                  background: active === n.id ? "rgba(47,124,246,0.08)" : "transparent",
                }}
              >
                {n.label}
              </button>
            ))}
            <button
              onClick={() => go("contact")}
              className="w-full mt-2 py-3 rounded-xl text-sm font-semibold"
              style={{
                background: "linear-gradient(135deg, #2f7cf6, #1d5fcc)",
                color: "#fff",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Hire Me
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
