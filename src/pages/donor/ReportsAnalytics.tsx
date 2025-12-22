import { TrendingUp, DollarSign, PieChart, BarChart3, Download, Calendar } from 'lucide-react';

interface ReportsAnalyticsProps {
  onNavigate: (page: string) => void;
}

function ReportsAnalytics({}: ReportsAnalyticsProps) {
  // Dummy data for charts
  const monthlyDonations = [
    { month: 'Jul', amount: 12000 },
    { month: 'Aug', amount: 15000 },
    { month: 'Sep', amount: 18000 },
    { month: 'Oct', amount: 22000 },
    { month: 'Nov', amount: 28000 },
    { month: 'Dec', amount: 30000 },
  ];

  const donationsByNGO = [
    { ngo: 'Education For All', amount: 45000, color: 'bg-blue-500', percentage: 36 },
    { ngo: 'Healthcare Foundation', amount: 30000, color: 'bg-green-500', percentage: 24 },
    { ngo: 'Save The Children', amount: 25000, color: 'bg-purple-500', percentage: 20 },
    { ngo: 'Clean Water', amount: 15000, color: 'bg-orange-500', percentage: 12 },
    { ngo: 'Others', amount: 10000, color: 'bg-gray-500', percentage: 8 },
  ];

  const utilizationByCategory = [
    { category: 'Education', amount: 52000, utilized: 48000, percentage: 92 },
    { category: 'Healthcare', amount: 30000, utilized: 27000, percentage: 90 },
    { category: 'Infrastructure', amount: 23000, utilized: 19000, percentage: 83 },
    { category: 'Food Security', amount: 15000, utilized: 13500, percentage: 90 },
    { category: 'Environment', amount: 5000, utilized: 3500, percentage: 70 },
  ];

  const maxAmount = Math.max(...monthlyDonations.map((d) => d.amount));

  const stats = [
    { label: 'Total Donated', value: '₹1,25,000', change: '+12.5%', positive: true },
    { label: 'Avg. Monthly', value: '₹20,833', change: '+8.3%', positive: true },
    { label: 'Total Utilized', value: '₹98,500', change: '+15.2%', positive: true },
    { label: 'NGOs Supported', value: '12', change: '+3', positive: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Reports & Analytics</h1>
            <p className="text-gray-600">Track your donation impact and trends</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-medium">Last 6 Months</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="w-5 h-5" />
              <span className="text-sm font-medium">Export Report</span>
            </button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-800 mb-2">{stat.value}</p>
              <div className="flex items-center">
                <span
                  className={`text-sm font-semibold ${
                    stat.positive ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {stat.change}
                </span>
                <span className="text-xs text-gray-500 ml-2">vs last period</span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Row 1 */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Monthly Donations Trend */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Monthly Donations</h2>
                  <p className="text-sm text-gray-600">Contribution trends over time</p>
                </div>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="space-y-4">
              {monthlyDonations.map((data, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-700 w-12">{data.month}</span>
                  <div className="flex-1 relative">
                    <div className="w-full bg-gray-200 rounded-full h-8">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-8 rounded-full flex items-center justify-end pr-3 transition-all duration-500"
                        style={{ width: `${(data.amount / maxAmount) * 100}%` }}
                      >
                        <span className="text-white text-sm font-semibold">
                          ₹{(data.amount / 1000).toFixed(0)}K
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Average Monthly</span>
                <span className="text-lg font-bold text-gray-800">₹20,833</span>
              </div>
            </div>
          </div>

          {/* Donations by NGO - Pie Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <PieChart className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Donations by NGO</h2>
                  <p className="text-sm text-gray-600">Distribution across organizations</p>
                </div>
              </div>
            </div>

            {/* Donut Chart Representation */}
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-48 h-48">
                {/* Outer ring with segments */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {donationsByNGO.map((ngo, index) => {
                    const previousPercentages = donationsByNGO
                      .slice(0, index)
                      .reduce((sum, n) => sum + n.percentage, 0);
                    const strokeDasharray = `${ngo.percentage} ${100 - ngo.percentage}`;
                    const strokeDashoffset = -previousPercentages;

                    return (
                      <circle
                        key={index}
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke={
                          ngo.color.includes('blue')
                            ? '#3b82f6'
                            : ngo.color.includes('green')
                            ? '#10b981'
                            : ngo.color.includes('purple')
                            ? '#a855f7'
                            : ngo.color.includes('orange')
                            ? '#f97316'
                            : '#6b7280'
                        }
                        strokeWidth="16"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                      />
                    );
                  })}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-2xl font-bold text-gray-800">₹1.25L</p>
                  <p className="text-sm text-gray-600">Total</p>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-2">
              {donationsByNGO.map((ngo, index) => (
                <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded ${ngo.color}`}></div>
                    <span className="text-sm text-gray-700">{ngo.ngo}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-800">
                      ₹{(ngo.amount / 1000).toFixed(0)}K
                    </p>
                    <p className="text-xs text-gray-500">{ngo.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Utilization by Category */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">Utilization by Category</h2>
                <p className="text-sm text-gray-600">How your donations are being used</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {utilizationByCategory.map((category, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-800">{category.category}</h3>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-800">
                      ₹{category.utilized.toLocaleString()} / ₹{category.amount.toLocaleString()}
                    </p>
                    <p className="text-xs text-green-600">{category.percentage}% Utilized</p>
                  </div>
                </div>

                {/* Stacked Progress Bar */}
                <div className="relative w-full bg-gray-200 rounded-full h-6">
                  <div
                    className="absolute top-0 left-0 bg-gradient-to-r from-green-500 to-green-600 h-6 rounded-full flex items-center justify-center transition-all duration-500"
                    style={{ width: `${category.percentage}%` }}
                  >
                    {category.percentage > 15 && (
                      <span className="text-white text-xs font-semibold">Utilized</span>
                    )}
                  </div>
                  <div
                    className="absolute top-0 bg-gray-300 h-6 rounded-r-full flex items-center justify-center"
                    style={{
                      left: `${category.percentage}%`,
                      width: `${100 - category.percentage}%`,
                    }}
                  >
                    {100 - category.percentage > 15 && (
                      <span className="text-gray-600 text-xs font-semibold">Pending</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Total Allocated</p>
                <p className="text-xl font-bold text-gray-800">₹1,25,000</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Total Utilized</p>
                <p className="text-xl font-bold text-green-600">₹98,500</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Pending</p>
                <p className="text-xl font-bold text-orange-600">₹26,500</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Key Insights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="w-6 h-6" />
                <h3 className="font-semibold">Top Contribution</h3>
              </div>
              <p className="text-2xl font-bold mb-1">Education For All</p>
              <p className="text-sm text-blue-100">₹45,000 donated (36% of total)</p>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-6 h-6" />
                <h3 className="font-semibold">Highest Utilization</h3>
              </div>
              <p className="text-2xl font-bold mb-1">Education Sector</p>
              <p className="text-sm text-blue-100">92% funds utilized effectively</p>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className="w-6 h-6" />
                <h3 className="font-semibold">Growth Trend</h3>
              </div>
              <p className="text-2xl font-bold mb-1">+150%</p>
              <p className="text-sm text-blue-100">Increase in last 6 months</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportsAnalytics;
