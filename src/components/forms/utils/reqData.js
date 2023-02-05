const baseUrl = process.env.REACT_APP_API_URL;
const storedToken = localStorage.getItem("token");
const header = {
    headers: { Authorization: `Bearer ${storedToken}` },
};


// export all variables
export {
    baseUrl,
    header,
    storedToken,
};