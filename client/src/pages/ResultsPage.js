import React, { useRef, useEffect, useState } from 'react'
import Marker from '../components/Marker';
import map from '../resources/base.png'

const ResultsPage = ({markers, gameData, totalScore, handleNewGame, navHome}) => {
  const [mapDimensions, setMapDimensions] = useState([]);
  const [showGuesses, setShowGuesses] = useState(true);
  const [showAnswers, setShowAnswers] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    setMapDimensions([ref.current.clientWidth, ref.current.clientHeight])
  }, [])

  return (
    <div className = "grid place-content-center w-screen h-screen gap-4">
      <div className = "mapSize relative group" ref = {ref}>
        <div>
          <img src = {map} alt = "map"></img>
          {markers.map((marker, i) => {return <Marker className = {`absolute w-fit h-fit ${!showGuesses && "opacity-0"}`} marker = {marker} iconType = {"ResultGuessCircle"} resultNum = {i + 1}></Marker>})}
          {gameData.map((roundData, i) => {return <Marker className = {`absolute w-fit h-fit ${!showAnswers && "opacity-0"}`} position = {{...roundData, mapWidth: mapDimensions[0], mapHeight: mapDimensions[1]}} iconType = {"ResultGoalCircle"} resultNum = {i + 1}></Marker>})}
        </div>
      </div>
      <div className = "grid grid-cols-2 grid-flow-row scoreText h-20 overflow-auto">
        <div className = "scoreUnderline sticky top-0 bg-zinc-800">Round #</div>
        <div className = "scoreUnderline sticky top-0 bg-zinc-800">Score</div>
        {markers.map((marker, i) => {return <><div key = {`roundNum${i}`}>{i + 1}</div><div key = {`score${i}`}>{marker["score"]}</div></>})}
      </div>
      <div className = "scoreText">
        <div className = "">Total Score: {totalScore}</div>
      </div>
      <div>
        <button className = "baseBtn standardBtn mr-2 bg-red-500 hover:bg-red-700" onClick = {() => setShowGuesses(!showGuesses)}>
          Show Guesses
        </button>
        <button className = "baseBtn standardBtn mr-2 bg-purple-700 hover:bg-purple-900" onClick = {() => setShowAnswers(!showAnswers)}>
          Show Answers
        </button>
        <button className = "baseBtn standardBtn mr-2" onClick = {handleNewGame}>
          New Game
        </button>
        <button className = "baseBtn standardBtn" onClick = {navHome}>
          Home
        </button>
      </div>
    </div>
  )
}

export default ResultsPage