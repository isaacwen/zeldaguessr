import { useState, useCallback } from 'react'
import api from '../api/api';

const useEngine = () => {
  // Valid gameStates: Ready, Running
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
    setScore(score + prevRoundPoints)
    setRoundNumber(roundNumber + 1)
  }, [roundNumber, setRoundNumber, setScore, score])

  const startGame = useCallback(() => {
    setGameState("Running");
    setRoundNumber(1);
  }, [setGameState, setRoundNumber])

  return { gameState, gameData, roundNumber, score, resetGame, startGame, updateNextRound }
}

export default useEngine