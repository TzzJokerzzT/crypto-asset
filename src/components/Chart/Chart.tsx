import { AssetTrackerContextProps, ChartProps } from "../../types/types.env";
import { AssetTrackerStoreContext } from "@context/assetTrackerStore";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  ChartTooltip,
  CustomTooltip,
} from "keep-react";
import { useContext } from "react";

const ChartComponent = ({ dataCoin }: ChartProps) => {
  const { period } = useContext(
    AssetTrackerStoreContext
  ) as AssetTrackerContextProps;

  const formatDateByPeriod = (timestamp: number, period: number): string => {
    const date = new Date(timestamp);

    switch (period) {
      case 1:
        // Mostrar la hora
        return date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
      case 7:
        // Mostrar el día de la semana
        return date.toLocaleDateString([], { weekday: "long" });
      case 30:
        // Mostrar el día del mes
        return date.toLocaleDateString([], { day: "numeric", month: "long" });
      case 365:
        // Mostrar el mes del año
        return date.toLocaleDateString([], { month: "long" });
      default:
        // Por defecto, mostrar la fecha completa
        return date.toLocaleDateString();
    }
  };

  const data = dataCoin.map(([timestamp, price]) => ({
    name: formatDateByPeriod(timestamp, period),
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
