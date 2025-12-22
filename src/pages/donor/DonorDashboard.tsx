import { DollarSign, Users, Building2, Heart, TrendingUp, ArrowRight } from 'lucide-react';

interface DonorDashboardProps {
  onNavigate: (page: string) => void;
}

function DonorDashboard({ onNavigate }: DonorDashboardProps) {
  // Dummy data
  const summaryData = {
    totalDonations: 125000,
    utilizedAmount: 98500,
    ngosSupported: 12,
    beneficiariesImpacted: 345,
  };

  const recentDonations = [
    { id: 1, ngo: 'Save The Children', amount: 10000, date: '2025-12-15', status: '78% Utilized' },
    { id: 2, ngo: 'Education For All', amount: 25000, date: '2025-12-10', status: '92% Utilized' },
    { id: 3, ngo: 'Clean Water Initiative', amount: 15000, date: '2025-12-05', status: '65% Utilized' },
  ];

  const topNGOs = [
    { name: 'Education For All', donated: 45000, utilization: 92 },
    { name: 'Healthcare Foundation', donated: 30000, utilization: 88 },
    { name: 'Save The Children', donated: 25000, utilization: 85 },
  ];

  const quickActions = [
    { 
      label: 'Browse NGOs', 
      page: 'donor-ngos', 
      icon: <Building2 className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      description: 'Find organizations to support'
    },
    { 
      label: 'Make Donation', 
      page: 'donor-make-donation', 
      icon: <Heart className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
      description: 'Contribute to a cause'
    },
    { 
      label: 'My Donations', 
      page: 'donor-donations', 
      icon: <DollarSign className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
      description: 'View donation history'
    },
    { 
      label: 'Reports', 
      page: 'donor-reports', 
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600',
      description: 'Analyze your impact'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back, Donor!</h1>
          <p className="text-gray-600">Here's an overview of your charitable contributions</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 bg-blue-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm text-green-600 font-semibold">+12.5%</span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Total Donations</h3>
            <p className="text-2xl font-bold text-gray-800">
              ₹{summaryData.totalDonations.toLocaleString()}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm text-green-600 font-semibold">78.8%</span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Utilized Amount</h3>
            <p className="text-2xl font-bold text-gray-800">
              ₹{summaryData.utilizedAmount.toLocaleString()}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Building2 className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-sm text-blue-600 font-semibold">+3 new</span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">NGOs Supported</h3>
            <p className="text-2xl font-bold text-gray-800">{summaryData.ngosSupported}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <span className="text-sm text-green-600 font-semibold">+28%</span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Beneficiaries Impacted</h3>
            <p className="text-2xl font-bold text-gray-800">{summaryData.beneficiariesImpacted}</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => onNavigate(action.page)}
                className={`bg-gradient-to-r ${action.color} text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-left`}
              >
                <div className="flex items-center mb-3">
                  {action.icon}
                  <ArrowRight className="w-5 h-5 ml-auto" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{action.label}</h3>
                <p className="text-sm text-white/90">{action.description}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Donations */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Recent Donations</h2>
              <button
                onClick={() => onNavigate('donor-donations')}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                View All →
              </button>
            </div>
            <div className="space-y-4">
              {recentDonations.map((donation) => (
                <div
                  key={donation.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => onNavigate('donor-utilization')}
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{donation.ngo}</h3>
                    <p className="text-sm text-gray-600">{donation.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-800">₹{donation.amount.toLocaleString()}</p>
                    <p className="text-sm text-green-600">{donation.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top NGOs */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Top NGOs by Contribution</h2>
              <button
                onClick={() => onNavigate('donor-ngos')}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Browse All →
              </button>
            </div>
            <div className="space-y-4">
              {topNGOs.map((ngo, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-800">{ngo.name}</h3>
                    <span className="text-sm font-bold text-gray-800">
                      ₹{ngo.donated.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                        style={{ width: `${ngo.utilization}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">{ngo.utilization}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Overview */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Your Impact This Month</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-blue-100 text-sm mb-1">Children Educated</p>
              <p className="text-3xl font-bold">127</p>
            </div>
            <div>
              <p className="text-blue-100 text-sm mb-1">Meals Provided</p>
              <p className="text-3xl font-bold">2,340</p>
            </div>
            <div>
              <p className="text-blue-100 text-sm mb-1">Medical Treatments</p>
              <p className="text-3xl font-bold">45</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonorDashboard;
