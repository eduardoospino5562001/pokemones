
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import PokedexPage from './pages/PokedexPage';
import PokeIdPage from './pages/PokeIdPage';

function App() {
  
  return (
    <div>
      <h1>Pokedex</h1>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/' element={<PokedexPage/>}/>
        <Route path='/pokedex/:id' element={<PokeIdPage/>}/>
      </Routes>
    </div>
  )
}

export default App;
