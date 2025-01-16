import { CheckCircle, AlertTriangle, Leaf } from 'lucide-react'

interface AnalysisResults {
  healthRating: string
  ingredients: string[]
  sustainabilityScore: number
  actionableInsights: string
}

interface AIAnalysisResultsProps {
  results: AnalysisResults
}

export default function AIAnalysisResults({ results }: AIAnalysisResultsProps) {
  return (
    <div className="mt-6 space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Analysis Results</h2>
      
      <div className="flex items-center">
        <div className={`w-8 h-8 rounded-full mr-2 ${results.healthRating === 'green' ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
          Health Rating: {results.healthRating === 'green' ? 'Healthy' : 'Unhealthy'}
        </span>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Ingredients:</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          {results.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="flex items-center">
        <Leaf className="w-6 h-6 mr-2 text-green-500" />
        <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
          Sustainability Score: {results.sustainabilityScore}/10
        </span>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Actionable Insights:</h3>
        <p className="text-gray-700 dark:text-gray-300">{results.actionableInsights}</p>
      </div>

      <div className="flex items-center mt-4">
        {results.healthRating === 'green' ? (
          <CheckCircle className="w-6 h-6 mr-2 text-green-500" />
        ) : (
          <AlertTriangle className="w-6 h-6 mr-2 text-yellow-500" />
        )}
        <span className="text-gray-700 dark:text-gray-300">
          {results.healthRating === 'green'
            ? 'This product aligns with your health goals.'
            : 'Consider healthier alternatives that better align with your goals.'}
        </span>
      </div>
    </div>
  )
}

