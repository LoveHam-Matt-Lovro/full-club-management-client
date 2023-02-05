import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../components/forms/utils/reqData";
import { getStoredUser } from "../components/forms/utils/localStorage";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [games, setGames] = useState([]);
    const [user, setUser] = useState([]);
    const [review, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        axios.get(`${baseUrl}/games`).then((response) => {
            setGames(response.data);
        });

        if (getStoredUser()) {
            axios
                .get(`${baseUrl}/profile/${getStoredUser._id}`)
                .then((response) => {
                    setUser(response.data);
                });
        }


        setIsLoading(false);
    }, []);




    return (
        <GlobalContext.Provider
            value={{ games, setGames, user, setUser, review, setReviews, isLoading, setIsLoading }}
        >
            {children}
        </GlobalContext.Provider >
    );
};