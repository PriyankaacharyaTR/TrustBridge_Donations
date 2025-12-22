import { Building2, MapPin, TrendingUp, Heart, ArrowLeft, Calendar, Users } from 'lucide-react';

interface NGODetailsProps {
  onNavigate: (page: string) => void;
  ngoId?: number;
}

function NGODetails({ onNavigate, ngoId = 1 }: NGODetailsProps) {
  // Dummy NGO data
  const ngo = {
    id: ngoId,
    name: 'Education For All',
    sector: 'Education',
    location: 'Mumbai, Maharashtra',
    description: 'Education For All is dedicated to providing quality education to underprivileged children across rural India. We believe every child deserves access to education regardless of their economic background.',
    founded: '2015',
    website: 'www.educationforall.org',
    email: 'contact@educationforall.org',
    phone: '+91 98765 43210',
    rating: 4.8,
    totalFunds: 450000,
    utilized: 92,
    beneficiaries: 1200,
    projects: 15,
  };

  // Donor's donations to this NGO
  const donorDonations = [
    { id: 1, amount: 15000, date: '2025-11-15', purpose: 'School Infrastructure', utilized: 95 },
    { id: 2, amount: 20000, date: '2025-10-20', purpose: 'Books and Learning Materials', utilized: 100 },
    { id: 3, amount: 10000, date: '2025-09-10', purpose: 'Teacher Training Program', utilized: 88 },
  ];

  const totalDonated = donorDonations.reduce((sum, d) => sum + d.amount, 0);

  // Utilization breakdown
  const utilizationBreakdown = [
    { purpose: 'School Infrastructure', amount: 14250, percentage: 95 },
    { purpose: 'Books and Learning Materials', amount: 20000, percentage: 100 },
    { purpose: 'Teacher Training Program', amount: 8800, percentage: 88 },
    { purpose: 'Student Scholarships', amount: 12000, percentage: 85 },
  ];

  // Impact metrics
  const impactMetrics = [
    { label: 'Students Enrolled', value: '450', icon: <Users className="w-5 h-5" /> },
    { label: 'Schools Supported', value: '12', icon: <Building2 className="w-5 h-5" /> },
    { label: 'Teachers Trained', value: '35', icon: <TrendingUp className="w-5 h-5" /> },
    { label: 'Active Projects', value: '15', icon: <Heart className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => onNavigate('donor-ngos')}
          className="flex items-center text-blue-600 hover:text-blue-700 font-medium mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to NGO Listing
        </button>

        {/* NGO Header */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-white/20 rounded-xl">
                  <Building2 className="w-10 h-10" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold mb-2">{ngo.name}</h1>
                  <div className="flex items-center gap-4 text-blue-100">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {ngo.location}
                    </span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                      {ngo.sector}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-blue-50 mb-4">{ngo.description}</p>
              <div className="flex items-center gap-6 text-sm">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Founded {ngo.founded}
                </span>
                <span className="flex items-center">
                  <span className="text-yellow-300 mr-1">★</span>
                  {ngo.rating} Rating
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="mb-2">
                <p className="text-blue-100 text-sm mb-1">Overall Utilization</p>
                <p className="text-4xl font-bold">{ngo.utilized}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {impactMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg mb-3">
                {metric.icon}
              </div>
              <p className="text-2xl font-bold text-gray-800 mb-1">{metric.value}</p>
              <p className="text-sm text-gray-600">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Your Donations to This NGO */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800">Your Contributions</h2>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Total Donated</p>
                  <p className="text-2xl font-bold text-green-600">
                    ₹{totalDonated.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {donorDonations.map((donation) => (
                  <div
                    key={donation.id}
                    className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-800">{donation.purpose}</h3>
                      <span className="font-bold text-gray-800">
                        ₹{donation.amount.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{donation.date}</span>
                      <span className="text-green-600 font-medium">
                        {donation.utilized}% Utilized
                      </span>
                    </div>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                        style={{ width: `${donation.utilized}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Utilization Summary */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Overall Utilization Summary
              </h2>
              <div className="space-y-4">
                {utilizationBreakdown.map((item, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-800">{item.purpose}</h3>
                      <span className="font-bold text-gray-800">
                        ₹{item.amount.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-12 text-right">
                        {item.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => onNavigate('donor-utilization')}
                className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View Detailed Utilization Report
              </button>
            </div>
          </div>

          {/* Right Column - Actions & Contact */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={() => onNavigate('donor-make-donation')}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all flex items-center justify-center gap-2"
                >
                  <Heart className="w-5 h-5" />
                  Donate to This NGO
                </button>
                <button
                  onClick={() => onNavigate('donor-utilization')}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <TrendingUp className="w-5 h-5" />
                  Track Utilization
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Contact Information</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-600 mb-1">Website</p>
                  <a
                    href={`https://${ngo.website}`}
                    className="text-blue-600 hover:underline"
                  >
                    {ngo.website}
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Email</p>
                  <a
                    href={`mailto:${ngo.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {ngo.email}
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Phone</p>
                  <a href={`tel:${ngo.phone}`} className="text-blue-600 hover:underline">
                    {ngo.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4">NGO Statistics</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-blue-100">Total Funds</span>
                  <span className="font-bold">₹{(ngo.totalFunds / 1000).toFixed(0)}K</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-100">Beneficiaries</span>
                  <span className="font-bold">{ngo.beneficiaries}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-100">Active Projects</span>
                  <span className="font-bold">{ngo.projects}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NGODetails;
