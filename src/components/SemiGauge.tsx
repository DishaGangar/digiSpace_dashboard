import React from "react";
import { CYAN, TEXT } from "../constants/tokens";

interface SemiGaugeProps {
  value?: number;
  min?: number;
  max?: number;
}

const SemiGauge: React.FC<SemiGaugeProps> = ({ value = 4300, min = 2700, max = 5000 }) => {
  const R = 62, cx = 128, cy = 105;
  const startA = 210, endA = -30, total = 240;
  const pct = (value - min) / (max - min);
  const valA = startA - pct * total;
  const rad = (d: number) => (d * Math.PI) / 180;

  const arc = (r: number, sa: number, ea: number): string => {
    const s = { x: cx + r * Math.cos(rad(sa)), y: cy - r * Math.sin(rad(sa)) };
    const e = { x: cx + r * Math.cos(rad(ea)), y: cy - r * Math.sin(rad(ea)) };
    return `M${s.x} ${s.y} A${r} ${r} 0 ${sa - ea > 180 ? 1 : 0} 1 ${e.x} ${e.y}`;
  };

  const tx = cx + R * Math.cos(rad(valA));
  const ty = cy - R * Math.sin(rad(valA));

  const ticks = Array.from({ length: 37 }, (_, i) => {
    const a = startA - (i / 36) * total;
    const r1 = R + 10;
    const r2 = R + 18;
    const isActive = a >= valA;
    return {
      x1: cx + r1 * Math.cos(rad(a)), y1: cy - r1 * Math.sin(rad(a)),
      x2: cx + r2 * Math.cos(rad(a)), y2: cy - r2 * Math.sin(rad(a)),
      isActive,
    };
  });

  const labelR = R + 24;
  const startLabelX = cx + labelR * Math.cos(rad(startA));
  const startLabelY = cy - labelR * Math.sin(rad(startA));
  const endLabelX   = cx + labelR * Math.cos(rad(endA));
  const endLabelY   = cy - labelR * Math.sin(rad(endA));

  return (
    <svg viewBox="0 0 256 175" style={{ width: "100%", height: "100%" }}>
      <defs>
        <filter id="gaugeGlow">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {ticks.map((t, i) => (
        <line
          key={i}
          x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
          stroke={t.isActive ? CYAN : "rgba(255,255,255,0.3)"}
          strokeWidth={2}
          strokeLinecap="round"
        />
      ))}

      {/* Inactive track */}
      <path d={arc(R, startA, endA)} fill="none"
        stroke="rgba(255,255,255,0.15)" strokeWidth={11} strokeLinecap="round" />
      {/* Active arc */}
      <path d={arc(R, startA, valA)} fill="none"
        stroke={CYAN} strokeWidth={11} strokeLinecap="round" />
      {/* Glowing thumb */}
      <circle cx={tx} cy={ty} r={7} fill={CYAN} filter="url(#gaugeGlow)" />

      {/* Center value */}
      <text x={cx} y={cy + 10} textAnchor="middle" fill={TEXT}
        fontSize="26" fontWeight="700" fontFamily="Outfit,sans-serif">
        {value}k
      </text>

      {/* Min/max labels */}
      <text x={startLabelX + 18} y={startLabelY + 12} textAnchor="middle"
        fill="#FFFFFF" fontSize="10" fontWeight="700" fontFamily="Outfit,sans-serif">
        2700k
      </text>
      <text x={endLabelX - 18} y={endLabelY + 12} textAnchor="middle"
        fill="#FFFFFF" fontSize="10" fontWeight="700" fontFamily="Outfit,sans-serif">
        5000k
      </text>
    </svg>
  );
};

export default SemiGauge;
