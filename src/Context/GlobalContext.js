import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [games, setGames] = useState([]);
    const [user, setUser] = useState([]);
    const [review, setReviews] = useState([]);
    const [test, setTest] = useState("Hi from Context!")
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get("http://127.0.0.1:5005/games").then((response) => {
            console.log("response.data", response.data);
            setGames(response.data);
            setIsLoading(false);

        });
    }, []);


    return (
        <GlobalContext.Provider
            value={{ games, setGames, user, setUser, review, setReviews, test, setTest, isLoading, setIsLoading }}
        >
            {children}
        </GlobalContext.Provider>
    );
};