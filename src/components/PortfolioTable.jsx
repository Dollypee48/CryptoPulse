import { useContext } from 'react';
import { PortfolioContext } from '../contexts/PortfolioContext';
import Chart from 'react-apexcharts';
import { Trash2 } from 'lucide-react';

export default function PortfolioTable() {
  const { portfolio, removeFromPortfolio } = useContext(PortfolioContext);

  const sparklineConfig = {
    chart: { type: 'area', sparkline: { enabled: true } },
    stroke: { curve: 'smooth', width: 2 },
    fill: { opacity: 0.2 },
    tooltip: { enabled: false },
    colors: ['#3B82F6'],
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Coin
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Holdings
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Value
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              24h Change
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Performance (7d)
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          {portfolio.map(item => (
            <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-8 h-8 mr-3 rounded-full" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">{item.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {item.symbol.toUpperCase()}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                {item.amount}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                ${(item.amount * item.current_price).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </td>
              <td
                className={`px-6 py-4 whitespace-nowrap text-sm ${
                  item.price_change_percentage_24h >= 0
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                }`}
              >
                {item.price_change_percentage_24h?.toFixed(2)}%
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-32 h-10">
                  <Chart
                    options={sparklineConfig}
                    series={[{ data: item.sparkline_in_7d.price }]}
                    type="area"
                    height={40}
                    width={120}
                  />
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  onClick={() => removeFromPortfolio(item.id)}
                  className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}