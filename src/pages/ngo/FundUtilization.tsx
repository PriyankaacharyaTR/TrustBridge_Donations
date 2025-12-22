import { TrendingUp, Save, Plus, X, Calendar, FileText, Users, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface FundUtilizationProps {
  onNavigate: (page: string) => void;
}

function FundUtilization({ onNavigate: _onNavigate }: FundUtilizationProps) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    donationId: '',
    purpose: '',
    amount: '',
    date: '',
    beneficiaries: '',
    location: '',
    description: '',
    receiptNumber: '',
  });

  // Dummy donation list
  const donations = [
    { id: 1, donor: 'Rajesh Kumar', amount: 25000, project: 'School Infrastructure', utilized: 45 },
    { id: 2, donor: 'Priya Sharma', amount: 15000, project: 'Medical Equipment', utilized: 0 },
    { id: 3, donor: 'Amit Patel', amount: 20000, project: 'Books and Materials', utilized: 100 },
  ];

  // Dummy utilization records
  const utilizationRecords = [
    {
      id: 1,
      donation: 'Rajesh Kumar - ₹25,000',
      purpose: 'Classroom Renovation',
      amount: 11250,
      date: '2025-12-18',
      beneficiaries: 120,
      location: 'Village School, Raigad',
      receiptNumber: 'REC-2025-001',
      status: 'Completed',
    },
    {
      id: 2,
      donation: 'Amit Patel - ₹20,000',
      purpose: 'Books Distribution',
      amount: 20000,
      date: '2025-12-15',
      beneficiaries: 180,
      location: 'Multiple Schools',
      receiptNumber: 'REC-2025-002',
      status: 'Completed',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Utilization record added successfully! (UI Only)');
    setShowAddForm(false);
    setFormData({
      donationId: '',
      purpose: '',
      amount: '',
      date: '',
      beneficiaries: '',
      location: '',
      description: '',
      receiptNumber: '',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Fund Utilization Management</h1>
              <p className="text-gray-600">Track and manage how donations are being utilized</p>
            </div>
            <button
              onClick={() => setShowAddForm(true)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all"
            >
              <Plus className="w-5 h-5" />
              Add Utilization
            </button>
          </div>
        </div>

        {/* Donations Needing Utilization */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Donations Pending Utilization</h2>
          <div className="space-y-3">
            {donations.filter(d => d.utilized < 100).map((donation) => (
              <div
                key={donation.id}
                className="p-4 bg-orange-50 border border-orange-200 rounded-lg flex items-center justify-between"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{donation.donor}</h3>
                  <p className="text-sm text-gray-600">{donation.project}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-xs">
                      <div
                        className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full"
                        style={{ width: `${donation.utilized}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">{donation.utilized}%</span>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <p className="text-lg font-bold text-gray-800">₹{donation.amount.toLocaleString()}</p>
                  <button
                    onClick={() => {
                      setShowAddForm(true);
                      setFormData({ ...formData, donationId: donation.id.toString() });
                    }}
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium mt-1"
                  >
                    Add Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Utilization Form Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Add Utilization Details</h2>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Donation *
                  </label>
                  <select
                    name="donationId"
                    value={formData.donationId}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Choose a donation</option>
                    {donations.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.donor} - ₹{d.amount.toLocaleString()} ({d.project})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Purpose *
                    </label>
                    <input
                      type="text"
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Classroom Renovation"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Amount Utilized (₹) *
                    </label>
                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="10000"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Beneficiaries Count *
                    </label>
                    <input
                      type="number"
                      name="beneficiaries"
                      value={formData.beneficiaries}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="120"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Village School, Raigad"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Receipt Number *
                    </label>
                    <input
                      type="text"
                      name="receiptNumber"
                      value={formData.receiptNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="REC-2025-XXX"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Detailed Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Provide details about how the funds were utilized..."
                    required
                  ></textarea>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all flex items-center justify-center gap-2"
                  >
                    <Save className="w-5 h-5" />
                    Save Utilization
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Utilization Records */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Utilization Records</h2>
          <div className="space-y-4">
            {utilizationRecords.map((record) => (
              <div
                key={record.id}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <h3 className="text-lg font-bold text-gray-800">{record.purpose}</h3>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                        {record.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">From: {record.donation}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-800">₹{record.amount.toLocaleString()}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-xs text-gray-600 mb-1 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Date
                    </p>
                    <p className="font-semibold text-gray-800">{record.date}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1 flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      Beneficiaries
                    </p>
                    <p className="font-semibold text-gray-800">{record.beneficiaries}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1 flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      Location
                    </p>
                    <p className="font-semibold text-gray-800 text-sm">{record.location}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1 flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      Receipt
                    </p>
                    <p className="font-semibold text-blue-600 text-sm">{record.receiptNumber}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FundUtilization;
