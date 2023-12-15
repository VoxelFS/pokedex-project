import './App.css'
import { Route, Routes } from 'react-router-dom'
import Browse from './components/Browse'
import PokemonDetails from './components/PokemonDetails'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/pokemon/:pokemonName" element={<PokemonDetails />} />
      </Routes>
    </>
  )
}

export default App
