
import './App.css';
import { useState, useEffect } from "react"

import GameForm from './components/forms/GameForm';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage';
import NavBar from './components/NavBar';
import GamesListPage from './pages/GamesListPage';
import GameDetailsPage from './pages/GameDetailsPage';
import ProfilePage from './pages/ProfilePage';
import styled from 'styled-components';


import darkStadium from "./images/dark-stadium-1.png"

const StyledAppDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width:100vw;
    height:100vh;
    backgroundImage: url(${darkStadium});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    
   
`

function App() {

  return (
    <StyledAppDiv className="App" style={{ backgroundImage: `url(${darkStadium})` }}>
      

      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/games" element={<GamesListPage />} />
        <Route path="/games/:gameId" element={<GameDetailsPage />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
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

    </StyledAppDiv>
  );
}

export default App;
