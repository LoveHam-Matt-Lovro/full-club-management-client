
import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { Link } from "react-router-dom";
import GameForm from "../components/forms/GameForm";
import GameCard from "../components/cards/GameCard";
import { StyledCardList } from '../components/styled/StyledCardList'
import { StyledButton } from "../components/styled/StyledButton";

const GamesListPage = () => {
  const { games, isLoading, } = useContext(GlobalContext)
  const [pageMode, setPageMode] = useState("view");

  const isInPast = (game) => {
    const gameDate = new Date(game.startTime);
    const today = new Date();
    return gameDate < today ? true : false;
  }

  const togglePageMode = () => {
    if (pageMode === "view") {
      setPageMode("edit");
    } else {
      setPageMode("view");
    }
  };


  if (isLoading) {
    return <div>...Loading</div>;
  } else
    return (

      <div>


        {pageMode === "edit" ? < GameForm mode="newGame" togglePageMode={togglePageMode} /> :

          <div>
            <StyledButton onClick={togglePageMode}>Add new game</StyledButton>
            <StyledCardList className="games">



              <div>
                <h2>Past Games</h2>
                {games.filter((game) => {
                  return isInPast(game);
                }).map((game) => {
                  return (

                    <GameCard game={game} key={game._id} />

                  );
                }
                )
                }


              </div>
              <div>
                <h2>Upcoming games</h2>
                {games.filter((game) => {
                  return !isInPast(game);
                }).map((game) => {
                  return (

                    <GameCard game={game} key={game._id} />

                  );
                }
                )
                }


              </div>
            </StyledCardList >
          </div>
        }


      </div>
    );
};

export default GamesListPage;
