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


    return (

        <div>
            <StyledForm onSubmit={handleSubmit}>
                <label htmlFor="email"><h4>EMAIL</h4>
                    <input type="text" name="email" placeholder="email" value={values.email} onChange={handleChange} /></label>
                <label htmlFor="password"><h4>PASSWORD</h4>
                    <input type="password" name="password" placeholder="password" value={values.password} onChange={handleChange} /></label>
                <button type="submit">Login</button>
            </StyledForm>


        </div>
    )
}

export default LoginForm