import { useEffect, useRef, useState } from "react";
import { ChevronDown, Download, Mail, FolderOpen, Shield, Cpu, Lock } from "lucide-react";
import portrait from "../../assets/me.png";

export function Hero() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative overflow-hidden" style={{ minHeight: '72vh' }}>
      <ParticleCanvas />

      {/* Decorative orbs */}
      <div
        className="absolute w-[180px] h-[180px] sm:w-[400px] sm:h-[400px] rounded-full pointer-events-none"
        style={{
          bottom: "4%", left: "-8%",
          background: "radial-gradient(circle, rgba(5,200,220,0.05) 0%, transparent 70%)",
          filter: "blur(50px)",
          animation: "orb-drift 18s ease-in-out infinite reverse",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <div className="space-y-7 animate-fade-up">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs glass"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: "#4a5a75" }}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" style={{ boxShadow: "0 0 8px rgba(52,211,153,0.8)" }} />
              <span style={{ color: "#8899b4" }}>Available for opportunities worldwide</span>
            </div>

            {/* Heading */}
            <div>
              <p className="text-sm mb-3" style={{ fontFamily: "'JetBrains Mono', monospace", color: "#2f7cf6", letterSpacing: "0.12em" }}>
                &gt; Hello, world. I'm
              </p>
              <h1
                className="text-5xl sm:text-6xl xl:text-[4.5rem] font-black leading-none tracking-tight text-white mb-3"
                style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.04em" }}
              >
                Abasiono<br />
                <span className="shimmer-text">Stephen</span>{" "}
                <span style={{ color: "#eef2f8" }}>Ukpong</span>
              </h1>
              <div className="text-lg mt-4" style={{ fontFamily: "'JetBrains Mono', monospace", color: "#4a5a75" }}>
                <TypedText phrases={[
                  "Cybersecurity Analyst",
                  "Software Developer",
                  "AI Product Developer",
                  "Tech Innovator",
                ]} />
              </div>
            </div>

            {/* Tagline */}
            <p className="text-base leading-relaxed max-w-[480px]" style={{ color: "#8899b4", fontFamily: "'Inter', sans-serif" }}>
              I build{" "}
              <span className="font-medium" style={{ color: "#eef2f8" }}>secure software</span>,{" "}
              <span className="font-medium" style={{ color: "#eef2f8" }}>AI-powered products</span>, and
              innovative digital solutions that solve real-world problems.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => go("projects")}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #2f7cf6, #1d5fcc)",
                  color: "#fff",
                  fontFamily: "'Inter', sans-serif",
                  boxShadow: "0 4px 24px rgba(47,124,246,0.4)",
                }}
              >
                <FolderOpen className="w-4 h-4" />
                View Projects
              </button>
              <button
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 glass"
                style={{ color: "#8899b4", fontFamily: "'Inter', sans-serif" }}
              >
                <Download className="w-4 h-4" />
                Resume
              </button>
              <button
                onClick={() => go("contact")}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  border: "1px solid rgba(5,200,220,0.3)",
                  color: "#05c8dc",
                  background: "rgba(5,200,220,0.05)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                <Mail className="w-4 h-4" />
                Contact
              </button>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-4 gap-px rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(47,124,246,0.1)", background: "rgba(47,124,246,0.06)" }}
            >
              {[
                { n: "10+", l: "Projects" },
                { n: "5+",  l: "Years" },
                { n: "4",   l: "Certs" },
                { n: "8+", l: "Tools" },
              ].map(s => (
                <div key={s.l} className="px-4 py-4 text-center" style={{ background: "rgba(4,7,13,0.6)" }}>
                  <div className="text-xl font-black" style={{ color: "#2f7cf6", fontFamily: "'Inter', sans-serif" }}>{s.n}</div>
                  <div className="text-xs mt-0.5" style={{ color: "#4a5a75", fontFamily: "'JetBrains Mono', monospace" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – avatar */}
          <div className="flex justify-center lg:justify-end" style={{ animationDelay: "0.2s" }}>
            <Avatar />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <button
        onClick={() => go("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 group"
        style={{ color: "#4a5a75" }}
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.15em" }}>SCROLL</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
}

/* ── Particle canvas ─────────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);

    const COLS = Math.max(6, Math.floor(canvas.width / 22));
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノ";

    type Drop = { x: number; y: number; speed: number; opacity: number; char: string };
    const drops: Drop[] = Array.from({ length: COLS }, (_, i) => ({
      x: i * 22 + 8,
      y: Math.random() * -canvas.height,
      speed: 0.4 + Math.random() * 0.8,
      opacity: 0.06 + Math.random() * 0.1,
      char: chars[Math.floor(Math.random() * chars.length)],
    }));

    let raf: number;
    const tick = () => {
      ctx.fillStyle = "rgba(4,7,13,0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = "13px 'JetBrains Mono', monospace";

      for (const d of drops) {
        ctx.fillStyle = `rgba(47,124,246,${d.opacity})`;
        ctx.fillText(d.char, d.x, d.y);
        d.y += d.speed;
        if (d.y > canvas.height) {
          d.y = -20;
          d.char = chars[Math.floor(Math.random() * chars.length)];
        }
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}

/* ── Typed text ──────────────────────────────────────── */
function TypedText({ phrases }: { phrases: string[] }) {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed]  = useState("");
  const [deleting, setDeleting]    = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIdx];
    if (!deleting && displayed.length < phrase.length) {
      const t = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 65);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === phrase.length) {
      const t = setTimeout(() => setDeleting(true), 2200);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setPhraseIdx(i => (i + 1) % phrases.length);
    }
  }, [displayed, deleting, phraseIdx, phrases]);

  return (
    <span>
      <span style={{ color: "#05c8dc" }}>{displayed}</span>
      <span className="animate-blink" style={{ color: "#2f7cf6", marginLeft: "2px" }}>|</span>
    </span>
  );
}

