import React from 'react'
import SignUpForm from '../components/forms/SignUpForm'
import { SmallStyledDiv } from '../components/styled/SmallStyledDiv'

const SignUpPage = () => {
  return (
    <div>
      <SmallStyledDiv><h1 style={{"font-size":50}}>WELCOME TO THE CLUB</h1></SmallStyledDiv>
      
      <SignUpForm mode="newUser" />
    </div>
  )
}

export default SignUpPage