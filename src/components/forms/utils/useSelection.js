import axios from "axios";
import { useContext, useEffect, useState, createContext } from "react";

export const useSelection = (url) => {
    const [selection, setSelection] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [attack, setAttack] = useState([]);
    const [midfield, setMidfield] = useState([]);
    const [defense, setDefense] = useState([]);

    //remove /selection from url
    const urlGame = url.replace("/selection", "");

    const markAsSelected = (playerId, category, icon, color) => {
        // find the player in the selection

        const player = selection.filter((player) => player._id === playerId);
        // toggle the selected property

        player[0].selected = true;
        player[0].category = category;
        player[0].icon = icon;
        player[0].color = color;
        // get all the other players
        setSelection(selection.filter((player) => player._id !== playerId).concat(player));
    };
    // f
    useEffect(() => {
        setAttack(selection.filter((player) => player.category === "attack"));
        setMidfield(selection.filter((player) => player.category === "midfield"));
        setDefense(selection.filter((player) => player.category === "defense"));
    }, [selection]);

    const submitSelection = (game) => {
        const storedToken = localStorage.getItem("token");
        const header = {
            headers: { Authorization: `Bearer ${storedToken}` },
        };

        const baseUrl = process.env.REACT_APP_API_URL;
        const values = {
            ...game,
            attack,
            defense,
            midfield,
        };

        const axiosFunction = axios.put(baseUrl + `/games/${game._id}/`, values, header);

        const secondaryFunction = () => {
            window.location.reload();
        };

        axiosFunction
            .then((values) => {
                console.log("hi from useSelection");
                secondaryFunction(values);
            })
            .catch((err) => console.log(err));
    };

    const updateTeam = (game) => {
        setAttack(game.attack);
        setMidfield(game.midfield);
        setDefense(game.defense);
        for (let i = 0; i < game.attack.length; i++) {
            markAsSelected(game.attack[i]._id, "attack", "🔥", "#00ff00");
            for (let i = 0; i < game.midfield.length; i++) {
                markAsSelected(game.midfield[i]._id, "midfield", "⚽", "#ffff00");
                for (let i = 0; i < game.defense.length; i++) {
                    markAsSelected(game.defense[i]._id, "defense", "🔥", "#FF0000");
                }
            }
        }
    };

    const SelectionContext = createContext({
        markAsSelected: markAsSelected,
    });

    useEffect(() => {
        axios.get(url).then((response) => {
            response.data
                .filter((player) => player.role === "player")
                .forEach((player) => {
                    player.category = "none";
                    player.icon = "🗙";
                    player.color = "#000";
                });

            setSelection(response.data);
        }).then(() => {
            axios.get(urlGame).then((response) => {
                console.log(response.data, "dddd")
                updateTeam(response.data);
            });
        });
    }, [url]);

    return [selection, setSelection, SelectionContext, markAsSelected, submitSelection];
};
