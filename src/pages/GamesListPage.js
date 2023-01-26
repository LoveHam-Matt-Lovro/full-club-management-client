import React, { useState } from 'react'
import GameForm from '../components/forms/GameForm'
import GameCard from '../components/cards/GameCard'

const GamesListPage = () => {

  const [games, setGames] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div>
      <GameForm />

      {games.map(game => {
        return (
          <GameCard game={game} key={game._id} />

        )
      })}

    </div>
  )
}

export default GamesListPage