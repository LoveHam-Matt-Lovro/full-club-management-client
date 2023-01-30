import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from "../../../Context/GlobalContext"


export const useForm = (initialValues, mode, element) => {
    const [values, setValues] = useState(initialValues);
    const { user, setUser, games, setGames, } = useContext(GlobalContext)
    const baseUrl = "http://127.0.0.1:5005"
    const navigate = useNavigate();
    const storedToken = localStorage.getItem('token');
    const header = {
        headers:
            { Authorization: `Bearer ${storedToken}` }
    }

    const handleChange = (e) => {
        setValues((values) => { return { ...values, [e.target.name]: e.target.value } });
        console.log(values)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        let axiosFunction
        let secondaryFunction



        switch (mode) {

            case "loginUser":
                axiosFunction = axios.post(baseUrl + "/auth/login", values)
                secondaryFunction = (response) => {
                    localStorage.setItem('token', response.data.authToken)
                    localStorage.setItem('user', JSON.stringify(response.data.user))
                    setUser(response.data.user)
                    navigate('/games')
                }


                break;

            case "newUser":
                axiosFunction = axios.post(baseUrl + "/auth/signup", values, header)
                secondaryFunction = () => {
                    navigate("/")
                }
                break;
            case "editUser":
                //TODO: test this
                axiosFunction = axios.put(baseUrl + `/users/${element._id}/`, values, header)
                secondaryFunction = () => {
                    console.log("edited user")
                }
                break;

            case "newGame":
                axiosFunction = axios.post(baseUrl + '/games', values, header)
                secondaryFunction = (newGame) => {
                    // console.log("newGame", newGame)
                    // console.log("values", values)
                    // setGames(games => [...games, values])
                    setValues(initialValues)
                    window.location.reload()

                }

                break;
            case "editGame":
                //TODO: test this
                axiosFunction = axios.put(baseUrl + `/games/${element._id}/`, values, header)
                console.log(axiosFunction())
                secondaryFunction = () => {
                    // setValues(initialValues)
                    // navigate(`/games/${element._id}/`)
                }

                break;
            case "newReview":
                axios.post(baseUrl + `games/${element._id}/review`, values, header)
                secondaryFunction = () => {
                    setValues(initialValues)
                    // navigate(`/games/${element._id}/`)
                }

                break;
            case "editReview":
                axios.put(baseUrl + `games/${element._id}/review`, values, header)
                secondaryFunction = () => {
                    // setValues(initialValues)
                    // navigate(`/games/${element._id}/`)
                }
                break;


            default:
                break;
        }

        axiosFunction.then((values) => {
            console.log("values111", values)
            secondaryFunction(values)
        }).catch(err => console.log(err))

    }




    return [values, handleChange, handleSubmit];
}

