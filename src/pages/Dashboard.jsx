import { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CryptoTable from "../components/CryptoTable";
import CryptoCard from "../components/CryptoCard";

export default function Dashboard() {
  const [viewMode, setViewMode] = useState("table"); // 'table' or 'grid'

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <Header />
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold dark:text-white">Market Overview</h1>
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode("table")}
              className={`px-4 py-2 rounded-lg ${viewMode === "table" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700"}`}
            >
              Table
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`px-4 py-2 rounded-lg ${viewMode === "grid" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700"}`}
            >
              Grid
            </button>
          </div>
        </div>
        <SearchBar />
        {viewMode === "table" ? <CryptoTable /> : <CryptoCard />}
      </div>
    </div>
  );
}