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

              <GameCard game={game} key={game._id} />


            );
          })}
        </StyledCardList >
      </div>
    );
};

export default GamesListPage;
