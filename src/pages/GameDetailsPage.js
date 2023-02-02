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



const GameDetailsPage = () => {

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [game, setGame] = useState([]);
  const [mode, setMode] = useState('view');
  const { gameId } = useParams();
  const { reviewId } = useParams();
  const navigate = useNavigate();

  const deleteGame = useDeleteGame(`${process.env.REACT_APP_API_URL}/games`, gameId, "/games");

  const deleteReview = useDeleteReview('reviews', reviewId);

  const filteredReviews = () => {
    const filteredReviews = reviews.filter((review) => gameId === review.gameId);
    return filteredReviews;
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
          <>
            <SmallStyledDiv className="font-face-fm">
              <h2>{game.league},   Round {game.round}</h2>
              <h1 style={{fontSize: 70 }}>v {game.opponent} </h1>
              <h2>{game.venue},   {game.startTime}</h2>
              <h3>No. Players: {game.numberOfPlayers} </h3>
            </SmallStyledDiv>
          </>
        )}

        {mode === "edit" && (
          <GameForm gameId={gameId} mode="editGame" game={game} />
        )}

        <StyledButton mode={mode} onClick={toggleMode}>
          {mode === "view" ? "Edit Game (only coach and board to have access)" : "Cancel Edit"}
        </StyledButton>
        <StyledButton danger onClick={deleteGame}>
          Delete Game (Coach & Board can see)
        </StyledButton>

        <StyledButton onClick={deleteGame}>
          If im a coach i can click this to access selection panel?
        </StyledButton>

        {mode === "view" && alreadyPlayed() ? (
          <ReviewForm gameId={gameId} mode="newForm" />
        ) : (
          <SelectionForm gameId={gameId} game={game} />
        )}

        <StyledCardList>
          {filteredReviews().map((review) => (
            <ReviewCard review={review} key={review._id} />
          ))}
        </StyledCardList>
      </div>
    );
}


export default GameDetailsPage