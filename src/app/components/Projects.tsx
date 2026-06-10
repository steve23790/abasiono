import { useState } from "react";
import { useInView } from "./hooks";
import { SectionLabel } from "./SectionLabel";
import { ExternalLink, BookOpen, Globe, Shield, Home, Smartphone, Brain, Star } from "lucide-react";
import dessienImg from "../../assets/dessien.png";
import macImg from "../../assets/mac.png";
import oikusImg from "../../assets/oikus.png";
import seculateImg from "../../assets/seculate.png";
const projects = [
  {
    id: 1,
    name: "Dessien Farms",
    tagline: "Invest in farm produce: palm oil, fish, chickens",
    desc: "Dessien Farms is a startup that helps people invest in farm produce such as palm oil, fish, and chickens, enabling community-backed agricultural investments and returns.",
    image: dessienImg,
    icon: Brain,
    stack: ["AgriTech", "Investment", "React"],
    accent: "#2f8a4d",
    featured: true,
    url: "https://deefarm.netlify.app",
  },
  {
    id: 2,
    name: "Oikus Real Estate",
    tagline: "AI-Enabled Real Estate Management",
    desc: "A full-stack real estate platform with AI-powered property recommendations, smart pricing algorithms, virtual tours, and automated market analysis to transform how properties are discovered and managed.",
    image: oikusImg,
    icon: Home,
    stack: ["React", "Node.js", "Django", "AWS", "ML", "PostgreSQL"],
    accent: "#10b981",
    featured: true,
     url: "https://oikusdat.com",
  },
  {
    id: 3,
    name: "Seculate App",
    tagline: "P2P Mobile Borrowing & Service Platform",
    desc: "A secure peer-to-peer mobile platform enabling borrowing, lending, and service requests with trust scoring, encrypted transactions, and real-time notifications.",
    image: seculateImg,
    icon: Smartphone,
    stack: ["Flutter", "Firebase", "Node.js", "Dart", "Stripe"],
    accent: "#8b5cf6",
    featured: false,
  },
  {
    id: 4,
    name: "Macwheels Vehicles",
    tagline: "Car sales specializing in Chinese models",
    desc: "Macwheels is a car company that sells cars—especially Chinese models—providing purchasing and financing options for customers.",
    image: macImg,
    icon: Home,
    stack: ["Sales", "E-commerce", "Financing"],
    accent: "#f97316",
    featured: false,
    url: "https://macwheels.vercel.app",
  },
];

export function Projects() {
  const { ref, inView } = useInView(0.05);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-28 relative section-hidden ${inView ? "section-visible" : ""}`}
      style={{ background: "#04070d" }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(47,124,246,0.25), transparent)" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionLabel index="03" label="Projects" />

        <h2 className="text-4xl xl:text-5xl font-black text-white mb-3"
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.035em" }}>
          Featured{" "}
          <span style={{ background: "linear-gradient(135deg, #2f7cf6, #05c8dc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Work
          </span>
        </h2>
        <p className="text-sm mb-14 max-w-md" style={{ color: "#4a5a75", fontFamily: "'Inter', sans-serif" }}>
          Products built at the intersection of security, software engineering, and artificial intelligence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {projects.map((p, i) => {
            const Icon = p.icon;
            const isHov = hovered === p.id;
            return (
              <div
                key={p.id}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
                className="group relative rounded-2xl overflow-hidden cursor-default transition-all duration-500"
                style={{
                  background: "rgba(9,14,26,0.7)",
                  border: `1px solid ${isHov ? p.accent + "35" : "rgba(47,124,246,0.1)"}`,
                  boxShadow: isHov ? `0 0 50px ${p.accent}12` : "none",
                  transform: isHov ? "translateY(-4px)" : "none",
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                {/* Featured badge */}
                {p.featured && (
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs"
                    style={{ background: "rgba(47,124,246,0.15)", border: "1px solid rgba(47,124,246,0.3)", color: "#2f7cf6", fontFamily: "'JetBrains Mono', monospace", backdropFilter: "blur(8px)" }}>
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                )}

                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-contain transition-transform duration-700"
                    style={{ transform: isHov ? "scale(1.03)" : "scale(1)", backgroundColor: "#04070d" }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(4,7,13,0.15) 0%, rgba(4,7,13,0.82) 100%)" }} />

                  {/* Icon badge */}
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center glass-strong"
                    style={{ border: `1px solid ${p.accent}35` }}>
                    <Icon className="w-5 h-5" style={{ color: p.accent }} />
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className="absolute bottom-0 inset-x-0 h-0.5 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)`, opacity: isHov ? 0.7 : 0.2 }}
                  />
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-xs mb-1" style={{ color: "#4a5a75", fontFamily: "'JetBrains Mono', monospace" }}>{p.tagline}</p>
                  <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>{p.name}</h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "#8899b4", fontFamily: "'Inter', sans-serif" }}>{p.desc}</p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.stack.map(t => (
                      <span key={t} className="px-2.5 py-1 text-xs rounded-lg"
                        style={{ background: `${p.accent}0d`, border: `1px solid ${p.accent}28`, color: p.accent, fontFamily: "'JetBrains Mono', monospace" }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    {p.url ? (
                      <a href={p.url} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 hover:scale-105"
                        style={{ background: `${p.accent}15`, border: `1px solid ${p.accent}30`, color: p.accent, fontFamily: "'Inter', sans-serif" }}>
                        <Globe className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    ) : (
                      <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 hover:scale-105"
                        style={{ background: `${p.accent}15`, border: `1px solid ${p.accent}30`, color: p.accent, fontFamily: "'Inter', sans-serif" }}>
                        <Globe className="w-3.5 h-3.5" />
                        Live Demo
                      </button>
                    )}

                    <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 hover:scale-105 glass"
                      style={{ color: "#4a5a75", fontFamily: "'Inter', sans-serif" }}>
                      <BookOpen className="w-3.5 h-3.5" />
                      Case Study
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
