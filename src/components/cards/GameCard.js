import React from 'react'

const GameCard = (game) => {
    return (
        <div>
            <h1>{game.opponent}</h1>
            <h2>{game.venue}</h2>
            <h3>{game.startTime}</h3>
            <h4>{game.numberOfPlayers}</h4>
        </div>
    )
}

export default GameCard