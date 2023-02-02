import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { GlobalContext } from "../Context/GlobalContext";
import { logOut } from "./forms/utils/useDelete";
import gameChangerBlack from "../images/game-changer-black.png";

const StyledNavbar = styled.nav`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  padding: 10px;
  background-color: rgb(245, 245, 245, 0.3);
  border-bottom: 3px solid black;
  a {
    text-decoration: none;
    font-size: 1rem;
    color: black;
    font-family: "Freshman", Arial;
    letter-spacing: 0.15rem;
    margin-left: 25px;
    margin-right: 10px;
    &:hover {
      color: silver;
    }
  }
  span {
    display: flex;
    justify-content: right;
    align-items: center;
  }
`;

const NavBar = () => {
  const userStorage = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const { user, setUser } = useContext(GlobalContext);

  return (
    <StyledNavbar className="font-face-fm">
      <img style={{ height: 25 }} src={gameChangerBlack} alt="GAME CHANGER" />

      <span>
        {userStorage ? (
          <NavLink to={`/profile/${userStorage._id}`}>PROFILE</NavLink>
        ) : null}
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/register">SIGN UP</NavLink>
        <NavLink to="/games">GAMES</NavLink>
        <NavLink to="/" onClick={logOut}>
          LOGOUT
        </NavLink>

        <p>{userStorage?.role || ""}</p>
      </span>
    </StyledNavbar>
  );
};

export default NavBar;
