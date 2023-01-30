import React from 'react'
import { StyledCard } from "../styled/StyledCard"
import axios from 'axios'
import { GlobalContext } from "../../Context/GlobalContext"
import { useContext } from 'react'
import { useDelete } from '../forms/utils/useDelete'
import { Link } from "react-router-dom";



const GameCard = ({ game }) => {
    const { games, setGames } = useContext(GlobalContext)
    const handleDelete = useDelete("http://127.0.01:5005/games", game._id)

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