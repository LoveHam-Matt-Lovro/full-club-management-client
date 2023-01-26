import React, { useState } from 'react'
import GameForm from '../components/forms/GameForm'

const GamesListPage = () => {

    const [games,setGames] = useState([])
    const [isLoading, setIsLoading] = useState(true)

  return (
    <div>
        <GameForm/>

        {games.map(game=>{
        return(
<div key={game._id}>
<h3>{game.opponent}</h3>

</div> 

        )
      })}

    </div>
  )
}

export default GamesListPage