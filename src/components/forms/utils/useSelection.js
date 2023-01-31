import axios from "axios";
import { useContext, useEffect, useState, createContext } from "react";




export const useSelection = (url) => {
    const [selection, setSelection] = useState([]);

    const markAsSelected = (playerId, category, icon, color) => {
        // find the player in the selection
        const player = selection.filter((player) => player._id === playerId);
        // toggle the selected property
        console.log("CATEGORY", category, icon, color)
        player[0].selected = true;
        player[0].category = category;
        player[0].icon = icon;
        player[0].color = color;
        // get all the other players
        setSelection(selection.filter((player) => player._id !== playerId).concat(player));
    };


    const SelectionContext = createContext({
        markAsSelected: markAsSelected
    });

    useEffect(() => {
        axios.get(url).then((response) => {
            // add a selected property to each player that will be used to toggle the selection
            response.data.filter((player) => player.role === "player").forEach((player) => { player.category = "none"; player.icon = "🗙"; player.color = "#000" });


            setSelection(response.data);
        });
    }, [url]);



    return [selection, setSelection, SelectionContext, markAsSelected];

}