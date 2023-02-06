import React, { useContext } from "react";
import { StyledForm } from "../styled/StyledForm";
import { useForm } from "../../Hooks/useForm";
import { GlobalContext } from "../../Context/GlobalContext";



const storedUser = JSON.parse(localStorage.getItem("user"));
// const authorRole = storedUser.role.toLowerCase()

const backup = {
  text: "",
  gameId: "",
  author: storedUser,
  // authorRole: authorRole
};

const ReviewForm = ({ gameId, review, mode, game }) => {
  const { user } = useContext(GlobalContext);
  const [values, handleChange, handleSubmit] = useForm(
    { ...(review || backup), gameId, author: storedUser },
    mode,
    game
  );

  const isCoach = () => { return user?.role?.toLowerCase() === "coach" ? true : false; }

  return (
    <div>
      <p>{mode}</p>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="text">{isCoach() ? "Coach" : "Player"} Review</label>
        <input
          type="text"
          name="text"
          value={values.text}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </StyledForm>
    </div>
  );
};

export default ReviewForm;
