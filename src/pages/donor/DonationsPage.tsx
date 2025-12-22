import { DollarSign, Calendar, Building2, Filter, Download, Search } from 'lucide-react';
import { useState } from 'react';

interface DonationsPageProps {
  onNavigate: (page: string, donationId?: number) => void;
}

function DonationsPage({ onNavigate }: DonationsPageProps) {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Dummy donation data
  const donations = [
    {
      id: 1,
      ngo: 'Education For All',
      amount: 15000,
      date: '2025-12-15',
      purpose: 'School Infrastructure',
      status: 'Partially Utilized',
      utilized: 78,
      beneficiaries: 45,
      transactionId: 'TXN001234567',
    },
    {
      id: 2,
      ngo: 'Healthcare Foundation',
      amount: 25000,
      date: '2025-12-10',
      purpose: 'Medical Equipment',
      status: 'Fully Utilized',
      utilized: 100,
      beneficiaries: 120,
      transactionId: 'TXN001234568',
    },
    {
      id: 3,
      ngo: 'Clean Water Initiative',
      amount: 10000,
      date: '2025-12-05',
      purpose: 'Water Purification Units',
      status: 'Partially Utilized',
      utilized: 65,
      beneficiaries: 200,
      transactionId: 'TXN001234569',
    },
    {
      id: 4,
      ngo: 'Save The Children',
      amount: 20000,
      date: '2025-11-28',
      purpose: 'Child Education Program',
      status: 'Fully Utilized',
      utilized: 100,
      beneficiaries: 85,
      transactionId: 'TXN001234570',
    },
    {
      id: 5,
      ngo: 'Women Empowerment Trust',
      amount: 12000,
      date: '2025-11-20',
      purpose: 'Skill Development',
      status: 'In Progress',
      utilized: 45,
      beneficiaries: 30,
      transactionId: 'TXN001234571',
    },
    {
      id: 6,
      ngo: 'Food For All',
      amount: 18000,
      date: '2025-11-15',
      purpose: 'Community Kitchen',
      status: 'Partially Utilized',
      utilized: 82,
      beneficiaries: 500,
      transactionId: 'TXN001234572',
    },
    {
      id: 7,
      ngo: 'Education For All',
      amount: 8000,
      date: '2025-11-08',
      purpose: 'Books and Stationery',
      status: 'Fully Utilized',
      utilized: 100,
      beneficiaries: 60,
      transactionId: 'TXN001234573',
    },
    {
      id: 8,
      ngo: 'Rural Development Society',
      amount: 30000,
      date: '2025-10-25',
      purpose: 'Agricultural Training',
      status: 'Partially Utilized',
      utilized: 70,
      beneficiaries: 150,
      transactionId: 'TXN001234574',
    },
  ];

  const totalDonated = donations.reduce((sum, d) => sum + d.amount, 0);
  const totalUtilized = donations.reduce((sum, d) => sum + (d.amount * d.utilized) / 100, 0);
  const totalBeneficiaries = donations.reduce((sum, d) => sum + d.beneficiaries, 0);

  const filteredDonations = donations.filter((donation) => {
    const matchesSearch =
      donation.ngo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.purpose.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === 'all' ||
      (filterStatus === 'utilized' && donation.utilized === 100) ||
      (filterStatus === 'partial' && donation.utilized > 0 && donation.utilized < 100) ||
      (filterStatus === 'pending' && donation.utilized === 0);
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Fully Utilized':
        return 'bg-green-100 text-green-700';
      case 'Partially Utilized':
        return 'bg-blue-100 text-blue-700';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Donations</h1>
          <p className="text-gray-600">Track all your contributions and their utilization</p>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 bg-blue-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Total Donated</h3>
            <p className="text-3xl font-bold text-gray-800">
              ₹{totalDonated.toLocaleString()}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 bg-green-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Total Utilized</h3>
            <p className="text-3xl font-bold text-gray-800">
              ₹{totalUtilized.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              {((totalUtilized / totalDonated) * 100).toFixed(1)}% of donations
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Building2 className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Beneficiaries Impacted</h3>
            <p className="text-3xl font-bold text-gray-800">{totalBeneficiaries}</p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by NGO or purpose..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex gap-2">
              <div className="relative flex-1">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="all">All Status</option>
                  <option value="utilized">Fully Utilized</option>
                  <option value="partial">Partially Utilized</option>
                  <option value="pending">Pending</option>
                </select>
              </div>

              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Download className="w-5 h-5" />
                Export
              </button>
            </div>
          </div>

          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold">{filteredDonations.length}</span> of{' '}
            <span className="font-semibold">{donations.length}</span> donations
          </p>
        </div>

        {/* Donations Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">NGO</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Purpose</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold">Amount</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Utilization</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Status</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredDonations.map((donation) => (
                  <tr
                    key={donation.id}
                    className="hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => onNavigate('donor-utilization', donation.id)}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        {donation.date}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="p-2 bg-blue-100 rounded-lg mr-3">
                          <Building2 className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{donation.ngo}</p>
                          <p className="text-xs text-gray-500">{donation.transactionId}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-800">{donation.purpose}</p>
                      <p className="text-xs text-gray-500">
                        {donation.beneficiaries} beneficiaries
                      </p>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <p className="font-bold text-gray-800">
                        ₹{donation.amount.toLocaleString()}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col items-center">
                        <span className="text-sm font-semibold text-gray-800 mb-1">
                          {donation.utilized}%
                        </span>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              donation.utilized === 100
                                ? 'bg-gradient-to-r from-green-500 to-green-600'
                                : donation.utilized > 0
                                ? 'bg-gradient-to-r from-blue-500 to-blue-600'
                                : 'bg-gray-300'
                            }`}
                            style={{ width: `${donation.utilized}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                          donation.status
                        )}`}
                      >
                        {donation.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigate('donor-utilization', donation.id);
                        }}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        View Details →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredDonations.length === 0 && (
            <div className="text-center py-12">
              <DollarSign className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No Donations Found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Want to Make Another Donation?</h3>
          <p className="text-blue-100 mb-6">
            Continue your impact by supporting more organizations
          </p>
          <button
            onClick={() => onNavigate('donor-make-donation')}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Make a Donation
          </button>
        </div>
      </div>
    </div>
  );
}

export default DonationsPage;
