import { useInView } from "./hooks";
import { SectionLabel } from "./SectionLabel";
import { Trophy, Star, Cpu, Users, ArrowUpRight } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Leadership Recognition",
    event: "Akwa Ibom Tech Week 2024",
    year: "2024",
    desc: "Recognised as a leading voice in cybersecurity and innovation at Akwa Ibom Tech Week — one of Nigeria's premier technology events. Delivered keynote talks on AI-driven security and youth empowerment in African tech.",
    impact: "500+ attendees reached",
    accent: "#f59e0b",
  },
  {
    icon: Star,
    title: "Cybersecurity Innovation Award",
    event: "Regional Tech Summit",
    year: "2024",
    desc: "Awarded for pioneering cybersecurity tooling and contributions to the open-source security community through the Web Vulnerability Scanner and community education initiatives.",
    impact: "Open-source contribution",
    accent: "#2f7cf6",
  },
  {
    icon: Cpu,
    title: "AI Platform Achievement",
    event: "Knowzone AI Launch",
    year: "2025",
    desc: "Successfully created and yet to launched an AI-powered multilingual educational platform serving learners across Africa. Recognised for combining advanced NLP with culturally-relevant content delivery at scale.",
    impact: "Multi-country reach",
    accent: "#05c8dc",
  },
  {
    icon: Users,
    title: "Community Contributions",
    event: "Tech Communities · Nationwide",
    year: "2023–Present",
    desc: "Active contributor and mentor across multiple developer communities in Nigeria. Organised workshops, bootcamps, and mentoring sessions empowering the next generation of African tech talent.",
    impact: "30+ developers mentored",
    accent: "#10b981",
  },
];

export function Achievements() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="achievements"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-28 relative section-hidden ${inView ? "section-visible" : ""}`}
      style={{ background: "#060a14" }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.25), transparent)" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionLabel index="06" label="Achievements" color="#f59e0b" />

        <h2 className="text-4xl xl:text-5xl font-black text-white mb-3"
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.035em" }}>
          Impact &{" "}
          <span style={{ background: "linear-gradient(135deg, #f59e0b, #2f7cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Recognition
          </span>
        </h2>
        <p className="text-sm mb-14 max-w-md" style={{ color: "#4a5a75", fontFamily: "'Inter', sans-serif" }}>
          Recognitions and milestones from community, product, and cybersecurity work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={a.title}
                className="group relative p-7 rounded-2xl glass overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: `${a.accent}15`, animationDelay: `${i * 0.1}s` }}
              >
                {/* Watermark icon */}
                <div className="absolute -right-4 -bottom-6 opacity-[0.04] group-hover:opacity-[0.07] transition-opacity pointer-events-none">
                  <Icon style={{ width: 120, height: 120, color: a.accent }} />
                </div>

                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${a.accent}12`, border: `1px solid ${a.accent}28` }}>
                      <Icon className="w-5 h-5" style={{ color: a.accent }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-[0.95rem]" style={{ fontFamily: "'Inter', sans-serif" }}>{a.title}</h3>
                      <p className="text-xs" style={{ color: a.accent, fontFamily: "'JetBrains Mono', monospace" }}>{a.event}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs glass px-2.5 py-1 rounded-lg shrink-0"
                      style={{ color: "#4a5a75", fontFamily: "'JetBrains Mono', monospace" }}>
                      {a.year}
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-40 transition-opacity" style={{ color: a.accent }} />
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-4" style={{ color: "#8899b4", fontFamily: "'Inter', sans-serif" }}>{a.desc}</p>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs"
                  style={{ background: `${a.accent}0a`, border: `1px solid ${a.accent}20`, color: a.accent, fontFamily: "'JetBrains Mono', monospace" }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: a.accent }} />
                  {a.impact}
                </div>

                <div className="absolute bottom-0 left-8 right-8 h-px opacity-20 group-hover:opacity-50 transition-opacity"
                  style={{ background: `linear-gradient(90deg, transparent, ${a.accent}, transparent)` }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
