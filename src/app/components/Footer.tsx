import { GitFork, ExternalLink, Mail, ArrowUp, Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="relative border-t"
      style={{ background: "#04070d", borderColor: "rgba(47,124,246,0.08)" }}
    >
      {/* Top glow line */}
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(47,124,246,0.2), rgba(5,200,220,0.15), transparent)" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(47,124,246,0.12)", border: "1px solid rgba(47,124,246,0.25)" }}>
                <Terminal className="w-4 h-4" style={{ color: "#2f7cf6" }} />
              </div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, fontSize: "0.875rem" }}>
                <span style={{ color: "#2f7cf6" }}>ASU</span>
                <span style={{ color: "#4a5a75" }}>.dev</span>
              </span>
            </div>
            <p className="text-xs max-w-xs" style={{ color: "#4a5a75", fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}>
              Building Secure, Intelligent, and Impactful Digital Solutions
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: GitFork,   href: "#", label: "GitHub" },
              { icon: ExternalLink, href: "#", label: "LinkedIn" },
              { icon: Mail,     href: "mailto:abasionoukpong74@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-xl flex items-center justify-center glass transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
                style={{ color: "#4a5a75" }}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-xs transition-all duration-200 hover:scale-105"
            style={{ color: "#2f7cf6", fontFamily: "'JetBrains Mono', monospace" }}
          >
            <ArrowUp className="w-4 h-4" />
            BACK TO TOP
          </button>
        </div>

        <div className="mt-10 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(47,124,246,0.06)" }}>
          <p className="text-xs" style={{ color: "#1e2d45", fontFamily: "'JetBrains Mono', monospace" }}>
            © 2025 Abasiono Stephen Ukpong · All rights reserved
          </p>
          <p className="text-xs" style={{ color: "#1e2d45", fontFamily: "'JetBrains Mono', monospace" }}>
            Cybersecurity · Software · AI
          </p>
        </div>
      </div>
    </footer>
  );
}
