import { useContext } from "react";
import { CryptoContext } from "../contexts/CryptoContext";

export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useContext(CryptoContext);

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search coins (e.g., Bitcoin, BTC)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
      />
    </div>
  );
}