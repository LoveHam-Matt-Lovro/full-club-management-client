import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { StyledForm } from '../styled/StyledForm'


const GameForm = () => {
    const [values, setValues] = useState({
        opponent: "",
        venue: "",
        startTime: "",
        numberOfPlayers: ""
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5005/games/create', values)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })
    }




    return (

        <div>
            <StyledForm onSubmit={handleSubmit}>
                <label htmlFor="opponent">Opponent</label>
                <input type="text" name="opponent" value={values.opponent} onChange={handleChange} />
                <label htmlFor="venue">Venue</label>
                <input type="text" name="venue" value={values.venue} onChange={handleChange} />
                <label htmlFor="startTime">Start Time</label>
                <input type="datetime-local" name="startTime" value={values.startTime} onChange={handleChange} />
                <label htmlFor="numberOfPlayers">Number of Players</label>
                <input type="text" name="numberOfPlayers" value={values.numberOfPlayers} onChange={handleChange} />
                <button type="submit">Create</button>
            </StyledForm>
        </div>
    )
}

export default GameForm