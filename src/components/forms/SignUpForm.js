import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { StyledForm } from '../styled/StyledForm'


const SignUpForm = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        team: "",
        dateOfBirth: "",
        nationality: ""
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5005/auth/signup', values)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })
    }




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

                <button type="submit">Create</button>
            </StyledForm>
        </div>
    )
}

export default SignUpForm