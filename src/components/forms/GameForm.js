import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { StyledForm } from '../styled/StyledForm'


const GameForm = ({ mode, game }) => {
    const [values, setValues] = useState({
        opponent: game?.opponent || "",
        venue: game?.venue || "",
        startTime: game?.startTime || "",
        numberOfPlayers: game?.numberOfPlayers || ""
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }

    const submitNewGame = () => axios.post('http://127.0.0.1:5005/games/create', values)
        .then((response) => {
            console.log(response)

            setValues({
                opponent: "",
                venue: "",
                startTime: "",
                numberOfPlayers: ""
            })
        })
        .catch((err) => {
            console.log(err)
        })



    //! not working
    const submitEditGame = () => {

        // const edittedGame = { opponent, venue, startTime, numberOfPlayers }

        // axios
        //   .put(`http://127.0.0.1:5005/games/${gameId}/edit`, edittedGame)
        //   .then(() => {
        //     navigate(`/games/${gameId}`);
        //   })
        //   .catch((err) => console.log(err));
    };




    const handleSubmit = (e) => {
        e.preventDefault()
        if (mode === "edit") {
            console.log("edit mode")
        } else {
            submitNewGame()
        }
        //TODO: implement function
        submitEditGame()

    }




    return (

        <div>
            <StyledForm onSubmit={handleSubmit}>
                <label htmlFor="opponent">Opponent</label>
                <input type="text" name="opponent" value={values.opponent} onChange={handleChange} />
                <label htmlFor="venue">Venue</label>
                <input type="text" name="venue" value={values.venue} onChange={handleChange} />
                <label htmlFor="startTime">Start Time</label>
                <input type="datetime-local" name="startTime" value={values.startTime} onChange={handleChange} />
                <label htmlFor="numberOfPlayers">Number of Players</label>
                <input type="text" name="numberOfPlayers" value={values.numberOfPlayers} onChange={handleChange} />
                <button type="submit">Create</button>
            </StyledForm>
        </div>
    )
}

export default GameForm