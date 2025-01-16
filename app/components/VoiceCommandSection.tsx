'use client'

import { Mic } from 'lucide-react'
import { motion } from 'framer-motion'

const commonCommands = [
  "Is this food halal?",
  "What's the nutritional value?",
  "Any allergens in this?",
  "Is this vegan-friendly?",
  "What's the environmental impact?"
]

export default function VoiceCommandSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Voice Command Integration</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-center mb-4">
                  <Mic className="w-12 h-12 text-green-600" />
                </div>
                <p className="text-lg text-center mb-4 text-gray-700 dark:text-gray-300">
                  Just ask NutriDecode anything about your food!
                </p>
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="w-full h-16 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                >
                  <motion.div
                    animate={{
                      scaleY: [1, 0.5, 0.8, 0.3, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="h-full bg-green-500 rounded-full"
                    style={{ transformOrigin: "50% 100%" }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Common Voice Commands:</h3>
            <ul className="space-y-2">
              {commonCommands.map((command, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center text-gray-700 dark:text-gray-300"
                >
                  <Mic className="w-5 h-5 mr-2 text-green-600" />
                  {command}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

