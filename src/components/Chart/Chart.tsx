import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  ChartTooltip,
  CustomTooltip,
} from "keep-react";

const ChartComponent = ({ dataCoin }) => {
  const data = dataCoin.map(([timestamp, price]) => ({
    name: new Date(timestamp).toLocaleDateString(),
    price,
  }));

  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="price" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1B4DFF" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#1B4DFF" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="natural"
          dataKey="price"
          stroke="#1B4DFF"
          fillOpacity={1}
          fill="url(#price)"
        />
        <XAxis
          className="text-body-4 font-medium text-metal-600"
          dataKey="name"
          stroke="#8897AE"
          strokeWidth={0.5}
          dy={12}
        />
        <YAxis
          className="text-body-4 font-medium text-metal-600"
          dx={-12}
          dataKey="price"
          stroke="#8897AE"
          strokeWidth={0.5}
        />
        <ChartTooltip content={<CustomTooltip />} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ChartComponent;
