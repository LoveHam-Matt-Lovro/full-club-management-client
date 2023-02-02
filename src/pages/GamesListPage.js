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
  const { games, isLoading } = useContext(GlobalContext);
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
            <StyledButton onClick={togglePageMode}>
              New Game (Only coach or board can see)
            </StyledButton>
            <StyledCardList className="games">
              <SmallStyledDiv pastGameList>
                <h2 style={{ "fontWeight":10 }}>PAST</h2>

                {games
                  .filter((game) => {
                    return isInPast(game);
                  })
                  .map((game) => {
                    return <PastGameCard game={game} key={game._id} />;
                  })}
              </SmallStyledDiv>

              <SmallStyledDiv gameList>
                <h2 style={{ "fontWeight":10 }}>UPCOMING</h2>

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
