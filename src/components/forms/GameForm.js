import React, { useState } from "react";
import { StyledForm } from "../styled/StyledForm";
import { useForm } from "../../Hooks/useForm";
import { StyledButton } from "../styled/StyledButton";
import { backup } from "./gameFormGenerateTEeam";



const newGame = {
  league: "German National League",
  round: "1",
  opponent: "",
  venue: "",
  startTime: "",
  numberOfPlayers: "12",
};

const GameForm = ({ mode, game, togglePageMode }) => {
  const [values, handleChange, handleSubmit, error] = useForm({ ...(game || newGame) }, mode);

  const submitHandler = (e) => {
    handleSubmit(e);
    togglePageMode();
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
          {mode === "newGame" && (
            <StyledButton onClick={togglePageMode}>Cancel</StyledButton>
          )}
          <StyledButton className="submit" type="submit">
            Submit
          </StyledButton>
        </div>
      </StyledForm>
      {error && <h4 className="error">error: {error}</h4>}
    </div>
  );
};

export default GameForm;
