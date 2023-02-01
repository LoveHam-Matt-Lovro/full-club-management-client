import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReviewForm from '../components/forms/ReviewForm'
import SelectionForm from '../components/forms/SelectionForm'
import ReviewCard from '../components/cards/ReviewCard'
import { StyledCardList } from '../components/styled/StyledCardList'

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




  // const deleteGame = () => {

  //   axios
  //     .delete(`http://127.0.0.1:5005/games/${gameId}`)
  //     .then(() => {
  //       navigate("/games");
  //     })
  //     .catch((err) => console.log(err));
  // };

  // const deleteReview = () => {

  //   axios
  //     .delete(`http://127.0.0.1:5005/games/${gameId}/review/${reviewId}`)
  //     .then(() => {
  //       navigate(`/games/${gameId}/`);
  //     })
  //     .catch((err) => console.log(err));
  // };

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
            <h1>{gameId}</h1>
            <h2>opponent: {game.opponent} </h2>
            <h3>venue: {game.venue}</h3>
            <h4>startTime: {game.startTime}</h4>
            <h3>number of players: {game.numberOfPlayers}   </h3>

          </div>

        )}

        {mode === "edit" && <GameForm gameId={gameId} mode="editGame" game={game} />}


        <StyledButton mode={mode} onClick={toggleMode}>{mode === "view" ? "Edit Game" : "Cancel Edit"}</StyledButton>
        <StyledButton danger onClick={deleteGame}>Delete Game</StyledButton>

        {mode === "view" && alreadyPlayed() ? <ReviewForm gameId={gameId} mode="newForm" /> : <SelectionForm gameId={gameId} game={game} />}




        <StyledCardList>
          {filteredReviews().map((review) =>
            <ReviewCard review={review} key={review._id} />)}

        </StyledCardList>
      </div>
    );
}


export default GameDetailsPage