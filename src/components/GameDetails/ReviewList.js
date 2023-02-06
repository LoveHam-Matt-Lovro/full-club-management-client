import React from 'react'
import ReviewCard from '../cards/ReviewCard'
import { StyledCardList } from '../styled/StyledCardList'

const ReviewList = ({ reviews, mode, gameId, isCoach }) => {
    const gameReviews = () => {
        const gameReviews = reviews.filter((review) => gameId === review.gameId);
        return gameReviews;
    };

    const coachReviews = () =>
        gameReviews().filter(
            (review) => review?.author?.role?.toLowerCase() === "coach"
        );

    /**
     * if coach, show all player reviews, if player, show only own reviews
     * @returns {Array} of reviews for players
     */

    const playerReviews = () => {
        const playerOrCoach = (review) => isCoach() ? true : review.author._id === localStorage.getItem("userId")
        return gameReviews().filter((review) => review?.author?.role?.toLowerCase() === "player" && playerOrCoach(review)
        );
    }


    return (
        <div>
            <StyledCardList>
                {coachReviews().map((review) => (<ReviewCard review={review} key={review._id} />))}
            </StyledCardList>

            <StyledCardList>
                {playerReviews().map((review) => (<ReviewCard review={review} key={review._id} />))
                }
            </StyledCardList></div>
    )
}

export default ReviewList