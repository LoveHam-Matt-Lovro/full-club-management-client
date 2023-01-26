import React from 'react'
import { StyledCard } from "../styled/StyledCard"

const ReviewCard = ({ review }) => {
    return (
        <StyledCard className='review'>
            <h2> Player: {review.playerReview}</h2>
            <h2>Coach: {review.coachReview}</h2>

        </StyledCard>
    )
}

export default ReviewCard