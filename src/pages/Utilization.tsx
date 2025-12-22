import { Search, Filter } from 'lucide-react';

function Utilization() {
  const utilizations = [
    {
      id: 'UTIL-001',
      project: 'Education Program - School Supplies',
      amount: '$4,500',
      date: '2024-03-14',
      beneficiaries: 150,
      category: 'Education',
      status: 'Completed',
    },
    {
      id: 'UTIL-002',
      project: 'Healthcare Initiative - Medical Equipment',
      amount: '$8,200',
      date: '2024-03-13',
      beneficiaries: 320,
      category: 'Healthcare',
      status: 'In Progress',
    },
    {
      id: 'UTIL-003',
      project: 'Food Distribution - Monthly Rations',
      amount: '$2,800',
      date: '2024-03-12',
      beneficiaries: 200,
      category: 'Food Security',
      status: 'Completed',
    },
    {
      id: 'UTIL-004',
      project: 'Infrastructure - Water Well Construction',
      amount: '$12,000',
      date: '2024-03-11',
      beneficiaries: 500,
      category: 'Infrastructure',
      status: 'In Progress',
    },
    {
      id: 'UTIL-005',
      project: 'Education Program - Teacher Training',
      amount: '$3,500',
      date: '2024-03-10',
      beneficiaries: 45,
      category: 'Education',
      status: 'Completed',
    },
    {
      id: 'UTIL-006',
      project: 'Healthcare Initiative - Free Medical Camp',
      amount: '$5,600',
      date: '2024-03-09',
      beneficiaries: 280,
      category: 'Healthcare',
      status: 'Completed',
    },
    {
      id: 'UTIL-007',
      project: 'Technology - Computer Lab Setup',
      amount: '$15,000',
      date: '2024-03-08',
      beneficiaries: 400,
      category: 'Education',
      status: 'In Progress',
    },
    {
      id: 'UTIL-008',
      project: 'Food Distribution - Emergency Relief',
      amount: '$6,200',
      date: '2024-03-07',
      beneficiaries: 350,
      category: 'Food Security',
      status: 'Completed',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Fund Utilization
          </h1>
          <p className="text-gray-600">
            Detailed records of how donations are being utilized for various projects
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-sm text-gray-600 mb-1">Total Utilized</p>
            <p className="text-2xl font-bold text-green-600">$987,450</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-sm text-gray-600 mb-1">Active Projects</p>
            <p className="text-2xl font-bold text-blue-600">28</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-sm text-gray-600 mb-1">Completed Projects</p>
            <p className="text-2xl font-bold text-gray-800">142</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-sm text-gray-600 mb-1">Beneficiaries Served</p>
            <p className="text-2xl font-bold text-gray-800">3,456</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search utilization records..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="w-5 h-5 text-gray-600" />
                <span>Filter</span>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Utilization ID
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Project/Purpose
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Amount Used
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Beneficiaries
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {utilizations.map((util, index) => (
                  <tr
                    key={util.id}
                    className={`hover:bg-blue-50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-blue-600">
                      {util.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      {util.project}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-green-600">
                      {util.amount}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {util.date}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      {util.beneficiaries}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      {util.category}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                          util.status
                        )}`}
                      >
                        {util.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            Showing {utilizations.length} utilization records
          </p>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Previous
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Utilization;
