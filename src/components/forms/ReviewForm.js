import React from 'react'
import { StyledForm } from '../styled/StyledForm'
import { useForm } from "./utils/useForm";

const backup = {
    ourScore: "",
    opponentScore: "",
    coachReview: "",
    playerReview: ""
}

const ReviewForm = ({ gameId, review, mode }) => {
    const [values, handleChange, handleSubmit] = useForm({ ...review || backup }, mode, review)

    return (

        <div>
            <StyledForm onSubmit={handleSubmit}>


                <label htmlFor="coachReview">Coach Review</label>
                <input type="text" name="coachReview" value={values.coachReview} onChange={handleChange} />
                <label htmlFor="playerReview">Player Review</label>
                <input type="text" name="playerReview" value={values.playerReview} onChange={handleChange} />
                <button type="submit">Submit</button>
            </StyledForm>
        </div>
    )
}

export default ReviewForm