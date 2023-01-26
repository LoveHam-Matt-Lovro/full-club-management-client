import React from 'react'
import { StyledForm } from '../styled/StyledForm'
import { useForm } from "./utils/useForm";

const backup = {
    opponent: "",
    venue: "",
    startTime: "",
    numberOfPlayers: "",

}

const GameForm = ({ mode, game }) => {
    const [values, handleChange, handleSubmit] = useForm({
        ...game || backup
    }, mode, game);




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