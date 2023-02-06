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


    return (
        <div>
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
            </StyledCardList></div>
    )
}

export default ReviewList