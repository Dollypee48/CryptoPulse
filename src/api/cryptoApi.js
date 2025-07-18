import axios from "axios";

const API_URL = "https://api.coingecko.com/api/v3";

export const fetchCryptoData = async () => {
  const response = await axios.get(
    `${API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&sparkline=true&price_change_percentage=24h`
  );
  return response.data;
};