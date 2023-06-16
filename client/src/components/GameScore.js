import React from 'react'

const GameScore = () => {
  return (
    <div className = "z-20 absolute right-0 top-5 grid grid-rows-2 grid-flow-col w-96 text-white bg-blue-500 py-5 font-extrabold text-lg">
      <div className = "underline underline-offset-2">Round</div>
      <div>1/5</div>
      <div className = "underline underline-offset-2">Score</div>
      <div>5000</div>
    </div>
  )
}

export default GameScore