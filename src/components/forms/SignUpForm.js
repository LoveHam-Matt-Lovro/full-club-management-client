import React from "react";

import { useState } from "react";
import { StyledForm } from "../styled/StyledForm";
import { useNavigate } from "react-router-dom";

import { useForm } from "./utils/useForm";

const backup = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  team: "",
  dateOfBirth: "",
  nationality: "",
  role: "",
};

const SignUpForm = ({ user, mode }) => {
  const [values, handleChange, handleSubmit] = useForm(
    { ...(user || backup) },
    mode,
    null
  );

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
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
          />
        </label>

        <label htmlFor="team">
          TEAM
          <select
            type="text"
            name="team"
            value={values.team}
            onChange={handleChange}
          >
            <option value="mens">Mens</option>
            <option value="womens">Womens</option>
          </select>
        </label>

        <label htmlFor="role">
          CLUB ROLE
          <select
            type="text"
            name="role"
            value={values.role}
            onChange={handleChange}
          >
            <option value="player">Player</option>
            <option value="coach">Coach</option>
            <option value="boardMember">Board Member</option>
          </select>
        </label>

        <button type="submit">CREATE</button>
      </StyledForm>
    </div>
  );
};

export default SignUpForm;
