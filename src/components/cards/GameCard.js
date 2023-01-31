import React from 'react'
import { StyledCard } from "../styled/StyledCard"
import axios from 'axios'
import { GlobalContext } from "../../Context/GlobalContext"
import { useContext } from 'react'
import { useDeleteGame } from '../forms/utils/useDelete'
import { Link } from "react-router-dom";



const GameCard = ({ game }) => {
    const { games, setGames } = useContext(GlobalContext)
    const handleDelete = useDeleteGame(`${process.env.REACT_APP_API_URL}/games`, game._id)

    return (
        <StyledCard>

            <Link to={`/games/${game._id} `}>

                <h1>{game.opponent}</h1>

                <h3>{game.startTime}</h3>

            </Link>

            <button onClick={handleDelete}>Delete</button>
        </StyledCard >
    )
}

export default GameCard