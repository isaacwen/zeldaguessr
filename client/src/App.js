import { useState } from 'react';
import './App.css';
import GamePage from './pages/GamePage';
import useEngine from './hooks/useEngine';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App = () => {
  const navigate = useNavigate()
  const [markers, setMarkers] = useState(null);
  const { gameState, gameData, roundNumber, score, resetGame, startGame, updateNextRound } = useEngine()

  // useEffect(() => {
  //   resetGame()
  // }, [])

  const navGame = () => {
    resetGame()
    startGame()
    navigate("/game")
  }

  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {
          <HomePage
            navGame = {navGame}
          ></HomePage>
        }></Route>
        <Route path = "/game" element = {
          <GamePage
            gameState = {gameState}
            gameData = {gameData}
            roundNumber = {roundNumber}
            score = {score}
            updateNextRound = {updateNextRound}
            setMarkers = {setMarkers}
          ></GamePage>
        }></Route>
      </Routes>
      
    </div>
  );
}

export default App;
