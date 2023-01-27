import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { Link } from "react-router-dom";
import GameForm from "../components/forms/GameForm";
import GameCard from "../components/cards/GameCard";
import { StyledCardList } from '../components/styled/StyledCardList'

const GamesListPage = () => {
  const { games, isLoading, } = useContext(GlobalContext)

  if (isLoading) {
    return <div>...Loading</div>;
  } else
    return (
      <div>
        <GameForm mode="newGame" />
        <StyledCardList className="games">


          {games.map((game) => {
            return (
              <Link to={`/games/${game._id}`} key={game._id}>
                <GameCard game={game} />

              </Link>
            );
          })}
        </StyledCardList >
      </div>
    );
};

export default GamesListPage;
