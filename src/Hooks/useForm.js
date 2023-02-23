import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";
import { baseUrl, header } from "../utils/reqData";
import { putTokenInStorage, putUserInStorage } from "../utils/localStorage";


export const useForm = (initialValues, mode, element) => {
    const [values, setValues] = useState(initialValues);
    const { isLoading, setIsLoading, fetchGames, fetchUser, fetchSingleGame } = useContext(GlobalContext);
    const navigate = useNavigate();


    const handleChange = (e) => {
        setValues((values) => {
            return { ...values, [e.target.name]: e.target.value };
        });
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        let axiosFunction;
        let secondaryFunction;
        setIsLoading(true);


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
                secondaryFunction = () => {
                    navigate("/");
                };
                break;
            case "editUser":
                //TODO: test this
                axiosFunction = axios.put(
                    baseUrl + `/profile/${element._id}`,
                    values,
                    header
                );
                secondaryFunction = () => {
                    fetchUser();
                };

                break;

            case "newGame":
                axiosFunction = axios.post(baseUrl + "/games", values, header);
                secondaryFunction = (newGame) => {
                    fetchGames();
                };


                break;
            case "editGame":
                //TODO: test this
                axiosFunction = axios.put(
                    baseUrl + `/games/${element._id}/`,
                    values,
                    header
                );

                secondaryFunction = () => {
                    fetchSingleGame(element._id)
                };

                break;
            case "newReview":
                axiosFunction = axios.post(
                    baseUrl + `/games/${element._id}/review`,
                    values,
                    header
                );
                secondaryFunction = (newReview) => {
                    setValues(initialValues);
                    window.location.reload();
                };

                break;
            case "editReview":
                axiosFunction = axios.put(baseUrl + `/games/${element._id}/review`, values, header);
                secondaryFunction = () => { };
                break;

            default:
                break;
        }

        axiosFunction
            .then((values) => {
                secondaryFunction(values);
                setIsLoading(false);
                console.log("end", isLoading);
            })
            .catch((err) => console.log(err));
    };

    return [values, handleChange, handleSubmit];
};
