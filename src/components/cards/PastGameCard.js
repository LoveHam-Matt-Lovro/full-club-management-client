import React from 'react'
import { StyledCard } from "../styled/StyledCard"
import { StyledButton } from "../styled/StyledButton"
import axios from 'axios'
import { GlobalContext } from "../../Context/GlobalContext"
import { useContext } from 'react'
import { useDeleteGame } from '../forms/utils/useDelete'
import { Link } from "react-router-dom";



const PastGameCard = ({ game }) => {
    const { games, setGames } = useContext(GlobalContext)
    const handleDelete = useDeleteGame(`${process.env.REACT_APP_API_URL}/games`, game._id)

    return (
        <StyledCard pastGameCard>

            <Link to={`/games/${game._id} `}>


                <h1 style={{ "fontWeight":10 }}>{game.opponent}</h1>
                <p>at {game.venue}</p>


              

            </Link>


            <StyledButton danger onClick={handleDelete}>Delete</StyledButton>
        </StyledCard >
    )
}

export default PastGameCard