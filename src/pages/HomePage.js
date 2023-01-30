import React from 'react'
import LoginForm from '../components/forms/LoginForm'

const HomePage = () => {
  const isLoggedIn = localStorage.getItem("token") ? true : false;
  return (
    <div>
      {isLoggedIn ? <h1> Welcome to the club </h1> : <LoginForm mode="loginUser" />}

    </div>
  )
}

export default HomePage