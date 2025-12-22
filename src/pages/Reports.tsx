import { BarChart3, PieChart, TrendingUp, Download } from 'lucide-react';

function Reports() {
  const monthlyData = [
    { month: 'Jan', donations: 85000, utilization: 72000 },
    { month: 'Feb', donations: 92000, utilization: 78000 },
    { month: 'Mar', donations: 105000, utilization: 89000 },
    { month: 'Apr', donations: 98000, utilization: 85000 },
    { month: 'May', donations: 115000, utilization: 95000 },
    { month: 'Jun', donations: 125000, utilization: 102000 },
  ];

  const categoryDistribution = [
    { category: 'Education', percentage: 35, color: 'bg-blue-500' },
    { category: 'Healthcare', percentage: 28, color: 'bg-green-500' },
    { category: 'Food Security', percentage: 22, color: 'bg-yellow-500' },
    { category: 'Infrastructure', percentage: 15, color: 'bg-purple-500' },
  ];

  const maxAmount = Math.max(
    ...monthlyData.map((d) => Math.max(d.donations, d.utilization))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Financial Reports
            </h1>
            <p className="text-gray-600">
              Comprehensive analysis of donations and fund utilization
            </p>
          </div>
          <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-shadow">
            <Download className="w-5 h-5" />
            <span>Export Report</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Monthly Trends
              </h2>
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
            <div className="space-y-4">
              {monthlyData.map((data, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{data.month}</span>
                    <div className="flex space-x-4">
                      <span className="text-blue-600 font-semibold">
                        ${(data.donations / 1000).toFixed(0)}K
                      </span>
                      <span className="text-green-600 font-semibold">
                        ${(data.utilization / 1000).toFixed(0)}K
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-blue-600 h-full rounded-full"
                        style={{
                          width: `${(data.donations / maxAmount) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-green-600 h-full rounded-full"
                        style={{
                          width: `${(data.utilization / maxAmount) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-center space-x-6 mt-4 pt-4 border-t">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-600 rounded"></div>
                  <span className="text-sm text-gray-600">Donations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-600 rounded"></div>
                  <span className="text-sm text-gray-600">Utilization</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Category Distribution
              </h2>
              <PieChart className="w-6 h-6 text-green-600" />
            </div>
            <div className="space-y-4">
              {categoryDistribution.map((cat, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-800 font-medium">
                      {cat.category}
                    </span>
                    <span className="text-gray-600 font-semibold">
                      {cat.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className={`${cat.color} h-4 rounded-full flex items-center justify-end pr-2`}
                      style={{ width: `${cat.percentage}%` }}
                    >
                      <span className="text-white text-xs font-bold">
                        {cat.percentage}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Total Amount Distributed:</strong> $987,450 across all
                categories
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Yearly Summary
              </h3>
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Total Donations</p>
                <p className="text-2xl font-bold text-blue-600">$1,245,890</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Utilized</p>
                <p className="text-2xl font-bold text-green-600">$987,450</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Growth Rate</p>
                <p className="text-2xl font-bold text-gray-800">+18.5%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Top Performing Projects
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700">Education Program</span>
                <span className="text-sm font-semibold text-green-600">
                  $342,450
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700">Healthcare Initiative</span>
                <span className="text-sm font-semibold text-green-600">
                  $276,480
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700">Food Distribution</span>
                <span className="text-sm font-semibold text-green-600">
                  $217,240
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Impact Metrics
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700">Lives Impacted</span>
                <span className="text-sm font-semibold text-blue-600">
                  3,456
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700">Projects Completed</span>
                <span className="text-sm font-semibold text-blue-600">142</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700">Active Donors</span>
                <span className="text-sm font-semibold text-blue-600">
                  1,234
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg shadow-md p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">
            Transparency & Accountability
          </h2>
          <p className="text-lg mb-4">
            All financial data is audited and verified for complete transparency
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div>
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm">Fund Tracking</p>
            </div>
            <div>
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-sm">Real-time Updates</p>
            </div>
            <div>
              <p className="text-3xl font-bold">0%</p>
              <p className="text-sm">Administrative Fees</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
