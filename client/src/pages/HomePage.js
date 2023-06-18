import React from 'react'

const HomePage = ({handleNewGame}) => {
  return (
    <div className = "grid place-content-center items-center w-screen h-screen gap-10">
      <div className = "text-8xl text-yellow-500 mx-10">ZeldaGuessr</div>
      <div className = "text-3xl text-white mx-10">Guess where screenshots of Zelda: Breath of the Wild have been taken!</div>
      <div>
        <button className = "baseBtn standardBtn" onClick = {handleNewGame}>Start Game</button>
      </div>
    </div>
  )
}

export default HomePage