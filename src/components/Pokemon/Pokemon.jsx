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
    <div className="pokemon-container">
      <h4 className="pokemon-title">{data.getPokemon.name}</h4>
      <div className="pokemon-card-container">
        <div className="pokemon-img-container">
          <div className="pokemon-img">
            <img src={data.getPokemon.sprite} alt={data.getPokemon.name} />
          </div>
          <div>pokemondesc</div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugit architecto veniam doloribus
            reprehenderit fugiat commodi impedit sed labore! Nulla corrupti iure molestiae debitis eligendi adipisci ut.
            Ut, delectus deserunt!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Pokemon
