import type React from "react"
import { Droppable, Draggable } from "@hello-pangea/dnd"
import Image from "next/image"

interface GameLevelProps {
  level: number
  subject: {
    name: string
    image: string
  }
  choices: {
    id: string
    name: string
    image: string
  }[]
}

const GameLevel: React.FC<GameLevelProps> = ({ level, subject, choices }) => {
  return (
    <div>
      <div className="mb-4">
        <h2 className="text-3xl font-semibold text-center">Level {level}</h2>
        <p className="text-center text-2xl font-semibold">Help the child with: {subject.name}</p>
      </div>
      <div className="flex gap-4">
        <Droppable droppableId="choices">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="bg-blue-100 p-4 rounded-lg w-1/2">
              <h3 className="text-lg font-semibold mb-2">Choices</h3>
              {choices.map((choice, index) => (
                <div key={choice.id} className="bg-white p-2 mb-2 rounded shadow flex items-center">
                  <Draggable draggableId={choice.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Image
                          src={choice.image || "/placeholder.svg"}
                          alt={choice.name}
                          width={100}
                          height={100}
                          className="mr-2"
                        />
                      </div>
                    )}
                  </Draggable>
                  <span>{choice.name}</span>
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="subject">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="bg-blue-100 p-4 rounded-lg w-1/2 flex flex-col items-center justify-center"
            >
              <Image
                src={subject.image || "/placeholder.svg"}
                alt={subject.name}
                width={200}
                height={200}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold">Drop the correct item here</h3>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  )
}

export default GameLevel