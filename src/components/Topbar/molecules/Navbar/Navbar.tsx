import { Link } from 'react-router-dom';
import { useSpotifyToken } from '../../../../hooks/useSpotifyToken';
import './Navbar.scss';
import useLogout from '../../../../hooks/useLogout';

const Navbar = () => {
  const {isLoggedIn} = useSpotifyToken();

  const { logout } = useLogout();

  return (
    <nav className="menu">
      <ul>
      {isLoggedIn ? (
          <>
            <li><Link to="/busca">Buscar</Link></li>
            <li><button className="logout" onClick={logout}>Sair</button></li>
          </>
        ) : null}
      </ul>
    </nav>
  );
}
export default Navbar;