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

    const color = player.color || "white"


    return (
        <StyledCard
            style={{ "opacity": `${isDragging ? 0.5 : 1}`, "border": `1px solid ${color}` }}
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