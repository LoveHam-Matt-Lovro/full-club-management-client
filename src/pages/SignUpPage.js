import React from 'react'
import SignUpForm from '../components/forms/SignUpForm'

const SignUpPage = () => {
  return (
    <div>
      <h1>Welcome to the Club</h1>
      <h4>Fields * are required</h4>
      <SignUpForm mode="newUser" />
    </div>
  )
}

export default SignUpPage