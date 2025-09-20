import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="header-content">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/du8lwvfjj/image/upload/v1757870654/logo_m4c2om.svg"
          alt="website logo"
          className="header-logo"
        />
      </Link>
      <ul className="nav-items">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/shelf" className="nav-link">
            Bookshelves
          </Link>
        </li>
      </ul>
      <button type="button" className="logout-button">
        Logout
      </button>
    </div>
  </nav>
)

export default Header
