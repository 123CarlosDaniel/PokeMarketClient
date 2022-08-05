import { useNavigate } from 'react-router-dom'
import ReactionsButton from './ReactionButtons'

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate()
  const handleButton = () => {
    navigate(`/pokemons/${pokemon.name}`)
  }
  return (
    <div>
      <h4 className="card-name">{pokemon.name}</h4>
      <div className="card-image">
        <img src={pokemon.pokemonImg} alt={pokemon.name} />
      </div>
      <div className="reactions-container">
        <ReactionsButton />
      </div>
      <div className="button-container">
        <button>Comprar</button>
        <button onClick={handleButton}>Ver mas info</button>
      </div>
    </div>
  )
}

export default PokemonCard
