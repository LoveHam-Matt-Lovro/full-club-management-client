import React, { useContext, useState } from "react";
import PlayerCard from "../cards/PlayerCard";
import { useDrop } from "react-dnd";
import { ItemTypes, categories } from "./dnd";
import { StyledCard } from "../styled/StyledCard";
import DropWrapper from "./DropWrapper";
import PlayerStatsCard from "../cards/PlayerStatsCard";

import { StyledButton } from "../styled/StyledButton";
import { GlobalContext } from "../../Context/GlobalContext";


const SelectionDnD = ({ selection, setSelection, SelectionContext, game, submitSelection }) => {
    const [items, setItems] = useState(selection);
    const { markAsSelected, selectedPlayers } = useContext(SelectionContext);
    const { user } = useContext(GlobalContext);
    const [focusPlayer, setFocusPlayer] = useState(false);

    const backupArr = selection.map((player) => {
        return {
            _id: player._id,

        }
    })



    const isCoach = () => { return user?.role?.toLowerCase() === "coach" ? true : false; }

    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.PLAYER,

        drop: (item, monitor) => {
            markAsSelected(item._id);
            setFocusPlayer(false)
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),

    });

    //*

    const onDrop = (item, monitor, position) => {

        setItems((prevState) => {
            const newItems = prevState.filter((i) => i.id !== item.id).concat({ ...item, position: position });
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


            {isCoach() && <StyledButton onClick={submitSelectedPlayers}>Submit Selection</StyledButton>}

            <div style={{ display: "flex" }}>
                <PlayerStatsCard player={focusPlayer} backupArr={backupArr} focusPlayer={focusPlayer} />
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


