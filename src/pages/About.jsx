import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">About TradeSentry</h1>
          
          <div className="prose dark:prose-invert text-white">
            <p className="mb-4">
               TradeSentry is a real-time cryptocurrency tracking dashboard designed to give you 
              instant access to market data and portfolio insights.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Our Mission</h2>
            <p className="mb-4">
              We aim to simplify cryptocurrency tracking with clean, intuitive interfaces 
              that both beginners and experienced traders can appreciate.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Features</h2>
            <ul className="list-disc pl-5 mb-6">
              <li className="mb-2">Real-time price updates</li>
              <li className="mb-2">Interactive mini-charts</li>
              <li className="mb-2">Portfolio tracking</li>
            </ul>
            
            <div className="mt-8">
              <Link 
                to="/dashboard" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
              >
                Go to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}