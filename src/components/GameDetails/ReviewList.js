import React from 'react'
import ReviewCard from '../cards/ReviewCard'
import { StyledCardList } from '../styled/StyledCardList'

const ReviewList = ({ reviews, mode, gameId, isCoach }) => {

    const filteredReviews = (loggedUser) => {
        const gameReviews = reviews.filter((review) => gameId === review.gameId);
        // if player show only own reviews, if coach show all player reviews
        const playerOrCoachFilter = (review) => isCoach() ? true : review.author._id === localStorage.getItem("userId")
        const coachReviews = gameReviews().filter((review) => review?.author?.role?.toLowerCase() === "coach")
        const playerReviews = gameReviews().filter((review) => review?.author?.role?.toLowerCase() === "player" && playerOrCoachFilter(review))

        // selects which array to use based on input
        const arr = loggedUser === "coach" ? [...coachReviews] : [...playerReviews]

        return arr.map((review) => (<ReviewCard review={review} key={review._id} />))
    }

    return (
        <div>
            <StyledCardList>
                {filteredReviews("coach")}
            </StyledCardList>

            <StyledCardList>
                {filteredReviews("player")}
            </StyledCardList></div>
    )
}

export default ReviewList