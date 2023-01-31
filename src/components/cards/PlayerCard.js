import React, { useState, useContext } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { StyledCard } from '../styled/StyledCard'
import { ItemTypes } from '../dnd/dnd'


const PlayerCard = ({ player }) => {
    // const [selected, setSelected] = useState(player?.selected || false)





    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.PLAYER,
        item: player,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    });

    const color = player.nationality === "Australian" ? "#fff1f1" : "#f1fff1"


    return (
        <StyledCard
            style={{ "opacity": `${isDragging ? 0.5 : 1}`, "border": `3px solid ${color}`, "backgroundColor": `${color}` }}
            player
            ref={drag}
        >
            {console.log(player)}
            < p > {player.icon}</ p >
            <h3>{player.firstName} {player.lastName} </h3>

            <p> {player.category ? player.category : "--"}</p>
        </StyledCard >
    )
}

export default PlayerCard