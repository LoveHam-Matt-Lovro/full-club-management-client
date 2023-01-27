
import './App.css';
import { useState, useEffect } from "react"
import axios from "axios"
import GameForm from './components/forms/GameForm';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage';
import NavBar from './components/NavBar';
import GamesListPage from './pages/GamesListPage';
import GameDetailsPage from './pages/GameDetailsPage';


function App() {

  return (
    <div className="App">

      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/games" element={<GamesListPage />} />
        <Route path="/games/:gameId" element={<GameDetailsPage />} />
      </Routes>
      {/* 
 <GameForm />


      {games.map(game=>{
        return(
<div key={game._id}>
<h3>{game.opponent}</h3>

</div> 

        )
      })}  */}

    </div>
  );
}

export default App;
