import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { baseUrl } from '../utils/reqData';
import { GlobalContext } from '../Context/GlobalContext';



export const useFetchGameDetails = (gameId) => {
    const { game, setGame } = useContext(GlobalContext);
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`${baseUrl}/games/${gameId}`).then((response) => {
            setGame(response.data);
        });

        axios.get(`${baseUrl}/games/${gameId}/review`).then((response) => {
            setReviews(response.data);
        });
        setIsLoading(false);
    }, []);

    return { game, reviews, isLoading };
}