import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Navbar from './components/Navbar/Navbar'
import Principal from './routes/Principal/Principal'
import './App.css'
import Pokemons from './routes/Pokemons/Pokemons'
import Pokemon from './components/Pokemon/Pokemon'
import Login from './routes/Login/Login'
import PersistLogin from './routes/PersistLogin'
import Protected from './routes/Protected'
import SignUp from './routes/SignUp/SignUp'
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route element={<PersistLogin />}>
          <Route element={<Protected />}>
            <Route path="/pokemons" element={<Pokemons />} />
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
