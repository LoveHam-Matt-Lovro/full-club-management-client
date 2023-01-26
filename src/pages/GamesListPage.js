import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GameForm from '../components/forms/GameForm'
import GameCard from '../components/cards/GameCard'

const GamesListPage = () => {

  const [games, setGames] = useState([])
  const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {                                
        axios
          .get("http://127.0.0.1:5005/games")
          .then((response) => {
            console.log('response.data', response.data);
            setGames(response.data)
            setIsLoading(false)
          });
        
      }, [] ); 
    
      
    if (isLoading) {
      return <div>...Loading</div>
    } else 
    

  return (
    <div>
      <GameForm />

        {games.map(game=>{
        return(
<div key={game._id}>

    <h3><Link to={"/games/"+ game._id}>{game.opponent}</Link></h3>
<h6>{game.venue} - {game.startTime}</h6>

</div> 

        )
      })}

    </div>
  )
}

export default GamesListPage