import React from "react";
import Card from "../components/Card";
import { CHeader, Badge, T } from "../components/ui";
import { WaterIcon, WaterBolt, ArrDownIcon } from "../components/icons";
import { CYAN, TEXT } from "../constants/tokens";
import { CardProps } from "../types";

const WaterCard: React.FC<CardProps> = ({ id, sel, onSel }) => {
  return (
    <Card id={id} selected={sel} onSelect={onSel}>
      <CHeader
        left={<><WaterIcon /><T>Water Consumption</T></>}
        right={<Badge>Yesterday</Badge>}
      />
      <div style={{
        flex: 1, minHeight: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: "clamp(10px,1.1vh,20px)",
      }}>
        <WaterBolt />

        <div style={{
          background: "#176156",
          border: "1px solid rgba(29,233,182,.18)",
          borderRadius: "30px",
          padding: "clamp(6px,.7vh,12px) clamp(16px,2vw,40px)",
        }}>
          <span style={{
            fontSize: "18px", fontWeight: 700, color: TEXT,
            fontFamily: "Poppins", letterSpacing: "-.03em", whiteSpace: "nowrap",
          }}>
            8.42m³
          </span>
        </div>

        <div style={{
          background: "rgba(29,233,182,.07)",
          border: "1px solid rgba(29,233,182,.14)",
          borderRadius: "clamp(20px,.35vw,7px)",
          padding: "clamp(10px,.55vh,8px) clamp(8px,.7vw,12px)",
          display: "flex", alignItems: "center", gap: "clamp(4px,.3vw,6px)",
          color: CYAN, fontSize: "clamp(14px,.68vw,12px)", whiteSpace: "nowrap",
        }}>
          <ArrDownIcon />
          <span>1.2m³ less water used compare to last tuesday</span>
        </div>
      </div>
    </Card>
  );
};

export default WaterCard;
