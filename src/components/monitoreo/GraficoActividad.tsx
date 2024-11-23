import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const MAX_POINTS = 500;
function generateDefaultValues() {
  const data: { name: string; pv: number }[] = [];
  for (let i = 0; i < MAX_POINTS; i++) {
    const prevValue = data[i - 1]?.pv ?? 1000;
    const newValue = generateNextValue(prevValue);
    data.push({ name: `${i}s`, pv: newValue });
  }
  return data;
}

function generateNextValue(lastValue, min = 100, max = 4000, step = 200) {
  // Generar un cambio aleatorio entre -step y step
  const change = Math.floor(Math.random() * (2 * step + 1)) - step;
  // Aplicar el cambio al último valor
  let newValue = lastValue + change;
  // Asegurarse de que esté dentro de los límites
  if (newValue - min < 100) newValue *= 1.5;
  if (newValue - max > -100) newValue *= 0.8;
  if (newValue > max) newValue = max;
  if (newValue < min) newValue = min;
  return newValue;
}

export default function GraficoActividad() {
  const [data, setData] = useState(generateDefaultValues());

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        const lastPoint = prevData[prevData.length - 1];
        const newValue = generateNextValue(lastPoint.pv);
        const newPoint = {
          name: newValue,
          pv: newValue,
        };
        const updatedData = [...prevData, newPoint];
        return updatedData.slice(-MAX_POINTS);
      });
    }, 100);

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis />
        <Line
          dataKey="pv"
          stroke="#1ec2a5"
          strokeWidth={2}
          isAnimationActive={false}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
