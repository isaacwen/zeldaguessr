import { useState, useCallback } from 'react';
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

  // useEffect(() => {
  //   resetGame()
  // }, [])

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

  // const handleNewGame = () => {
  //   resetGame()
  //   startGame()
  //   navigate("/game")
  // }

  const addMarker = useCallback((marker) => {
    setMarkers([...markers, marker])
  }, [setMarkers, markers])

  return (
    <div className="App">
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
      
    </div>
  );
}

export default App;
