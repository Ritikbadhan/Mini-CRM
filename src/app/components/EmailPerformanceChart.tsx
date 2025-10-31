"use client";

import { EmailPerformanceChartProps } from "@/lib/models/emailInterface";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";

export default function EmailPerformanceChart({
  data,
}: EmailPerformanceChartProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (_: unknown, index: number) => setActiveIndex(index);
  const handleMouseLeave = () => setActiveIndex(null);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
        <XAxis dataKey="name" stroke="#ccc" />
        <YAxis />
        <Legend />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const entry = payload[0].payload;
              return (
                <div
                  style={{
                    background: "#fff",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  <p>
                    <strong>Name:</strong> {entry.name}
                  </p>
                  <p>
                    <strong>Type:</strong> {entry.type}
                  </p>
                  <p>
                    <strong>Status:</strong> {entry.status}
                  </p>
                  <p>
                    <strong>Sent:</strong> {entry.sent}
                  </p>
                  <p>
                    <strong>Replies:</strong> {entry.replies}
                  </p>
                  <p>
                    <strong>Created At:</strong> {entry.createdAt}
                  </p>
                </div>
              );
            }
            return null;
          }}
        />
        <Bar
          dataKey="sent"
          name="Sent"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          fill="#3b82f6"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-sent-${index}`}
              fill={index === activeIndex ? "#2563eb" : "#3b82f6"}
            />
          ))}
        </Bar>
        <Bar
          dataKey="replies"
          name="Replies"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          fill="#10b981"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-replies-${index}`}
              fill={index === activeIndex ? "#059669" : "#10b981"}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
