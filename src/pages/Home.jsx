import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-bold mb-6 text-center">
        Track Crypto Markets in <span className="text-yellow-400">Real-Time</span>
      </h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        CryptoPulse delivers live prices, trends, and analytics for 1000+ cryptocurrencies.
      </p>
      <Link
        to="/dashboard"
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg text-lg transition-all"
      >
        Launch Dashboard
      </Link>
    </div>
  );
}