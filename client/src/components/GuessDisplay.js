import React, { useRef, useState, useEffect } from 'react'
import Marker from './Marker'
import map from '../resources/base.png'

const GuessDisplay = ({marker, curScore, totalScore, gameData, roundNumber, handleNextRound}) => {
  const [mapDimensions, setMapDimensions] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    setMapDimensions([ref.current.clientWidth, ref.current.clientHeight])
  }, [])

  return (
    <div className = "grid place-content-center w-screen h-screen gap-7">
      <div className = "mapSize relative" ref = {ref}>
        <div>
          <img src = {map} alt = "map"></img>
          <Marker className = {"absolute w-fit h-fit"} marker = {marker} iconType = {"GuessPin"}></Marker>
          <Marker className = {"absolute w-fit h-fit"} position = {{...gameData[roundNumber - 2], mapWidth: mapDimensions[0], mapHeight: mapDimensions[1]}} iconType = {"GoalPin"}></Marker>  
        </div>
      </div>
      <div className = "grid grid-rows-2 grid-flow-col scoreText">
        <div className = "scoreUnderline">Round Score</div>
        <div>{curScore}</div>
        <div className = "scoreUnderline">Total Score</div>
        <div>{totalScore}</div>
      </div>
      <div>
        <button className = "baseBtn standardBtn" onClick = {handleNextRound}>
          {roundNumber <= 5 ? "Next Round" : "Final Results"}
        </button>
      </div>
    </div>
  )
}

export default GuessDisplay