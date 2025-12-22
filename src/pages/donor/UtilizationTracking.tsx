import { DollarSign, Calendar, Building2, User, CheckCircle, Clock, ArrowLeft } from 'lucide-react';

interface UtilizationTrackingProps {
  onNavigate: (page: string) => void;
  donationId?: number;
}

function UtilizationTracking({ onNavigate, donationId = 1 }: UtilizationTrackingProps) {
  // Dummy donation details
  const donation = {
    id: donationId,
    ngo: 'Education For All',
    amount: 15000,
    date: '2025-12-15',
    purpose: 'School Infrastructure Development',
    transactionId: 'TXN001234567',
    status: 'Partially Utilized',
    totalUtilized: 11700,
    utilizationPercentage: 78,
  };

  // Utilization breakdown
  const utilizationDetails = [
    {
      id: 1,
      purpose: 'Classroom Renovation',
      amount: 5000,
      utilized: 5000,
      percentage: 100,
      date: '2025-12-18',
      beneficiaries: 120,
      location: 'Village Primary School, Raigad',
      status: 'Completed',
      receipt: 'REC-2025-001',
      description: 'Complete renovation of 2 classrooms including painting, flooring, and furniture',
    },
    {
      id: 2,
      purpose: 'Learning Materials',
      amount: 4000,
      utilized: 4000,
      percentage: 100,
      date: '2025-12-20',
      beneficiaries: 180,
      location: 'Multiple Schools, Mumbai District',
      status: 'Completed',
      receipt: 'REC-2025-002',
      description: 'Procurement and distribution of notebooks, textbooks, and stationery',
    },
    {
      id: 3,
      purpose: 'Digital Equipment',
      amount: 4000,
      utilized: 2700,
      percentage: 67.5,
      date: '2025-12-22',
      beneficiaries: 200,
      location: 'Government School, Thane',
      status: 'In Progress',
      receipt: 'REC-2025-003',
      description: 'Purchase of tablets and projector for digital learning initiatives',
    },
    {
      id: 4,
      purpose: 'Teacher Training',
      amount: 2000,
      utilized: 0,
      percentage: 0,
      date: 'Scheduled: Jan 2026',
      beneficiaries: 25,
      location: 'Regional Training Center',
      status: 'Pending',
      receipt: 'Pending',
      description: 'Professional development workshop for teaching staff',
    },
  ];

  // Beneficiary details
  const beneficiaryImpact = [
    { category: 'Students', count: 450, icon: '👨‍🎓' },
    { category: 'Teachers', count: 25, icon: '👩‍🏫' },
    { category: 'Schools', count: 5, icon: '🏫' },
    { category: 'Villages', count: 3, icon: '🏘️' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'In Progress':
        return <Clock className="w-5 h-5 text-blue-600" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700';
      case 'In Progress':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => onNavigate('donor-donations')}
          className="flex items-center text-blue-600 hover:text-blue-700 font-medium mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Donations
        </button>

        {/* Donation Header */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl shadow-lg p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Building2 className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-blue-100 text-sm">Donated to</p>
                  <h1 className="text-2xl font-bold">{donation.ngo}</h1>
                </div>
              </div>
              <div className="space-y-2 text-blue-100">
                <p className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {donation.date}
                </p>
                <p className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Transaction: {donation.transactionId}
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-blue-100 text-sm mb-2">Donation Amount</p>
              <p className="text-4xl font-bold mb-4">₹{donation.amount.toLocaleString()}</p>
              <div className="inline-block px-4 py-2 bg-white/20 rounded-lg">
                <p className="text-sm mb-1">Purpose</p>
                <p className="font-semibold">{donation.purpose}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Utilization Summary */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Utilization Summary</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Total Amount</p>
              <p className="text-2xl font-bold text-gray-800">
                ₹{donation.amount.toLocaleString()}
              </p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Utilized</p>
              <p className="text-2xl font-bold text-green-600">
                ₹{donation.totalUtilized.toLocaleString()}
              </p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Remaining</p>
              <p className="text-2xl font-bold text-gray-800">
                ₹{(donation.amount - donation.totalUtilized).toLocaleString()}
              </p>
            </div>
          </div>

          {/* Overall Progress */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Overall Progress</span>
              <span className="text-sm font-bold text-gray-800">
                {donation.utilizationPercentage}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-blue-500 to-green-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${donation.utilizationPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Beneficiary Impact */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Beneficiary Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {beneficiaryImpact.map((item, index) => (
              <div key={index} className="text-center p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg">
                <div className="text-4xl mb-2">{item.icon}</div>
                <p className="text-2xl font-bold text-gray-800 mb-1">{item.count}</p>
                <p className="text-sm text-gray-600">{item.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Utilization Breakdown */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Detailed Utilization Breakdown
          </h2>
          <div className="space-y-6">
            {utilizationDetails.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {getStatusIcon(item.status)}
                      <h3 className="text-lg font-bold text-gray-800">{item.purpose}</h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                  </div>
                  <div className="text-right ml-4">
                    <p className="text-sm text-gray-600 mb-1">Allocated</p>
                    <p className="text-xl font-bold text-gray-800">
                      ₹{item.amount.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">Utilization Progress</span>
                    <span className="font-semibold text-gray-800">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-500 ${
                        item.percentage === 100
                          ? 'bg-gradient-to-r from-green-500 to-green-600'
                          : item.percentage > 0
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600'
                          : 'bg-gray-300'
                      }`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Amount Spent</p>
                    <p className="font-semibold text-gray-800">
                      ₹{item.utilized.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Date</p>
                    <p className="font-semibold text-gray-800">{item.date}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Beneficiaries</p>
                    <p className="font-semibold text-gray-800 flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {item.beneficiaries}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Receipt</p>
                    <p className="font-semibold text-blue-600">{item.receipt}</p>
                  </div>
                </div>

                {/* Location */}
                <div className="mt-4 flex items-start">
                  <div className="p-2 bg-blue-100 rounded-lg mr-3">
                    <Building2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Location</p>
                    <p className="text-sm font-medium text-gray-800">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4 justify-center">
          <button
            onClick={() => onNavigate('donor-donations')}
            className="px-8 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            View All Donations
          </button>
          <button
            onClick={() => onNavigate('donor-make-donation')}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all"
          >
            Make Another Donation
          </button>
        </div>
      </div>
    </div>
  );
}

export default UtilizationTracking;
