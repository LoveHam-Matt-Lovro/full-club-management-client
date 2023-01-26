import React from 'react'
import axios from 'axios'
import { useState } from 'react'


const LoginForm = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/login', values)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="email" value={values.email} onChange={handleChange} />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" value={values.password} onChange={handleChange} />
                <button type="submit">Login</button>
            </form>


        </div>
    )
}

export default LoginForm