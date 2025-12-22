import { Building2, Search, TrendingUp, MapPin, Filter } from 'lucide-react';
import { useState } from 'react';

interface NGOListingProps {
  onNavigate: (page: string, ngoId?: number) => void;
}

function NGOListing({ onNavigate }: NGOListingProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('all');

  // Dummy NGO data
  const ngos = [
    {
      id: 1,
      name: 'Education For All',
      sector: 'Education',
      location: 'Mumbai, Maharashtra',
      description: 'Providing quality education to underprivileged children across rural India',
      fundsReceived: 450000,
      utilized: 92,
      beneficiaries: 1200,
      projects: 15,
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Healthcare Foundation',
      sector: 'Healthcare',
      location: 'Delhi, NCR',
      description: 'Delivering essential healthcare services to marginalized communities',
      fundsReceived: 380000,
      utilized: 88,
      beneficiaries: 850,
      projects: 12,
      rating: 4.7,
    },
    {
      id: 3,
      name: 'Save The Children',
      sector: 'Child Welfare',
      location: 'Bangalore, Karnataka',
      description: 'Protecting children from abuse and providing shelter and education',
      fundsReceived: 320000,
      utilized: 85,
      beneficiaries: 650,
      projects: 10,
      rating: 4.9,
    },
    {
      id: 4,
      name: 'Clean Water Initiative',
      sector: 'Environment',
      location: 'Pune, Maharashtra',
      description: 'Ensuring access to clean drinking water in rural and tribal areas',
      fundsReceived: 280000,
      utilized: 78,
      beneficiaries: 2400,
      projects: 8,
      rating: 4.6,
    },
    {
      id: 5,
      name: 'Women Empowerment Trust',
      sector: 'Women Welfare',
      location: 'Kolkata, West Bengal',
      description: 'Empowering women through skill development and financial independence',
      fundsReceived: 250000,
      utilized: 90,
      beneficiaries: 540,
      projects: 9,
      rating: 4.8,
    },
    {
      id: 6,
      name: 'Food For All',
      sector: 'Food Security',
      location: 'Chennai, Tamil Nadu',
      description: 'Fighting hunger by providing nutritious meals to the needy',
      fundsReceived: 200000,
      utilized: 95,
      beneficiaries: 3200,
      projects: 20,
      rating: 4.9,
    },
    {
      id: 7,
      name: 'Rural Development Society',
      sector: 'Rural Development',
      location: 'Jaipur, Rajasthan',
      description: 'Promoting sustainable livelihoods and infrastructure in rural areas',
      fundsReceived: 180000,
      utilized: 82,
      beneficiaries: 980,
      projects: 7,
      rating: 4.5,
    },
    {
      id: 8,
      name: 'Skill India Foundation',
      sector: 'Education',
      location: 'Hyderabad, Telangana',
      description: 'Providing vocational training and job placement for youth',
      fundsReceived: 160000,
      utilized: 87,
      beneficiaries: 720,
      projects: 11,
      rating: 4.7,
    },
  ];

  const sectors = ['all', 'Education', 'Healthcare', 'Child Welfare', 'Environment', 'Women Welfare', 'Food Security', 'Rural Development'];

  const filteredNGOs = ngos.filter((ngo) => {
    const matchesSearch = ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ngo.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = selectedSector === 'all' || ngo.sector === selectedSector;
    return matchesSearch && matchesSector;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Browse NGOs</h1>
          <p className="text-gray-600">Find and support organizations making a difference</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search NGOs by name or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Sector Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
              >
                {sectors.map((sector) => (
                  <option key={sector} value={sector}>
                    {sector === 'all' ? 'All Sectors' : sector}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
            <span className="font-medium">{filteredNGOs.length}</span>
            <span>NGOs found</span>
          </div>
        </div>

        {/* NGO Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNGOs.map((ngo) => (
            <div
              key={ngo.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer overflow-hidden"
              onClick={() => onNavigate('donor-ngo-details', ngo.id)}
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-300">★</span>
                      <span className="text-sm font-semibold">{ngo.rating}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-1">{ngo.name}</h3>
                <div className="flex items-center text-sm text-blue-100">
                  <MapPin className="w-4 h-4 mr-1" />
                  {ngo.location}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-3">
                  {ngo.sector}
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{ngo.description}</p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Funds Received</p>
                    <p className="text-sm font-bold text-gray-800">
                      ₹{(ngo.fundsReceived / 1000).toFixed(0)}K
                    </p>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Beneficiaries</p>
                    <p className="text-sm font-bold text-gray-800">{ngo.beneficiaries}</p>
                  </div>
                </div>

                {/* Utilization Progress */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">Utilization</span>
                    <span className="font-semibold text-gray-800">{ngo.utilized}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        ngo.utilized >= 90
                          ? 'bg-gradient-to-r from-green-500 to-green-600'
                          : ngo.utilized >= 75
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600'
                          : 'bg-gradient-to-r from-yellow-500 to-orange-600'
                      }`}
                      style={{ width: `${ngo.utilized}%` }}
                    ></div>
                  </div>
                </div>

                {/* Projects Badge */}
                <div className="flex items-center text-sm text-gray-600">
                  <TrendingUp className="w-4 h-4 mr-1 text-green-600" />
                  <span>{ngo.projects} Active Projects</span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-4 pb-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate('donor-ngo-details', ngo.id);
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredNGOs.length === 0 && (
          <div className="text-center py-12">
            <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No NGOs Found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default NGOListing;
