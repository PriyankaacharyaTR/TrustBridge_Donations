import { Search, Download } from 'lucide-react';

function Donations() {
  const donations = [
    {
      id: 'DON-001',
      donor: 'John Smith',
      amount: '$5,000',
      date: '2024-03-15',
      purpose: 'Education Program',
      status: 'Received',
    },
    {
      id: 'DON-002',
      donor: 'ABC Corporation',
      amount: '$10,000',
      date: '2024-03-14',
      purpose: 'Healthcare Initiative',
      status: 'Received',
    },
    {
      id: 'DON-003',
      donor: 'Jane Doe',
      amount: '$2,500',
      date: '2024-03-13',
      purpose: 'Food Distribution',
      status: 'Received',
    },
    {
      id: 'DON-004',
      donor: 'XYZ Foundation',
      amount: '$15,000',
      date: '2024-03-12',
      purpose: 'Infrastructure Development',
      status: 'Received',
    },
    {
      id: 'DON-005',
      donor: 'Michael Johnson',
      amount: '$3,200',
      date: '2024-03-11',
      purpose: 'Education Program',
      status: 'Received',
    },
    {
      id: 'DON-006',
      donor: 'Sarah Williams',
      amount: '$4,800',
      date: '2024-03-10',
      purpose: 'Healthcare Initiative',
      status: 'Received',
    },
    {
      id: 'DON-007',
      donor: 'Tech Corp Inc.',
      amount: '$20,000',
      date: '2024-03-09',
      purpose: 'Technology for Education',
      status: 'Received',
    },
    {
      id: 'DON-008',
      donor: 'Robert Brown',
      amount: '$1,500',
      date: '2024-03-08',
      purpose: 'Food Distribution',
      status: 'Received',
    },
    {
      id: 'DON-009',
      donor: 'Green Earth NGO',
      amount: '$8,000',
      date: '2024-03-07',
      purpose: 'Environmental Conservation',
      status: 'Received',
    },
    {
      id: 'DON-010',
      donor: 'Emily Davis',
      amount: '$2,800',
      date: '2024-03-06',
      purpose: 'Healthcare Initiative',
      status: 'Received',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Donation Records</h1>
          <p className="text-gray-600">
            Complete history of all donations received in the system
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search donations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-shadow">
              <Download className="w-5 h-5" />
              <span>Export Data</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Donation ID
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Donor Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Purpose
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {donations.map((donation, index) => (
                  <tr
                    key={donation.id}
                    className={`hover:bg-blue-50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-blue-600">
                      {donation.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      {donation.donor}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-green-600">
                      {donation.amount}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {donation.date}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      {donation.purpose}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        {donation.status}
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
            Showing {donations.length} donation records
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
              3
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

export default Donations;
