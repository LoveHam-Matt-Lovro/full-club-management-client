import React from "react";
import { useState } from "react";
import { StyledForm } from "../styled/StyledForm";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "../styled/StyledButton";
import { useForm } from "./utils/useForm";

const backup = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  team: "Men",
  dateOfBirth: "",
  nationality: "",
  role: "player",
};

const SignUpForm = ({ user, mode }) => {
  const [values, handleChange, handleSubmit] = useForm(
    { ...(user || backup) },
    mode,
    null
  );

  const [error, setError] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

  const checkErrors = () => {
    setError("");
    if ((mode = "newUser")) {
      if (
        values.email === "" ||
        values.password === "" ||
        values.firstName === "" ||
        values.lastName === "" ||
        values.dateOfBirth === ""
      ) {
        setError("All fields are required");
        return;
      }
      if (!emailRegex.test(values.email)) {
        setError("Email address must be valid");
        return;
      }
      if (values.firstName.length < 2) {
        setError("First name must be at least 2 characters");
        return;
      }
      if (values.lastName.length < 2) {
        setError("Last name must be at least 2 characters");
        return;
      }
      if (!passwordRegex.test(values.password)) {
        setError(
          "Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter."
        );
        return;
      }
    }
    return;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    checkErrors();
    console.log("Error:", error);
    if (error) {
      return;
    } else {
      handleSubmit(e);
    }
  };

  return (
    <div>
      <StyledForm signUp onSubmit={handleSubmit}>
        <label htmlFor="email">
          EMAIL
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="password">
          PASSWORD
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="firstName">
          FIRST NAME
          <input
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="lastName">
          LAST NAME
          <input
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="dateOfBirth">
          DATE OF BIRTH
          <input
            type="date"
            name="dateOfBirth"
            value={values.dateOfBirth}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="nationality">
          NATIONALITY
          <input
            type="text"
            name="nationality"
            value={values.nationality}
            onChange={handleChange}
            default="Australian"
          />
        </label>

        <label htmlFor="team">
          TEAM
          <select
            type="text"
            name="team"
            value={values.team}
            onChange={handleChange}
            default="Men"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </select>
        </label>

        <label htmlFor="role">
          CLUB ROLE
          <select
            type="text"
            name="role"
            value={values.role}
            onChange={handleChange}
            default="player"
          >
            <option value="player">Player</option>
            <option value="coach">Coach</option>
          </select>
        </label>

        <StyledButton className="submit" type="submit">
          Submit
        </StyledButton>
      </StyledForm>
      {error && <h4 className="error">error: {error}</h4>}
    </div>
  );
};

export default SignUpForm;
