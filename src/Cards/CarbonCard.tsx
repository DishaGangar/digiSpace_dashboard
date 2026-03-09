import React from "react";
import ReactECharts from "echarts-for-react";
import Card from "../components/Card";
import { CHeader, Badge, T } from "../components/ui";
import { AirIcon, HamIcon } from "../components/icons";
import { CardProps } from "../types";

const CarbonCard: React.FC<CardProps> = ({ id, sel, onSel }) => {
const option = {
    animation: true,
    series: [{
      type: "pie",
      radius: ["50%", "78%"],   
      center: ["50%", "54%"],
      startAngle: 90,
      padAngle: 2,
      itemStyle: { borderWidth: 0 },
     

       label: {
        show: true,
        position: "outside",
         distanceToLabelLine: 1,
        minMargin: 1,  
        formatter: ({ value, name }) => `{a|${value}%}\n{b|${name}}`,
        backgroundColor: "#ffffff",
        borderRadius: 20,
        padding: [5, 10],
        align: "center",
        rich: {
          a: {
            color: "#000",
            fontSize: 11,
            fontWeight: 700,
            fontFamily: "Outfit",
            lineHeight: 16,
            align: "center",
          },
          b: {
            color: "#444",
            fontSize: 10,
            fontFamily: "Outfit",
            align: "center",
          }
        }
      },
      labelLine: {
        show: false,
        length: 0,
        length2: 0,
        lineStyle: { width: 0, opacity: 0 },
      },
      data: [
        { value: 30, name: "Coal",    itemStyle: { color: "#9b4c1e" } },
        { value: 20, name: "Hydro",   itemStyle: { color: "#f0a030" } },
        { value: 20, name: "Nuclear", itemStyle: { color: "#8b52cc" } },
        { value: 15, name: "Wind",    itemStyle: { color: "#1de9b6" } },
        { value: 15, name: "Solar",   itemStyle: { color: "#d94030" } },
      ],
    }],
      graphic: [{
      type: "group",
      left: "center",
      top: "center",
      z: 100,
      children: [
        {
          type: "rect",
          shape: { width: 160, height: 46, r: 23 },
          left: -80,
          top: -23,
          z: 100,
          style: {
            fill: "rgba(255, 255, 255, 0.85)",
            shadowBlur: 10,
            shadowColor: "rgba(0,0,0,0.18)"
          }
        },
        {
          type: "text",
          left: -52,
          top: -14,
          z: 101,
          style: {
            text: "95gm",
            font: "700 22px Outfit",
            fill: "#111"
          }
        },
        {
          type: "text",
          left: 22,
          top: -7,
          z: 101,
          style: {
            text: "CO2/kWh",
            font: "400 11px Outfit",
            fill: "#666"
          }
        }
      ]
    }]
  };

  return (
    <Card id={id} selected={sel} onSelect={onSel}>
      <CHeader
        left={<><AirIcon /><T>Carbon Intensity</T></>}
        right={<Badge>Current</Badge>}
      />

      <div style={{ flex: 1, minHeight: 0, position: "relative" }}>
        <ReactECharts
          option={option}
          style={{ height: "100%", width: "100%" }}
          notMerge
        />

      
      </div>
    </Card>
  );
};

export default CarbonCard;