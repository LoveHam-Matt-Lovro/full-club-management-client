import React, { useState, useContext } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { StyledCard } from '../styled/StyledCard'
import { ItemTypes } from '../dnd/dnd'


const PlayerCard = ({ player, handleFocusPlayer, isPlaying }) => {
    // const [selected, setSelected] = useState(player?.selected || false)





    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.PLAYER,
        item: player,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),

    });


    const playColor = isPlaying ? "transparent" : "white"


    return (
        <StyledCard

            style={{ "opacity": `${isDragging ? 0.5 : 1}`, backgroundColor: `${playColor}`, "width": ` ${isPlaying && "80px"}`, "height": `${isPlaying && "60px"}`, "flexDirection": "column" }}
            player
            ref={drag}
            onClick={() => { handleFocusPlayer(player) }}
        >
            {console.log(player)}

            {isPlaying ? <div> 👕<p>{player.lastName}</p></div> : <h4>{player.firstName} {player.lastName} </h4>}





        </StyledCard >
    )
}

export default PlayerCard