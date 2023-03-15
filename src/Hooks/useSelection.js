import axios from "axios";

import { useEffect, useState, createContext } from "react";

export const useSelection = (url) => {
    const [selection, setSelection] = useState([]);
    const [attack, setAttack] = useState([]);
    const [midfield, setMidfield] = useState([]);
    const [defense, setDefense] = useState([]);
    const [gameData, setGameData] = useState({});

    //remove /selection from url
    const urlGame = url.replace("/selection", "");

    const markAsSelected = (playerId, category) => {
        const player = selection.filter((player) => player._id === playerId);

        player[0].selected = true;
        player[0].category = category;

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

                secondaryFunction(values);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                response.data
                    .filter((player) => player.role === "player")
                    .forEach((player) => {
                        player.category = "none";
                    });

                setSelection(response.data);
            })
            .then(() => {
                axios
                    .get(urlGame)
                    .then((response) => {
                        setGameData(response.data);
                        return response.data;
                    })
                    .then((gameRes) => {
                        updateTeam(gameRes);
                    });
            });
    }, [url]);

    const updateTeam = async (game) => {

        const attackers = await gameData.attack;

        setAttack(attackers);

        for (let i = 0; i < gameData.attack; i++) {
            attackers[i].category = "attack";

            setSelection(selection.filter((player) => player._id !== attackers[i]._id).concat(attackers[i]));
        }
    };

    const SelectionContext = createContext({
        attack: attack,
        markAsSelected: markAsSelected,
    });
    return [selection, setSelection, SelectionContext, markAsSelected, submitSelection];
};
