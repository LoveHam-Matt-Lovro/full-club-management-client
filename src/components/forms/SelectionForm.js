import React, { useEffect, useState } from "react";
import axios from "axios";
// import { SelectionContext } from "../../Context/SelectionContext";
import SelectionDnD from "../dnd/SelectionDnD";
import { useSelection } from "./utils/useSelection";
import { SmallStyledDiv } from "../styled/SmallStyledDiv";

const SelectionForm = ({ gameId, game }) => {
    const [selection, setSelection, SelectionContext, markAsSelected] = useSelection(`${process.env.REACT_APP_API_URL}/games/${gameId}/selection`)


    return (
        <SmallStyledDiv>
            <h1 style={{fontWeight:10}}>Selection v {game.opponent}</h1>


            <SelectionContext.Provider value={{ markAsSelected }}>

                {/**/}
                <SelectionDnD selection={selection} setSelection={setSelection} SelectionContext={SelectionContext} game={game} />

            </SelectionContext.Provider>
            </SmallStyledDiv>

    );
};

export default SelectionForm;
