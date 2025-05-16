import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import DesignerLogo from '../assets/Designer.png';

const navLinks = [
  { to: "/", label: "Home", icon: "🏠" },
  { to: "/health-services", label: "Ward & Theatre", icon: "🏥" },
  { to: "/courses", label: "Courses", icon: "📚" },
  { to: "/gallery", label: "Dental", icon: "🖼️" },
  
];

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col w-full overflow-x-hidden">
      <nav className="sticky top-0 z-50 bg-white shadow-md flex flex-col md:flex-row items-center md:justify-center py-2 w-full overflow-x-hidden">
        {/* Logo and name */}
        <div className="flex flex-col items-center w-full md:flex-row md:items-center md:space-x-4 mb-2 md:mb-0">
          <img src={DesignerLogo} alt="Logo" className="h-8 w-auto mb-1 md:mb-0" />
          <span className="text-lg font-bold text-blue-800">Brook of Healing Centre</span>
        </div>

        {/* Icon nav: evenly spaced, no wrap, responsive sizing */}
        <div className="flex flex-nowrap flex-1 justify-between w-full max-w-full">
          {navLinks.map((link) => {
            const isActive = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative flex-1 flex justify-center items-center py-1 transition-transform transform hover:scale-110 group ${
                  isActive ? '' : ''
                }`}
              >
                {/* Icon with clamp sizing: never overflow viewport */}
                <span className="block text-center text-[clamp(1.5rem,8vw,2.5rem)]">
                  {link.icon}
                </span>

                {/* Underline: active persistent or hover animated */}
                <span
                  className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-1 rounded-lg bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 transition-all duration-500 ease-in-out ${
                    isActive
                      ? 'w-3/4 animate-pulse'
                      : 'w-0 group-hover:w-3/4 group-hover:animate-pulse'
                  }`}
                />

                {/* Tooltip below icon on hover */}
                <span
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      <main className="flex-1 w-full max-w-full mx-auto px-0 md:px-4 overflow-x-hidden">
        {children}
      </main>

      <footer className="bg-gray-800 text-white py-4 mt-8 text-center w-full max-w-full">
        <p>&copy; 2025 Brook of Healing Centre. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
