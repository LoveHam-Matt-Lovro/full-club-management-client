import React from 'react'
import LoginForm from '../components/forms/LoginForm'
import gameChangerLogo from "../images/gamechanger-logo.png"
import gameChangerGreen from "../images/gamechanger-logo-green.png"
import { COLOR } from '../Context/constants';
import styled from 'styled-components';
import {SmallStyledDiv} from '../components/styled/SmallStyledDiv.js'
import Heading from '../components/Heading';

const HomePage = () => {
  const isLoggedIn = localStorage.getItem("token") ? true : false;

  return (
    <>
      {isLoggedIn ? (
        <h1> Welcome to the club </h1>
      ) : (
        <>
          <Heading />
          <LoginForm mode="loginUser" />
        </>
      )}
    </>
  );
};

export default HomePage;