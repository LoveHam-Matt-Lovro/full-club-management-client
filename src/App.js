
import './App.css';
import {useState,useEffect} from "react"
import axios from "axios"
import GameForm from './components/forms/GameForm';


function App() {
  const [games,setGames] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {                                
    axios
      .get("http://localhost:5005/games")
      .then((response) => {
        console.log('response.data', response.data);
        setGames(response.data)
        setIsLoading(false)
      });
    
  }, [] ); 

  
if (isLoading) {
  return <div>...Loading</div>
} else 

  return (
    <div className="App">

<GameForm />


      {games.map(game=>{
        return(
<div key={game._id}>
<h3>{game.opponent}</h3>

</div> 

        )
      })}
 
    </div>
  );
}

export default App;
