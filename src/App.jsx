import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Navbar from './components/Navbar/Navbar'
import Principal from './routes/Principal/Principal'
import './App.css'
import Pokemon from './components/Pokemon/Pokemon'
import PersistLogin from './routes/PersistLogin'
import Protected from './routes/Protected'
import LoginForm from './components/LoginForm/LoginForm'
import PokemonList from './components/PokemonsList/PokemonList'
import SignUpForm from './components/SignUpForm/SignUpForm'
function App() {
  console.log(import.meta.env.MODE)
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/signup" element={<SignUpForm />}></Route>
        <Route element={<PersistLogin />}>
          <Route element={<Protected />}>
            <Route path="/pokemons" element={<PokemonList />} />
            <Route path="/pokemons">
              <Route path="/pokemons/:name" element={<Pokemon />}></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
      <ReactQueryDevtools />
    </Router>
  )
}

export default App
