import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [games, setGames] = useState([]);
    const [user, setUser] = useState([]);
    const [review, setReviews] = useState([]);

    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/games`).then((response) => {
            console.log("response.data", response.data);
            setGames(response.data);
        });

        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            axios
                .get(`${process.env.REACT_APP_API_URL}/profile/${storedUser._id}`)
                .then((response) => {
                    setUser(response.data);
                });
        }


        setIsLoading(false);
    }, []);

    // // get logged user
    // useEffect(() => {

    // }, []);



    return (
        <GlobalContext.Provider
            value={{ games, setGames, user, setUser, review, setReviews, isLoading, setIsLoading }}
        >
            {children}
        </GlobalContext.Provider >
    );
};