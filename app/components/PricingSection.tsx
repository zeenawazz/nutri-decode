import { Check } from 'lucide-react'

const plans = [
  {
    name: "Basic",
    price: "Free",
    features: [
      "Real-time label scanning",
      "Basic nutritional information",
      "Limited scans per month",
    ],
    cta: "Get Started",
    highlighted: false
  },
  {
    name: "Pro",
    price: "$9.99/mo",
    features: [
      "All Basic features",
      "Unlimited scans",
      "Detailed nutritional analysis",
      "Allergy alerts",
      "Environmental impact assessment"
    ],
    cta: "Start Free Trial",
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "All Pro features",
      "API access",
      "Custom integrations",
      "Dedicated support",
      "Employee accounts"
    ],
    cta: "Contact Sales",
    highlighted: false
  }
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-lg shadow-md overflow-hidden ${plan.highlighted ? 'ring-2 ring-green-500' : ''}`}>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold mb-4">{plan.price}</p>
                <ul className="mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center mb-2">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-2 rounded-full font-semibold ${plan.highlighted ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}>
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

