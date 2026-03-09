import React from "react";

export type NavId = "home" | "analyse" | "control";

export type CardId = "lights" | "water" | "carbon" | "energy" | "footfall" | null;

export interface CardProps {
  id: string;
  sel: boolean;
  onSel: (id: string | null) => void;
}

export interface NavItem {
  id: NavId;
  label: string;
  Icon: React.ComponentType<{ active: boolean }>;
}
