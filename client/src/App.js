import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence } from "framer-motion";
import './App.css';
import GamePage from './pages/GamePage';
import useEngine from './hooks/useEngine';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';

const App = () => {
  const navigate = useNavigate()
  const [markers, setMarkers] = useState([]);
  const { gameState, gameData, roundNumber, score, resetGame, startGame, updateNextRound } = useEngine()

  const handleNewGame = useCallback(() => {
    resetGame()
    startGame()
    setMarkers([])
    navigate("/game")
  }, [resetGame, startGame, setMarkers, navigate])

  const navHome = useCallback(() => {
    resetGame()
    setMarkers([])
  }, [resetGame, setMarkers])

  const addMarker = useCallback((marker) => {
    setMarkers([...markers, marker])
  }, [setMarkers, markers])

  const checkBackButton = useCallback(() => {
    navHome()
    navigate("/")
  }, [navHome, navigate])

  useEffect(() => {
    window.addEventListener("popstate", checkBackButton)
    return () => window.removeEventListener("popstate", checkBackButton)
  // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <AnimatePresence>
        <Routes>
          <Route path = "/" element = {
            <HomePage
              handleNewGame = {handleNewGame}
            ></HomePage>
          }></Route>
          <Route path = "/game" element = {gameState !== "Running" ? <Navigate to="/"/> :
            <GamePage
              gameState = {gameState}
              gameData = {gameData}
              roundNumber = {roundNumber}
              score = {score}
              updateNextRound = {updateNextRound}
              addMarker = {addMarker}
            ></GamePage>
          }></Route>
          <Route path = "/results" element = {gameState !== "Running" ? <Navigate to="/"/> :
            <ResultsPage
              markers = {markers}
              gameData = {gameData}
              totalScore = {score}
              handleNewGame = {handleNewGame}
              navHome = {navHome}
            ></ResultsPage>
          }></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
