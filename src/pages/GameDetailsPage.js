import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { useParams } from "react-router-dom";
import ReviewForm from "../components/forms/ReviewForm";
import SelectionForm from "../components/forms/SelectionForm";
import GameForm from "../components/forms/GameForm";
import { StyledButton } from "../components/styled/StyledButton";
import { useDeleteGame } from "../components/forms/utils/useDelete";

import GameHeading from "../components/GameDetails/GameHeading";
import ReviewList from "../components/GameDetails/ReviewList";

const GameDetailsPage = () => {
  const { user } = useContext(GlobalContext);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [game, setGame] = useState([]);
  const [mode, setMode] = useState("view");
  const { gameId } = useParams();

  const isCoach = () => {
    return user?.role?.toLowerCase() === "coach" ? true : false;
  };
  const deleteGame = useDeleteGame(`${process.env.REACT_APP_API_URL}/games`, gameId, "/games");

  const toggleMode = () => {
    if (mode === "view") {
      setMode("edit");
    } else {
      setMode("view");
    }
  };

  const alreadyPlayed = () => {
    const gameDate = new Date(game.startTime);
    const today = new Date();
    return gameDate < today ? true : false;
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/games/${gameId}`).then((response) => {
      setGame(response.data);
    });

    axios.get(`${process.env.REACT_APP_API_URL}/games/${gameId}/review`).then((response) => {
      setReviews(response.data);
    });
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>...Loading</div>;
  } else
    return (
      <div>
        <h1>{user.firstName}</h1>
        {mode === "view" && <GameHeading game={game} />}
        {mode === "edit" && <GameForm gameId={gameId} mode="editGame" game={game} />}
        <StyledButton mode={mode} onClick={toggleMode}>
          {mode === "view" ? "Edit Game" : "Cancel Edit"}
        </StyledButton>

        <StyledButton danger onClick={deleteGame}>
          {" "}
          Delete Game{" "}
        </StyledButton>

        {mode === "view" && alreadyPlayed() ? <ReviewForm gameId={gameId} mode="newReview" game={game} /> : <SelectionForm gameId={gameId} game={game} />}

        <ReviewList reviews={reviews} mode={mode} gameId={gameId} isCoach={isCoach} />
      </div>
    );
};

export default GameDetailsPage;
