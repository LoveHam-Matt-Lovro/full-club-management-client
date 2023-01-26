import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReviewForm from '../components/forms/ReviewForm'


const GameDetailsPage = () => {

    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { gameId } = useParams();
    const { reviewId } = useParams();
    const navigate = useNavigate();

    // const editGame = () => {

    //     const edittedGame = {opponent, venue, startTime, numberOfPlayers}        
    
    //     axios
    //       .put(`http://127.0.0.1:5005/games/${gameId}/edit`, edittedGame)
    //       .then(() => {
    //         navigate(`/games/${gameId}`);
    //       })
    //       .catch((err) => console.log(err));
    //   };  

    
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
      axios
        .get(`http://127.0.0.1:5005/games/${gameId}/review`)
        .then((response) => {
          console.log("response.data", response.data);
          setReviews(response.data);
          console.log(reviews);
          setIsLoading(false);
        });
    }, []);

    if (isLoading) {
      return <div>...Loading</div>;
    } else
      return (
        <div>
          <h1>{gameId}</h1>
          
          <button onClick={deleteGame}>Delete Game</button>
          <ReviewForm gameId={gameId} />

          {reviews.map((review) => {
            return (
              <div key={review._id}>
                <p>Coach - {review.coachReview}</p>
                <button onClick={deleteReview}>Delete Review</button>
                <p>Player - {review.playerReview}</p>
                <button onClick={deleteReview}>Delete Review</button>
              </div>
            );
          })}
        </div>
      );
}
    

export default GameDetailsPage