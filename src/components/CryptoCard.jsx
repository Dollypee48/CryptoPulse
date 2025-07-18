import { useContext } from "react";
import { CryptoContext } from "../contexts/CryptoContext";
import Chart from "react-apexcharts";

export default function CryptoCard() {
  const { cryptoData } = useContext(CryptoContext);

  const sparklineConfig = {
    chart: { type: "area", sparkline: { enabled: true } },
    stroke: { curve: "smooth", width: 2 },
    fill: { opacity: 0.2 },
    colors: ["#3B82F6"],
    tooltip: { enabled: false },
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {cryptoData.map((coin) => (
        <div
          key={coin.id}
          className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <img src={coin.image} alt={coin.name} className="w-8 h-8 mr-2" />
              <span className="font-bold dark:text-white">{coin.symbol.toUpperCase()}</span>
            </div>
            <span
              className={`text-sm ${
                coin.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {coin.price_change_percentage_24h?.toFixed(2)}%
            </span>
          </div>
          <div className="text-2xl font-bold mb-2 dark:text-white">
            ${coin.current_price.toLocaleString()}
          </div>
          <Chart
            options={sparklineConfig}
            series={[{ data: coin.sparkline_in_7d.price.slice(0, 24) }]}
            type="area"
            height={80}
          />
        </div>
      ))}
    </div>
  );
}