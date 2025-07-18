import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CryptoProvider } from "./contexts/CryptoContext";
import { PortfolioProvider } from "./contexts/PortfolioContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CryptoProvider>
      <PortfolioProvider>
        <App />
      </PortfolioProvider>
    </CryptoProvider>
  </React.StrictMode>
);
