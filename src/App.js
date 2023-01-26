
import './App.css';
import {useState,useEffect} from "react"
import axios from "axios"
import GameForm from './components/forms/GameForm';
import HomePage from './pages/HomePage';
import { Routes, Route} from 'react-router-dom'
import SignUpPage from './pages/SignUpPage';


function App() {
  const [games,setGames] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {                                
    axios
      .get("http://127.0.0.1:5005/games")
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


<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/register" element={<SignUpPage/>}/>
</Routes>

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
