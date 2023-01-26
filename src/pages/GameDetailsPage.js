import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReviewForm from '../components/forms/ReviewForm'
import ReviewCard from '../components/cards/ReviewCard'
import { StyledCardList } from '../components/styled/StyledCardList'
import { StyledForm } from '../components/styled/StyledForm'
import GameForm from '../components/forms/GameForm'
import { StyledButton } from '../components/styled/StyledButton'


const GameDetailsPage = () => {

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [game, setGame] = useState([]);
  const [mode, setMode] = useState('view');

  const { gameId } = useParams();
  const { reviewId } = useParams();
  const navigate = useNavigate();

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




  const deleteGame = () => {

    axios
      .delete(`http://127.0.0.1:5005/games/${gameId}/delete`)
      .then(() => {
        navigate("/games");
      })
      .catch((err) => console.log(err));
  };

  const deleteReview = () => {

    axios
      .delete(`http://127.0.0.1:5005/games/${gameId}/review/${reviewId}`)
      .then(() => {
        navigate(`/games/${gameId}/`);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get(`http://127.0.0.1:5005/games/${gameId}`).then((response) => {
      console.log("response.data", response.data);
      setGame(response.data);

    });


    axios
      .get(`http://127.0.0.1:5005/games/${gameId}/review`)
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
            <h1>{gameId}</h1>
            <h2>score: 44:11 </h2>
            <h3>venue: {game.venue}</h3>
            <h4>startTime: {game.startTime}</h4>

          </div>

        )}

        {mode === "edit" && <GameForm gameId={gameId} mode="editGame" game={game} />}


        <StyledButton onClick={toggleMode}>{mode === "view" ? "Edit Game" : "Cancel Edit"}</StyledButton>
        <StyledButton className='delete' onClick={deleteGame}>Delete Game</StyledButton>

        {alreadyPlayed() ? <ReviewForm gameId={gameId} /> : <h4>game will be played {game.startTime}</h4>}

        <StyledCardList>
          {reviews.map((review) => <ReviewCard review={review} key={review._id} />)}
        </StyledCardList>
      </div>
    );
}


export default GameDetailsPage