import React, { useState } from 'react'
import { StyledForm } from '../styled/StyledForm'
import { useForm } from "./utils/useForm";
import { StyledButton } from '../styled/StyledButton';

const backup = {
    league:"German National League",
    round:"",
    opponent: "",
    venue: "",
    startTime: "",
    numberOfPlayers: "",
}

const GameForm = ({ mode, game, togglePageMode }) => {
  const [values, handleChange, handleSubmit] = useForm(
    { ...(game || backup) },
    mode,
    game
  );



  const [error, setError] = useState("");

  const checkErrors = () => {
    if ((mode = "newGame")) {
      if (
        values.opponent === "" ||
        values.venue === "" ||
        values.startTime === "" ||
        values.numberOfPlayers === "" ||
        values.round === ""
      ) {
        setError("All fields are required");
        return;
      }
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    checkErrors();
    console.log("Error:", error);
    if (error) {
      return;
    } else {
      handleSubmit();
    }
  };

  return (
    <div>
      <StyledForm newGame onSubmit={submitHandler}>
        <label htmlFor="league">LEAGUE</label>
        <select
          type="text"
          name="league"
          value={values.league}
          onChange={handleChange}
          default="AFLG"
        >
          <option value="German National League">German National League</option>
          <option value="Berlin League">Berlin League</option>
          <option value="Champions League">Champions League</option>
          <option value="Practice Match">Practice Match</option>
          <option value="Tournament">Tournament</option>
        </select>

        <label htmlFor="round">ROUND</label>
        <input
          type="number"
          name="round"
          value={values.round}
          min="1"
          onChange={handleChange}
        />

        <label htmlFor="opponent">OPPONENT</label>
        <input
          type="text"
          name="opponent"
          value={values.opponent}
          onChange={handleChange}
        />

        <label htmlFor="venue">VENUE</label>
        <input
          type="text"
          name="venue"
          value={values.venue}
          onChange={handleChange}
        />

        <label htmlFor="startTime">DATE</label>
        <input
          type="datetime-local"
          name="startTime"
          value={values.startTime}
          onChange={handleChange}
        />

        <label htmlFor="numberOfPlayers">NO. PLAYERS</label>
        <input
          type="text"
          name="numberOfPlayers"
          value={values.numberOfPlayers}
          onChange={handleChange}
        />
        <div>
        
          {mode === "newGame" && <StyledButton onClick={togglePageMode}>Cancel</StyledButton>} 
          <StyledButton className="submit" type="submit">Submit</StyledButton>
        </div>
      </StyledForm>
      {error && <h4 className="error">error: {error}</h4>}
    </div>
  );
};

export default GameForm