import React, { useContext, useReducer } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { COLOR, textContrast } from "../Context/constants";
import { GlobalContext } from "../Context/GlobalContext";
import { logOut } from "./forms/utils/useDelete";
import { FontStyles } from '../Context/constants';
import GlobalStyle from '../FontStyles';
import gameChangerBlack from "../images/game-changer-black.png"


const StyledNavbar = styled.nav`
    width: 100vw;
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
    padding:5px;
    background-color: rgb(245, 245, 245, 0.3);
    border-bottom: 3px solid black;
    a{
      text-decoration:none;
      font-size:1.6rem;
      color:black;
      font-family: 'Freshman', sans-serif;
      letter-spacing:0.15rem;      
      margin-left:25px;
      margin-right: 10px;
      &:hover {
        color:silver;
    };
    }
    span {
      display: flex;
      justify-content: right;
      align-items: center;
    }
`

const NavBar = () => {
  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null

  return (
    <StyledNavbar className="font-face-fm">
      <img style={{height:35}}  src={gameChangerBlack} alt="GAME CHANGER"/>
      <span>
      {user ? <NavLink to={`/profile/${user._id}`}>PROFILE</NavLink> : null}
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/register">SIGN UP</NavLink>
      <NavLink to="/games">GAMES</NavLink>
      {user ? <NavLink onClick={logOut}>LOGOUT</NavLink> : null}
      </span>
    </StyledNavbar>
  )
}

export default NavBar
