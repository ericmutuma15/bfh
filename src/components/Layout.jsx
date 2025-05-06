import React from 'react';
import { Link } from 'react-router-dom';
import DesignerLogo from '../assets/Designer.png';

const navLinks = [
  { to: '/', label: 'Home', icon: '🏠' },
  { to: '/reception', label: 'About Us', icon: '🛎️' },
  { to: '/laboratory', label: 'Laboratory', icon: '🔬' },
  { to: '/dental', label: 'Dental', icon: '🦷' },
  { to: '/ward-theatre', label: 'Ward & Theatre', icon: '🏥' },
];

const Layout = ({ children }) => (
  <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col w-full max-w-full overflow-x-hidden">
    <nav className="sticky top-0 z-50 bg-white shadow-md flex flex-col md:flex-row items-center md:justify-center py-2 w-full max-w-full">
      {/* Logo and name always on top for mobile */}
      <div className="flex flex-col items-center w-full md:flex-row md:items-center md:space-x-4 mb-2 md:mb-0">
        <img src={DesignerLogo} alt="Logo" className="h-8 w-auto mb-1 md:mb-0" />
        <span className="text-lg font-bold text-blue-800">Brook of Healing Centre</span>
      </div>
      {/* Desktop links */}
      <div className="hidden md:flex flex-1 justify-center w-full max-w-full">
        {navLinks.map(link => (
          <Link key={link.to} to={link.to} className="mx-3 text-base font-medium text-blue-700 hover:text-blue-900 transition-colors">
            {link.label}
          </Link>
        ))}
      </div>
      {/* Mobile icons below logo/name */}
      <div className="flex md:hidden flex-1 justify-center gap-2 w-full max-w-full mt-2">
        {navLinks.map(link => (
          <Link key={link.to} to={link.to} className="text-2xl" title={link.label} aria-label={link.label}>
            {link.icon}
          </Link>
        ))}
      </div>
    </nav>
    <main className="flex-1 w-full max-w-full mx-auto px-0 md:px-4 overflow-x-hidden">{children}</main>
    <footer className="bg-gray-800 text-white py-4 mt-8 text-center w-full max-w-full">
      <p>&copy; 2025 Brook of Healing Centre. All rights reserved.</p>
    </footer>
  </div>
);

export default Layout;
