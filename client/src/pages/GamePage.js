import React, { useState, useCallback } from 'react'
import GameScore from '../components/GameScore'
import LocationPicture from '../components/LocationPicture'
import Map from '../components/Map'
import { calcScore, calcPct } from '../utils/algs'
import GuessDisplay from '../components/GuessDisplay'
import { useNavigate } from 'react-router-dom'
import { pageWrapper } from '../utils/wrapper'

const GamePage = ({gameState, gameData, roundNumber, score, updateNextRound, addMarker}) => {
  const navigate = useNavigate()
  const [marker, setMarker] = useState(null);
  const [curScore, setCurScore] = useState(0);
  const [guessMade, setGuessMade] = useState(false);

  const handleGuess = useCallback(() => {
    const scoreCalc = calcScore(calcPct(marker.x, marker.width, 0), calcPct(marker.y, marker.height, 0), gameData[roundNumber - 1]["x_pct"], gameData[roundNumber - 1]["y_pct"])
    setCurScore(scoreCalc)
    updateNextRound(scoreCalc)
    setGuessMade(true)
  }, [marker, gameData, roundNumber, setCurScore, updateNextRound, setGuessMade])

  const handleNextRound = useCallback(() => {
    addMarker({...marker, score: curScore})
    setMarker(null)
    setGuessMade(false)
    if (roundNumber > 5) {
      navigate("/results")
    }
  }, [setGuessMade, roundNumber, addMarker, marker, setMarker, curScore, navigate])

  var GuessView = pageWrapper(
    <div>
      <GameScore
        roundNumber = {roundNumber}
        score = {score}
      ></GameScore>
      {gameData !== null && roundNumber <= 5 ? (<LocationPicture
        imageName = {gameData[roundNumber - 1]["image_file_name"]}
      ></LocationPicture>) : "Loading...."}
      <Map
        marker = {marker}
        setMarker = {setMarker}
        handleGuess = {handleGuess}
      ></Map>
    </div>
  )

  var ResultsView = (
    <GuessDisplay
      marker = {marker}
      curScore = {curScore}
      totalScore = {score}
      gameData = {gameData}
      roundNumber = {roundNumber}
      handleNextRound = {handleNextRound}
    ></GuessDisplay>
  )

  var LoadingView = pageWrapper(
    <div>Loading</div>
  )

  const renderView = () => {
    if (gameState === "Running") {
      if (!guessMade) {
        return GuessView
      } else {
        return ResultsView
      }
    } else {
      return LoadingView
    }
  }

  return pageWrapper(
    <>
      {renderView()}
    </>
  )
}

export default GamePage