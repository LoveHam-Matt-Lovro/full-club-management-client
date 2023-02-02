

const isCoach = () => {

    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
    const role = user.role
    return role.toLowerCase() === "coach";
  
}

export default isCoach
