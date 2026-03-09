import React from "react";
import { CARD_GRAD, LINEAR_BG_TEAL, BORDER, SEL_G } from "../constants/tokens";

interface CardProps {
  id: string;
  selected: boolean;
  onSelect: (id: string | null) => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ id, selected, onSelect, children, style = {} }) => {
  return (
    <div
      onClick={(e) => { e.stopPropagation(); onSelect(selected ? null : id); }}
      style={{
        background: selected ? LINEAR_BG_TEAL : CARD_GRAD,
        borderRadius: "clamp(10px,1vw,16px)",
        border: selected ? "1px solid rgba(63,253,224,0.55)" : `1px solid ${BORDER}`,
        boxShadow: selected
          ? `0 0 0 3px ${SEL_G}, 0 4px 24px rgba(0,0,0,.5)`
          : "0 2px 16px rgba(0,0,0,.4)",
        padding: "clamp(12px,1.3vh,18px) clamp(12px,1.1vw,20px) clamp(8px,1vh,14px)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        cursor: "pointer",
        transition: "border .2s, box-shadow .2s",
        width: "100%",
        height: "100%",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
