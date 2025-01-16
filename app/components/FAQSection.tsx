'use client'

import { useState, useMemo } from 'react'
import { ChevronDown, ChevronUp, Search } from 'lucide-react'

type FAQ = {
  id: string
  category: string
  question: string
  answer: string
  relatedQuestions: string[]
}

const faqs: FAQ[] = [
  {
    id: 'ai-scanning',
    category: 'General Usage',
    question: 'How does the AI scanning work?',
    answer: 'Our AI scanning technology uses advanced image recognition and machine learning algorithms to analyze food labels, ingredients, and even fresh produce. When you take a picture of a food item, our AI processes the image in real-time, extracting relevant information such as nutritional content, ingredients, and potential allergens.',
    relatedQuestions: ['device-support', 'accuracy']
  },
  {
    id: 'device-support',
    category: 'General Usage',
    question: 'What devices are supported?',
    answer: 'NutriDecode supports a wide range of devices. Our app is available for both iOS and Android smartphones and tablets. We also have a web version that can be accessed from any modern web browser on desktops and laptops.',
    relatedQuestions: ['ai-scanning', 'offline-use']
  },
  {
    id: 'accuracy',
    category: 'General Usage',
    question: 'How accurate are the results?',
    answer: 'Our AI model has been trained on millions of food items and achieves an accuracy rate of over 95% for packaged foods with clear labels. For fresh produce and homemade meals, accuracy may vary but typically remains above 90%. We continuously update and improve our AI model to enhance accuracy.',
    relatedQuestions: ['ai-scanning', 'database-updates']
  },
  {
    id: 'plan-details',
    category: 'Features & Pricing',
    question: 'What\'s included in each plan?',
    answer: 'We offer three plans: Basic, Pro, and Enterprise. The Basic plan includes limited scans per month and access to essential nutritional information. The Pro plan offers unlimited scans, detailed nutritional analysis, allergen alerts, and environmental impact assessments. The Enterprise plan includes all Pro features plus API access, custom integrations, and dedicated support.',
    relatedQuestions: ['switch-plans', 'hidden-costs']
  },
  {
    id: 'switch-plans',
    category: 'Features & Pricing',
    question: 'Can I switch plans?',
    answer: 'Yes, you can switch between plans at any time. If you upgrade, the new features will be immediately available, and you\'ll be billed the new rate on your next billing cycle. If you downgrade, the changes will take effect at the start of your next billing cycle.',
    relatedQuestions: ['plan-details', 'hidden-costs']
  },
  {
    id: 'hidden-costs',
    category: 'Features & Pricing',
    question: 'Are there any hidden costs?',
    answer: 'No, there are no hidden costs. All features included in your chosen plan are clearly listed, and you won\'t be charged for anything extra. For the Enterprise plan, custom integrations may incur additional costs, which will be discussed and agreed upon before implementation.',
    relatedQuestions: ['plan-details', 'switch-plans']
  },
  {
    id: 'offline-use',
    category: 'Technical',
    question: 'Does it work offline?',
    answer: 'The app requires an internet connection for full functionality, including real-time AI analysis. However, we do offer limited offline capabilities. You can view your previously scanned items and their details without an internet connection. For the best experience and most up-to-date information, we recommend using the app with an internet connection.',
    relatedQuestions: ['device-support', 'data-protection']
  },
  {
    id: 'data-protection',
    category: 'Technical',
    question: 'How is my data protected?',
    answer: 'We take data protection very seriously. All data transmitted between your device and our servers is encrypted using industry-standard SSL/TLS protocols. We do not sell your personal data to third parties. Your scanned food data is stored securely and is only used to improve our AI model and provide you with personalized insights.',
    relatedQuestions: ['permissions', 'offline-use']
  },
  {
    id: 'permissions',
    category: 'Technical',
    question: 'What permissions are required?',
    answer: 'The app requires camera permission for scanning food items. We also request storage permission to save your scan history and results. On some devices, we may ask for location permission to provide localized food recommendations and environmental impact data. You can manage these permissions in your device settings at any time.',
    relatedQuestions: ['data-protection', 'device-support']
  },
  {
    id: 'food-types',
    category: 'Food Analysis',
    question: 'What types of food can be analyzed?',
    answer: 'NutriDecode can analyze a wide variety of food items, including packaged foods, fresh produce, restaurant meals, and even homemade dishes. For packaged foods, we can scan labels and barcodes. For other items, our AI can analyze the visual appearance of the food to provide nutritional estimates.',
    relatedQuestions: ['analysis-time', 'save-results']
  },
  {
    id: 'analysis-time',
    category: 'Food Analysis',
    question: 'How long does analysis take?',
    answer: 'The analysis time depends on your internet connection and the complexity of the food item. Typically, for packaged foods with clear labels or barcodes, the analysis takes 1-3 seconds. For more complex items like restaurant meals or homemade dishes, it may take 3-5 seconds. In rare cases with very complex or unusual foods, it might take up to 10 seconds.',
    relatedQuestions: ['food-types', 'accuracy']
  },
  {
    id: 'save-results',
    category: 'Food Analysis',
    question: 'Are results saved for later?',
    answer: 'Yes, all your scan results are saved in your personal food diary within the app. You can access these results at any time, even offline. This feature allows you to track your nutrition over time, compare different foods, and make informed decisions about your diet.',
    relatedQuestions: ['food-types', 'data-protection']
  },
  {
    id: 'database-updates',
    category: 'Support & Updates',
    question: 'How often is the database updated?',
    answer: 'Our food database and AI model are updated weekly to ensure the most accurate and up-to-date information. These updates include new food items, refined nutritional data, and improvements to our AI algorithms. The app automatically uses the latest database without requiring any action from you.',
    relatedQuestions: ['accuracy', 'report-issues']
  },
  {
    id: 'support-options',
    category: 'Support & Updates',
    question: 'What support options are available?',
    answer: 'We offer multiple support options. All users have access to our comprehensive FAQ and knowledge base. Pro users can reach out via email with a guaranteed 24-hour response time. Enterprise users get priority email support and access to phone support during business hours. We also have community forums where users can share tips and ask questions.',
    relatedQuestions: ['report-issues', 'plan-details']
  },
  {
    id: 'report-issues',
    category: 'Support & Updates',
    question: 'How can I report issues?',
    answer: 'You can report issues directly through the app by going to Settings > Report an Issue. This will allow you to describe the problem and automatically include relevant technical information. You can also email our support team at support@nutridecode.com. For critical issues, Pro and Enterprise users can use their priority support channels.',
    relatedQuestions: ['support-options', 'database-updates']
  }
]

export default function FAQSection() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const categories = ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))]

  const filteredFAQs = useMemo(() => {
    return faqs.filter(faq => 
      (selectedCategory === 'All' || faq.category === selectedCategory) &&
      (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
       faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  }, [searchTerm, selectedCategory])

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
          <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search FAQs..."
              className="w-full p-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === category
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredFAQs.map(faq => (
            <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
              >
                <span className="font-medium">{faq.question}</span>
                {expandedId === faq.id ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {expandedId === faq.id && (
                <div className="p-4 bg-gray-50">
                  <p className="text-gray-700 mb-4">{faq.answer}</p>
                  {faq.relatedQuestions.length > 0 && (
                    <div>
                      <h4 className="font-medium text-sm text-gray-500 mb-2">Related Questions:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {faq.relatedQuestions.map(relatedId => {
                          const relatedFAQ = faqs.find(f => f.id === relatedId)
                          return relatedFAQ ? (
                            <li key={relatedId}>
                              <button
                                className="text-green-600 hover:underline text-sm text-left"
                                onClick={() => setExpandedId(relatedId)}
                              >
                                {relatedFAQ.question}
                              </button>
                            </li>
                          ) : null
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

