import { Menu, X, Heart, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../pages/AuthContext';

interface DonorNavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

function DonorNavbar({ currentPage, onNavigate }: DonorNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout } = useAuth();

  const navItems = [
    { id: 'donor-dashboard', label: 'Dashboard' },
    { id: 'donor-ngos', label: 'NGOs' },
    { id: 'donor-donations', label: 'My Donations' },
    { id: 'donor-reports', label: 'Reports' },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div
            className="text-xl font-bold cursor-pointer flex items-center gap-2"
            onClick={() => onNavigate('donor-dashboard')}
          >
            <Heart className="w-6 h-6" />
            <span>TrustBridge Donations</span>
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

            <li>
              <button
                onClick={() => onNavigate('donor-make-donation')}
                className="bg-white text-green-600 px-4 py-2 rounded font-semibold hover:bg-green-50 transition flex items-center gap-2"
              >
                <Heart className="w-4 h-4" />
                Make Donation
              </button>
            </li>

            <li>
              <button
                onClick={() => {
                  logout();
                  onNavigate('home');
                }}
                className="bg-red-500 px-4 py-2 rounded font-semibold hover:bg-red-600 transition flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </li>
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

            <li>
              <button
                onClick={() => {
                  onNavigate('donor-make-donation');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-2 px-4 bg-white text-green-600 rounded font-semibold flex items-center gap-2"
              >
                <Heart className="w-4 h-4" />
                Make Donation
              </button>
            </li>

            <li>
              <button
                onClick={() => {
                  logout();
                  onNavigate('home');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-2 px-4 bg-red-500 text-white rounded font-semibold flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default DonorNavbar;
