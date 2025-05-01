import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SpotifyContext from '../context/Spotify/SpotifyContext';
import { setLogout } from '../context/Spotify/SpotifyAction';

const useLogout = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(SpotifyContext);

  const logout = () => {
    dispatch(setLogout(state));
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');

    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return { logout };
};

export default useLogout;