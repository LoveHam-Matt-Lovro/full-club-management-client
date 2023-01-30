import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from "../../../Context/GlobalContext"


export const useForm = (initialValues, mode, element) => {
    const [values, setValues] = useState(initialValues);
    const { user, setUser } = useContext(GlobalContext)
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
        let redirect
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
                axiosFunction = axios.post(baseUrl + "/auth/signup", values)
                secondaryFunction = () => {
                    setValues(initialValues)
                    navigate("/")
                }
                break;
            case "editUser":
                //TODO: insert logic
                break;

            case "newGame":
                axiosFunction = axios.post(baseUrl + '/games', values, header)
                secondaryFunction = () => {
                    setValues(initialValues)
                    navigate("/games")
                }
                // setValuesFunction = setValues(initialValues)
                break;
            case "editGame":
                axiosFunction = axios.put(baseUrl + `/games/${element._id}/`, values, header)

                // setValuesFunction = console.log(values)
                break;
            case "newReview":
                axios.post(baseUrl + `games/${element._id}/review`, values, header)
                break;
            case "editReview":
                //TODO: insert logic
                break;


            default:
                break;
        }

        axiosFunction.then((values) => { secondaryFunction(values) }).catch(err => console.log(err))

    }




    return [values, handleChange, handleSubmit];
}

