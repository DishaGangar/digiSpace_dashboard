

import React, { useState } from "react";
import { LINEAR_BG } from "./constants/tokens";
import { NavId, CardId, NavItem } from "./types";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { HomeIcon, AnalyseIcon, ControlIcon } from "./components/icons";

import LightsCard from "../src/Cards/LightCards";
import WaterCard from "../src/Cards/WaterCard";
import CarbonCard from "./Cards/CarbonCard";
import EnergyCard from "./Cards/EnergyCard";
import FootfallCard from "./Cards/FootfallCard";

const navItems: NavItem[] = [
  { id: "home",    label: "Home",    Icon: HomeIcon },
  { id: "analyse", label: "Analyse", Icon: AnalyseIcon },
  { id: "control", label: "Control", Icon: ControlIcon },
];

const App: React.FC = () => {
  const [nav, setNav] = useState<NavId>("home");
  const [sel, setSel] = useState<CardId>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { width: 100%; height: 100%; overflow: hidden; }
        body { background: #060d18; font-family: 'Outfit', sans-serif; }
        button { font-family: inherit; cursor: pointer; }
        ::-webkit-scrollbar { display: none; }
      `}</style>

      <div style={{
        width: "100vw", height: "100vh",
        display: "flex", flexDirection: "column",
        overflow: "hidden",
        background: LINEAR_BG,
        fontFamily: "'Outfit', sans-serif",
      }}>
        <Header />

        <div
          onClick={() => setSel(null)}
          style={{
            flex: 1, minHeight: 0,
            display: "flex", flexDirection: "row",
            overflow: "hidden",
          }}
        >
          <Sidebar nav={nav} setNav={setNav} navItems={navItems} />

          <main
            onClick={(e) => e.stopPropagation()}
            style={{
              flex: 1,
              minWidth: 0,
              minHeight: 0,
              padding: "clamp(8px,1vh,16px) clamp(10px,1vw,18px)",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "1fr 1fr",
              gap: "clamp(7px,.8vw,13px)",
            }}
          >
            <LightsCard  id="lights"   sel={sel === "lights"}   onSel={setSel} />
            <WaterCard   id="water"    sel={sel === "water"}    onSel={setSel} />
            <CarbonCard  id="carbon"   sel={sel === "carbon"}   onSel={setSel} />

            <EnergyCard   id="energy"   sel={sel === "energy"}   onSel={setSel} />
            <FootfallCard id="footfall" sel={sel === "footfall"} onSel={setSel} />
          </main>
        </div>
      </div>
    </>
  );
};

export default App;