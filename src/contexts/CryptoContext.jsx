import { createContext, useState, useEffect } from "react";
import { fetchCryptoData } from "../api/cryptoApi";

export const CryptoContext = createContext();

export function CryptoProvider({ children }) {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchCryptoData();
        setCryptoData(data);
      } catch (error) {
        console.error("Failed to fetch crypto data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
    const interval = setInterval(loadData, 60000); // Refresh every 60s
    return () => clearInterval(interval);
  }, []);

  // Filter coins based on search term
  const filteredData = cryptoData.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <CryptoContext.Provider
      value={{ cryptoData: filteredData, loading, searchTerm, setSearchTerm }}
    >
      {children}
    </CryptoContext.Provider>
  );
}