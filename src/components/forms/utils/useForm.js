import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'


export const useForm = (initialValues, mode, element) => {
    const [values, setValues] = useState(initialValues);
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
        // let setValuesFunction


        switch (mode) {
            case "newUser":
                axiosFunction = axios.post(baseUrl + "/auth/signup", values)
                redirect = navigate("/")
                // setValuesFunction = setValues(initialValues)
                break;
            case "editUser":
                //TODO: insert logic
                break;

            case "newGame":
                axiosFunction = axios.post(baseUrl + '/games', values, header)
                redirect = navigate("/games")
                // setValuesFunction = setValues(initialValues)
                break;
            case "editGame":
                axiosFunction = axios.put(baseUrl + `/games/${element._id}/`, values, header)

                // setValuesFunction = console.log(values)
                break;
            case "newReview":
                //TODO: insert logic
                break;
            case "editReview":
                //TODO: insert logic
                break;


            default:
                break;
        }

        // axiosFunction.then(() => setValuesFunction()).catch(err => console.log(err))
        axiosFunction.then((values) => redirect).catch(err => console.log(err))
        // navigate("/")
    }




    return [values, handleChange, handleSubmit];
}

