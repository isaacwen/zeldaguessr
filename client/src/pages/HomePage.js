import React from 'react'

const HomePage = ({navGame}) => {
  return (
    <div className = "grid justify-center items-center w-screen h-screen">
      <button className = "baseBtn standardBtn" onClick = {navGame}>Start Game</button>
    </div>
  )
}

export default HomePage