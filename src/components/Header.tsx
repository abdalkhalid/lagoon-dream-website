
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent">
            Azure Lagoons
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={cn(
                "text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium",
                location.pathname === "/" && "text-blue-600"
              )}
            >
              Home
            </Link>
            <Link 
              to="/contact" 
              className={cn(
                "text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium",
                location.pathname === "/contact" && "text-blue-600"
              )}
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
