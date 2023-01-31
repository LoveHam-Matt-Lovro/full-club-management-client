import React from 'react'

import { useState } from 'react'
import { StyledForm } from '../styled/StyledForm'
import { useNavigate } from 'react-router-dom'
import { useForm } from "./utils/useForm";

const loginData = {
    email: '',
    password: ''
}



const LoginForm = ({ mode }) => {
    const [values, handleChange, handleSubmit] = useForm(loginData, mode, null);
    const navigate = useNavigate();

    return (

        <div>
            <StyledForm onSubmit={handleSubmit}>
                <label htmlFor="email">Email
                    <input type="text" name="email" placeholder="email" value={values.email} onChange={handleChange} /></label>
                <label htmlFor="password">Password
                    <input type="password" name="password" placeholder="password" value={values.password} onChange={handleChange} /></label>
                <button type="submit">Login</button>
            </StyledForm>


        </div>
    )
}

export default LoginForm