import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReviewForm from '../components/forms/ReviewForm'


const GameDetailsPage = () => {

    const [reviews,setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const {gameId} = useParams();

    useEffect(() => {                                
        axios
          .get(`http://127.0.0.1:5005/games/${gameId}/review`)
          .then((response) => {
            
            console.log('response.data', response.data);
            setReviews(response.data)
 console.log(reviews)
            setIsLoading(false)
          });
        
      }, [] ); 
    
      
    if (isLoading) {
      return <div>...Loading</div>
    } else 


  return (
    <div>
        <h1>{gameId}</h1>
        <ReviewForm gameId={gameId}/>

        {reviews.map(review=>{
        return(
<div key={review._id}>

 <p>Coach - {review.coachReview}</p>
 <p>Player - {review.playerReview}</p>
</div> )})}
</div>

   
  )
}
    

export default GameDetailsPage