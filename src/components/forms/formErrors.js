const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const checkFormErrors = (values, mode) => {
    console.log("checkFormErrors", values, mode);
    switch (mode) {
        case "loginUser":
            return loginErrors(values);
        case "newUser":
            return newUserErrors(values);
        case "editUser":
            return editUserErrors(values);
        case "newGame":
            return newGameErrors(values);
        case "editGame":
            return editGameErrors(values);
        case "newReview":
            return newReviewErrors(values);
        case "editReview":
            return editReviewErrors(values);
        default:
            return false;
    }
};

const newGameErrors = (values) => {
    if (values.opponent === "" || values.venue === "" || values.startTime === "" || values.numberOfPlayers === "" || values.round === "") {
        return "All fields are required";
    }
    if (values.round < 1) {
        return "Round must be greater than 0";
    }
    if (values.numberOfPlayers % 3 !== 0) {
        return "Number of players must be a multiple of 3";
    }
    if (values.numberOfPlayers < 3 || values.numberOfPlayers > 18) {
        return "Number of players must be greater than 3 and less than 18";
    }

    return false;
};

const loginErrors = (values) => {
    if (values.email === "" || values.password === "") {
        return "All fields are required";
    }

    if (!emailRegex.test(values.email)) {
        return "Email address must be valid";
    }
    if (values.password.length < 6) {
        return "Password must be at least 6 characters";
    }

    return false;
};

const newUserErrors = (values) => {

    if (values.email === "" || values.password === "" || values.firstName === "" || values.lastName === "" || values.dateOfBirth === "") {
        return "All fields are required";
    }

    if (!emailRegex.test(values.email)) {
        return "Email address must be valid";
    }
    if (values.firstName.length < 2) {
        return "First name must be at least 2 characters";
    }



};

const editUserErrors = (values) => {

};

const editGameErrors = () => { };

const newReviewErrors = (values) => {
    if (values.review === "") {
        return "Review must not be empty";
    }

    return false;
};

const editReviewErrors = () => { };
