import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Label,
} from "recharts";

const data = [
  {
    name: "18-24",
    uv: 31.47,
    pv: 2400,
    fill: "var(--primary)",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

export default function ScoreMeter() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        width={200}
        height={100}
        innerRadius="100%"
        outerRadius="80%"
        data={data}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar background dataKey="uv" />
        <Label
          content={({ viewBox }) => {
            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
              return (
                <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                  <tspan
                    x={viewBox.cx}
                    y={(viewBox.cy || 0) - 16}
                    className="fill-foreground text-2xl font-bold text-black"
                  >
                    HOLA
                  </tspan>
                  <tspan
                    x={viewBox.cx}
                    y={(viewBox.cy || 0) + 4}
                    className="fill-muted-foreground"
                  >
                    Visitors
                  </tspan>
                </text>
              );
            }
          }}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}
