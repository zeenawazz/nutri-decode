'use client'

import { Globe, MessageSquare, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'

const supportedLanguages = ['English', 'Español', 'العربية', '中文', 'Français', 'Deutsch', 'Italiano', '日本語', 'Português', 'Русский']

export default function MultiLanguageSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Multi-language Support</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Supported Languages:</h3>
              <div className="grid grid-cols-2 gap-2">
                {supportedLanguages.map((language, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <Globe className="w-5 h-5 mr-2 text-green-600" />
                    {language}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Language Features:</h3>
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-start"
              >
                <MessageSquare className="w-6 h-6 mr-2 text-green-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Real-time Translation</h4>
                  <p className="text-gray-600 dark:text-gray-300">Instantly translate food information to your preferred language</p>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-start"
              >
                <BookOpen className="w-6 h-6 mr-2 text-green-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Cultural Food Insights</h4>
                  <p className="text-gray-600 dark:text-gray-300">Learn about cultural significance and traditional uses of ingredients</p>
                </div>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

