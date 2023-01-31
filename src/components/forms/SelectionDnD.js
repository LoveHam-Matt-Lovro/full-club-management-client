import React, { useContext, useState } from 'react'
import PlayerCard from '../cards/PlayerCard';
import { useDrop } from "react-dnd";
import { ItemTypes, categories } from "../dnd/dnd";

import { StyledCard } from '../styled/StyledCard';
import DropWrapper from './DropWrapper';



const SelectionDnD = ({ selection, setSelection, SelectionContext }) => {

    const [items, setItems] = useState(selection);
    const [prevItems, setPrevItems] = useState(selection);
    const { markAsSelected } = useContext(SelectionContext);



    const [{ isOver }, drop] = useDrop({

        accept: ItemTypes.PLAYER,

        drop: (item, monitor) => {
            markAsSelected(item._id, "sssasda")
            console.log("dropped", item,)
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
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
            ;
    }

    // const moveItem = (dragIndex, hoverIndex) => {
    //     console.log("dragIndex", dragIndex, "        hoverIndex", hoverIndex, "from Homepage")
    //     if (dragIndex === hoverIndex) {
    //         console.log("dragIndex === hoverIndex", dragIndex, hoverIndex)
    //         return;
    //     }
    //     const dragItem = items[dragIndex];



    //     setItems(prevState => {

    //         const newItems = prevState.filter((i, idx) => idx !== dragIndex);
    //         newItems.splice(hoverIndex, 0, dragItem);
    //         return [...newItems];

    //     });
    // };

    //*







    const randomNumber = Math.trunc(Math.random() * 9999) + 1;

    return (
        <div style={{ display: "flex" }}>


            <div style={{ display: "flex" }}>
                {categories.map((category) => {
                    return (
                        <DropWrapper category={category.position} color={category.color} icon={category.icon} key={category.position} onDrop={onDrop} SelectionContext={SelectionContext} markAsSelected={markAsSelected} >
                            <StyledCard selection  >
                                {selection.filter((player) => player.category === category.position).map((player) => {
                                    return <PlayerCard onClick={() => console.log("player.firstName")} player={player} key={`${player._id}_${category.position}`} />;
                                    // key={`${player._id}_${player.selected}


                                })}
                            </StyledCard>
                        </DropWrapper>
                    )

                })
                }
            </div>


        </div >
    )
}

export default SelectionDnD