
const putTokenInStorage = (response) => {
    localStorage.setItem("token", response.data.authToken);
}

const putUserInStorage = (response) => {
    localStorage.setItem("user", JSON.stringify(response.data.user));
}

const getStoredUser = () => localStorage.getItem("user")


export {
    putTokenInStorage,
    putUserInStorage,
    getStoredUser,
}