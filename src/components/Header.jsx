import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
             TradeSentry
          </span>
        </Link>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-6">
            <Link to="/dashboard" className="dark:text-white hover:text-blue-500">
              Dashboard
            </Link>

            <Link 
                to="/portfolio" 
                className="dark:text-white hover:text-blue-500"
>
             Portfolio
            </Link>
            <Link to="/about" className="dark:text-white hover:text-blue-500">
              About
            </Link>
          </nav>
       
        </div>
      </div>
    </header>
  );
}