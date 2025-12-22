import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../pages/AuthContext';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    ...(isAuthenticated
      ? [
          { id: 'dashboard', label: 'Dashboard' },
          { id: 'donations', label: 'Donations' },
          { id: 'utilization', label: 'Utilization' },
          { id: 'reports', label: 'Reports' },
        ]
      : []),
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div
            className="text-xl font-bold cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            TrustBridge Donations
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`hover:text-blue-200 transition-colors ${
                    currentPage === item.id
                      ? 'border-b-2 border-white font-semibold'
                      : ''
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}

            {!isAuthenticated ? (
              <li>
                <button
                  onClick={() => onNavigate('login')}
                  className="bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-blue-100 transition"
                >
                  Login
                </button>
              </li>
            ) : (
              <li>
                <button
                  onClick={() => {
                    logout();
                    onNavigate('home');
                  }}
                  className="bg-red-500 px-4 py-2 rounded font-semibold hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 px-4 rounded transition-colors ${
                    currentPage === item.id
                      ? 'bg-blue-700 font-semibold'
                      : 'hover:bg-blue-700'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}

            {!isAuthenticated ? (
              <li>
                <button
                  onClick={() => {
                    onNavigate('login');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 px-4 bg-white text-blue-600 rounded font-semibold"
                >
                  Login
                </button>
              </li>
            ) : (
              <li>
                <button
                  onClick={() => {
                    logout();
                    onNavigate('home');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 px-4 bg-red-500 text-white rounded font-semibold"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
