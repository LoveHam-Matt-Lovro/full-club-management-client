import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";
import { baseUrl, header } from "../utils/reqData";
import { putTokenInStorage, putUserInStorage } from "../utils/localStorage";
import { checkFormErrors } from "../components/forms/formErrors";
/**
 * 
 * @param {*} initialValues - initial values for form inputs
 * @param {*} mode  - mode of form , used in switch statement to determine axios function and secondary function
 * @param {*} parentID  -  id of parent object, also used in switch statement to determine axios function and secondary function
 * @returns   [values, handleChange, handleSubmit, errors]
 */

export const useForm = (initialValues, mode, parentID) => {
    const [values, setValues] = useState(initialValues);
    const { setIsLoading, fetchGames, fetchUser, fetchSingleGame } =
        useContext(GlobalContext);
    const [errors, setErrors] = useState(null);
    const navigate = useNavigate();

    // handles change in form inputs
    const handleChange = (e) => {
        setValues((values) => {
            return { ...values, [e.target.name]: e.target.value };
        });
    };


    // submit and error handling
    const handleSubmit = (e) => {
        e.preventDefault();
        let axiosFunction;
        let secondaryFunction;
        setIsLoading(true);
        // based on mode, different axios and  secondary functions are called 
        switch (mode) {
            case "loginUser":
                axiosFunction = axios.post(baseUrl + "/auth/login", values);
                secondaryFunction = (response) => {
                    putTokenInStorage(response);
                    putUserInStorage(response);
                    fetchUser();
                    navigate("/games");
                };
                break;

            case "newUser":
                axiosFunction = axios.post(baseUrl + "/auth/signup", values, header);
                secondaryFunction = () => navigate("/");

                break;
            case "editUser":
                axiosFunction = axios.put(baseUrl + `/profile/${initialValues._id}`, values, header);
                secondaryFunction = () => { fetchUser(); };

                break;

            case "newGame":
                axiosFunction = axios.post(baseUrl + "/games", values, header);
                secondaryFunction = () => fetchGames()

                break;
            case "editGame":
                axiosFunction = axios.put(baseUrl + `/games/${initialValues._id}/`, values, header);
                secondaryFunction = () => fetchSingleGame(initialValues._id)


                break;
            case "newReview":
                axiosFunction = axios.post(baseUrl + `/games/${parentID}/review`, values, header);
                secondaryFunction = () => {
                    setValues(initialValues);
                    navigate(`/games/${parentID}/review`);
                };

                break;
            case "editReview":
                axiosFunction = axios.put(baseUrl + `/games/${parentID}/review`, values, header);
                secondaryFunction = (values) => {
                    setValues(values);
                    navigate(`/games/${parentID}/review`);
                };
                break;

            default:
                break;
        }

        // check for errors, if none, call axios function and secondary function
        const formErrors = checkFormErrors(values, mode);
        if (formErrors) {
            setErrors(formErrors);
            setIsLoading(false);
        } else {
            setErrors(null);
            axiosFunction
                .then((values) => {
                    secondaryFunction(values);
                    setIsLoading(false)
                })
                .catch((err) => console.log("Error: ", err));
        };
    }



    return [values, handleChange, handleSubmit, errors];
};
