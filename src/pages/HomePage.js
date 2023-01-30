import React from 'react'
import LoginForm from '../components/forms/LoginForm'
import gameChangerLogo from "../images/gamechanger-logo.png"
import gameChangerGreen from "../images/gamechanger-logo-green.png"
import { COLOR } from '../Context/constants';
import styled from 'styled-components';

const HomePage = () => {
  const isLoggedIn = localStorage.getItem("token") ? true : false;

  const StyledH3 = styled.h3`
    font-family:"Helectiva";
    color: ${COLOR.light};
    
    `


  return (
    <div>
      {isLoggedIn ? <h1> Welcome to the club </h1> 
      : <div>
         
          <img src={gameChangerLogo} alt="GAME CHANGER"/>
          <StyledH3>THE FULL CLUB MANAGEMENT APP</StyledH3>
          <LoginForm mode="loginUser" />
        </div>}

    </div>
  )
}

export default HomePage