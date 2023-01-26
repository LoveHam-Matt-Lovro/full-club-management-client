import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GameForm from "../components/forms/GameForm";
import GameCard from "../components/cards/GameCard";
import { StyledCardList } from '../components/styled/StyledCardList'

const GamesListPage = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("http://127.0.0.1:5005/games").then((response) => {
      console.log("response.data", response.data);
      setGames(response.data);
      setIsLoading(false);
    });
  }, []);

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
