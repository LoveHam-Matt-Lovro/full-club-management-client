import React, { useContext, useReducer } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { COLOR, textContrast } from "../Context/constants";
import { GlobalContext } from "../Context/GlobalContext";
import { logOut } from "./forms/utils/useDelete";
import { FontStyles } from '../Context/constants';


const StyledNavbar = styled.nav`
    width: 100vw;
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
    padding:5px;
    background-color: rgb(245, 245, 245, 0.3);
    border-bottom: 3px solid black;
    a{
      color:black;
      font-family: TheyPerished, sans-serif;
      margin:0px;
      &:hover {
        color:silver;
        
    };
    }
`

const NavBar = () => {
  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null

  return (
    <StyledNavbar>
      {user ? <NavLink to={`/profile/${user._id}`}> {`Hello ${user.firstName}`} </NavLink> : null}
      <NavLink to="/"><h2>HOME</h2></NavLink>
      <NavLink to="/register"><h2>SIGN UP</h2></NavLink>
      <NavLink to="/games"><h2>GAMES</h2></NavLink>
      {user ? <NavLink onClick={logOut}>Logout</NavLink> : null}
    </StyledNavbar>
  )
}

export default NavBar
