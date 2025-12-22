import { Send, Plus, FileText, Calendar, Users, Target, Clock } from 'lucide-react';
import { useState } from 'react';

interface FundingRequestProps {
  onNavigate: (page: string) => void;
}

function FundingRequest({ onNavigate }: FundingRequestProps) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    organization: '',
    category: '',
    amount: '',
    purpose: '',
    expectedImpact: '',
    beneficiaries: '',
    startDate: '',
    endDate: '',
    contactPerson: '',
    contactEmail: '',
    contactPhone: '',
    additionalNotes: '',
  });

  // Dummy funding requests
  const requests = [
    {
      id: 1,
      title: 'Medical Equipment for Rural Clinic',
      organization: 'HealthCare Foundation',
      category: 'Healthcare',
      amount: 150000,
      purpose: 'Purchase of diagnostic equipment for rural healthcare facility',
      status: 'Pending',
      submittedDate: '2025-12-20',
      beneficiaries: 500,
      expectedImpact: 'Improved diagnostic capabilities for 500+ patients monthly',
    },
    {
      id: 2,
      title: 'Educational Scholarship Program',
      organization: 'EduFund India',
      category: 'Education',
      amount: 200000,
      purpose: 'Scholarship for 20 underprivileged students',
      status: 'Approved',
      submittedDate: '2025-12-15',
      beneficiaries: 20,
      expectedImpact: 'Support higher education for deserving students',
    },
    {
      id: 3,
      title: 'Community Water Supply Project',
      organization: 'Clean Water Initiative',
      category: 'Infrastructure',
      amount: 300000,
      purpose: 'Installation of water purification and supply system',
      status: 'Meeting Requested',
      submittedDate: '2025-12-18',
      beneficiaries: 1200,
      expectedImpact: 'Clean drinking water for entire village',
    },
    {
      id: 4,
      title: 'Women Empowerment Workshop',
      organization: 'Women Welfare Society',
      category: 'Social Welfare',
      amount: 80000,
      purpose: 'Vocational training and skill development program',
      status: 'Declined',
      submittedDate: '2025-12-10',
      beneficiaries: 50,
      expectedImpact: 'Employment opportunities for 50 women',
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
    alert('Funding request submitted successfully! (UI Only)');
    setShowForm(false);
    setFormData({
      title: '',
      organization: '',
      category: '',
      amount: '',
      purpose: '',
      expectedImpact: '',
      beneficiaries: '',
      startDate: '',
      endDate: '',
      contactPerson: '',
      contactEmail: '',
      contactPhone: '',
      additionalNotes: '',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Meeting Requested':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Declined':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Funding Requests</h1>
              <p className="text-gray-600">Submit and track funding requests to organizations</p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all"
            >
              <Plus className="w-5 h-5" />
              New Request
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-1">Pending</p>
            <p className="text-2xl font-bold text-gray-800">
              {requests.filter((r) => r.status === 'Pending').length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 bg-green-100 rounded-lg">
                <Target className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-1">Approved</p>
            <p className="text-2xl font-bold text-gray-800">
              {requests.filter((r) => r.status === 'Approved').length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-1">Meeting Requested</p>
            <p className="text-2xl font-bold text-gray-800">
              {requests.filter((r) => r.status === 'Meeting Requested').length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 bg-red-100 rounded-lg">
                <FileText className="w-6 h-6 text-red-600" />
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-1">Declined</p>
            <p className="text-2xl font-bold text-gray-800">
              {requests.filter((r) => r.status === 'Declined').length}
            </p>
          </div>
        </div>

        {/* Request Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-green-600 text-white p-6">
                <h2 className="text-2xl font-bold">Submit Funding Request</h2>
                <p className="text-blue-100 mt-1">Provide detailed information about your funding needs</p>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Basic Information */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Basic Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Request Title *
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g., Medical Equipment for Rural Clinic"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Target Organization *
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Organization name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category *
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select category</option>
                        <option value="Education">Education</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Infrastructure">Infrastructure</option>
                        <option value="Social Welfare">Social Welfare</option>
                        <option value="Environment">Environment</option>
                        <option value="Disaster Relief">Disaster Relief</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Requested Amount (₹) *
                      </label>
                      <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="150000"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expected Beneficiaries *
                      </label>
                      <input
                        type="number"
                        name="beneficiaries"
                        value={formData.beneficiaries}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="500"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Purpose *
                      </label>
                      <textarea
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Describe the purpose of this funding request..."
                        required
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expected Impact *
                      </label>
                      <textarea
                        name="expectedImpact"
                        value={formData.expectedImpact}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Describe the expected impact and outcomes..."
                        required
                      ></textarea>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Project Start Date *
                        </label>
                        <input
                          type="date"
                          name="startDate"
                          value={formData.startDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Project End Date *
                        </label>
                        <input
                          type="date"
                          name="endDate"
                          value={formData.endDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Contact Information</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Person *
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Full name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="contactEmail"
                        value={formData.contactEmail}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="email@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="contactPhone"
                        value={formData.contactPhone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="10-digit number"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any additional information..."
                  ></textarea>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Requests List */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Your Funding Requests</h2>
          <div className="space-y-4">
            {requests.map((request) => (
              <div
                key={request.id}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-800">{request.title}</h3>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(request.status)}`}>
                        {request.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">Organization: {request.organization}</p>
                    <p className="text-sm text-gray-600">Category: {request.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-800">₹{request.amount.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">{request.beneficiaries} beneficiaries</p>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg space-y-2">
                  <div className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Purpose</p>
                      <p className="text-sm text-gray-800">{request.purpose}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Expected Impact</p>
                      <p className="text-sm text-gray-800">{request.expectedImpact}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-600" />
                    <p className="text-xs text-gray-600">Submitted: {request.submittedDate}</p>
                  </div>
                </div>

                {request.status === 'Meeting Requested' && (
                  <div className="mt-4">
                    <button
                      onClick={() => onNavigate('ngo-funding-responses')}
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View Response →
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FundingRequest;
