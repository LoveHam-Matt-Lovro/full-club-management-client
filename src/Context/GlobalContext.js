import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl, header } from "../utils/reqData";
import { getStoredUser } from "../utils/localStorage";
const { useNavigate } = require("react-router-dom");

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [games, setGames] = useState([]);
    const [user, setUser] = useState([]);
    const [review, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [game, setGame] = useState([]);

    const navigate = useNavigate();
    const fetchGames = () => {
        axios.get(`${baseUrl}/games`, header).then((response) => {
            console.log(response.data);
            setGames(response.data);
        }).catch((err) => {
            console.log(err);
        });
    };

    const fetchUser = () => {
        axios.get(`${baseUrl}/profile/${getStoredUser._id}`).then((res) => {
            setUser(res.data);
        });
    }

    const fetchSingleGame = (id) => {
        axios.get(`${baseUrl}/games/${id}`).then((res) => {
            setGames([...games, res.data]);
            navigate(`/games/`);
        });
    };


    useEffect(() => {
        fetchGames()
        getStoredUser() && fetchUser();
        setIsLoading(false);
    }, []);

    return <GlobalContext.Provider value={{ games, setGames, user, setUser, review, setReviews, isLoading, setIsLoading, fetchGames, fetchUser, fetchSingleGame, game, setGame }}>{children}</GlobalContext.Provider>;
};
