import type React from "react"
import { Trophy } from "lucide-react"
import { Button } from "../components/ui/button"
import ConfettiEffect from "./ConfettiEffect"

interface GameCompletionScreenProps {
  resetGame: () => void
}

const GameCompletionScreen: React.FC<GameCompletionScreenProps> = ({ resetGame }) => {
  return (
    <div className="text-center relative overflow-hidden">
      <ConfettiEffect />
      <div className="bg-white p-8 rounded-lg inline-block">
        <Trophy className="w-24 h-24 text-yellow-400 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Congratulations!</h2>
        <p className="text-xl mb-4">You&apos;ve completed all levels and mastered child first aid!</p>
        <Button onClick={resetGame} className="bg-orange-400 font-sans text-xl">Play Again</Button>
      </div>
    </div>
  )
}

export default GameCompletionScreen