/* ── Avatar ──────────────────────────────────────────── */
function Avatar() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Decorative outer ring */}
      <div
        className="absolute w-[220px] h-[220px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] rounded-full animate-spin-slow"
        style={{
          border: "1px solid transparent",
          backgroundImage:
            "linear-gradient(#04070d,#04070d), conic-gradient(from 0deg, #2f7cf6, #05c8dc, #8b5cf6, #2f7cf6)",
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
          filter: "blur(8px)",
          opacity: 0.95,
        }}
      />

      {/* Subtle inner glow ring */}
      <div
        className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[370px] lg:h-[370px] rounded-full"
        style={{ border: "1px solid rgba(47,124,246,0.18)", boxShadow: "0 0 40px rgba(47,124,246,0.10) inset" }}
      />

      {/* Portrait frame */}
      <div
        className="relative w-[160px] h-[160px] sm:w-[250px] sm:h-[250px] lg:w-[310px] lg:h-[310px] rounded-full overflow-hidden"
        style={{
          border: "3px solid rgba(47,124,246,0.35)",
          boxShadow: "0 8px 40px rgba(2,6,23,0.6), inset 0 0 30px rgba(47,124,246,0.03)",
        }}
      >
        <img
          src={portrait}
          alt="Abasiono Stephen Ukpong"
          className="w-full h-full object-cover"
          style={{ display: "block" }}
        />

        {/* Blend overlays */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(60% 40% at 30% 20%, rgba(47,124,246,0.08), transparent 40%), linear-gradient(180deg, rgba(0,0,0,0.0), rgba(0,0,0,0.18))",
          mixBlendMode: "overlay",
        }} />

        {/* Soft vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{
          boxShadow: "inset 0 40px 80px rgba(2,6,23,0.6)",
        }} />
      </div>

      {/* Floating badges (responsive positions) */}
      <div className="absolute -bottom-4 left-2 sm:-left-6 px-3 py-2 rounded-xl text-xs animate-float glass"
        style={{ fontFamily: "'JetBrains Mono', monospace", color: "#05c8dc", animationDelay: "0s" }}>
        <Shield className="w-3 h-3 inline mr-1.5" style={{ color: "#2f7cf6" }} />
        Cyber Analyst
      </div>
      <div className="absolute -top-2 right-2 sm:-right-8 px-3 py-2 rounded-xl text-xs animate-float glass"
        style={{ fontFamily: "'JetBrains Mono', monospace", color: "#8b5cf6", animationDelay: "1.5s" }}>
        <Cpu className="w-3 h-3 inline mr-1.5" />
        AI Dev
      </div>
      <div className="absolute top-1/2 right-2 sm:-right-12 -translate-y-1/2 px-3 py-2 rounded-xl text-xs animate-float glass"
        style={{ fontFamily: "'JetBrains Mono', monospace", color: "#10b981", animationDelay: "0.8s" }}>
        <Lock className="w-3 h-3 inline mr-1.5" />
        Secure Dev
      </div>
    </div>
  );
}
