'use client'

import { useState } from 'react'
import { Upload, Loader, AlertCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import AIAnalysisResults from './AIAnalysisResults'

export default function AIAnalysisApp() {
  const [file, setFile] = useState<File | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResults, setAnalysisResults] = useState(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setError(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) {
      setError('Please upload an image or scan a barcode first.')
      return
    }

    setIsAnalyzing(true)
    setError(null)

    try {
      // Simulating AI analysis
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Mock analysis results
      const mockResults = {
        healthRating: 'green',
        ingredients: ['Water', 'Organic Oats', 'Organic Coconut Oil', 'Salt'],
        sustainabilityScore: 8,
        actionableInsights: 'This product is vegan and has a low environmental impact.'
      }

      setAnalysisResults(mockResults)
    } catch (err) {
      setError('An error occurred during analysis. Please try again.')
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="image-upload" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Upload Label or Scan Barcode
              </Label>
              <div className="mt-1 flex items-center">
                <Input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="sr-only"
                />
                <Label
                  htmlFor="image-upload"
                  className="cursor-pointer bg-white dark:bg-gray-800 py-2 px-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <Upload className="w-5 h-5 inline-block mr-2" />
                  Choose file
                </Label>
                <span className="ml-3 text-sm text-gray-500 dark:text-gray-400">
                  {file ? file.name : 'No file chosen'}
                </span>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={isAnalyzing || !file}
            >
              {isAnalyzing ? (
                <>
                  <Loader className="animate-spin mr-2" />
                  Analyzing...
                </>
              ) : (
                'Analyze'
              )}
            </Button>
          </div>
        </form>

        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {analysisResults && <AIAnalysisResults results={analysisResults} />}
      </CardContent>
    </Card>
  )
}

