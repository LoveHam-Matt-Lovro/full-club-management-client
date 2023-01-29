import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from "../Context/GlobalContext";

const ProfilePage = () => {

    const {userId} = useParams();
    const [mode, setMode] = useState('view');
    const [isLoading, setIsLoading] = useState(true);

    const toggleMode = () => {
        if (mode === 'view') {
          setMode('edit');
        } else {
          setMode('view');
        }
      };

    useEffect(() => {

        axios.get(`http://127.0.0.1:5005/user/${userId}`)
        .then((response) => {  })
        .catch(() => {})

    }, [])

  return (
    <div>
        Profile Page




    </div>
  )
}

export default ProfilePage