

const isCoach = () => {

    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
    const role = user.role

    if (role === Coach) {
        return true;
    }
}

export default isCoach
