interface Props {
  index: string;
  label: string;
  color?: string;
}

export function SectionLabel({ index, label, color = "#2f7cf6" }: Props) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span style={{ fontFamily: "'JetBrains Mono', monospace", color, fontSize: "0.7rem", letterSpacing: "0.18em" }}>
        {index}
      </span>
      <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${color}40, transparent)` }} />
      <span style={{ fontFamily: "'JetBrains Mono', monospace", color, fontSize: "0.7rem", letterSpacing: "0.18em" }}>
        {label.toUpperCase()}
      </span>
    </div>
  );
}
