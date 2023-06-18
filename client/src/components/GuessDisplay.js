import React, { useRef, useState, useEffect } from 'react'
import Marker from './Marker'

const GuessDisplay = ({marker, curScore, totalScore, gameData, roundNumber, handleNextRound}) => {
  const [mapDimensions, setMapDimensions] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    setMapDimensions([ref.current.clientWidth, ref.current.clientHeight])
  }, [])

  return (
    <div className = "grid place-content-center w-screen h-screen gap-10">
      <div className = "w-172 relative" ref = {ref}>
        <div>
          <img src = {"base.png"} alt = "map"></img>
          <Marker className = {"absolute w-fit h-fit"} marker = {marker} iconType = {"GuessPin"}></Marker>
          <Marker className = {"absolute w-fit h-fit"} position = {{...gameData[roundNumber - 2], mapWidth: mapDimensions[0], mapHeight: mapDimensions[1]}} iconType = {"GoalPin"}></Marker>
        </div>
      </div>
      <div className = "grid grid-rows-2 grid-flow-col scoreText">
        <div className = "scoreUnderline">Round Score</div>
        <div>{curScore}</div>
        <div className = "scoreUnderline">Total Score</div>
        <div>{totalScore + curScore}</div>
      </div>
      <div>
        <button className = "baseBtn standardBtn" onClick = {handleNextRound}>Next Round</button>
      </div>
    </div>
  )
}

export default GuessDisplay