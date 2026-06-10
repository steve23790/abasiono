import { useInView, useCounter } from "./hooks";
import { SectionLabel } from "./SectionLabel";
import { Shield, Code2, Brain, Smartphone, Lightbulb, Users } from "lucide-react";

const pillars = [
  { icon: Shield,     label: "Cybersecurity",    color: "#ef4444", desc: "Threat modeling, pen testing, vulnerability assessment & risk management." },
  { icon: Code2,      label: "Full-Stack Dev",   color: "#2f7cf6", desc: "End-to-end web applications with Python, JS, React, Django & Node.js." },
  { icon: Brain,      label: "AI Integration",   color: "#8b5cf6", desc: "NLP systems, ML pipelines, chatbots and intelligent product experiences." },
  { icon: Smartphone, label: "Mobile Dev",       color: "#05c8dc", desc: "Cross-platform Flutter apps with polished, performant UIs." },
  { icon: Lightbulb,  label: "Product Innovation", color: "#f59e0b", desc: "User-centric product thinking that transforms complex problems into elegant solutions." },
  { icon: Users,      label: "Leadership",       color: "#10b981", desc: "Community leader recognized at Akwa Ibom Tech Week; mentoring developers across Africa." },
];

function StatCard({ target, suffix, label, sub, started }: { target: number; suffix: string; label: string; sub: string; started: boolean }) {
  const count = useCounter(target, 1600, started);
  return (
    <div className="p-5 rounded-2xl glass text-center">
      <div className="text-3xl font-black" style={{ color: "#2f7cf6", fontFamily: "'Inter', sans-serif" }}>
        {count}{suffix}
      </div>
      <div className="text-sm font-semibold mt-1 text-white" style={{ fontFamily: "'Inter', sans-serif" }}>{label}</div>
      <div className="text-xs mt-0.5" style={{ color: "#4a5a75", fontFamily: "'JetBrains Mono', monospace" }}>{sub}</div>
    </div>
  );
}

export function About() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-28 relative section-hidden ${inView ? "section-visible" : ""}`}
      style={{ background: "#04070d" }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(47,124,246,0.25), transparent)" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionLabel index="01" label="About" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2
              className="text-4xl xl:text-5xl font-black text-white mb-6"
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.035em", lineHeight: 1.08 }}
            >
              Security-first.<br />
              <span style={{ background: "linear-gradient(135deg, #2f7cf6, #05c8dc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Intelligence-driven.
              </span>
            </h2>

            <div className="space-y-4 text-[0.925rem] leading-relaxed" style={{ color: "#8899b4", fontFamily: "'Inter', sans-serif" }}>
              <p>
                I am <span className="font-semibold text-white">Abasiono Stephen Ukpong</span> — a cybersecurity analyst, full-stack developer, and AI product builder who operates at the intersection of security and innovation.
              </p>
              <p>
                With deep expertise spanning the full software stack and a cybersecurity-first mindset, I design systems that are not only functional and elegant — but <em style={{ color: "#eef2f8" }}>fundamentally secure</em>. Every line of code I write is informed by threat modeling, secure design principles, and real-world adversarial thinking.
              </p>
              <p>
                Currently leading product development at{" "}
                <span className="font-medium" style={{ color: "#2f7cf6" }}>Oikus Real Estate</span> and{" "}
                <span className="font-medium" style={{ color: "#05c8dc" }}>Dessien Farms</span>, while delivering freelance cybersecurity and software engagements for clients across Africa and beyond.
              </p>
            </div>

            <div
              className="mt-8 px-5 py-4 rounded-xl text-sm italic"
              style={{
                background: "rgba(47,124,246,0.05)",
                border: "1px solid rgba(47,124,246,0.15)",
                color: "#2f7cf6",
                fontFamily: "'JetBrains Mono', monospace",
                borderLeft: "3px solid #2f7cf6",
              }}
            >
              "Building Secure, Intelligent, and Impactful Digital Solutions"
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
              <StatCard target={10} suffix="+" label="Projects"      sub="completed"  started={inView} />
              <StatCard target={5}  suffix="+" label="Years Exp."    sub="freelance"  started={inView} />
              <StatCard target={4}  suffix=""  label="Certifications" sub="security"  started={inView} />
              <StatCard target={8} suffix="+" label="Technologies"  sub="mastered"   started={inView} />
            </div>
          </div>

          {/* Right – pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {pillars.map(({ icon: Icon, label, color, desc }) => (
              <div
                key={label}
                className="group p-5 rounded-2xl glass transition-all duration-300 hover:-translate-y-0.5 cursor-default"
                style={{ borderColor: `${color}18` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${color}12`, border: `1px solid ${color}25` }}
                  >
                    <Icon className="w-4 h-4" style={{ color }} />
                  </div>
                  <span className="text-sm font-semibold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>{label}</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "#4a5a75", fontFamily: "'Inter', sans-serif" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
