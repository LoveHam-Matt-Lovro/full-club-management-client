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

  const checkErrors = () => {
    setError("")
    if (mode="newUser"){
       
      
      
      if (values.password.length < 8) {
      setError("Password must be at least 8 characters");
      return true;
    }
    if (!values.email.includes("@")) {
      setError("Email must be valid");
      return true;
    }
    if (values.firstName.length < 2) {
      setError("First name must be at least 2 characters");
    }


    }
   
  }


  const submitHandler = (e) =>{
       e.preventDefault()
       checkErrors()
    console.log("Error:", error)
    if (error) {
        return }
   else {
    handleSubmit()
  }
  }


  
  return (
    <div>
      <StyledForm onSubmit={submitHandler}>
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
            <option value="board member">Board Member</option>
          </select>
        </label>
        
        <button type="submit">CREATE</button>
       
          </StyledForm>
          {error && <p style={{"color":"red"}}>error: {error}</p> }
    </div>
  );
};

export default SignUpForm;
