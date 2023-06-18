import React from 'react'

const GameScore = ({roundNumber, score}) => {
  return (
    <div className = "z-20 absolute right-0 top-5 grid grid-rows-2 grid-flow-col w-96 bg-blue-500 py-5 scoreText">
      <div className = "scoreUnderline">Round</div>
      <div>{roundNumber}/5</div>
      <div className = "scoreUnderline">Score</div>
      <div>{score}</div>
    </div>
  )
}

export default GameScore