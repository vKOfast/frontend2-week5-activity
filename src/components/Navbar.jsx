import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        🎮 GAMEPEDIA
      </Link>

      <div className="nav-links">
        <Link to="/" className="nav-link">
          Inicio
        </Link>
        <Link to="/favorites" className="nav-link">
          Favoritos
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
