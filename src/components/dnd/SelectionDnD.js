import React, { useContext, useState, useEffect } from "react";
import PlayerCard from "../cards/PlayerCard";
import { useDrop } from "react-dnd";
import { ItemTypes, categories } from "./dnd";

import { StyledCard } from "../styled/StyledCard";
import DropWrapper from "./DropWrapper";
import PlayerStatsCard from "../cards/PlayerStatsCard";
import styled from "styled-components";
import { StyledButton } from "../styled/StyledButton";

const StyledPlayerCard = styled(PlayerCard)`
  background-color: red;
  border: 3px solid red;
`;

const SelectionDnD = ({ selection, setSelection, SelectionContext, game, submitSelection }) => {
    const [items, setItems] = useState(selection);
    const [prevItems, setPrevItems] = useState(selection);
    const { markAsSelected, selectedPlayers } = useContext(SelectionContext);

    const [focusPlayer, setFocusPlayer] = useState({});
    const randomNumber = () => { return Math.floor(Math.random() * 100) };
    // generate number from 3 to 10 5 times
    const backupArr = selection.map((player) => {
        return {
            _id: player._id,
            index: selection.findIndex((p) => p._id === player._id),
            kicking: randomNumber(),
            speed: randomNumber(),
            tackling: randomNumber(),
            marking: randomNumber(),
            handballing: randomNumber(),

        }
    })






    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.PLAYER,

        drop: (item, monitor) => {
            markAsSelected(item._id);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    //*

    const onDrop = (item, monitor, position) => {
        const mapping = categories.find((cat) => cat.position === position);

        setItems((prevState) => {
            const newItems = prevState.filter((i) => i.id !== item.id).concat({ ...item, position: position, icon: mapping.icon });
            return [...newItems];
        });
    };

    const handleFocusPlayer = (player) => {
        setFocusPlayer(player);
    };

    const submitSelectedPlayers = () => {
        submitSelection(game);
    };



    return (
        <div>



            <StyledButton onClick={submitSelectedPlayers}>Submit Selection</StyledButton>
            <div style={{ display: "flex" }}>
                <PlayerStatsCard player={focusPlayer} backupArr={backupArr} />
                <div style={{ display: "flex" }}>
                    <DropWrapper category="none" color="black" icon="🗙" key="test" onDrop={onDrop} SelectionContext={SelectionContext} markAsSelected={markAsSelected}>
                        <StyledCard selection none>
                            {selection
                                .filter((player) => player.category === "none")
                                .map((player) => {
                                    return <PlayerCard onClick={handleFocusPlayer} player={player} key={`${player._id}_${"test"}`} handleFocusPlayer={handleFocusPlayer} />;
                                    // key={`${player._id}_${player.selected}
                                })}
                        </StyledCard>
                    </DropWrapper>

                    <div>
                        {categories.map((category) => {
                            return (
                                <DropWrapper
                                    category={category.position}
                                    color={category.color}
                                    icon={category.icon}
                                    key={category.position}
                                    onDrop={onDrop}
                                    SelectionContext={SelectionContext}
                                    markAsSelected={markAsSelected}
                                >
                                    <div style={{ display: "flex" }}>
                                        <StyledCard selection style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                                            {selection
                                                .filter((player) => player.category === category.position)
                                                .map((player) => {
                                                    return (
                                                        <PlayerCard
                                                            onClick={handleFocusPlayer}
                                                            player={player}
                                                            key={`${player._id}_${category.position}`}
                                                            handleFocusPlayer={handleFocusPlayer}
                                                            isPlaying
                                                        />
                                                    );
                                                })}
                                        </StyledCard>
                                        {category.position}
                                    </div>
                                </DropWrapper>
                            );
                        })}
                    </div>
                </div>
            </div>
            )

        </div>
    );
};





export default SelectionDnD;
