import { createContext, useState, useEffect } from 'react';

export const PortfolioContext = createContext();

export function PortfolioProvider({ children }) {
  const [portfolio, setPortfolio] = useState(() => {
    const saved = localStorage.getItem('crypto-portfolio');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('crypto-portfolio', JSON.stringify(portfolio));
  }, [portfolio]);

  const addToPortfolio = (coin, amount) => {
    setPortfolio(prev => {
      const existing = prev.find(item => item.id === coin.id);
      if (existing) {
        return prev.map(item =>
          item.id === coin.id 
            ? { ...item, amount: parseFloat(amount) } 
            : item
        );
      }
      return [...prev, { ...coin, amount: parseFloat(amount) }];
    });
  };

  const removeFromPortfolio = (coinId) => {
    setPortfolio(prev => prev.filter(item => item.id !== coinId));
  };

  return (
    <PortfolioContext.Provider value={{ portfolio, addToPortfolio, removeFromPortfolio }}>
      {children}
    </PortfolioContext.Provider>
  );
}