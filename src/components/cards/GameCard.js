import React from 'react'
import {StyledCard} from "../styled/StyledCard"

const GameCard = ({game}) => {
    return (
        <StyledCard>
            <h1>{game.opponent}</h1>
            <h2>{game.venue}</h2>
            <h3>{game.startTime}</h3>
            <h4>{game.numberOfPlayers}</h4>
        </StyledCard>
    )
}

export default GameCard