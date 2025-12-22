import { DollarSign, TrendingUp, Users, Activity } from 'lucide-react';

function Dashboard() {
  const stats = [
    {
      title: 'Total Donations',
      value: '$1,245,890',
      change: '+12.5%',
      icon: <DollarSign className="w-8 h-8" />,
      color: 'bg-blue-500',
    },
    {
      title: 'Utilized Funds',
      value: '$987,450',
      change: '+8.3%',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'bg-green-500',
    },
    {
      title: 'Total Beneficiaries',
      value: '3,456',
      change: '+15.2%',
      icon: <Users className="w-8 h-8" />,
      color: 'bg-blue-600',
    },
    {
      title: 'Active Projects',
      value: '28',
      change: '+4',
      icon: <Activity className="w-8 h-8" />,
      color: 'bg-green-600',
    },
  ];

  const recentActivities = [
    {
      type: 'donation',
      description: 'New donation received from John Doe',
      amount: '$5,000',
      time: '2 hours ago',
    },
    {
      type: 'utilization',
      description: 'Funds allocated to Education Project',
      amount: '$3,500',
      time: '5 hours ago',
    },
    {
      type: 'donation',
      description: 'New donation received from ABC Corp',
      amount: '$10,000',
      time: '1 day ago',
    },
    {
      type: 'beneficiary',
      description: '15 new beneficiaries added to Healthcare Program',
      amount: '-',
      time: '2 days ago',
    },
    {
      type: 'utilization',
      description: 'Funds allocated to Food Distribution',
      amount: '$2,800',
      time: '3 days ago',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard Overview</h1>
          <p className="text-gray-600">
            Monitor donation activities and fund utilization in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} text-white p-3 rounded-lg`}>
                  {stat.icon}
                </div>
                <span className="text-green-600 text-sm font-semibold">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.title}</h3>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Fund Allocation
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Utilized</span>
                  <span className="text-sm font-semibold text-gray-800">79.3%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: '79.3%' }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Available</span>
                  <span className="text-sm font-semibold text-gray-800">20.7%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: '20.7%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              This Month
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Donations</span>
                <span className="font-semibold text-gray-800">$145,230</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Utilized</span>
                <span className="font-semibold text-gray-800">$98,450</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Beneficiaries</span>
                <span className="font-semibold text-gray-800">342</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Top Categories
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Education</span>
                <span className="font-semibold text-blue-600">35%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Healthcare</span>
                <span className="font-semibold text-green-600">28%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Food Security</span>
                <span className="font-semibold text-blue-600">22%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Recent Activities
          </h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-gray-200 pb-4 last:border-0"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      activity.type === 'donation'
                        ? 'bg-blue-600'
                        : activity.type === 'utilization'
                        ? 'bg-green-600'
                        : 'bg-gray-600'
                    }`}
                  ></div>
                  <div>
                    <p className="text-gray-800">{activity.description}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
                <span className="font-semibold text-gray-800">
                  {activity.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
