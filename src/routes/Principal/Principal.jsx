import './Principal.css'
import { useNavigate } from 'react-router-dom'

const Principal = () => {
  const navigate = useNavigate()
  return (
    <div className="container">
      <h3 className="principal-title">¡¡ Welcome to this awesome website !!</h3>
      <div className="principal-layout">
        <div className="principal-card">
          <div className="principal-card-image">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
              alt=""
            />
          </div>
        </div>
        <div className="principal-content">
          <h4 className="principal-content-title">See what we have</h4>
          <div className="principal-paragraph">
            <p className="principal-text">
              This website is a simple example of a React application. <br /> It's purpose is to show how to use React
              and its features.
            </p>
            <button className="principal-button" onClick={() => navigate('/pokemons')}>
              See Pokemons
            </button>
          </div>
          <h4 className="principal-content-title">Pikachu is waiting for you</h4>
        </div>
      </div>
    </div>
  )
}

export default Principal
