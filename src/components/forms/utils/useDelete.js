import axios from 'axios'
import { GlobalContext } from "../../../Context/GlobalContext";
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'



export const useDeleteGame = (url, id, navigator) => {
    const { games, setGames } = useContext(GlobalContext)
    const navigate = useNavigate()
    const handleDelete = () => {
        axios.delete(`${url}/${id}`)
            .then((response) => {
                const filteredGames = games.filter((game) => game._id !== response.data._id)
                setGames(filteredGames)
                if (navigator) {
                    navigate(navigator)
                }
                window.location.reload()

            })
            .catch((error) => {
                console.log(error)
            }
            )

    }
    return handleDelete
}


export const useDeleteReview = (url, id) => {
    const { review, setReviews } = useContext(GlobalContext)
    const handleDelete = () => {
        axios.delete(`${url}/${id}`)
            .then((response) => {
                const filteredReviews = review.filter((review) => review._id !== response.data._id)
                setReviews(filteredReviews)
                window.location.reload()
            }
            )
            .catch((error) => {
                console.log(error)
            }
            )

    }
    return handleDelete
}


export const logOut = () => {
    localStorage.clear();
    window.location.reload();
}



export const useDeleteUser = (url, id) => {
    const { users, setUsers } = useContext(GlobalContext)
    const handleDelete = () => {
        axios.delete(`${url}/${id}`)
            .then((response) => {
                //delete from context
                const filteredUsers = users.filter((user) => user._id !== response.data._id)
                setUsers(filteredUsers)
                logOut()

            }
            )
            .catch((error) => {
                console.log(error)
            }
            )

    }
    return handleDelete
}