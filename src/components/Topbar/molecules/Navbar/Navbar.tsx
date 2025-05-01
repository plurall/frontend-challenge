import { Link, useNavigate } from 'react-router-dom';
import { useSpotifyToken } from '../../../../hooks/useSpotifyToken';
import './Navbar.scss';
import { useContext } from 'react';
import SpotifyContext from '../../../../context/Spotify/SpotifyContext';
import { setLogout } from '../../../../context/Spotify/SpotifyAction';

const Navbar = () => {
  const router = useNavigate();
  const {isLoggedIn} = useSpotifyToken();
  const {state, dispatch} = useContext(SpotifyContext);

  const handleLogout = () => {
    dispatch(setLogout(state));
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');

    setTimeout(() => {
      router('/');
    }, 1500);
  }


  return (
    <nav className="menu">
      <ul>
      {isLoggedIn ? (
          <>
            <li><Link to="/busca">Buscar</Link></li>
            <li><button className="logout" onClick={handleLogout}>Sair</button></li>
          </>
        ) : null}
      </ul>
    </nav>
  );
}
export default Navbar;