import React, { useContext, useState } from 'react'
import PlayerCard from '../cards/PlayerCard';
import { useDrop } from "react-dnd";
import { ItemTypes, categories } from "../dnd/dnd";

import { StyledCard } from '../styled/StyledCard';
import DropWrapper from './DropWrapper';
import PlayerStatsCard from '../cards/PlayerStatsCard';
import styled from 'styled-components';


const StyledPlayerCard = styled(PlayerCard)`
    background-color: red;
    border: 3px solid red;
    `

const SelectionDnD = ({ selection, setSelection, SelectionContext }) => {

    const [items, setItems] = useState(selection);
    const [prevItems, setPrevItems] = useState(selection);
    const { markAsSelected } = useContext(SelectionContext);
    const [focusPlayer, setFocusPlayer] = useState({});



    const [{ isOver }, drop] = useDrop({

        accept: ItemTypes.PLAYER,

        drop: (item, monitor) => {
            markAsSelected(item._id, "sssasda")
            console.log("dropped", item,)
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),

    });


    //*

    const onDrop = (item, monitor, position) => {
        const mapping = categories.find(cat => cat.position === position);
        console.log(item)

        setItems(prevState => {
            const newItems = prevState
                .filter(i => i.id !== item.id)
                .concat({ ...item, position: position, icon: mapping.icon });
            return [...newItems];
        })



    }

    const handleFocusPlayer = (player) => {
        setFocusPlayer(player)

    }






    const randomNumber = Math.trunc(Math.random() * 9999) + 1;

    return (
        <div style={{ display: "flex" }}>

            <PlayerStatsCard player={focusPlayer} />
            <div style={{ display: "flex" }}>

                <DropWrapper category="none" color="black" icon="🗙" key="test" onDrop={onDrop} SelectionContext={SelectionContext} markAsSelected={markAsSelected} >
                    <StyledCard selection none  >
                        {selection.filter((player) => player.category === "none").map((player) => {
                            return <PlayerCard onClick={handleFocusPlayer} player={player} key={`${player._id}_${"test"}`} handleFocusPlayer={handleFocusPlayer} />;
                            // key={`${player._id}_${player.selected}


                        })}
                    </StyledCard>
                </DropWrapper>







                <div>

                    {categories.map((category) => {
                        return (
                            <DropWrapper category={category.position} color={category.color} icon={category.icon} key={category.position} onDrop={onDrop} SelectionContext={SelectionContext} markAsSelected={markAsSelected} >
                                <StyledCard selection style={{ "display": "flex", "flexDirection": "row", "flexWrap": "wrap" }}  >
                                    {selection.filter((player) => player.category === category.position).map((player) => {
                                        return <PlayerCard onClick={handleFocusPlayer} player={player} key={`${player._id}_${category.position}`} handleFocusPlayer={handleFocusPlayer} isPlaying />;
                                        // key={`${player._id}_${player.selected}


                                    })}
                                </StyledCard>
                            </DropWrapper>
                        )

                    })
                    }
                </div>
            </div>


        </div >
    )
}

export default SelectionDnD