import { FiShoppingCart } from 'react-icons/fi'
import Buttons from './Buttons'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-title">
        <FiShoppingCart className="navbar-icon" />
        <span className="navbar-title_name">Poke Market</span>
      </div>
      <div className="navbar-button-container">
        <Buttons />
      </div>
    </div>
  )
}

export default Navbar
