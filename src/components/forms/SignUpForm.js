import React from "react";
import axios from "axios";
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
          Email *
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="password">
          Password *
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="firstName">
          First Name *
          <input
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="lastName">
          Last Name *
          <input
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="dateOfBirth">
          Date of birth *
          <input
            type="date"
            name="dateOfBirth"
            value={values.dateOfBirth}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="nationality">
          Nationality *
          <input
            type="text"
            name="nationality"
            value={values.nationality}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="team">
          Team *
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
          Club Role *
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

        <button type="submit">Create</button>
      </StyledForm>
    </div>
  );
};

export default SignUpForm;
