
import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import PlayerDetailsForm from '../components/forms/PlayerDetailsForm';
import { GlobalContext } from "../Context/GlobalContext";
import axios from 'axios';
import styled from 'styled-components';
import RadarPlayerGraph from '../components/graphs/RadarPlayerGraph';








const StyledBg = styled.div`
    
    width:70vw;
    max-height:50vh;  
    /* height: 100%; */
    background-color: rgb(245, 245, 245, 0.3);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;`





const ProfilePage = () => {
  const loggedInUser = JSON.parse(localStorage.getItem('user'));
  const { user, setUser } = useContext(GlobalContext)
  const { userId } = useParams();
  const [mode, setMode] = useState('view');
  const [isLoading, setIsLoading] = useState(true);

  const userDetails = userId === loggedInUser._id ? loggedInUser : user;



  const toggleMode = () => {
    if (mode === 'view') {
      setMode('edit');
    } else {
      setMode('view');
    }
  };





  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/profile/${userId}`
    console.log(url, "url")

    axios.get(url)
      .then((response) => {
        console.log(response.data, "--------response.data")
        setUser(response.data)
        setIsLoading(false)
      })
      .catch(() => { })

  }, [])

  return (
    <div>
      <RadarPlayerGraph user={user} />
      <StyledBg>
        <h1>Profile Page</h1>

        <h2>{user.firstName} {user.lastName}</h2>
        <p>{user.email}</p>
        <p>{user.team}</p>
        <p>{user.role}</p>
        <p>{user.nationality}</p>
        <p>{user.dateOfBirth}</p>
        <p>{user.favouriteAFLTeam}</p>
        <p>{user.favouriteFootballMemory}</p>
        <p>{user.aboutMe}</p>
        <ul>
          <li>{user.kickingStat}</li>
          <li>{user.handballingStat}</li>
          <li>{user.markingStat}</li>
          <li>{user.speedStat}</li>
          <li>{user.tacklingStat}</li>
        </ul>
      </StyledBg>
      <PlayerDetailsForm mode="editUser" user={user} />






    </div>
  )
}

export default ProfilePage