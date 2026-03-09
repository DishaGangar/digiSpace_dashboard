import React from "react";
import ReactECharts from "echarts-for-react";
import Card from "../components/Card";
import { CHeader, Badge, T } from "../components/ui";
import { UsersIcon } from "../components/icons";
import { CYAN, MUTED } from "../constants/tokens";
import { CardProps } from "../types";

const FootfallCard: React.FC<CardProps> = ({ id, sel, onSel }) => {
  const option = {
    animation: true,
    grid: { top: 6, bottom: 28, left: 36, right: 14 },
    xAxis: {
      type: "category",
      data: ["M", "T", "W", "T", "F", "S", "Today"],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: MUTED, fontSize: 11, fontFamily: "Outfit" },
      boundaryGap: false,
    },
    yAxis: {
      type: "value",
      min: 0, max: 150, interval: 25,
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { lineStyle: { color: "rgba(255,255,255,.04)" } },
      axisLabel: { color: MUTED, fontSize: 10, fontFamily: "Outfit" },
    },
    series: [
      {
        type: "line",
        data: [125, 112, 117, 108, 120, 130, 104],
        smooth: 0.5,
        symbol: "circle",
        symbolSize: (_: unknown, p: { dataIndex: number }) => (p.dataIndex === 6 ? 9 : 0),
        itemStyle: { color: CYAN },
        lineStyle: { color: CYAN, width: 2.2 },
        areaStyle: {
          color: {
            type: "linear", x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: "rgba(29,233,182,.28)" },
              { offset: 1, color: "#000" },
            ],
          },
        },
      },
    ],
  };

  return (
    <Card id={id} selected={sel} onSelect={onSel}>
      <CHeader
        left={<><UsersIcon /><T>Footfall</T></>}
        right={<Badge>Last 7 Day</Badge>}
      />
      <div style={{ flex: 1, minHeight: 0 }}>
        <ReactECharts option={option} style={{ height: "100%", width: "100%" }} notMerge />
      </div>
    </Card>
  );
};

export default FootfallCard;
