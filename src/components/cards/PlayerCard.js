import React from 'react'
import { StyledCard } from '../styled/StyledCard'

const PlayerCard = ({ player }) => {
    return (
        <StyledCard player>
            <h3>{player ? player.firstName : "..."} </h3>
        </StyledCard>
    )
}

export default PlayerCard