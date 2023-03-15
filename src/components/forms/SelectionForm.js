import React, { useEffect, useState } from "react";
import axios from "axios";
// import { SelectionContext } from "../../Context/SelectionContext";
import SelectionDnD from "../dnd/SelectionDnD";
import { useSelection } from "../../Hooks/useSelection";
import { SmallStyledDiv } from "../styled/SmallStyledDiv";
import DragAndDrop from "../DragAndDrop/DragAndDrop";

const languages = {
    root: ["JavaScript", "TypeScript", "Python", "Java", "C++", "C#"],
    other: ["Go", "Swift", "Kotlin", "Rust", "Ruby", "PHP"],
    more: ["C", "R", "Scala", "Perl", "Haskell", "Elixir"],
};


const SelectionForm = ({ gameId, game }) => {
    const [selection, setSelection, SelectionContext, markAsSelected, submitSelection, countLoad, setCountLoad] = useSelection(`${process.env.REACT_APP_API_URL}/games/${gameId}/selection`)


    const players = { selection: selection.map(player => player.firstName), attack: [], defense: [], midfield: [], goalkeeper: [] }

    console.log(players, "players")
    const showSelection = selection.map(player => player.firstName + " " + player.lastName)
    const all = {
        bench: selection.filter((player) => player.category === "none").map(player => player.firstName),
        attack: selection.filter((player) => player.category === "attack").map(player => player.firstName),
        defense: selection.filter((player) => player.category === "defense").map(player => player.firstName),
        midfield: selection.filter((player) => player.category === "midfield").map(player => player.firstName),
    }

    return (
        <SmallStyledDiv>
            <h4>


                Selection v {game.opponent}, No.Players {game.numberOfPlayers}
            </h4>


            <SelectionContext.Provider value={{ markAsSelected }}>

                {/**/}
                <SelectionDnD selection={selection} setSelection={setSelection} SelectionContext={SelectionContext} game={game} submitSelection={submitSelection} setCountLoad={setCountLoad} countLoad={countLoad} />

            </SelectionContext.Provider>
            <DragAndDrop data={all} gameId={gameId} />
        </SmallStyledDiv>

    );
};

export default SelectionForm;
