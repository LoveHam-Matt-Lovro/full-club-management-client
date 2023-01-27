import React from 'react'
import axios from 'axios'
import { StyledForm } from '../styled/StyledForm'
import { useForm } from "./utils/useForm";

const backup= {
    ourScore: "",
    opponentScore: "",
    coachReview: "",
    playerReview: ""
}

const ReviewForm = ({ gameId, review, mode }) => {
    const [values, handleChange, handleSubmit] = useForm({...review || backup}, mode, review)

    return (

        <div>
            <StyledForm onSubmit={handleSubmit}>
                {
                    // <label htmlFor="ourScore">Berlin Score</label>
                    // <input type="number" name="ourScore" value={values.ourScore} onChange={handleChange} />
                    // <label htmlFor="opponentScore">Opposition Score</label>
                    // <input type="number" name="opponentScore" value={values.opponentScore} onChange={handleChange} />
                }

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