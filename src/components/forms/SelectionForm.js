import React, { useEffect, useState } from "react";
import axios from "axios";
// import { SelectionContext } from "../../Context/SelectionContext";
import SelectionDnD from "./SelectionDnD";
import { useSelection } from "./utils/useSelection";

const SelectionForm = ({ gameId }) => {
    const [selection, setSelection, SelectionContext, markAsSelected] = useSelection(`http://127.0.0.1:5005/games/${gameId}/selection`)


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
