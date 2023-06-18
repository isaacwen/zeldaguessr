import React, { useRef, useEffect, useState } from 'react'
import Marker from '../components/Marker';
import { useNavigate } from 'react-router-dom';

const ResultsPage = ({markers, gameData, totalScore, handleNewGame}) => {
  const navigate = useNavigate();
  const [mapDimensions, setMapDimensions] = useState([]);
  const [showGuesses, setShowGuesses] = useState(true);
  const [showAnswers, setShowAnswers] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    setMapDimensions([ref.current.clientWidth, ref.current.clientHeight])
  }, [])

  return (
    <div className = "grid place-content-center w-screen h-screen gap-5">
      <div className = "w-172 relative group" ref = {ref}>
        <div>
          <img src = {"base.png"} alt = "map"></img>
          {markers.map((marker, i) => {return <Marker className = {`absolute w-fit h-fit ${!showGuesses && "opacity-0"}`} marker = {marker} iconType = {"ResultGuessCircle"} resultNum = {i + 1}></Marker>})}
          {gameData.map((roundData, i) => {return <Marker className = {`absolute w-fit h-fit ${!showAnswers && "opacity-0"}`} position = {{...roundData, mapWidth: mapDimensions[0], mapHeight: mapDimensions[1]}} iconType = {"ResultGoalCircle"} resultNum = {i + 1}></Marker>})}
          <div className = "absolute bottom-2 right-2 w-fit h-fit">
            
          </div>
        </div>
      </div>
      <div className = "grid grid-cols-2 grid-flow-row scoreText h-24 overflow-auto">
        <div className = "scoreUnderline sticky top-0 bg-zinc-800">Round #</div>
        <div className = "scoreUnderline sticky top-0 bg-zinc-800">Score</div>
        {markers.map((marker, i) => {return <><div>{i + 1}</div><div>{marker["score"]}</div></>})}
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
        <button className = "baseBtn standardBtn" onClick = {() => navigate("/")}>
          Home
        </button>
      </div>
    </div>
  )
}

export default ResultsPage