import { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from './reqData';


export const useFetchGameDetails = (gameId) => {
    const [game, setGame] = useState([]);
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