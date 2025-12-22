import { Users, Search, Mail, Phone, Calendar, DollarSign, TrendingUp, Eye } from 'lucide-react';
import { useState } from 'react';

interface DonorManagementProps {
  onNavigate: (page: string, donorId?: number) => void;
}

function DonorManagement({ }: DonorManagementProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDonor, setSelectedDonor] = useState<number | null>(null);

  // Dummy donor data
  const donors = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      email: 'rajesh.kumar@email.com',
      phone: '+91 98765 43210',
      totalContributions: 125000,
      donationCount: 8,
      lastDonation: '2025-12-20',
      joinedDate: '2024-03-15',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      email: 'priya.sharma@email.com',
      phone: '+91 98765 43211',
      totalContributions: 85000,
      donationCount: 5,
      lastDonation: '2025-12-19',
      joinedDate: '2024-06-20',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Amit Patel',
      email: 'amit.patel@email.com',
      phone: '+91 98765 43212',
      totalContributions: 150000,
      donationCount: 12,
      lastDonation: '2025-12-18',
      joinedDate: '2023-11-10',
      status: 'Active',
    },
    {
      id: 4,
      name: 'Sunita Reddy',
      email: 'sunita.reddy@email.com',
      phone: '+91 98765 43213',
      totalContributions: 65000,
      donationCount: 4,
      lastDonation: '2025-12-10',
      joinedDate: '2024-08-05',
      status: 'Active',
    },
    {
      id: 5,
      name: 'Vikram Singh',
      email: 'vikram.singh@email.com',
      phone: '+91 98765 43214',
      totalContributions: 200000,
      donationCount: 15,
      lastDonation: '2025-12-15',
      joinedDate: '2023-05-12',
      status: 'Active',
    },
  ];

  // Donation history for selected donor
  const getDonationHistory = (donorId: number) => {
    const histories: { [key: number]: any[] } = {
      1: [
        { id: 1, amount: 25000, date: '2025-12-20', purpose: 'School Infrastructure', utilized: 45 },
        { id: 2, amount: 20000, date: '2025-11-15', purpose: 'Medical Equipment', utilized: 100 },
        { id: 3, amount: 15000, date: '2025-10-20', purpose: 'Student Scholarships', utilized: 88 },
      ],
      2: [
        { id: 1, amount: 15000, date: '2025-12-19', purpose: 'Books and Materials', utilized: 60 },
        { id: 2, amount: 30000, date: '2025-11-10', purpose: 'School Infrastructure', utilized: 95 },
      ],
    };
    return histories[donorId] || [];
  };

  const filteredDonors = donors.filter((donor) =>
    donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donor.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalDonorsAmount = donors.reduce((sum, d) => sum + d.totalContributions, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Donor Management</h1>
          <p className="text-gray-600">Manage relationships with your valued donors</p>
        </div>

        {/* Summary Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-sm text-gray-600">Total Donors</h3>
            </div>
            <p className="text-2xl font-bold text-gray-800">{donors.length}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-100 rounded-lg">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-sm text-gray-600">Total Contributions</h3>
            </div>
            <p className="text-2xl font-bold text-gray-800">
              ₹{(totalDonorsAmount / 1000).toFixed(0)}K
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-sm text-gray-600">Avg. Donation</h3>
            </div>
            <p className="text-2xl font-bold text-gray-800">
              ₹{(totalDonorsAmount / donors.reduce((sum, d) => sum + d.donationCount, 0)).toFixed(0)}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Calendar className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-sm text-gray-600">Active This Month</h3>
            </div>
            <p className="text-2xl font-bold text-gray-800">
              {donors.filter(d => d.lastDonation.startsWith('2025-12')).length}
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search donors by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Donor List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
                <h2 className="text-xl font-bold">Donor List</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {filteredDonors.map((donor) => (
                  <div
                    key={donor.id}
                    onClick={() => setSelectedDonor(donor.id)}
                    className={`p-6 hover:bg-gray-50 transition-colors cursor-pointer ${
                      selectedDonor === donor.id ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            {donor.name.charAt(0)}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800">{donor.name}</h3>
                            <p className="text-sm text-gray-600 flex items-center gap-1">
                              <Mail className="w-4 h-4" />
                              {donor.email}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-4">
                          <div>
                            <p className="text-xs text-gray-600">Total Contributions</p>
                            <p className="text-lg font-bold text-green-600">
                              ₹{donor.totalContributions.toLocaleString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Donations</p>
                            <p className="text-lg font-bold text-gray-800">{donor.donationCount}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Last Donation</p>
                            <p className="text-sm font-medium text-gray-800">{donor.lastDonation}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Member Since</p>
                            <p className="text-sm font-medium text-gray-800">{donor.joinedDate}</p>
                          </div>
                        </div>
                      </div>

                      <button className="ml-4 p-2 hover:bg-blue-100 rounded-lg transition-colors">
                        <Eye className="w-5 h-5 text-blue-600" />
                      </button>
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                        {donor.status}
                      </span>
                      <a
                        href={`tel:${donor.phone}`}
                        className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Phone className="w-4 h-4" />
                        {donor.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Donor Details Panel */}
          <div className="lg:col-span-1">
            {selectedDonor ? (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-4">
                <div className="p-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
                  <h2 className="text-xl font-bold">Donor Details</h2>
                </div>
                <div className="p-6">
                  {(() => {
                    const donor = donors.find(d => d.id === selectedDonor);
                    const history = getDonationHistory(selectedDonor);
                    return donor ? (
                      <>
                        <div className="text-center mb-6">
                          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-3">
                            {donor.name.charAt(0)}
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">{donor.name}</h3>
                          <p className="text-sm text-gray-600">{donor.email}</p>
                        </div>

                        <div className="space-y-4 mb-6">
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <p className="text-xs text-gray-600 mb-1">Total Contributed</p>
                            <p className="text-2xl font-bold text-green-600">
                              ₹{donor.totalContributions.toLocaleString()}
                            </p>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 bg-gray-50 rounded-lg">
                              <p className="text-xs text-gray-600 mb-1">Donations</p>
                              <p className="text-xl font-bold text-gray-800">{donor.donationCount}</p>
                            </div>
                            <div className="p-3 bg-gray-50 rounded-lg">
                              <p className="text-xs text-gray-600 mb-1">Avg. Amount</p>
                              <p className="text-xl font-bold text-gray-800">
                                ₹{(donor.totalContributions / donor.donationCount).toFixed(0)}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 pt-4">
                          <h4 className="font-semibold text-gray-800 mb-3">Donation History</h4>
                          <div className="space-y-3 max-h-64 overflow-y-auto">
                            {history.map((donation) => (
                              <div key={donation.id} className="p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="font-semibold text-gray-800">
                                    ₹{donation.amount.toLocaleString()}
                                  </span>
                                  <span className="text-xs text-gray-500">{donation.date}</span>
                                </div>
                                <p className="text-sm text-gray-600 mb-2">{donation.purpose}</p>
                                <div className="flex items-center gap-2">
                                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                                    <div
                                      className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                                      style={{ width: `${donation.utilized}%` }}
                                    ></div>
                                  </div>
                                  <span className="text-xs text-gray-600">{donation.utilized}%</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : null;
                  })()}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Select a Donor
                </h3>
                <p className="text-sm text-gray-600">
                  Click on a donor from the list to view their details and donation history
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonorManagement;
