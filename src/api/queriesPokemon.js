import gql from 'graphql-tag'

export const getPokemons = gql`
  query ($offset: Int) {
    getPokemons(offset: $offset) {
      name
      url
      pokemonImg
    }
  }
`

export const getPokemon = gql`
  query ($name: String) {
    getPokemon(name: $name) {
      name
      weight
      id
      sprite
    }
  }
`
