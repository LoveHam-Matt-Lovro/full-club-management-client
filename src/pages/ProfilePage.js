
import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import PlayerDetailsForm from '../components/forms/PlayerDetailsForm';
import { GlobalContext } from "../Context/GlobalContext";


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

  // useEffect(() => {

  //   axios.get(`http://127.0.0.1:5005/user/${userId}`)
  //     .then((response) => { })
  //     .catch(() => { })

  // }, [])

  return (
    <div>
      <h1>Profile Page</h1>

      <h2>{userDetails.firstName} {userDetails.lastName}</h2>
      <p>{userDetails.email}</p>
      <p>{userDetails.team}</p>
      <p>{userDetails.role}</p>
      <p>{userDetails.nationality}</p>
      <p>{userDetails.dateOfBirth}</p>
      <p>{userDetails.favouriteAFLTeam}</p>
      <p>{userDetails.favouriteFootballMemory}</p>
      <p>{userDetails.aboutMe}</p>
      <ul>
        <li>{userDetails.kickingStat}</li>
        <li>{userDetails.handballingStat}</li>
        <li>{userDetails.markingStat}</li>
        <li>{userDetails.speedStat}</li>
        <li>{userDetails.tacklingStat}</li>
      </ul>

      <PlayerDetailsForm />






    </div>
  )
}

export default ProfilePage