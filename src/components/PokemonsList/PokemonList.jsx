import PokemonCard from './PokemonCard'
import './Pokemons.css'
import { useState } from 'react'
import { useGQLQuery } from '../../api/pokeApi'
import { getPokemons } from '../../api/queriesPokemon'
import Loader from '../Loader'

const positive = offset => {
  return offset < 0 ? 0 : offset
}

const PokemonList = () => {
  const [offset, setOffset] = useState(20)

  const { data, isFetching, isError, error } = useGQLQuery(
    ['pokemons/data', offset],
    getPokemons,
    { offset: offset },
    {
      refetchOnWindowFocus: false,
    }
  )

  if (isError) {
    return (
      <>
        <h2>Error</h2>
        <p className='error'>{error?.message}</p>
      </>
    )
  }
  if (isFetching) {
    return (
      <Loader/>
    )
  }

  return (
    <section >
      <div className="list-title">PokemonList</div>
      <div>
        <button onClick={() => setOffset(prev => positive(prev - 20))}>Anterior</button>
        <button onClick={() => setOffset(prev => prev + 20)}>Siguiente</button>
      </div>
      <div className="pokemon-list">
        {data.getPokemons.map((el,index) => {
          return <PokemonCard key={index} pokemon={el} />
        })}
      </div>
      <div>
        <button onClick={() => setOffset(prev => positive(prev - 20))}>Anterior</button>
        <button onClick={() => setOffset(prev => prev + 20)}>Siguiente</button>
      </div>
    </section>
  )
}

export default PokemonList
