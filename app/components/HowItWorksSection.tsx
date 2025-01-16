import Image from 'next/image'
import { Camera, Upload, Cpu, FileText } from 'lucide-react'

const steps = [
  {
    icon: <Camera className="w-8 h-8 text-green-500" />,
    title: "Scan",
    description: "Use your camera to scan food labels or fresh produce."
  },
  {
    icon: <Upload className="w-8 h-8 text-blue-500" />,
    title: "Upload",
    description: "Or upload an existing image of your food item."
  },
  {
    icon: <Cpu className="w-8 h-8 text-purple-500" />,
    title: "Analyze",
    description: "Our AI processes the image and extracts key information."
  },
  {
    icon: <FileText className="w-8 h-8 text-yellow-500" />,
    title: "Results",
    description: "View detailed nutritional insights and recommendations."
  }
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image 
              src="/placeholder.svg?height=400&width=300" 
              alt="NutriDecode App Interface" 
              width={300} 
              height={400}
              className="rounded-2xl shadow-lg mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start mb-8">
                <div className="bg-gray-100 rounded-full p-3 mr-4">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

