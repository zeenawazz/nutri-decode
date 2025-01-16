'use client'

import Image from 'next/image'
import { ArrowRight, Mic } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import WaitlistModal from './WaitlistModal'

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
              Decode Your Food with AI + Voice Commands
            </h1>
            <p className="text-xl mb-6 text-gray-600 dark:text-gray-300">
              Make informed decisions about your food with advanced image analysis, nutritional insights, and voice-activated commands.
            </p>
            <button
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-green-700 transition-colors flex items-center"
              onClick={() => setIsModalOpen(true)}
            >
              Join the Waitlist <ArrowRight className="ml-2" size={20} />
            </button>
            <div className="mt-4 flex items-center">
              <Mic className="w-6 h-6 text-green-600 mr-2" />
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Just ask: "Is this food halal?"
              </p>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image 
                src="/placeholder.svg?height=600&width=300" 
                alt="NutriDecode App Interface" 
                width={300} 
                height={600}
                className="rounded-3xl shadow-2xl mx-auto"
              />
            </motion.div>
            <motion.div
              className="absolute -top-4 -left-4 w-24 h-24 bg-blue-400 rounded-full opacity-20"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-400 rounded-full opacity-20"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
            />
            <motion.div
              className="absolute top-1/4 right-1/4 w-16 h-16"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
              <Image
                src="/placeholder.svg?height=64&width=64&text=AI"
                alt="AI Icon"
                width={64}
                height={64}
                className="rounded-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

