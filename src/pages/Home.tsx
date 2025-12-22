import { ArrowRight, Users, DollarSign, TrendingUp, Heart } from 'lucide-react';

function Home() {
  const flowSteps = [
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: 'Donor',
      description: 'Generous individuals and organizations contribute funds',
    },
    {
      icon: <DollarSign className="w-12 h-12 text-green-600" />,
      title: 'Donation',
      description: 'Secure and transparent donation collection',
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      title: 'Utilization',
      description: 'Funds are allocated and tracked for specific purposes',
    },
    {
      icon: <Heart className="w-12 h-12 text-green-600" />,
      title: 'Beneficiary',
      description: 'Support reaches those who need it most',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            TrustBridge Donations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building trust through complete transparency in donation tracking and utilization.
            Every contribution is tracked from donor to beneficiary with full accountability.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {flowSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="flex justify-center mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {index < flowSteps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-blue-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Full Transparency</h3>
            <p className="text-gray-600">
              Track every donation from the moment it's received until it reaches the beneficiary.
              Complete visibility into fund utilization.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-green-600 mb-3">Real-time Updates</h3>
            <p className="text-gray-600">
              Get instant updates on donation status, fund allocation, and impact metrics.
              Stay informed every step of the way.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Accountability</h3>
            <p className="text-gray-600">
              Detailed reports and audit trails ensure every dollar is accounted for and
              used as intended.
            </p>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg shadow-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-6">
            Join us in creating a transparent ecosystem for charitable giving.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
