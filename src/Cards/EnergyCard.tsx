import React from "react";
import ReactECharts from "echarts-for-react";
import Card from "../components/Card";
import { CHeader, Badge, T } from "../components/ui";
import { ZapIcon, DotsIcon } from "../components/icons";
import { CYAN, MUTED } from "../constants/tokens";
import { CardProps } from "../types";

const EnergyCard: React.FC<CardProps> = ({ id, sel, onSel }) => {
  const option = {
    animation: true,
    grid: { top: 6, bottom: 28, left: 6, right: 6 },
    xAxis: {
      type: "category",
      data: ["M", "T", "W", "T", "F", "S", "Today"],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: MUTED, fontSize: 11, fontFamily: "Outfit" },
    },
    yAxis: { type: "value", show: false },
    series: [
      {
        type: "bar",
        data: [62, 108, 70, 150, 100, 42, 75],
        barWidth: "50%",
        itemStyle: { color: CYAN, borderRadius: [4, 4, 0, 0] },
      },
    ],
  };

  return (
    <Card id={id} selected={sel} onSelect={onSel}>
      <CHeader
        left={<><ZapIcon /><T>Energy Consumption</T></>}
        right={<><Badge>Last 7 Day</Badge><DotsIcon /></>}
      />
      <div style={{ flex: 1, minHeight: 0 }}>
        <ReactECharts option={option} style={{ height: "100%", width: "100%" }} notMerge />
      </div>
    </Card>
  );
};

export default EnergyCard;
