import { useInView } from "./hooks";
import { SectionLabel } from "./SectionLabel";

const experiences = [
  {
    role: "AI Product Developer",
    company: "Knowzone AI",
    period: "2026",
    type: "Startup · Part-time",
    desc: "Leading development of an AI-powered multilingual educational platform for African learners. Architecting NLP pipelines, personalized learning systems, and mobile-first interfaces at scale.",
    tags: ["AI/NLP Architecture", "Multilingual Systems", "Mobile-first Design", "Product Strategy"],
    accent: "#05c8dc",
    dot: "#05c8dc",
  },
  {
    role: "Backend Developer",
    company: "Oikus Real Estate Startup",
    period: "2025",
    type: "Startup · Full-time",
    desc: "Architecting and building a full-stack AI-enabled real estate management platform with smart property recommendations, pricing models, and team leadership responsibilities.",
    tags: ["Full-stack Architecture", "AI Recommendations", "Team Leadership", "Agile Delivery"],
    accent: "#10b981",
    dot: "#10b981",
  },
  {
    role: "Cybersecurity Analyst & Software Developer",
    company: "Freelance",
    period: "2022 – Present",
    type: "Freelance · Remote",
    desc: "Delivering end-to-end cybersecurity assessments, penetration testing, and custom software development for clients across multiple industries. Building secure web applications and implementing security hardening.",
    tags: ["Penetration Testing", "Vulnerability Assessment", "Secure App Dev", "Security Consulting"],
    accent: "#2f7cf6",
    dot: "#2f7cf6",
  },
];

export function Experience() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-28 relative section-hidden ${inView ? "section-visible" : ""}`}
      style={{ background: "#060a14" }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.25), transparent)" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionLabel index="04" label="Experience" color="#10b981" />

        <h2 className="text-4xl xl:text-5xl font-black text-white mb-16"
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.035em" }}>
          Career{" "}
          <span style={{ background: "linear-gradient(135deg, #10b981, #05c8dc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Timeline
          </span>
        </h2>

        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-5 bottom-5 w-px"
            style={{ background: "linear-gradient(180deg, #2f7cf6, #05c8dc, #10b981)" }}
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-16" style={{ animationDelay: `${i * 0.15}s` }}>
                {/* Dot */}
                <div
                  className="absolute left-[14px] top-6 w-[22px] h-[22px] rounded-full flex items-center justify-center"
                  style={{
                    background: "#04070d",
                    border: `2px solid ${exp.dot}`,
                    boxShadow: `0 0 16px ${exp.dot}60`,
                  }}
                >
                  <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: exp.dot }} />
                </div>

                <div
                  className="p-7 rounded-2xl glass transition-all duration-300 hover:-translate-y-0.5 hover:border-opacity-30"
                  style={{ borderColor: `${exp.accent}18` }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-semibold" style={{ color: exp.accent, fontFamily: "'Inter', sans-serif" }}>
                          {exp.company}
                        </span>
                        <span className="px-2 py-0.5 text-xs rounded-lg"
                          style={{ background: `${exp.accent}0d`, border: `1px solid ${exp.accent}25`, color: exp.accent, fontFamily: "'JetBrains Mono', monospace" }}>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <span
                      className="px-3 py-1.5 rounded-lg text-xs glass shrink-0"
                      style={{ color: "#4a5a75", fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed mb-5" style={{ color: "#8899b4", fontFamily: "'Inter', sans-serif" }}>
                    {exp.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs rounded-lg"
                        style={{ background: `${exp.accent}0a`, color: exp.accent, fontFamily: "'JetBrains Mono', monospace" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
