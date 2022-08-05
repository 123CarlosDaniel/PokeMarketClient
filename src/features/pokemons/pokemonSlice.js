import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    name: 'Pikachu',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png',
  },
]

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {},
})

export default pokemonSlice.reducer
