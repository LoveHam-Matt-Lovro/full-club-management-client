import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../Context/GlobalContext";

export const useForm = (initialValues, mode, element) => {
    const [values, setValues] = useState(initialValues);
    const { user, setUser, games, setGames } = useContext(GlobalContext);
    const baseUrl = process.env.REACT_APP_API_URL;

    const navigate = useNavigate();
    const storedToken = localStorage.getItem("token");
    const header = {
        headers: { Authorization: `Bearer ${storedToken}` },
    };

    const handleChange = (e) => {
        setValues((values) => {
            return { ...values, [e.target.name]: e.target.value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let axiosFunction;
        let secondaryFunction;

        switch (mode) {
            case "loginUser":
                axiosFunction = axios.post(baseUrl + "/auth/login", values);
                secondaryFunction = (response) => {
                    localStorage.setItem("token", response.data.authToken);
                    localStorage.setItem("user", JSON.stringify(response.data.user));
                    setUser(response.data.user);
                    // alert("Welcome back " + response.data.user.role + "!")
                    navigate("/games");
                };
                break;

            case "logoutUser":
                secondaryFunction = (response) => {
                    localStorage.removeItem("token", response.data.authToken);
                    navigate("");
                    setUser(null);
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
                    window.location.reload();
                };

                break;

            case "newGame":
                axiosFunction = axios.post(baseUrl + "/games", values, header);
                secondaryFunction = (newGame) => {
                    setValues(initialValues);
                    window.location.reload();
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
                    window.location.reload();
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
                axiosFunction = axios.put(
                    baseUrl + `/games/${element._id}/review`,
                    values,
                    header
                );
                secondaryFunction = () => { };
                break;

            default:
                break;
        }

        axiosFunction
            .then((values) => {
                secondaryFunction(values);
            })
            .catch((err) => console.log(err));
    };

    return [values, handleChange, handleSubmit];
};
