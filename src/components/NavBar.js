import React, { useContext, useReducer } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { COLOR, textContrast } from "../Context/constants";
import { GlobalContext } from "../Context/GlobalContext";



const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    padding:17px;
    background-color: ${COLOR.background};
    border-bottom: 4px solid #222;
    
 

`



const NavBar = () => {
  // const { test, games, user, setUser } = useContext(GlobalContext)
  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null


  // console.log(user);

  return (
    <StyledNavbar>

      {
        // JSON.stringify(games)
      }
      {user ? <NavLink to={`/profile/${user._id}`}> {`Hello ${user.firstName}`} </NavLink> : <NavLink to="/">Login</NavLink>}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">SignUP</NavLink>
      <NavLink to="/games">Games</NavLink>
      {user ? <NavLink to="/auth/logout">Logout</NavLink> : null}
    </StyledNavbar>
  )
}

export default NavBar

// const user = localStorage.getItem("token")
// Hello  {user || "user"}