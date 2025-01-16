'use client'

import { Check, Globe, Leaf } from 'lucide-react'
import { motion } from 'framer-motion'

const complianceFeatures = [
  { icon: Check, title: "Halal Certification Checking", description: "Verify if products meet Halal standards" },
  { icon: Leaf, title: "Vegan Ingredient Verification", description: "Ensure products are 100% plant-based" },
  { icon: Globe, title: "Local Food Database", description: "Access region-specific food information" },
]

export default function RegionalComplianceSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Regional & Dietary Compliance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {complianceFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
            >
              <feature.icon className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            NutriDecode adapts to your location, providing accurate and relevant dietary information wherever you are.
          </p>
        </div>
      </div>
    </section>
  )
}

