import { useInView } from "./hooks";
import { SectionLabel } from "./SectionLabel";
import { ShieldCheck, BookOpen, Lock, Globe, CheckCircle2 } from "lucide-react";

const certs = [
  {
    title: "Cybersecurity Certification",
    issuer: "Industry Certification Body",
    year: "2024",
    icon: ShieldCheck,
    accent: "#2f7cf6",
    desc: "Comprehensive certification covering network security, threat analysis, incident response, and cybersecurity best practices for enterprise environments.",
    skills: ["Network Security", "Threat Analysis", "Incident Response"],
  },
  {
    title: "Diploma in Fraud & IT Management",
    issuer: "Professional Institute",
    year: "2023",
    icon: Lock,
    accent: "#ef4444",
    desc: "Advanced training in fraud detection, digital forensics, IT governance, and enterprise risk management frameworks.",
    skills: ["Fraud Detection", "Digital Forensics", "IT Governance"],
  },
  {
    title: "Ethical Hacking Essentials",
    issuer: "EC-Council Equivalent",
    year: "2023",
    icon: BookOpen,
    accent: "#f59e0b",
    desc: "Hands-on certification in ethical hacking methodologies, penetration testing tools, exploit development, and responsible disclosure.",
    skills: ["Ethical Hacking", "Exploit Dev", "Responsible Disclosure"],
  },
  {
    title: "Web Application Security Fundamentals",
    issuer: "Security Training Provider",
    year: "2024",
    icon: Globe,
    accent: "#10b981",
    desc: "Specialized certification in OWASP Top 10, web application penetration testing, secure coding practices, and API security hardening.",
    skills: ["OWASP Top 10", "API Security", "Secure Coding"],
  },
];

export function Certifications() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="certifications"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-28 relative section-hidden ${inView ? "section-visible" : ""}`}
      style={{ background: "#04070d" }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.25), transparent)" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionLabel index="05" label="Certifications" color="#f59e0b" />

        <h2 className="text-4xl xl:text-5xl font-black text-white mb-3"
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.035em" }}>
          Professional{" "}
          <span style={{ background: "linear-gradient(135deg, #f59e0b, #ef4444)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Credentials
          </span>
        </h2>
        <p className="text-sm mb-14 max-w-md" style={{ color: "#4a5a75", fontFamily: "'Inter', sans-serif" }}>
          Industry-recognised certifications validating expertise across cybersecurity disciplines.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certs.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="group relative p-7 rounded-2xl glass transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: `${c.accent}15`, animationDelay: `${i * 0.1}s` }}
              >
                {/* Top row */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: `${c.accent}12`, border: `1px solid ${c.accent}28` }}>
                    <Icon className="w-6 h-6" style={{ color: c.accent }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-white text-[0.95rem] leading-tight mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {c.title}
                    </h3>
                    <p className="text-xs" style={{ color: "#4a5a75", fontFamily: "'Inter', sans-serif" }}>{c.issuer}</p>
                  </div>
                  <span className="text-xs shrink-0 px-2.5 py-1 rounded-lg glass"
                    style={{ color: "#4a5a75", fontFamily: "'JetBrains Mono', monospace" }}>
                    {c.year}
                  </span>
                </div>

                <p className="text-sm leading-relaxed mb-5" style={{ color: "#8899b4", fontFamily: "'Inter', sans-serif" }}>{c.desc}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {c.skills.map(s => (
                    <span key={s} className="flex items-center gap-1.5 px-3 py-1 text-xs rounded-lg"
                      style={{ background: `${c.accent}0a`, border: `1px solid ${c.accent}20`, color: c.accent, fontFamily: "'JetBrains Mono', monospace" }}>
                      <CheckCircle2 className="w-3 h-3" />
                      {s}
                    </span>
                  ))}
                </div>

                {/* Bottom glow */}
                <div className="absolute bottom-0 left-8 right-8 h-px opacity-20 group-hover:opacity-50 transition-opacity"
                  style={{ background: `linear-gradient(90deg, transparent, ${c.accent}, transparent)` }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
