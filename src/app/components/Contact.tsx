import { useState } from "react";
import { useInView } from "./hooks";
import { SectionLabel } from "./SectionLabel";
import { Mail, ExternalLink, GitFork, Globe, Phone, Send, ArrowUpRight, CheckCircle2 } from "lucide-react";

const links = [
  { icon: Mail,     label: "Email",     value: "abasionoukpong74@gmail.com",  href: "mailto:abasionoukpong74@gmail.com", accent: "#2f7cf6" },
  { icon: ExternalLink, label: "LinkedIn",  value: "/in/abasiono-stephen",         href: "linkedin.com/in/abasiono-stephen", accent: "#0ea5e9" },
  { icon: Globe,    label: "Portfolio", value: "abasiono.dev",                href: "#", accent: "#05c8dc" },
  { icon: Phone,    label: "Phone",     value: "+234 8083350111",           href: "tel:+2348083350111", accent: "#10b981" },
];

export function Contact() {
  const { ref, inView } = useInView(0.1);
  const [form, setForm]   = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent]   = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "2348083350111"; // WhatsApp number (no +, no spaces)
    const lines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Subject: ${form.subject}`,
      `Message: ${form.message}`,
    ];
    const text = encodeURIComponent(lines.join("\n"));
    const waUrl = `https://wa.me/${phone}?text=${text}`;

    setLoading(true);
    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank");
    }
    setLoading(false);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-28 relative section-hidden ${inView ? "section-visible" : ""}`}
      style={{ background: "#04070d" }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(47,124,246,0.25), transparent)" }} />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] opacity-[0.06] pointer-events-none"
        style={{ background: "#2f7cf6" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionLabel index="07" label="Contact" />

        <h2 className="text-4xl xl:text-5xl font-black text-white mb-3"
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.035em" }}>
          Let's Build{" "}
          <span style={{ background: "linear-gradient(135deg, #2f7cf6, #05c8dc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Something
          </span>
        </h2>
        <p className="text-sm mb-14 max-w-md" style={{ color: "#4a5a75", fontFamily: "'Inter', sans-serif" }}>
          Whether you need a security assessment, a full-stack app, or an AI-powered product — I'm ready to help.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Links */}
          <div className="lg:col-span-2 space-y-3">
            {links.map(l => {
              const Icon = l.icon;
              return (
                <a
                  key={l.label}
                  href={l.href}
                  className="group flex items-center gap-4 p-4 rounded-xl glass transition-all duration-300 hover:-translate-y-0.5"
                  style={{ textDecoration: "none" }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${l.accent}12`, border: `1px solid ${l.accent}25` }}>
                    <Icon className="w-4 h-4" style={{ color: l.accent }} />
                  </div>
                  <div>
                    <div className="text-xs mb-0.5" style={{ color: "#4a5a75", fontFamily: "'JetBrains Mono', monospace" }}>{l.label}</div>
                    <div className="text-sm font-medium text-white" style={{ fontFamily: "'Inter', sans-serif" }}>{l.value}</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-40 transition-opacity" style={{ color: l.accent }} />
                </a>
              );
            })}

            {/* Availability card */}
            <div className="p-5 rounded-xl glass mt-6"
              style={{ border: "1px solid rgba(16,185,129,0.2)" }}>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" style={{ boxShadow: "0 0 8px rgba(52,211,153,0.7)" }} />
                <span className="text-sm font-semibold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>Available for Work</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "#4a5a75", fontFamily: "'Inter', sans-serif" }}>
                Open to remote opportunities, freelance contracts, and full-time roles with global companies.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="lg:col-span-3 p-7 rounded-2xl glass space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs mb-2" style={{ color: "#4a5a75", fontFamily: "'JetBrains Mono', monospace" }}>Name</label>
                <input className="portfolio-input" type="text" placeholder="Your name" value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div>
                <label className="block text-xs mb-2" style={{ color: "#4a5a75", fontFamily: "'JetBrains Mono', monospace" }}>Email</label>
                <input className="portfolio-input" type="email" placeholder="your@email.com" value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })} required />
              </div>
            </div>

            <div>
              <label className="block text-xs mb-2" style={{ color: "#4a5a75", fontFamily: "'JetBrains Mono', monospace" }}>Subject</label>
              <input className="portfolio-input" type="text" placeholder="What can I help you with?" value={form.subject}
                onChange={e => setForm({ ...form, subject: e.target.value })} required />
            </div>

            <div>
              <label className="block text-xs mb-2" style={{ color: "#4a5a75", fontFamily: "'JetBrains Mono', monospace" }}>Message</label>
              <textarea
                className="portfolio-input"
                style={{ resize: "none", height: "140px" }}
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>

            {sent ? (
              <div className="flex items-center gap-3 p-4 rounded-xl"
                style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}>
                <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: "#10b981" }} />
                <div>
                  <div className="text-sm font-semibold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>Message sent successfully!</div>
                  <div className="text-xs" style={{ color: "#4a5a75", fontFamily: "'JetBrains Mono', monospace" }}>I'll respond within 24 hours.</div>
                </div>
              </div>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02] hover:brightness-110 disabled:opacity-70"
                style={{
                  background: "linear-gradient(135deg, #2f7cf6, #1d5fcc)",
                  color: "#fff",
                  fontFamily: "'Inter', sans-serif",
                  boxShadow: "0 4px 24px rgba(47,124,246,0.35)",
                }}
              >
                <Send className="w-4 h-4" />
                {loading ? "Sending…" : "Send Message"}
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
