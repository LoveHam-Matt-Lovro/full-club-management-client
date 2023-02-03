import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { useNavigate, useParams } from "react-router-dom";
import ReviewForm from "../components/forms/ReviewForm";
import SelectionForm from "../components/forms/SelectionForm";
import ReviewCard from "../components/cards/ReviewCard";
import { StyledCardList } from "../components/styled/StyledCardList";
import { SmallStyledDiv } from "../components/styled/SmallStyledDiv";
import GameForm from "../components/forms/GameForm";
import { StyledButton } from "../components/styled/StyledButton";
import {
  useDeleteGame,
  useDeleteReview,
} from "../components/forms/utils/useDelete";
// import isCoach from "../components/forms/utils/isCoach";
import { formatDate } from "../components/forms/utils/formatDate";

const GameDetailsPage = () => {
  const { user } = useContext(GlobalContext);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [game, setGame] = useState([]);
  const [mode, setMode] = useState("view");
  const { gameId } = useParams();
  const { reviewId } = useParams();
  const navigate = useNavigate();

  const isCoach = () => { return user?.role?.toLowerCase() === "coach" ? true : false; }


  const deleteGame = useDeleteGame(
    `${process.env.REACT_APP_API_URL}/games`,
    gameId,
    "/games"
  );

  // const deleteReview = useDeleteReview('reviews', reviewId);

  const gameReviews = () => {
    const gameReviews = reviews.filter((review) => gameId === review.gameId);
    return gameReviews;
  };

  const coachReviews = () =>
    gameReviews().filter(
      (review) => review?.author?.role?.toLowerCase() === "coach"
    );
  const playerReviews = () =>
    gameReviews().filter(
      (review) => review?.author?.role?.toLowerCase() === "player"
    );

  const thisPlayerReviews = () =>
    playerReviews().filter(
      (review) =>
        review.author._id === localStorage.getItem("userId") &&
        review?.author?.role?.toLowerCase() === "player"
    );

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

  const formattedDate = formatDate(game.startTime);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/games/${gameId}`)
      .then((response) => {
        setGame(response.data);
      });

    axios
      .get(`${process.env.REACT_APP_API_URL}/games/${gameId}/review`)
      .then((response) => {
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
        {mode === "view" && (
          <div>
            <SmallStyledDiv gameDetailsHeading>
              <h3>
                {game.league}, Round {game.round}.{" "}
              </h3>
              <h1> v {game.opponent} </h1>

              <h3>
                at {game.venue}, {formattedDate}
              </h3>
            </SmallStyledDiv>
          </div>
        )}

        {mode === "edit" && (
          <GameForm gameId={gameId} mode="editGame" game={game} />
        )}

        {isCoach() && <StyledButton mode={mode} onClick={toggleMode}>
          {mode === "view" ? "Edit Game" : "Cancel Edit"}
        </StyledButton>}



        {
          isCoach() && <StyledButton danger onClick={deleteGame}>
            Delete Game
          </StyledButton>
        }


        {
          mode === "view" && alreadyPlayed() ? (
            <ReviewForm gameId={gameId} mode="newReview" game={game} />
          ) : (
            <SelectionForm gameId={gameId} game={game} />
          )
        }

        <StyledCardList>
          {coachReviews().map((review) => (
            <ReviewCard review={review} key={review._id} />
          ))}
        </StyledCardList>

        <StyledCardList>
          {isCoach()
            ? playerReviews().map((review) => (
              <ReviewCard review={review} key={review._id} />
            ))
            : thisPlayerReviews().map((review) => (
              <ReviewCard review={review} key={review._id} />
            ))}
        </StyledCardList>
      </div >
    );
};

export default GameDetailsPage;
