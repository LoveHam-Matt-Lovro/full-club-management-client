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
          <h4>EMAIL</h4>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="password">
        <h4>PASSWORD</h4>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="firstName">
        <h4>FIRST NAME</h4>
          <input
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="lastName">
        <h4>LAST NAME</h4>
          <input
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="dateOfBirth">
          <h4>DATE OF BIRTH</h4>
          <input
            type="date"
            name="dateOfBirth"
            value={values.dateOfBirth}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="nationality">
        <h4>NATIONALITY</h4>
          <input
            type="text"
            name="nationality"
            value={values.nationality}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="team">
          <h4>TEAM</h4>
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
          <h4>CLUB ROLE</h4>
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
