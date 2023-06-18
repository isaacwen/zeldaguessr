import { useState, useCallback, useEffect } from 'react'
import api from '../api/api';

const useEngine = () => {
  // Valid gameStates: Ready, Running, Final Results
  const [gameState, setGameState] = useState("Ready")
  const [gameData, setGameData] = useState(null)
  const [roundNumber, setRoundNumber] = useState(0)
  const [score, setScore] = useState(0)

  const resetGame = useCallback(() => {
    api.getGameData(setGameData)
    setRoundNumber(0)
    setScore(0)
    setGameState("Ready")
  }, [setGameData, setRoundNumber, setScore])

  const updateNextRound = useCallback((prevRoundPoints) => {
    if (roundNumber >= 5) {
      setGameState("Final Results")
      return
    }
    setRoundNumber(roundNumber + 1)
    setScore(score + prevRoundPoints)
  }, [roundNumber, gameData, setRoundNumber, setScore, score])

  const startGame = useCallback(() => {
    setGameState("Running");
    setRoundNumber(1);
  }, [setGameState, updateNextRound])

  return { gameState, gameData, roundNumber, score, resetGame, startGame, updateNextRound }
}

export default useEngine