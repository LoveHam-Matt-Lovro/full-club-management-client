import React, { useEffect, useState } from "react";
import axios from "axios";
import PlayerCard from "../cards/PlayerCard";

const SelectionForm = ({ gameId }) => {
    const [selection, setSelection] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:5005/games/${gameId}/selection`).then((response) => {
            console.log("response.data", response.data);
            setSelection(response.data);
        });
    }, [gameId]);

    return (
        <div>
            <h2>Selection for game {gameId}</h2>




            <div style={{ display: "flex" }}>
                <div className="players">
                    {" "}
                    {selection.map((player) => {
                        return <PlayerCard player={player} key={player._id} />;
                    })}
                </div>
                <div className="slots">
                    {" "}
                    {selection.map((player) => {
                        return <PlayerCard key={player._id} />;
                    })}
                </div>

            </div>
        </div>
    );
};

export default SelectionForm;
