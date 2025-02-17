import type React from "react"
import { Trophy } from "lucide-react"

interface LevelBadgesProps {
  completedLevels: boolean[]
  totalLevels: number
  showLevelBadge: boolean
  currentLevel: number
}

const LevelBadges: React.FC<LevelBadgesProps> = ({ completedLevels, totalLevels, showLevelBadge, currentLevel }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2 mb-4">
        {Array.from({ length: totalLevels }).map((_, index) => (
          <div key={index} className="flex">
            <Trophy className={`w-6 h-6 ${completedLevels[index] ? "text-yellow-400" : "text-gray-300"}`} />
          </div>
        ))}
      </div>
      {showLevelBadge && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg text-center">
            <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Congratulations!</h2>
            <p>You completed Level {currentLevel + 1}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default LevelBadges

