import React, { useEffect, useState } from "react";
import axios from "axios";
// import { SelectionContext } from "../../Context/SelectionContext";
import SelectionDnD from "../dnd/SelectionDnD";
import { useSelection } from "../../Hooks/useSelection";
import { SmallStyledDiv } from "../styled/SmallStyledDiv";

const SelectionForm = ({ gameId, game }) => {
    const [selection, setSelection, SelectionContext, markAsSelected, submitSelection, countLoad, setCountLoad] = useSelection(`${process.env.REACT_APP_API_URL}/games/${gameId}/selection`)


    return (
        <SmallStyledDiv>
            <h4>
                Selection v {game.opponent}, No.Players {game.numberOfPlayers}
            </h4>


            <SelectionContext.Provider value={{ markAsSelected }}>

                {/**/}
                <SelectionDnD selection={selection} setSelection={setSelection} SelectionContext={SelectionContext} game={game} submitSelection={submitSelection} setCountLoad={setCountLoad} countLoad={countLoad} />

            </SelectionContext.Provider>
        </SmallStyledDiv>

    );
};

export default SelectionForm;
