import React, { useState } from "react";
import Card from "../components/Card";
import { CHeader, Toggle, T } from "../components/ui";
import { AirIcon } from "../components/icons";
import SemiGauge from "../components/SemiGauge";
import { CardProps } from "../types";

const LightsCard: React.FC<CardProps> = ({ id, sel, onSel }) => {
  const [on, setOn] = useState<boolean>(true);

  return (
    <Card id={id} selected={sel} onSelect={onSel}>
      <CHeader
        left={
          <>
            <AirIcon />
            <T>Lights</T>
          </>
        }
        right={<Toggle on={on} onChange={setOn} />}
      />
      <div style={{ flex: 1, minHeight: 0 }}>
        <SemiGauge value={4300} min={2700} max={5000} />
      </div>
    </Card>
  );
};

export default LightsCard;
