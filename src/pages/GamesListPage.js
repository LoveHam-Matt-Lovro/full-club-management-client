import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { Link } from "react-router-dom";
import GameForm from "../components/forms/GameForm";
import GameCard from "../components/cards/GameCard";
import PastGameCard from "../components/cards/PastGameCard";
import { StyledCardList } from "../components/styled/StyledCardList";
import { StyledButton } from "../components/styled/StyledButton";
import { SmallStyledDiv } from "../components/styled/SmallStyledDiv";

const GamesListPage = () => {
  const { user, games, isLoading } = useContext(GlobalContext);
  const [pageMode, setPageMode] = useState("view");
  const isInPast = (game) => new Date(game.startTime) < new Date();
  const togglePageMode = () =>
    pageMode === "view" ? setPageMode("edit") : setPageMode("view");

  if (isLoading) {
    return <div>...Loading</div>;
  } else
    return (
      <div>
        {pageMode === "edit" ? (
          <GameForm mode="newGame" togglePageMode={togglePageMode} />
        ) : (
          <div>
            <StyledButton onClick={togglePageMode}>CREATE NEW GAME</StyledButton>

            <StyledCardList className="games">
              <div>
                <h2>PAST</h2>
              </div>
              <SmallStyledDiv pastGameList>
                {games
                  .filter((game) => {
                    return isInPast(game);
                  })
                  .map((game) => {
                    return <PastGameCard game={game} key={game._id} />;
                  })}
              </SmallStyledDiv>

              <div>
                <h2>UPCOMING</h2>
              </div>
              <SmallStyledDiv gameList>
                {games
                  .filter((game) => {
                    return !isInPast(game);
                  })
                  .map((game) => {
                    return <GameCard game={game} key={game._id} />;
                  })}
              </SmallStyledDiv>
            </StyledCardList>
          </div>
        )}
      </div>
    );
};

export default GamesListPage;
