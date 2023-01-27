import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { StyledForm } from '../styled/StyledForm'
import { useNavigate } from 'react-router-dom'




import { useForm } from "./utils/useForm";

const backup = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    team: "",
    dateOfBirth: "",
    nationality: "",
    role: ""
}

const SignUpForm = ({ user, mode }) => {

    const [values, handleChange, handleSubmit] = useForm({ ...user || backup }, mode, null);

    return (

        <div>
            <StyledForm onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={values.email} onChange={handleChange} />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={values.password} onChange={handleChange} />

                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" value={values.firstName} onChange={handleChange} />

                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" value={values.lastName} onChange={handleChange} />

                <label htmlFor="team">Team</label>
                <input type="text" name="team" value={values.team} onChange={handleChange} />

                <label htmlFor="dateOfBirth">Date of birth</label>
                <input type="datetime-local" name="dateOfBirth" value={values.dateOfBirth} onChange={handleChange} />

                <label htmlFor="nationality">Nationality</label>
                <input type="text" name="nationality" value={values.nationality} onChange={handleChange} />



                selected {values.role}
                <label htmlFor="role">Player
                    <input type="radio" name="role" value="player" onClick={handleChange} /></label>
                <label htmlFor="role">Coach
                    <input type="radio" name="role" value="coach" onClick={handleChange} /> </label>


                <button type="submit">Create</button>
            </StyledForm>
        </div>
    )
}

export default SignUpForm