import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbarhomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              SchoolFinder
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/AddSchool" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Add Schools
            </a>
            <a href="/ShowSchools" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Show Schools
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Resources
            </a>
            <button className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Sign In
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-indigo-600 focus:outline-none focus:text-indigo-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-64 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <div className="py-4 space-y-4 border-t border-gray-100 bg-white/90 backdrop-blur-sm">
            <a 
              href="/AddSchool" 
              className="block px-4 py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 transition-colors rounded-lg mx-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Add Schools
            </a>
            <a 
              href="/ShowSchools" 
              className="block px-4 py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 transition-colors rounded-lg mx-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Show Schools
            </a>
            <a 
              href="#" 
              className="block px-4 py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 transition-colors rounded-lg mx-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </a>
            <div className="px-2">
              <button 
                className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}