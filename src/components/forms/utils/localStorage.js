
const putTokenInStorage = (response) => {
    localStorage.setItem("token", response.data.authToken);
}

const putUserInStorage = (response) => {
    localStorage.setItem("user", JSON.stringify(response.data.user));
}




export {
    putTokenInStorage,
    putUserInStorage,
}