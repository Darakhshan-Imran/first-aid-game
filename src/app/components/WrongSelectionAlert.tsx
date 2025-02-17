import type React from "react"
import { AlertCircle } from "lucide-react"

const WrongSelectionAlert: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg text-center">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h2 className="text-xl font-bold mb-2">Oops!</h2>
        <p>That's not the correct choice. Try again!</p>
      </div>
    </div>
  )
}

export default WrongSelectionAlert

