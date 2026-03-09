import React from "react";
import { CYAN, TEXT, MUTED, BADGE_BG } from "../constants/tokens";

interface CHeaderProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

export const CHeader: React.FC<CHeaderProps> = ({ left, right }) => (
  <div style={{
    display: "flex", alignItems: "center", justifyContent: "space-between",
    flexShrink: 0, marginBottom: "clamp(6px,.7vh,10px)",
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: "clamp(5px,.4vw,8px)" }}>{left}</div>
    <div style={{ display: "flex", alignItems: "center", gap: "clamp(4px,.35vw,7px)" }}>{right}</div>
  </div>
);

interface ToggleProps {
  on: boolean;
  onChange: (val: boolean) => void;
}

export const Toggle: React.FC<ToggleProps> = ({ on, onChange }) => (
  <div
    onClick={(e) => { e.stopPropagation(); onChange(!on); }}
    style={{
      width: "clamp(34px,2.2vw,44px)", height: "clamp(18px,1.2vw,23px)",
      borderRadius: 999, background: on ? CYAN : "rgba(255,255,255,.15)",
      position: "relative", cursor: "pointer", transition: "background .2s", flexShrink: 0,
    }}
  >
    <div style={{
      width: "clamp(13px,.95vw,18px)", height: "clamp(13px,.95vw,18px)",
      borderRadius: "50%", background: on ? "#060d18" : "#fff",
      position: "absolute", top: "50%", transform: "translateY(-50%)",
      left: on ? "calc(100% - clamp(14px,1.05vw,20px))" : "clamp(2px,.15vw,3px)",
      transition: "left .2s", boxShadow: "0 1px 4px rgba(0,0,0,.6)",
    }} />
  </div>
);

interface BadgeProps {
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ children }) => (
  <span style={{
    background: BADGE_BG, color: TEXT,
    fontSize: "clamp(9px,.65vw,11px)", fontWeight: 500,
    padding: "clamp(3px,.28vh,5px) clamp(7px,.6vw,12px)",
    borderRadius: 999, whiteSpace: "nowrap",
  }}>
    {children}
  </span>
);

interface TProps {
  children: React.ReactNode;
}

export const T: React.FC<TProps> = ({ children }) => (
  <span style={{
    color: "#cdd8e8", fontSize: "clamp(11px,.8vw,14px)",
    fontWeight: 500, fontFamily: "Outfit,sans-serif", whiteSpace: "nowrap",
  }}>
    {children}
  </span>
);

interface IconCircleProps {
  children: React.ReactNode;
  size?: number;
}

export const IconCircle: React.FC<IconCircleProps> = ({ children, size = 30 }) => (
  <div style={{
    width: size, height: size, borderRadius: "50%",
    background: "rgba(255,255,255,.15)", display: "flex",
    alignItems: "center", justifyContent: "center", flexShrink: 0,
  }}>
    {children}
  </div>
);
