import { useState } from "react";
import axios from "axios";


export const useForm = (initialValues, mode, element) => {
    const [values, setValues] = useState(initialValues);
    const baseUrl = "http://127.0.0.1:5005"

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        let axiosFunction
        let setValuesFunction

        switch (mode) {
            case "editGame":
                axiosFunction = axios.put(baseUrl + `/games/${element._id}/edit`, values)
                setValuesFunction = console.log(values)
                break;
            case "newGame":
                axiosFunction = axios.post(baseUrl + '/games/create', values)
                setValuesFunction = setValues(initialValues)
                break;
            default:
                break;
        }

        axiosFunction.then(() => setValuesFunction()).catch(err => console.log(err))
    }





    return [values, handleChange, handleSubmit];
}

