import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from "../../../Context/GlobalContext"


export const useForm = (initialValues, mode, element) => {
    const [values, setValues] = useState(initialValues);
    const { user, setUser, games, setGames, } = useContext(GlobalContext)
    const baseUrl = process.env.REACT_APP_API_URL

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
        console.log(e)
        e.preventDefault()
        let axiosFunction
        let secondaryFunction



        switch (mode) {

            case "loginUser":
                axiosFunction = axios.post(baseUrl + "/auth/login", values)
                secondaryFunction = (response) => {
                    console.log("LOGIN", response.data)
                    localStorage.setItem('token', response.data.authToken)
                    localStorage.setItem('user', JSON.stringify(response.data.user))
                    setUser(response.data.user)
                    navigate('/games')
                }
                break;

            case "newUser":
                axiosFunction = axios.post(baseUrl + "/auth/signup", values, header)
                secondaryFunction = () => {
                    navigate("/games")
                }
                break;
            case "editUser":
                //TODO: test this
                axiosFunction = axios.put(baseUrl + `/profile/${element._id}`, values, header)

                secondaryFunction = () => {
                    console.log("edited user")
                }
                break;

            case "newGame":
                axiosFunction = axios.post(baseUrl + '/games', values, header)
                secondaryFunction = (newGame) => {
                    setValues(initialValues)
                    window.location.reload()

                }

                break;
            case "editGame":
                //TODO: test this
                axiosFunction = axios.put(baseUrl + `/games/${element._id}/`, values, header)

                secondaryFunction = () => {
                    window.location.reload()
                }

                break;
            case "newReview":
                axiosFunction = console.log(axios.post(baseUrl + `games/${element._id}/review`, values, header))
                secondaryFunction = (newReview) => {
                    setValues(initialValues)
                    window.location.reload()
                }

                break;
            case "editReview":
                axios.put(baseUrl + `games/${element._id}/review`, values, header)
                secondaryFunction = () => {

                }
                break;


            default:
                console.log("no mode selected")
                break;
        }

        axiosFunction.then((values) => {
            console.log('we are inside the response for the first one')
            secondaryFunction(values)
        }).catch(err => console.log(err))

    }




    return [values, handleChange, handleSubmit];
}

