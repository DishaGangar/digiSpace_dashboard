import React from "react";
import { CYAN, MUTED } from "../constants/tokens";
import { IconCircle } from "./ui";

import airImg from "../assets/air.png";
import dropImg from "../assets/drop.png";
import humidImg from "../assets/humid.png";
import flashImg from "../assets/flash.png";
import usersImg from "../assets/users.png";
import logoSvg from "../assets/ds-logo.svg";
import homeImg from "../assets/nav-icons/home.svg";
import analyseImg from "../assets/nav-icons/pie.svg";
import controlImg from "../assets/nav-icons/tiles.svg";

const S = { flexShrink: 0 };

export const HamIcon = () => (
  <svg width="15" height="11" viewBox="0 0 15 11" style={S}>
    <line x1="0" y1="1" x2="15" y2="1" stroke={CYAN} strokeWidth="2" strokeLinecap="round" />
    <line x1="0" y1="5.5" x2="10" y2="5.5" stroke={CYAN} strokeWidth="2" strokeLinecap="round" />
    <line x1="0" y1="10" x2="15" y2="10" stroke={CYAN} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const AirIcon = () => (
  <IconCircle size={36}>
    <img src={airImg} style={{ width: 18, height: 18 }} alt="air" />
  </IconCircle>
);

export const WaterIcon = () => (
  <IconCircle size={30}>
    <img src={dropImg} style={{ width: 14, height: 14 }} alt="water" />
  </IconCircle>
);

export const WaterBolt = () => (
  <img src={humidImg} style={{ width: 40, height: 40 }} alt="humid" />
);

export const ZapIcon = () => (
  <IconCircle size={30}>
    <img src={flashImg} style={{ width: 18, height: 18 }} alt="energy" />
  </IconCircle>
);

export const UsersIcon = () => (
  <IconCircle size={25}>
    <img src={usersImg} style={{ width: 14, height: 14 }} alt="users" />
  </IconCircle>
);

export const DotsIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill={MUTED} style={S}>
    <circle cx="12" cy="5" r="1.6" />
    <circle cx="12" cy="12" r="1.6" />
    <circle cx="12" cy="19" r="1.6" />
  </svg>
);

export const ArrDownIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
    stroke={CYAN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={S}>
    <line x1="12" y1="4" x2="12" y2="20" />
    <polyline points="6 14 12 20 18 14" />
  </svg>
);

export const HomeIcon = ({ active }) => (
  <img src={homeImg} style={{ width: 25, height: 25 }} alt="home" />
);

export const AnalyseIcon = ({ active }) => (
  <img src={analyseImg} style={{ width: 25, height: 25 }} alt="analyse" />
);

export const ControlIcon = ({ active }) => (
  <img src={controlImg} style={{ width: 25, height: 25 }} alt="control" />
);

export const Logo = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "clamp(5px,.45vw,9px)" }}>
    <img src={logoSvg} style={{ width: 140, height: 140 }} alt="DigiSpace" />
  </div>
);

export const AvatarCircle = () => {
  const s = "clamp(30px,2.5vw,46px)";
  return (
    <div style={{
      width: s, height: s, borderRadius: "50%",
      border: `2px solid ${CYAN}`, overflow: "hidden",
      flexShrink: 0, background: "#2a5a50",
    }}>
      <svg viewBox="0 0 52 52" width="100%" height="100%">
        <rect width="52" height="52" fill="#d4956a" />
        <ellipse cx="26" cy="10" rx="16" ry="10" fill="#2a1a0a" />
        <ellipse cx="26" cy="22" rx="13" ry="14" fill="#c8845a" />
        <circle cx="21" cy="20" r="1.8" fill="#222" />
        <circle cx="31" cy="20" r="1.8" fill="#222" />
        <path d="M8 52 Q8 36 26 36 Q44 36 44 52Z" fill="#4a3020" />
      </svg>
    </div>
  );
};