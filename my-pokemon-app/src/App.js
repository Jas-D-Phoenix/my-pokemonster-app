import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AppNavigator from './components/AppNavigator';
import Pokemone from './pokmonsters/Pokemone';
import PokemonDetails from './pokmonsters/PokemonDetails';

function App() {


  return (
    
    <Router>
      <AppNavigator/>
      <Routes>
        <Route exact path="/" element= {<Pokemone/>} />
        <Route exact path="/pokemon/:name" element= {<PokemonDetails/>} />
      </Routes>
      
    </Router>

  )
}

export default App;
