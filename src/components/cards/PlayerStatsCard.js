import React from 'react'
import styled from 'styled-components';
import RadarPlayerGraph from '../graphs/RadarPlayerGraph';
const StyledPlayerStatsCard = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgb(245, 245, 245, 0.3);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(22, 22, 22, 0.2);
    margin: 0 auto;`


const PlayerStatsCard = ({ player }) => {
    const randomNumber = Math.floor(Math.random() * 100)

    return (

        <StyledPlayerStatsCard>

            <h2 style={{fontWeight:10}}>{player.firstName} {player.lastName} Stats</h2>
            <img src={player.img} alt="profile" />
            <RadarPlayerGraph user={player} />

        </StyledPlayerStatsCard>

    )
}

export default PlayerStatsCard