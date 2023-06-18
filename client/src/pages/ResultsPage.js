import React, { useRef, useEffect, useState } from 'react'
import Marker from '../components/Marker';

const ResultsPage = ({markers, gameData, totalScore}) => {
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
          {markers.map((marker, i) => {return <Marker className = {"absolute w-fit h-fit"} marker = {marker} iconType = {"ResultGuessCircle"} resultNum = {i + 1}></Marker>})}
          {gameData.map((roundData, i) => {return <Marker className = {"absolute w-fit h-fit"} position = {{...roundData, mapWidth: mapDimensions[0], mapHeight: mapDimensions[1]}} iconType = {"ResultGoalCircle"} resultNum = {i + 1}></Marker>})}
        </div>
      </div>
      <div className = "grid grid-rows-2 grid-flow-col scoreText">
        {/* <div className = "scoreUnderline">Round Score</div>
        <div>{curScore}</div> */}
        <div className = "scoreUnderline">Total Score</div>
        <div>{totalScore}</div>
      </div>
      {/* <div>
        <button className = "baseBtn standardBtn" onClick = {handleNextRound}>
          {roundNumber <= 5 ? "Next Round" : "Final Results"}
        </button>
      </div> */}
    </div>
  )
}

export default ResultsPage