import type React from "react"
import "../../app/styles/confetti.css"

const ConfettiEffect: React.FC = () => {
  return (
    <>
      {[...Array(50)].map((_, index) => (
        <div
          key={index}
          className="confetti"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
          }}
        />
      ))}
    </>
  )
}

export default ConfettiEffect

