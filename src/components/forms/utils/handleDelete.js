import axios from 'axios'
import { GlobalContext } from "../../Context/GlobalContext";
import { useContext } from 'react'



export const useDelete = (url, id) => {
    const { games, setGames } = useContext(GlobalContext)
    const handleDelete = () => {
        axios.delete(`${url}/${id}`)
            .then((response) => {
                const filteredGames = games.filter((game) => game._id !== response.data._id)
                setGames(filteredGames)

            }
            )
            .catch((error) => {
                console.log(error)
            }
            )

    }
    return handleDelete
}