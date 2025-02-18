"use client"

import { useState, useEffect } from "react"
import { DragDropContext } from "@hello-pangea/dnd"
import GameLevel from "../components/GameLevel"
import LevelBadges from "../components/LevelBadges"
import GameCompletionScreen from "./GameCompletionScreen"
import { Button } from "../components/ui/button"
import { gameLevels } from "../lib/gameData"
import WrongSelectionAlert from "../components/WrongSelectionAlert"
import { DropResult } from "@hello-pangea/dnd"

const Game = () => {
  const [currentLevel, setCurrentLevel] = useState(0)
  const [completedLevels, setCompletedLevels] = useState<boolean[]>([])
  const [gameCompleted, setGameCompleted] = useState(false)
  const [showLevelBadge, setShowLevelBadge] = useState(false)
  const [showWrongSelectionAlert, setShowWrongSelectionAlert] = useState(false)



  interface Result extends DropResult {
    destination: {
      droppableId: string
      index: number
    } | null
  }

  useEffect(() => {
    setCompletedLevels(new Array(gameLevels.length).fill(false))
  }, [])

  const onDragEnd = (result: Result) => {
    if (!result.destination || result.destination.droppableId !== "subject") return

    const correctAnswer = gameLevels[currentLevel].correctAnswer
    if (result.draggableId === correctAnswer) {
      const newCompletedLevels = [...completedLevels]
      newCompletedLevels[currentLevel] = true
      setCompletedLevels(newCompletedLevels)
      setShowLevelBadge(true)

      setTimeout(() => {
        setShowLevelBadge(false)
        if (currentLevel === gameLevels.length - 1) {
          setGameCompleted(true)
        } else {
          setCurrentLevel(currentLevel + 1)
        }
      }, 2000)
    } else {
      setShowWrongSelectionAlert(true)
      setTimeout(() => {
        setShowWrongSelectionAlert(false)
      }, 2000)
    }
  }

  const resetGame = () => {
    setCurrentLevel(0)
    setCompletedLevels(new Array(gameLevels.length).fill(false))
    setGameCompleted(false)
    setShowLevelBadge(false)
    setShowWrongSelectionAlert(false)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold mb-4 text-center">Child First Aid Game</h1>
      {gameCompleted ? (
        <GameCompletionScreen resetGame={resetGame} />
      ) : (
        <DragDropContext onDragEnd={onDragEnd}>
          <GameLevel
            level={currentLevel + 1}
            subject={gameLevels[currentLevel].subject}
            choices={gameLevels[currentLevel].choices}
          />
          <div className="mt-4">
            <LevelBadges
              completedLevels={completedLevels}
              totalLevels={gameLevels.length}
              showLevelBadge={showLevelBadge}
              currentLevel={currentLevel}
            />
          </div>
          <Button onClick={resetGame} className="mt-4 bg-orange-400 font-sans text-xl">
            Reset Game
          </Button>
          {showWrongSelectionAlert && <WrongSelectionAlert />}
        </DragDropContext>
      )}
    </div>
  )
}

export default Game

