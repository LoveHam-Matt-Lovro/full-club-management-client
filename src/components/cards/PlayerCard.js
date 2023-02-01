import React, { useState, useContext } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { StyledCard } from '../styled/StyledCard'
import { ItemTypes } from '../dnd/dnd'
import shirt_blue from '../../images/shirt_blue.png'
import shirt_red from '../../images/shirt_red.png'


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
    const shirtColor = player.nationality === "Australian" ? shirt_blue : shirt_red
    const borderUnselected = !isPlaying && (player.nationality === "Australian" ? "7px solid blue" : "7px solid red")

    return (
        <StyledCard

            style={{ "opacity": `${isDragging ? 0.5 : 1}`, "backgroundColor": `${playColor}`, "width": ` ${isPlaying && "100px"}`, "height": `${isPlaying && "60px"}`, "flexDirection": "column", "borderLeft": `${borderUnselected}` }
            }
            player
            ref={drag}
            onClick={() => { handleFocusPlayer(player) }}
        >


            {isPlaying ? <div ><img src={shirtColor} width={30} alt="shirt" ></img> <p >{player.lastName}</p></div> : <h4 style={{ "color": "#222" }}>{player.firstName} {player.lastName} </h4>}





        </StyledCard >
    )
}

export default PlayerCard