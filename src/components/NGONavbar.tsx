import { Building2, Users, DollarSign, TrendingUp, Send, MessageSquare, BarChart3, User, LogOut } from 'lucide-react';
import { useAuth } from '../pages/AuthContext';

interface NGONavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

function NGONavbar({ currentPage, onNavigate }: NGONavbarProps) {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    onNavigate('home');
  };

  const navItems = [
    { id: 'ngo-dashboard', label: 'Dashboard', icon: Building2 },
    { id: 'ngo-donor-management', label: 'Donors', icon: Users },
    { id: 'ngo-donation-records', label: 'Donations', icon: DollarSign },
    { id: 'ngo-utilization', label: 'Utilization', icon: TrendingUp },
    { id: 'ngo-funding-request', label: 'Funding Requests', icon: Send },
    { id: 'ngo-funding-responses', label: 'Responses', icon: MessageSquare },
    { id: 'ngo-reports', label: 'Reports', icon: BarChart3 },
    { id: 'ngo-profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('ngo-dashboard')}
          >
            <Building2 className="w-8 h-8" />
            <div>
              <h1 className="text-xl font-bold">NGO Portal</h1>
              <p className="text-xs text-blue-100">Hope Foundation India</p>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    isActive
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-all"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden md:inline">Logout</span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden pb-4">
          <div className="grid grid-cols-4 gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex flex-col items-center gap-1 px-2 py-2 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-white text-blue-600'
                      : 'hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NGONavbar;
