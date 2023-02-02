import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import PlayerDetailsForm from "../components/forms/PlayerDetailsForm";
import { GlobalContext } from "../Context/GlobalContext";
import axios from "axios";
import styled from "styled-components";
import RadarPlayerGraph from "../components/graphs/RadarPlayerGraph";
import {
  SmallStyledDiv,
  SmallSyledDiv,
} from "../components/styled/SmallStyledDiv";

const ProfilePage = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  const { user, setUser } = useContext(GlobalContext);
  const { userId } = useParams();
  const [mode, setMode] = useState("view");
  const [isLoading, setIsLoading] = useState(true);

  const userDetails = userId === loggedInUser._id ? loggedInUser : user;

  const toggleMode = () => {
    if (mode === "view") {
      setMode("edit");
    } else {
      setMode("view");
    }
  };

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/profile/${userId}`;

    axios
      .get(url)
      .then((response) => {
        setUser(response.data);
        setIsLoading(false);
      })
      .catch(() => {});
  }, []);

  return (
    <div>
      <SmallStyledDiv profile>
        <h2>
          Profile of {user.firstName} {user.lastName}
        </h2>
        <div className="flexRowProfile">
          <div className="flexColumnProfile">
            <p>
              <b>Club Role: </b> {user.role}
            </p>
            <p>
              <b>Email: </b>
              {user.email}
            </p>
            <p>
              <b>Team: </b>
              {user.team}
            </p>
            <p>
              <b>Nationality: </b>
              {user.nationality}
            </p>
            <p>
              <b>D.O.B: </b>
              {user.dateOfBirth}
            </p>
          </div>
          <div className="flexColumn" Profile>
            <h3>Playing Stats</h3>
            <ul>
              <li>Kick - {user.kickingStat}</li>
              <li>Handball - {user.handballingStat}</li>
              <li>Mark - {user.markingStat}</li>
              <li>Tackle - {user.tacklingStat}</li>
              <li>Speed - {user.speedStat}</li>
            </ul>
          </div>
          <div className="flexRowProfile">
            <RadarPlayerGraph user={user} />
          </div>
        </div>
        <div className="flexRowProfile">
          <div className="flexColumnProfile">
            <h3>About {user.firstName}</h3>
            <p>{user.aboutMe}. </p>
            <h3>Favourite Football Memory</h3>
            <p>{user.favouriteFootballMemory}</p>
            <p>
              <b>Supports: </b> {user.favouriteAFLTeam}
            </p>
          </div>
        </div>
      </SmallStyledDiv>
      <PlayerDetailsForm mode="editUser" user={user} />
    </div>
  );
};

export default ProfilePage;
