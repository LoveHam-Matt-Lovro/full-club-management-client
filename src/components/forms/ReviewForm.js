import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { StyledForm } from '../styled/StyledForm'


const ReviewForm = ({ gameId }) => {
    const [values, setValues] = useState({
        ourScore: "",
        opponentScore: "",
        coachReview: "",
        playerReview: ""
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(gameId);
        console.log(typeof gameId);
        console.log(values);
        axios.post('http://127.0.0.1:5005/games/' + gameId + "/review/create", values)
            .then((response) => {
                console.log(response)

                setValues({
                    ourScore: "",
                    opponentScore: "",
                    coachReview: "",
                    playerReview: ""
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }




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