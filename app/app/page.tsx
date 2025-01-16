import AIAnalysisApp from '../components/AIAnalysisApp'

export default function AppPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">NutriDecode AI Analysis</h1>
        <AIAnalysisApp />
      </div>
    </div>
  )
}

