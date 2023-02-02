import React from 'react'
import { StyledCard } from "../styled/StyledCard"

const ReviewCard = ({ review }) => {
    return (
        console.log(review),
        <StyledCard className='review'>
            <pre>{JSON.stringify(review)}</pre>
            <h2> Player: {review.playerReview}</h2>
            <h2>Coach: {review.coachReview}</h2>

        </StyledCard>
    )
}

export default ReviewCard