import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
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
      {JSON.stringify(userDetails)}
      <h2>{userDetails.firstName} {userDetails.lastName}</h2>
      <p>{userDetails.email || "dasd"}</p>




    </div>
  )
}

export default ProfilePage