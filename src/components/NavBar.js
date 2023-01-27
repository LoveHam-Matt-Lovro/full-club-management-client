import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { COLOR, textContrast } from "../Context/constants";


const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    padding:17px;
    background-color: ${COLOR.background};
    border-bottom: 4px solid #222;
    
 

`



const NavBar = () => {
  return (
    <StyledNavbar>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">SignUP</NavLink>
      <NavLink to="/games">Games</NavLink>
    </StyledNavbar>
  )
}

export default NavBar