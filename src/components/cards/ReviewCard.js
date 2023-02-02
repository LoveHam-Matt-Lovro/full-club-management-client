import React from 'react'
import { StyledCard } from "../styled/StyledCard"
import { formatDate } from "../forms/utils/formatDate"
const ReviewCard = ({ review }) => {



    return (

        <StyledCard className='review'>
            <p>published: {formatDate(review.createdAt)}</p>


            <p>author: {review.author.firstName} {review.author.lastName} </p>
            <p>author role : {review.author.role}</p>
            <p>text: {review.text}</p>

        </StyledCard >
    )
}

export default ReviewCard