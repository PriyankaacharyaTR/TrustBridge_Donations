import { DollarSign, Calendar, User, Download, Search, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { useState } from 'react';

interface DonationRecordsProps {
  onNavigate: (page: string, donationId?: number) => void;
}

function DonationRecords({ onNavigate }: DonationRecordsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [projectFilter, setProjectFilter] = useState('all');

  const donations = [
    {
      id: 1,
      transactionId: 'TXN-2025-001',
      donor: 'Rajesh Kumar',
      date: '2025-12-20',
      amount: 25000,
      project: 'School Infrastructure',
      utilizedAmount: 11250,
      status: 'Partial',
    },
    {
      id: 2,
      transactionId: 'TXN-2025-002',
      donor: 'Priya Sharma',
      date: '2025-12-18',
      amount: 15000,
      project: 'Medical Equipment',
      utilizedAmount: 0,
      status: 'Pending',
    },
    {
      id: 3,
      transactionId: 'TXN-2025-003',
      donor: 'Amit Patel',
      date: '2025-12-15',
      amount: 20000,
      project: 'Books and Materials',
      utilizedAmount: 20000,
      status: 'Completed',
    },
  ];

  const filteredDonations = donations.filter((donation) => {
    const matchesSearch =
      donation.donor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      donation.transactionId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || donation.status === statusFilter;
    const matchesProject = projectFilter === 'all' || donation.project === projectFilter;
    return matchesSearch && matchesStatus && matchesProject;
  });

  const totalAmount = filteredDonations.reduce((sum, d) => sum + d.amount, 0);
  const utilizedAmount = filteredDonations.reduce((sum, d) => sum + d.utilizedAmount, 0);

  const getStatusIcon = (status: string) => {
    if (status === 'Completed') return <CheckCircle className="w-5 h-5 text-green-600" />;
    if (status === 'Partial') return <Clock className="w-5 h-5 text-yellow-600" />;
    return <AlertCircle className="w-5 h-5 text-orange-600" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Donation Records</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <DollarSign className="w-6 h-6 text-blue-600 mb-2" />
            <p className="text-gray-600 text-sm mb-1">Total Donations</p>
            <p className="text-2xl font-bold">₹{totalAmount.toLocaleString()}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
            <p className="text-gray-600 text-sm mb-1">Utilized</p>
            <p className="text-2xl font-bold">₹{utilizedAmount.toLocaleString()}</p>
          </div>
          <button onClick={() => alert('Export')}>
            <Download className="w-5 h-5" /> Export
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm mb-2">
                <Search className="w-4 h-4 inline mr-2" />
                Search
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Search..."
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Status</label>
              <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="w-full px-4 py-2 border rounded-lg">
                <option value="all">All</option>
                <option value="Pending">Pending</option>
                <option value="Partial">Partial</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-2">Project</label>
              <select value={projectFilter} onChange={(e) => setProjectFilter(e.target.value)} className="w-full px-4 py-2 border rounded-lg">
                <option value="all">All</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-4 px-6">ID</th>
                <th className="text-left py-4 px-6">Donor</th>
                <th className="text-left py-4 px-6">Date</th>
                <th className="text-right py-4 px-6">Amount</th>
                <th className="text-left py-4 px-6">Status</th>
                <th className="text-center py-4 px-6">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredDonations.map((donation) => (
                <tr key={donation.id} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-6">{donation.transactionId}</td>
                  <td className="py-4 px-6 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {donation.donor}
                  </td>
                  <td className="py-4 px-6">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    {donation.date}
                  </td>
                  <td className="py-4 px-6 text-right">₹{donation.amount.toLocaleString()}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(donation.status)}
                      <span>{donation.status}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <button onClick={() => onNavigate('ngo-utilization', donation.id)} className="text-blue-600 hover:text-blue-700">
                      Manage →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DonationRecords;
