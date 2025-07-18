import { useContext, useState } from "react";
import { CryptoContext } from "../contexts/CryptoContext";
import Chart from "react-apexcharts";
import { ArrowUpDown, ChevronDown, ChevronUp } from "lucide-react";

export default function CryptoTable() {
  const { cryptoData, loading } = useContext(CryptoContext);
  const [sortConfig, setSortConfig] = useState({
    key: "market_cap",
    direction: "desc",
  });

  // Sorting function
  const requestSort = (key) => {
    let direction = "desc";
    if (sortConfig.key === key && sortConfig.direction === "desc") {
      direction = "asc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...cryptoData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  // Mini-chart configuration
  const sparklineConfig = {
    chart: {
      type: "area",
      sparkline: { enabled: true },
      animations: { enabled: false },
    },
    stroke: {
      curve: "smooth",
      width: 2,
      colors: ["#3B82F6"],
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.2,
        stops: [0, 100],
      },
    },
    tooltip: { enabled: false },
    colors: ["#3B82F6"],
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer"
              onClick={() => requestSort("market_cap_rank")}
            >
              <div className="flex items-center">
                #
                {sortConfig.key === "market_cap_rank" && (
                  <span className="ml-1">
                    {sortConfig.direction === "asc" ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </span>
                )}
              </div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
            >
              Coin
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer"
              onClick={() => requestSort("current_price")}
            >
              <div className="flex items-center">
                Price
                {sortConfig.key === "current_price" && (
                  <span className="ml-1">
                    {sortConfig.direction === "asc" ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </span>
                )}
              </div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer"
              onClick={() => requestSort("price_change_percentage_24h")}
            >
              <div className="flex items-center">
                24h %
                {sortConfig.key === "price_change_percentage_24h" && (
                  <span className="ml-1">
                    {sortConfig.direction === "asc" ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </span>
                )}
              </div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer"
              onClick={() => requestSort("market_cap")}
            >
              <div className="flex items-center">
                Market Cap
                {sortConfig.key === "market_cap" && (
                  <span className="ml-1">
                    {sortConfig.direction === "asc" ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </span>
                )}
              </div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
            >
              Last 7 Days
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          {sortedData.map((coin) => (
            <tr
              key={coin.id}
              className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                {coin.market_cap_rank}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="w-6 h-6 mr-3 rounded-full"
                  />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {coin.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {coin.symbol.toUpperCase()}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                ${coin.current_price.toLocaleString()}
              </td>
              <td
                className={`px-6 py-4 whitespace-nowrap text-sm ${
                  coin.price_change_percentage_24h >= 0
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {coin.price_change_percentage_24h?.toFixed(2)}%
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                ${coin.market_cap.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-32 h-10">
                  <Chart
                    options={sparklineConfig}
                    series={[{ data: coin.sparkline_in_7d.price }]}
                    type="area"
                    height={40}
                    width={120}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}