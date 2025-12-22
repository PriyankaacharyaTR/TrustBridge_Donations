import { DollarSign, Users, TrendingUp, FolderOpen, Bell, Heart, ArrowRight, Clock } from 'lucide-react';

interface NGODashboardProps {
  onNavigate: (page: string) => void;
}

function NGODashboard({ onNavigate }: NGODashboardProps) {
  // Dummy data
  const summaryData = {
    totalDonationsReceived: 850000,
    utilizedFunds: 680000,
    activeDonors: 48,
    activeProjects: 15,
  };

  const recentDonations = [
    { id: 1, donor: 'Rajesh Kumar', amount: 25000, date: '2025-12-20', project: 'School Infrastructure', new: true },
    { id: 2, donor: 'Priya Sharma', amount: 15000, date: '2025-12-19', project: 'Medical Equipment', new: true },
    { id: 3, donor: 'Amit Patel', amount: 20000, date: '2025-12-18', project: 'Books and Learning Materials', new: false },
    { id: 4, donor: 'Sunita Reddy', amount: 10000, date: '2025-12-17', project: 'Student Scholarships', new: false },
  ];

  const notifications = [
    { id: 1, type: 'donation', message: 'New donation of ₹25,000 from Rajesh Kumar', time: '2 hours ago', read: false },
    { id: 2, type: 'request', message: 'Funding request approved by TechCorp India', time: '5 hours ago', read: false },
    { id: 3, type: 'utilization', message: 'Utilization report due for School Infrastructure project', time: '1 day ago', read: true },
    { id: 4, type: 'donor', message: 'New donor Priya Sharma registered', time: '2 days ago', read: true },
  ];

  const activeProjects = [
    { name: 'School Infrastructure', budget: 200000, utilized: 85, donors: 12 },
    { name: 'Medical Equipment', budget: 150000, utilized: 72, donors: 8 },
    { name: 'Student Scholarships', budget: 120000, utilized: 90, donors: 15 },
  ];

  const quickActions = [
    { label: 'Manage Donors', page: 'ngo-donors', icon: <Users className="w-6 h-6" />, color: 'from-blue-500 to-blue-600' },
    { label: 'View Donations', page: 'ngo-donations', icon: <DollarSign className="w-6 h-6" />, color: 'from-green-500 to-green-600' },
    { label: 'Add Utilization', page: 'ngo-utilization', icon: <TrendingUp className="w-6 h-6" />, color: 'from-purple-500 to-purple-600' },
    { label: 'Request Funding', page: 'ngo-funding-request', icon: <Heart className="w-6 h-6" />, color: 'from-orange-500 to-orange-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">NGO Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's an overview of your organization</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 bg-blue-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm text-green-600 font-semibold">+15.2%</span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Total Donations Received</h3>
            <p className="text-2xl font-bold text-gray-800">
              ₹{summaryData.totalDonationsReceived.toLocaleString()}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm text-green-600 font-semibold">80%</span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Utilized Funds</h3>
            <p className="text-2xl font-bold text-gray-800">
              ₹{summaryData.utilizedFunds.toLocaleString()}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-sm text-blue-600 font-semibold">+8 new</span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Active Donors</h3>
            <p className="text-2xl font-bold text-gray-800">{summaryData.activeDonors}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 bg-orange-100 rounded-lg">
                <FolderOpen className="w-6 h-6 text-orange-600" />
              </div>
              <span className="text-sm text-green-600 font-semibold">3 ongoing</span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Active Projects</h3>
            <p className="text-2xl font-bold text-gray-800">{summaryData.activeProjects}</p>
          </div>
        </div>

        {/* Notifications Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Bell className="w-6 h-6" />
              <h2 className="text-xl font-bold">Recent Notifications</h2>
            </div>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
              {notifications.filter(n => !n.read).length} New
            </span>
          </div>
          <div className="space-y-2">
            {notifications.slice(0, 3).map((notification) => (
              <div
                key={notification.id}
                className={`p-3 rounded-lg ${
                  notification.read ? 'bg-white/10' : 'bg-white/20'
                }`}
              >
                <div className="flex items-start justify-between">
                  <p className="text-sm flex-1">{notification.message}</p>
                  <span className="text-xs text-blue-100 ml-3">{notification.time}</span>
                </div>
              </div>
            ))}
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
                <h3 className="text-lg font-semibold">{action.label}</h3>
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
                onClick={() => onNavigate('ngo-donations')}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                View All →
              </button>
            </div>
            <div className="space-y-4">
              {recentDonations.map((donation) => (
                <div
                  key={donation.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-800">{donation.donor}</h3>
                      {donation.new && (
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                          NEW
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{donation.project}</p>
                    <p className="text-xs text-gray-500">{donation.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-800">₹{donation.amount.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Projects */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Active Projects</h2>
              <button
                onClick={() => onNavigate('ngo-utilization')}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Manage →
              </button>
            </div>
            <div className="space-y-4">
              {activeProjects.map((project, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-800">{project.name}</h3>
                    <span className="text-sm text-gray-600">{project.donors} donors</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>Budget: ₹{project.budget.toLocaleString()}</span>
                    <span className="font-semibold">{project.utilized}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        project.utilized >= 90
                          ? 'bg-gradient-to-r from-green-500 to-green-600'
                          : project.utilized >= 70
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600'
                          : 'bg-gradient-to-r from-yellow-500 to-orange-600'
                      }`}
                      style={{ width: `${project.utilized}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pending Tasks */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-6 h-6 text-orange-600" />
            <h2 className="text-xl font-bold text-gray-800">Pending Tasks</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border-l-4 border-orange-500 bg-orange-50 rounded">
              <h4 className="font-semibold text-gray-800 mb-1">Utilization Reports Due</h4>
              <p className="text-sm text-gray-600">3 donations pending utilization details</p>
              <button
                onClick={() => onNavigate('ngo-utilization')}
                className="text-orange-600 font-medium text-sm mt-2"
              >
                Update Now →
              </button>
            </div>
            <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded">
              <h4 className="font-semibold text-gray-800 mb-1">Funding Responses</h4>
              <p className="text-sm text-gray-600">2 organizations replied to requests</p>
              <button
                onClick={() => onNavigate('ngo-funding-responses')}
                className="text-blue-600 font-medium text-sm mt-2"
              >
                View Responses →
              </button>
            </div>
            <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded">
              <h4 className="font-semibold text-gray-800 mb-1">Profile Update</h4>
              <p className="text-sm text-gray-600">Keep your NGO profile up to date</p>
              <button
                onClick={() => onNavigate('ngo-profile')}
                className="text-green-600 font-medium text-sm mt-2"
              >
                Update Profile →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NGODashboard;
