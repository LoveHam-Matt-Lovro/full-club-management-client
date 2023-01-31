import React, { useEffect, useState } from "react";
import axios from "axios";
// import { SelectionContext } from "../../Context/SelectionContext";
import SelectionDnD from "./SelectionDnD";
import { useSelection } from "./utils/useSelection";

const SelectionForm = ({ gameId }) => {
    const [selection, setSelection, SelectionContext, markAsSelected] = useSelection(`${process.env.REACT_APP_API_URL}/games/${gameId}/selection`)


    return (
        <div>
            <h2>Selection for game {gameId}</h2>


            <SelectionContext.Provider value={{ markAsSelected }}>

                {/**/}
                <SelectionDnD selection={selection} setSelection={setSelection} SelectionContext={SelectionContext} />

            </SelectionContext.Provider>
        </div>

    );
};

export default SelectionForm;
