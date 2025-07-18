import { useContext } from "react";
import { PortfolioContext } from "../contexts/PortfolioContext";
import { CryptoContext } from "../contexts/CryptoContext";
import PortfolioAddForm from "../components/PortfolioAddForm";
import PortfolioTable from "../components/PortfolioTable";
import Header from "../components/Header";  // Import the Header component

export default function Portfolio() {
  const { portfolio } = useContext(PortfolioContext);
  const { cryptoData } = useContext(CryptoContext);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      {/* Add Header component here */}
      <Header />
      
      <div className="container mx-auto p-4 pt-6"> {/* Added pt-6 for spacing below header */}
        <h1 className="text-2xl font-bold mb-6 dark:text-white">Your Portfolio</h1>
        
        {portfolio.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500 dark:text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-medium dark:text-white mb-2">Your portfolio is empty</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Add cryptocurrencies to track your investments
            </p>
            <PortfolioAddForm allCoins={cryptoData} />
          </div>
        ) : (
          <>
            <PortfolioAddForm allCoins={cryptoData} />
            <PortfolioTable />
          </>
        )}
      </div>
    </div>
  );
}