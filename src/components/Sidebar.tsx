import React from "react";
import { CYAN, MUTED, SIDEBAR_BG } from "../constants/tokens";
import { NavId, NavItem } from "../types";

interface SidebarProps {
  nav: NavId;
  setNav: (id: NavId) => void;
  navItems: NavItem[];
}

const Sidebar: React.FC<SidebarProps> = (
    { nav, setNav, navItems }
) => {
  return (
    <aside style={{
      width: 100,
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 30,
      paddingBottom: 30,
      borderRadius: "clamp(8px,.7vw,13px)",
      border: "1px solid rgba(255,255,255,.04)",
      background: SIDEBAR_BG,
      marginInline: 10,
    }}>
      {navItems.map(({ id, label, Icon }) => (
        <button
          key={id}
          onClick={(e) => { e.stopPropagation(); setNav(id); }}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            padding: "18px 0",
            width: "100%",
            color: id === nav ? CYAN : MUTED,
            fontSize: 11,
            fontFamily: "Outfit",
            fontWeight: id === nav ? 600 : 400,
          }}
        >
          <Icon active={id === nav} />
          {label}
        </button>
      ))}
    </aside>
  );
};

export default Sidebar;
