import { Camera } from 'lucide-react'

export default function FloatingActionButton() {
  return (
    <button className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors">
      <Camera className="w-6 h-6" />
      <span className="sr-only">Scan Food</span>
    </button>
  )
}

