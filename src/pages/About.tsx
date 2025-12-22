import { Target, Eye, Award, Shield } from 'lucide-react';

function About() {
  const coreValues = [
    {
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      title: 'Transparency',
      description:
        'Every transaction is tracked and visible. Complete transparency from donor to beneficiary ensures trust and accountability.',
    },
    {
      icon: <Target className="w-10 h-10 text-green-600" />,
      title: 'Accountability',
      description:
        'We maintain detailed records and provide comprehensive reports. Every dollar is accounted for and utilized as intended.',
    },
    {
      icon: <Eye className="w-10 h-10 text-blue-600" />,
      title: 'Visibility',
      description:
        'Real-time tracking and reporting give donors complete visibility into how their contributions are making an impact.',
    },
    {
      icon: <Award className="w-10 h-10 text-green-600" />,
      title: 'Impact',
      description:
        'Our focus is on creating measurable, positive impact in the lives of beneficiaries through efficient fund utilization.',
    },
  ];

  const objectives = [
    'Enable transparent tracking of all donations from source to utilization',
    'Provide real-time visibility into fund allocation and usage',
    'Build trust between donors, organizations, and beneficiaries',
    'Ensure accountability through comprehensive reporting and audit trails',
    'Maximize impact by optimizing resource allocation',
    'Create a sustainable ecosystem for charitable giving',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Our System
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Building a transparent and accountable ecosystem for charitable
            donations
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The TrustBridge Donations is designed to
              revolutionize charitable giving by bringing complete transparency
              and accountability to the donation process. We believe that donors
              deserve to know exactly how their contributions are being used and
              what impact they are making.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              By leveraging technology and best practices in financial tracking,
              we create a bridge of trust between generous donors and the
              beneficiaries who need support. Every transaction is recorded,
              tracked, and reported with precision, ensuring that charitable
              funds are used efficiently and effectively.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Project Objectives
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {objectives.map((objective, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">
                  {index + 1}
                </div>
                <p className="text-gray-700">{objective}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              How We Work
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  1. Donation Collection
                </h4>
                <p className="text-gray-600">
                  Secure acceptance and recording of all donations with complete
                  donor information and preferences.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  2. Fund Allocation
                </h4>
                <p className="text-gray-600">
                  Strategic distribution of funds based on project needs and
                  donor specifications.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  3. Implementation Tracking
                </h4>
                <p className="text-gray-600">
                  Real-time monitoring of fund utilization and project progress
                  with detailed documentation.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  4. Impact Reporting
                </h4>
                <p className="text-gray-600">
                  Comprehensive reports showing the impact and outcomes of
                  donated funds.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Why Transparency Matters
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                <strong>Trust Building:</strong> Transparency creates trust
                between donors and organizations, encouraging continued support
                and engagement.
              </p>
              <p className="text-gray-700">
                <strong>Accountability:</strong> When every transaction is
                visible, organizations are motivated to use funds responsibly
                and efficiently.
              </p>
              <p className="text-gray-700">
                <strong>Impact Verification:</strong> Donors can verify that
                their contributions are making the intended impact, providing
                satisfaction and encouraging future giving.
              </p>
              <p className="text-gray-700">
                <strong>Fraud Prevention:</strong> Complete visibility and
                audit trails significantly reduce opportunities for misuse of
                funds.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg shadow-md p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Be part of a transparent ecosystem that ensures every donation makes
            a real difference in people's lives.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Become a Donor
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
