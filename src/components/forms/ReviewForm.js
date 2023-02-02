import React from 'react'
import { StyledForm } from '../styled/StyledForm'
import { useForm } from "./utils/useForm";
import isCoach from './utils/isCoach'

const backup = {

    coachReview: "",
    playerReview: ""
}
const storedUser = JSON.parse(localStorage.getItem('user'))


const ReviewForm = ({ gameId, review, mode }) => {
    const [values, handleChange, handleSubmit] = useForm({ ...review || backup, gameId, author: storedUser }, mode, review)

    return (

        <div>
            <StyledForm onSubmit={handleSubmit}>


                <label htmlFor="text">{isCoach() ? "Coach" : "Player"} Review</label>
                <input type="text" name="text" value={values.text} onChange={handleChange} />

                <button type="submit">Submit</button>
            </StyledForm>
        </div>
    )
}

export default ReviewForm