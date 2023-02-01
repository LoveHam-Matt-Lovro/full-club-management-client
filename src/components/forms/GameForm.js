import React from 'react'
import { StyledForm } from '../styled/StyledForm'
import { useForm } from "./utils/useForm";
import { StyledButton } from '../styled/StyledButton';

const backup = {
    opponent: "",
    venue: "",
    startTime: "",
    numberOfPlayers: "",
}

const GameForm = ({ mode, game, togglePageMode }) => {
    const [values, handleChange, handleSubmit] = useForm({ ...game || backup }, mode, game);

    const submitAndToggle = (e) => {
        handleSubmit(e);
        togglePageMode();
    }

    return (

        <div>
            <StyledForm onSubmit={(e) => submitAndToggle(e)}>
                <label htmlFor="league">League</label>
                <select type="text" name="league" value={values.league} onChange={handleChange} default="AFLG">
                    <option value="AFLG">AFLG</option>
                    <option value="Berlin League">Berlin League</option>
                    <option value="Champions League">Champions League</option>
                    <option value="Practice Match">Practice Match</option>
                    <option value="Tournament">Tournament</option>
                </select>

                <label htmlFor="round">Round</label>
                <input type="number" name="round" value={values.round} min="1" onChange={handleChange} />

                <label htmlFor="opponent">Opponent</label>
                <input type="text" name="opponent" value={values.opponent} onChange={handleChange} />

                <label htmlFor="venue">Venue</label>
                <input type="text" name="venue" value={values.venue} onChange={handleChange} />

                <label htmlFor="startTime">Start Time</label>
                <input type="datetime-local" name="startTime" value={values.startTime} onChange={handleChange} />

                <label htmlFor="numberOfPlayers">Number of Players</label>
                <input type="text" name="numberOfPlayers" value={values.numberOfPlayers} onChange={handleChange} />
                <div>
                    <StyledButton onClick={togglePageMode}>Cancel</StyledButton>
                    <StyledButton type="submit">Submit</StyledButton>
                </div>


            </StyledForm>
        </div>
    )
}

export default GameForm