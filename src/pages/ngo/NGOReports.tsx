import { BarChart3, TrendingUp, Calendar, DollarSign, Users, Download, PieChart } from 'lucide-react';
import { useState } from 'react';

interface NGOReportsProps {
  onNavigate: (page: string) => void;
}

function NGOReports({ }: NGOReportsProps) {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Dummy data for charts
  const monthlyData = [
    { month: 'Jan', donations: 45000, utilized: 38000 },
    { month: 'Feb', donations: 52000, utilized: 44000 },
    { month: 'Mar', donations: 48000, utilized: 41000 },
    { month: 'Apr', donations: 61000, utilized: 54000 },
    { month: 'May', donations: 55000, utilized: 48000 },
    { month: 'Jun', donations: 72000, utilized: 65000 },
    { month: 'Jul', donations: 68000, utilized: 60000 },
    { month: 'Aug', donations: 75000, utilized: 68000 },
    { month: 'Sep', donations: 82000, utilized: 74000 },
    { month: 'Oct', donations: 78000, utilized: 71000 },
    { month: 'Nov', donations: 85000, utilized: 77000 },
    { month: 'Dec', donations: 92000, utilized: 84000 },
  ];

  const donorWiseData = [
    { donor: 'Rajesh Kumar', amount: 125000, percentage: 22 },
    { donor: 'Priya Sharma', amount: 98000, percentage: 17 },
    { donor: 'Amit Patel', amount: 87000, percentage: 15 },
    { donor: 'Sneha Reddy', amount: 76000, percentage: 13 },
    { donor: 'Vikram Singh', amount: 65000, percentage: 11 },
    { donor: 'Others', amount: 127000, percentage: 22 },
  ];

  const categoryWiseData = [
    { category: 'Education', amount: 285000, percentage: 38, utilized: 248000 },
    { category: 'Healthcare', amount: 187000, percentage: 25, utilized: 167000 },
    { category: 'Infrastructure', amount: 132000, percentage: 18, utilized: 115000 },
    { category: 'Social Welfare', amount: 95000, percentage: 13, utilized: 82000 },
    { category: 'Others', amount: 48000, percentage: 6, utilized: 42000 },
  ];

  const yearlyComparison = [
    { year: '2023', totalDonations: 520000, utilized: 468000, donors: 32 },
    { year: '2024', totalDonations: 695000, utilized: 625000, donors: 45 },
    { year: '2025', totalDonations: 813000, utilized: 724000, donors: 58 },
  ];

  const maxDonation = Math.max(...monthlyData.map((d) => d.donations));

  const handleExport = () => {
    alert('Report exported successfully! (UI Only)');
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Education: 'bg-blue-500',
      Healthcare: 'bg-green-500',
      Infrastructure: 'bg-purple-500',
      'Social Welfare': 'bg-orange-500',
      Others: 'bg-gray-500',
    };
    return colors[category] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Reports & Analytics</h1>
              <p className="text-gray-600">Comprehensive insights into donations and utilization</p>
            </div>
            <button
              onClick={handleExport}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all"
            >
              <Download className="w-5 h-5" />
              Export Report
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="education">Education</option>
                <option value="healthcare">Healthcare</option>
                <option value="infrastructure">Infrastructure</option>
                <option value="social">Social Welfare</option>
              </select>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 bg-blue-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-1">Total Donations</p>
            <p className="text-2xl font-bold text-gray-800">₹8.13L</p>
            <p className="text-sm text-green-600 mt-1">+17% from last year</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-1">Utilized Funds</p>
            <p className="text-2xl font-bold text-gray-800">₹7.24L</p>
            <p className="text-sm text-gray-600 mt-1">89% utilization</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-1">Active Donors</p>
            <p className="text-2xl font-bold text-gray-800">58</p>
            <p className="text-sm text-green-600 mt-1">+13 from last year</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 bg-orange-100 rounded-lg">
                <BarChart3 className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-1">Avg. Donation</p>
            <p className="text-2xl font-bold text-gray-800">₹14,017</p>
            <p className="text-sm text-gray-600 mt-1">Per donor</p>
          </div>
        </div>

        {/* Monthly Trends */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <BarChart3 className="w-6 h-6" />
            Monthly Donation Trends
          </h2>
          <div className="space-y-4">
            {monthlyData.map((data) => (
              <div key={data.month}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 w-12">{data.month}</span>
                  <div className="flex-1 mx-4">
                    <div className="flex gap-1">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-8 rounded-l flex items-center justify-end px-2"
                        style={{ width: `${(data.donations / maxDonation) * 100}%` }}
                      >
                        <span className="text-xs text-white font-semibold">₹{(data.donations / 1000).toFixed(0)}K</span>
                      </div>
                      <div
                        className="bg-gradient-to-r from-green-500 to-green-600 h-8 flex items-center justify-end px-2"
                        style={{ width: `${(data.utilized / maxDonation) * 100}%` }}
                      >
                        <span className="text-xs text-white font-semibold">₹{(data.utilized / 1000).toFixed(0)}K</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span className="text-sm text-gray-600">Donations Received</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-sm text-gray-600">Funds Utilized</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Donor-wise Distribution */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Users className="w-6 h-6" />
              Top Donors
            </h2>
            <div className="space-y-4">
              {donorWiseData.map((donor, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{donor.donor}</span>
                    <span className="text-sm font-bold text-gray-800">₹{(donor.amount / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full"
                        style={{ width: `${donor.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-600 w-10 text-right">{donor.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category-wise Distribution */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <PieChart className="w-6 h-6" />
              Category-wise Utilization
            </h2>
            <div className="space-y-4">
              {categoryWiseData.map((category, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 ${getCategoryColor(category.category)} rounded-full`}></div>
                      <span className="text-sm font-medium text-gray-700">{category.category}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-gray-800">₹{(category.amount / 1000).toFixed(0)}K</span>
                      <span className="text-xs text-gray-600 ml-2">({category.percentage}%)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className={`${getCategoryColor(category.category)} h-2 rounded-full`}
                        style={{ width: `${(category.utilized / category.amount) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-600 w-10 text-right">
                      {Math.round((category.utilized / category.amount) * 100)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Yearly Comparison */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Calendar className="w-6 h-6" />
            Yearly Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Year</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Total Donations</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Utilized Funds</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Utilization %</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Active Donors</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Growth</th>
                </tr>
              </thead>
              <tbody>
                {yearlyComparison.map((year, index) => {
                  const utilizationPercentage = Math.round((year.utilized / year.totalDonations) * 100);
                  const growth = index > 0 
                    ? Math.round(((year.totalDonations - yearlyComparison[index - 1].totalDonations) / yearlyComparison[index - 1].totalDonations) * 100)
                    : 0;
                  
                  return (
                    <tr key={year.year} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-gray-800">{year.year}</td>
                      <td className="text-right py-3 px-4 text-gray-800">₹{(year.totalDonations / 1000).toFixed(0)}K</td>
                      <td className="text-right py-3 px-4 text-gray-800">₹{(year.utilized / 1000).toFixed(0)}K</td>
                      <td className="text-right py-3 px-4">
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">
                          {utilizationPercentage}%
                        </span>
                      </td>
                      <td className="text-right py-3 px-4 text-gray-800">{year.donors}</td>
                      <td className="text-right py-3 px-4">
                        {index > 0 && (
                          <span className={`px-2 py-1 text-xs font-semibold rounded ${growth > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {growth > 0 ? '+' : ''}{growth}%
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NGOReports;
