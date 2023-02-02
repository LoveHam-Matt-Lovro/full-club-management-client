import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReviewForm from '../components/forms/ReviewForm'
import SelectionForm from '../components/forms/SelectionForm'
import ReviewCard from '../components/cards/ReviewCard'
import { StyledCardList } from '../components/styled/StyledCardList'
import { SmallStyledDiv } from '../components/styled/SmallStyledDiv'
import GameForm from '../components/forms/GameForm'
import { StyledButton } from '../components/styled/StyledButton'
import { useDeleteGame, useDeleteReview } from '../components/forms/utils/useDelete'
import isCoach from '../components/forms/utils/isCoach'



const GameDetailsPage = () => {

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [game, setGame] = useState([]);
  const [mode, setMode] = useState('view');
  const { gameId } = useParams();
  const { reviewId } = useParams();
  const navigate = useNavigate();

  const deleteGame = useDeleteGame(`${process.env.REACT_APP_API_URL}/games`, gameId, "/games");

  // const deleteReview = useDeleteReview('reviews', reviewId);

  const gameReviews = () => {
    const gameReviews = reviews.filter((review) => gameId === review.gameId);
    return gameReviews;
  };
  const coachReviews = () => {
    const coachReviews = gameReviews().filter((review) => review.author.role.toLowerCase() === "coach");
    return coachReviews;
  };
  const playerReviews = () => {
    const playerReviews = gameReviews().filter((review) => review.author.role.toLowerCase() === "player");
    return playerReviews;
  };

  const thisPlayerReviews = () => {
    const thisPlayerReviews = playerReviews().filter((review) => review.author._id === localStorage.getItem("userId"));
    return thisPlayerReviews;
  };

  const toggleMode = () => {
    if (mode === 'view') {
      setMode('edit');
    } else {
      setMode('view');
    }
  };

  const alreadyPlayed = () => {
    const gameDate = new Date(game.startTime);
    const today = new Date();
    return gameDate < today ? true : false;

  }


  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/games/${gameId}`).then((response) => {
      console.log("response.data", response.data);
      setGame(response.data);

    });



    axios
      .get(`${process.env.REACT_APP_API_URL}/games/${gameId}/review`)
      .then((response) => {
        console.log("response.data", response.data);
        setReviews(response.data);
        console.log(reviews);

      });
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>...Loading</div>;
  } else
    return (
      <div>

        {mode === "view" && (
          <div>
            <SmallStyledDiv className="font-face-fm">
              <h2 style={{ fontWeight: 10 }}>{game.league},   Round {game.round}</h2>
              <h1 style={{ fontWeight: 10, fontSize: 70 }}>v {game.opponent} </h1>
              <h2 style={{ fontWeight: 10 }}>{game.venue},   {game.startTime}</h2>
              <h3>No. Players: {game.numberOfPlayers} </h3>


            </SmallStyledDiv>
          </div>
        )
        }

        {mode === "edit" && (
          <GameForm gameId={gameId} mode="editGame" game={game} />
        )}

        <StyledButton mode={mode} onClick={toggleMode}>
          {mode === "view" ? "Edit Game (only coach and board to have access)" : "Cancel Edit"}
        </StyledButton>


        <StyledButton danger onClick={deleteGame}>
          Delete Game {isCoach() ? "(coach)" : "(hidden)"}
        </StyledButton>

        <StyledButton onClick={deleteGame}>
          Selection {isCoach() ? "(coach)" : "(hidden)"}
        </StyledButton>

        {mode === "view" && alreadyPlayed() ? (
          <ReviewForm gameId={gameId} mode="newReview" game={game} />
        ) : (
          <SelectionForm gameId={gameId} game={game} />
        )}

        <StyledCardList>
          {coachReviews().map((review) => (
            <ReviewCard review={review} key={review._id} />
          ))}
        </StyledCardList>


        <StyledCardList>
          {isCoach() ? playerReviews().map((review) => (
            <ReviewCard review={review} key={review._id} />
          )) : thisPlayerReviews().map((review) => (
            <ReviewCard review={review} key={review._id} />
          ))}
        </StyledCardList>





      </div>
    );
}


export default GameDetailsPage