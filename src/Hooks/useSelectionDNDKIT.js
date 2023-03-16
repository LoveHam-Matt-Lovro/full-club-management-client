import axios from "axios";

import { useEffect, useState, createContext } from "react";

export const useSelectionDNDKIT = (url) => {
    const [selection, setSelection] = useState({ bench: [], attack: [], defense: [], midfield: [], goalkeeper: [] });
    const [gameData, setGameData] = useState({});

    const urlGame = url.replace("/selection", "");
    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                response.data
                    .filter((player) => player.role === "player")
                    .forEach((player) => {
                        player.category = "none";
                    });

                const result = {
                    bench: response.data.filter((player) => player.category === "none"),
                    attack: response.data.filter((player) => player.category === "attack"),
                    defense: response.data.filter((player) => player.category === "defense"),
                    midfield: response.data.filter((player) => player.category === "midfield"),
                    // goalkeeper: response.data.filter((player) => player.category === "goalkeeper"),
                }

                setSelection(result);
            })
            .then(() => {
                axios
                    .get(urlGame)
                    .then((response) => {
                        setGameData(response.data);
                        return response.data;
                    })

            });
    }, [url]);



    return [selection, setSelection];
};
