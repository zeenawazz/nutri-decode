'use client'

import { useState } from 'react'
import { Camera, CheckCircle, Leaf, ShieldAlert, Award, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Camera,
    title: "Real-time Label Scanning",
    description: "Instantly analyze food labels with AI-powered interpretation. Our advanced OCR technology ensures accurate readings in various lighting conditions.",
    rating: 4.9,
    users: 1500000,
    successRate: "99.8%",
    gradient: "from-blue-400 to-purple-500",
    learnMore: "/features/label-scanning"
  },
  {
    icon: CheckCircle,
    title: "Quality Assessment",
    description: "Assess produce freshness with our AI. Integrates seasonal data to provide accurate predictions and recommendations for optimal consumption.",
    rating: 4.7,
    users: 1200000,
    accuracy: "95%",
    gradient: "from-green-400 to-teal-500",
    learnMore: "/features/quality-assessment"
  },
  {
    icon: Leaf,
    title: "Environmental Impact",
    description: "Calculate the carbon footprint of your food choices. Get insights on regional sourcing and make environmentally conscious decisions.",
    rating: 4.8,
    users: 900000,
    impact: "30% reduction",
    gradient: "from-yellow-400 to-orange-500",
    learnMore: "/features/environmental-impact"
  },
  {
    icon: ShieldAlert,
    title: "Allergen Detection",
    description: "Stay safe with our comprehensive allergen database. Receive real-time alerts for over 500 known allergens in scanned products.",
    rating: 4.9,
    users: 2000000,
    database: "500+ allergens",
    gradient: "from-red-400 to-pink-500",
    learnMore: "/features/allergen-detection"
  },
  {
    icon: Award,
    title: "Food Authenticity",
    description: "Verify the authenticity of your food with our anti-fraud detection system. Trace the source of your products for complete transparency.",
    rating: 4.6,
    users: 800000,
    verificationRate: "99.9%",
    gradient: "from-indigo-400 to-purple-500",
    learnMore: "/features/food-authenticity"
  },
  {
    icon: Calendar,
    title: "Seasonal Guide",
    description: "Get local seasonal availability information and price optimization suggestions. Eat fresher, tastier, and more affordable produce year-round.",
    rating: 4.7,
    users: 1000000,
    savings: "Up to 20%",
    gradient: "from-green-400 to-blue-500",
    learnMore: "/features/seasonal-guide"
  }
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Powerful AI Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon: Icon, title, description, rating, users, successRate, accuracy, impact, database, verificationRate, savings, gradient, learnMore }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`bg-gradient-to-br ${gradient} rounded-lg shadow-lg overflow-hidden`}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center mb-4">
          <Icon className="w-10 h-10 text-white mr-4" />
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-white mb-4 flex-grow">{description}</p>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <span className="text-yellow-300 font-bold mr-1">{rating}</span>
            <span className="text-white text-sm">/ 5</span>
          </div>
          <div className="text-white text-sm">{users.toLocaleString()} users</div>
        </div>
        {(successRate || accuracy || impact || database || verificationRate || savings) && (
          <div className="bg-white bg-opacity-20 rounded p-2 mb-4">
            <span className="text-white text-sm font-semibold">
              {successRate || accuracy || impact || database || verificationRate || savings}
            </span>
          </div>
        )}
        <motion.button
          className="bg-white text-gray-800 px-4 py-2 rounded-full font-semibold mt-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button>
      </div>
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.span
            className="text-white text-lg font-semibold"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            Explore {title}
          </motion.span>
        </motion.div>
      )}
    </motion.div>
  )
}

