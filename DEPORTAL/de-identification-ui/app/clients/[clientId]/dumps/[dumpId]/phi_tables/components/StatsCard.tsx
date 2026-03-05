import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface StatsCardProps {
  graphs?: {
    rows_count_distribution: {
      less_than_1000: number;
      greater_than_1000000: number;
      between_1000_and_10000: number;
      between_10000_and_100000: number;
      between_100000_and_1000000: number;
    };
  };
}

const StatsCard: React.FC<StatsCardProps> = ({ graphs }) => {
  const data = graphs
    ? [
        {
          name: "< 1000",
          value: graphs.rows_count_distribution.less_than_1000,
        },
        {
          name: "1k-10k",
          value: graphs.rows_count_distribution.between_1000_and_10000,
        },
        {
          name: "10k-100k",
          value: graphs.rows_count_distribution.between_10000_and_100000,
        },
        {
          name: "100k-1M",
          value: graphs.rows_count_distribution.between_100000_and_1000000,
        },
        {
          name: "> 1M",
          value: graphs.rows_count_distribution.greater_than_1000000,
        },
      ]
    : [];
  console.log(data);
  return (
    <div className="flex w-full flex-col rounded-lg bg-white p-8">
      <h2 className="mb-1 text-xl font-semibold">View Stats</h2>
      <div className="w-8 border-2 border-secondary"></div>
      <ResponsiveContainer width="100%" height={300} className="my-16">
        <BarChart width={500} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#0B9F8D" /> {/* Tailwind primary color */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatsCard;
