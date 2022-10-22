import './Principal.css'
import { Link } from 'react-router-dom'

const Principal = () => {
  return (
    <section>
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
            <Link to={'/pokemons'} className="principal-button">
              See Pokemons
            </Link>
          </div>
          <h4 className="principal-content-title">Pikachu is waiting for you</h4>
        </div>
      </div>
    </section>
  )
}

export default Principal
