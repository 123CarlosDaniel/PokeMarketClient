import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import pokemonReducer from '../features/pokemons/pokemonSlice'
export const store = configureStore({
  reducer: {
    pokemons: pokemonReducer,
    auth: authReducer,
  },
})
