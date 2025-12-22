import { MessageSquare, Calendar, CheckCircle, X, Clock, Users, Mail, Phone, FileText } from 'lucide-react';

interface FundingResponsesProps {
  onNavigate: (page: string) => void;
}

function FundingResponses({ onNavigate }: FundingResponsesProps) {
  // Dummy responses
  const responses = [
    {
      id: 1,
      requestTitle: 'Community Water Supply Project',
      organization: 'Clean Water Initiative',
      responseDate: '2025-12-19',
      status: 'Meeting Requested',
      responseType: 'meeting',
      message: 'We are interested in your project. Our team would like to schedule a meeting to discuss the details and assess the feasibility. Please let us know your availability.',
      meetingDetails: {
        proposedDate: '2025-12-28',
        proposedTime: '10:00 AM',
        venue: 'Online (Google Meet)',
        contactPerson: 'Mr. Suresh Rao',
        contactEmail: 'suresh@cleanwater.org',
        contactPhone: '+91-9876543210',
      },
      requestedAmount: 300000,
    },
    {
      id: 2,
      requestTitle: 'Educational Scholarship Program',
      organization: 'EduFund India',
      responseDate: '2025-12-16',
      status: 'Approved',
      responseType: 'approval',
      message: 'Your funding request has been approved. We are pleased to support your scholarship initiative. The fund transfer will be initiated within 7 working days.',
      approvedAmount: 200000,
      conditions: [
        'Submit quarterly progress reports',
        'Provide beneficiary list with details',
        'Maintain transparent fund utilization records',
      ],
      requestedAmount: 200000,
    },
    {
      id: 3,
      requestTitle: 'Women Empowerment Workshop',
      organization: 'Women Welfare Society',
      responseDate: '2025-12-12',
      status: 'Declined',
      responseType: 'decline',
      message: 'Thank you for your funding request. After careful consideration, we regret to inform you that we cannot support this project at this time due to budget constraints. We encourage you to apply again in the next funding cycle.',
      reason: 'Budget constraints and priority alignment',
      requestedAmount: 80000,
    },
    {
      id: 4,
      requestTitle: 'Medical Equipment for Rural Clinic',
      organization: 'HealthCare Foundation',
      responseDate: '2025-12-21',
      status: 'Under Review',
      responseType: 'review',
      message: 'Your request is currently under review by our evaluation committee. We will get back to you within 10 business days with our decision.',
      requestedAmount: 150000,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Meeting Requested':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Declined':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'Meeting Requested':
        return <Users className="w-5 h-5 text-blue-600" />;
      case 'Declined':
        return <X className="w-5 h-5 text-red-600" />;
      case 'Under Review':
        return <Clock className="w-5 h-5 text-yellow-600" />;
      default:
        return <FileText className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Funding Request Responses</h1>
          <p className="text-gray-600">View replies and meeting requests from organizations</p>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-1">Approved</p>
            <p className="text-2xl font-bold text-gray-800">
              {responses.filter((r) => r.status === 'Approved').length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-1">Meetings</p>
            <p className="text-2xl font-bold text-gray-800">
              {responses.filter((r) => r.status === 'Meeting Requested').length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-1">Under Review</p>
            <p className="text-2xl font-bold text-gray-800">
              {responses.filter((r) => r.status === 'Under Review').length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 bg-red-100 rounded-lg">
                <X className="w-6 h-6 text-red-600" />
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-1">Declined</p>
            <p className="text-2xl font-bold text-gray-800">
              {responses.filter((r) => r.status === 'Declined').length}
            </p>
          </div>
        </div>

        {/* Responses List */}
        <div className="space-y-6">
          {responses.map((response) => (
            <div key={response.id} className="bg-white rounded-xl shadow-lg p-6">
              {/* Response Header */}
              <div className="flex items-start justify-between mb-4 pb-4 border-b border-gray-200">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {getStatusIcon(response.status)}
                    <h2 className="text-xl font-bold text-gray-800">{response.requestTitle}</h2>
                  </div>
                  <p className="text-gray-600 mb-1">From: {response.organization}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Response: {response.responseDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      Requested: ₹{response.requestedAmount.toLocaleString()}
                    </span>
                  </div>
                </div>
                <span className={`px-4 py-2 text-sm font-semibold rounded-full border ${getStatusColor(response.status)}`}>
                  {response.status}
                </span>
              </div>

              {/* Response Message */}
              <div className="mb-6">
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-700 mb-2">Response Message</p>
                    <p className="text-gray-800">{response.message}</p>
                  </div>
                </div>
              </div>

              {/* Conditional Content Based on Response Type */}
              {response.responseType === 'meeting' && response.meetingDetails && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Meeting Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-blue-700 mb-1">Proposed Date</p>
                      <p className="font-semibold text-blue-900">{response.meetingDetails.proposedDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-blue-700 mb-1">Time</p>
                      <p className="font-semibold text-blue-900">{response.meetingDetails.proposedTime}</p>
                    </div>
                    <div>
                      <p className="text-sm text-blue-700 mb-1">Venue/Platform</p>
                      <p className="font-semibold text-blue-900">{response.meetingDetails.venue}</p>
                    </div>
                    <div>
                      <p className="text-sm text-blue-700 mb-1">Contact Person</p>
                      <p className="font-semibold text-blue-900">{response.meetingDetails.contactPerson}</p>
                    </div>
                    <div>
                      <p className="text-sm text-blue-700 mb-1 flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        Email
                      </p>
                      <p className="font-semibold text-blue-900 break-all">{response.meetingDetails.contactEmail}</p>
                    </div>
                    <div>
                      <p className="text-sm text-blue-700 mb-1 flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        Phone
                      </p>
                      <p className="font-semibold text-blue-900">{response.meetingDetails.contactPhone}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-3">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Accept Meeting
                    </button>
                    <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                      Request Reschedule
                    </button>
                  </div>
                </div>
              )}

              {response.responseType === 'approval' && response.approvedAmount && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-green-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Approval Details
                  </h3>
                  <div className="mb-4">
                    <p className="text-sm text-green-700 mb-1">Approved Amount</p>
                    <p className="text-3xl font-bold text-green-900">₹{response.approvedAmount.toLocaleString()}</p>
                  </div>
                  {response.conditions && response.conditions.length > 0 && (
                    <div>
                      <p className="text-sm font-medium text-green-700 mb-2">Conditions</p>
                      <ul className="space-y-2">
                        {response.conditions.map((condition, index) => (
                          <li key={index} className="flex items-start gap-2 text-green-900">
                            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{condition}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="mt-4">
                    <button className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                      Accept & Proceed
                    </button>
                  </div>
                </div>
              )}

              {response.responseType === 'decline' && response.reason && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-red-900 mb-2 flex items-center gap-2">
                    <X className="w-5 h-5" />
                    Decline Reason
                  </h3>
                  <p className="text-red-900">{response.reason}</p>
                </div>
              )}

              {response.responseType === 'review' && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-yellow-900 mb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Review Status
                  </h3>
                  <p className="text-yellow-900">Your request is being evaluated. Check back later for updates.</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Responses */}
        {responses.length === 0 && (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">No Responses Yet</h3>
            <p className="text-gray-600 mb-4">You haven't received any responses to your funding requests.</p>
            <button
              onClick={() => onNavigate('ngo-funding-request')}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all"
            >
              Submit New Request
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default FundingResponses;
