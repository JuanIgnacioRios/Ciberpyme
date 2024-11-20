import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Enero", t1: 4000, t2: 2400, t3: 2400 },
  { name: "Febrero", t1: 3700, t2: 2200, t3: 2300 },
  { name: "Marzo", t1: 3400, t2: 2000, t3: 2200 },
  { name: "Abril", t1: 3100, t2: 1800, t3: 2100 },
  { name: "Mayo", t1: 2800, t2: 1600, t3: 2000 },
  { name: "Junio", t1: 2500, t2: 1400, t3: 1900 },
  { name: "Julio", t1: 2200, t2: 1200, t3: 1800 },
  { name: "Agosto", t1: 1900, t2: 1000, t3: 1700 },
  { name: "Septiembre", t1: 1600, t2: 800, t3: 1600 },
  { name: "Octubre", t1: 1300, t2: 600, t3: 1500 },
  { name: "Noviembre", t1: 1000, t2: 400, t3: 1400 },
  { name: "Diciembre", t1: 800, t2: 200, t3: 1300 },
];

export default function GraficoTipoVunlerabilidades() {
  return (
    <ResponsiveContainer width={"100%"} height={250}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend />
        <Bar dataKey="t1" stackId="a" fill="#0088FE" name="DDoS" />
        <Bar dataKey="t2" stackId="a" fill="#00C49F" name="Malware" />
        <Bar dataKey="t3" stackId="a" fill="#FFBB28" name="Phishing" />
      </BarChart>
    </ResponsiveContainer>
  );
}
