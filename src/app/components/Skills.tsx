import { useState } from "react";
import { useInView } from "./hooks";
import { SectionLabel } from "./SectionLabel";
import { Shield, Code2, Layers, Cloud, Brain } from "lucide-react";

const groups = [
  {
    id: "cyber",
    icon: Shield,
    label: "Cybersecurity",
    color: "#ef4444",
    skills: [
      { name: "Threat Modeling",        level: 90 },
      { name: "Vulnerability Assessment", level: 92 },
      { name: "Penetration Testing",    level: 85 },
      { name: "Risk Assessment",        level: 88 },
      { name: "OWASP Top 10",           level: 94 },
      { name: "Security Auditing",      level: 87 },
    ],
  },
  {
    id: "prog",
    icon: Code2,
    label: "Programming",
    color: "#2f7cf6",
    skills: [
      { name: "Python",      level: 93 },
      { name: "JavaScript",  level: 90 },
      { name: "TypeScript",  level: 82 },
      { name: "SQL",         level: 85 },
      { name: "HTML / CSS",  level: 92 },
      { name: "Bash / Shell", level: 80 },
    ],
  },
  {
    id: "fw",
    icon: Layers,
    label: "Frameworks",
    color: "#8b5cf6",
    skills: [
      { name: "React",    level: 91 },
      { name: "Django",   level: 88 },
      { name: "Flask",    level: 86 },
      { name: "Node.js",  level: 84 },
      { name: "Flutter",  level: 82 },
      { name: "FastAPI",  level: 80 },
    ],
  },
  {
    id: "cloud",
    icon: Cloud,
    label: "Cloud & Tools",
    color: "#05c8dc",
    skills: [
      { name: "AWS",        level: 80 },
      { name: "Firebase",   level: 88 },
      { name: "Docker",     level: 82 },
      { name: "Git / GitHub", level: 95 },
      { name: "Nmap",       level: 88 },
      { name: "Metasploit", level: 82 },
    ],
  },
  {
    id: "ai",
    icon: Brain,
    label: "AI & ML",
    color: "#10b981",
    skills: [
      { name: "NLP",                    level: 85 },
      { name: "Chatbot Development",    level: 88 },
      { name: "ML Integration",         level: 80 },
      { name: "OpenAI API",             level: 87 },
      { name: "LangChain",              level: 78 },
      { name: "Data Analysis",          level: 82 },
    ],
  },
];

function SkillBar({ name, level, color, started }: { name: string; level: number; color: string; started: boolean }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-xs" style={{ color: "#8899b4", fontFamily: "'Inter', sans-serif" }}>{name}</span>
        <span className="text-xs" style={{ color, fontFamily: "'JetBrains Mono', monospace" }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(47,124,246,0.08)" }}>
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: started ? `${level}%` : "0%",
            background: `linear-gradient(90deg, ${color}, ${color}80)`,
            boxShadow: started ? `0 0 8px ${color}60` : "none",
            transitionDelay: "0.2s",
          }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const { ref, inView } = useInView(0.1);
  const [active, setActive] = useState("cyber");

  const group = groups.find(g => g.id === active)!;

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-28 relative section-hidden ${inView ? "section-visible" : ""}`}
      style={{ background: "#060a14" }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(5,200,220,0.25), transparent)" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionLabel index="02" label="Skills" color="#05c8dc" />

        <h2 className="text-4xl xl:text-5xl font-black text-white mb-3"
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.035em" }}>
          Technical{" "}
          <span style={{ background: "linear-gradient(135deg, #05c8dc, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Arsenal
          </span>
        </h2>
        <p className="text-sm mb-12 max-w-md" style={{ color: "#4a5a75", fontFamily: "'Inter', sans-serif" }}>
          A battle-tested toolkit spanning security, development, cloud, and artificial intelligence.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Category tabs */}
          <div className="space-y-2">
            {groups.map(g => {
              const Icon = g.icon;
              const isActive = g.id === active;
              return (
                <button
                  key={g.id}
                  onClick={() => setActive(g.id)}
                  className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 text-left"
                  style={{
                    background: isActive ? `${g.color}10` : "rgba(9,14,26,0.5)",
                    border: `1px solid ${isActive ? g.color + "30" : "rgba(47,124,246,0.08)"}`,
                    transform: isActive ? "translateX(4px)" : "none",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: isActive ? `${g.color}18` : "rgba(47,124,246,0.06)", border: `1px solid ${g.color}25` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: isActive ? g.color : "#4a5a75" }} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: isActive ? g.color : "#8899b4", fontFamily: "'Inter', sans-serif" }}>
                      {g.label}
                    </div>
                    <div className="text-xs" style={{ color: "#4a5a75", fontFamily: "'JetBrains Mono', monospace" }}>
                      {g.skills.length} skills
                    </div>
                  </div>
                  {isActive && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full" style={{ background: g.color, boxShadow: `0 0 8px ${g.color}` }} />
                  )}
                </button>
              );
            })}
          </div>

          {/* Skill bars panel */}
          <div className="lg:col-span-2">
            <div className="p-7 rounded-2xl glass h-full">
              <div className="flex items-center gap-3 mb-7">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${group.color}15`, border: `1px solid ${group.color}30` }}
                >
                  <group.icon className="w-5 h-5" style={{ color: group.color }} />
                </div>
                <div>
                  <h3 className="font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>{group.label}</h3>
                  <p className="text-xs" style={{ color: "#4a5a75", fontFamily: "'JetBrains Mono', monospace" }}>
                    {group.skills.length} core competencies
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {group.skills.map((s, i) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} color={group.color} started={inView} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
