import { useState, useContext } from 'react';
import { PortfolioContext } from '../contexts/PortfolioContext';

export default function PortfolioAddForm({ allCoins }) {
  const { addToPortfolio } = useContext(PortfolioContext);
  const [selectedCoin, setSelectedCoin] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const coin = allCoins.find(c => c.id === selectedCoin);
    if (coin && amount > 0) {
      addToPortfolio(coin, amount);
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h3 className="text-lg font-medium mb-4 dark:text-white">Add to Portfolio</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Cryptocurrency
          </label>
          <select
            value={selectedCoin}
            onChange={(e) => setSelectedCoin(e.target.value)}
            className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          >
            <option value="">Select a coin</option>
            {allCoins.map(coin => (
              <option key={coin.id} value={coin.id}>
                {coin.name} ({coin.symbol.toUpperCase()})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Amount
          </label>
          <input
            type="number"
            min="0.00000001"
            step="any"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
          >
            Add to Portfolio
          </button>
        </div>
      </div>
    </form>
  );
}