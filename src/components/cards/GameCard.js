import React from "react";
import { StyledCard } from "../styled/StyledCard";
import { StyledButton } from "../styled/StyledButton";
import axios from "axios";
import { GlobalContext } from "../../Context/GlobalContext";
import { useContext } from "react";
import { useDeleteGame } from "../forms/utils/useDelete";
import { Link } from "react-router-dom";
import { baseUrl } from "../forms/utils/reqData";

const GameCard = ({ game }) => {
  const { user } = useContext(GlobalContext);
  const handleDelete = useDeleteGame(`${baseUrl}/games`, game._id);

  const isCoach = () => { return user?.role?.toLowerCase() === "coach" ? true : false; }

  return (
    <StyledCard gameCard>
      <Link to={`/games/${game._id} `}>
        <h1>{game.opponent}</h1>
        <p>at {game.venue}</p>
      </Link>
      <StyledButton danger onClick={handleDelete}>
        Delete
      </StyledButton>


    </StyledCard>
  );
};

export default GameCard;
