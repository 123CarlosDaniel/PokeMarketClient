import { useParams } from 'react-router-dom'
import { useGQLQuery } from '../../api/pokeApi'
import { getPokemon } from '../../api/queriesPokemon'
import './Pokemon.css'
const Pokemon = () => {
  const { name } = useParams()
  const { data, isLoading, isError } = useGQLQuery(['pokemon/data', name], getPokemon, { name: name })
 
  if (isError) {
    return <h2>Error</h2>
  }
  if (isLoading) {
    return <h2>Cargando ...</h2>
  }
  
  return (
    <section className="pokemon-container">
      <h4 className="pokemon-title">{data.getPokemon.name}</h4>
      <div className="pokemon-card-container">
        <div className="pokemon-img-container">
          <div className="pokemon-img">
            <img src={data.getPokemon.sprite} alt={data.getPokemon.name} />
          </div>
          <div className='pokemon-types pokemon-title'>
            {data.getPokemon.types.map(pok => {
              return (
                <span> {pok}</span>
              )
            })}
          </div>
        </div>
        <div className='pokemon-description-container'>
            <h3 className=''>Statistics</h3>
          <div className='pokemon-description-data'>
            <div>
            <h4>Pokemon HP : {data.getPokemon.hp}</h4>
            </div>
            <div>
            <h4>Pokemon Atack : {data.getPokemon.attack}</h4>
            </div>
            <div>
            <h4>Pokemon Special Atack : {data.getPokemon.special}</h4>
            </div>
            <div>
            <h4>Pokemon Defense : {data.getPokemon.defense}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pokemon
