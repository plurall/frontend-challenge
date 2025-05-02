import { useSpotifyToken } from '@hooks/useSpotifyToken';
import NotLoggedIn from '@components/Home/NotLoggedIn/NotLoggedIn';
import LoggedIn from '@components/Home/LoggedIn/LoggedIn';

function App() {
  const { isLoggedIn, login } = useSpotifyToken();

  return (
    <>
      {!isLoggedIn ? (
        <NotLoggedIn onLogin={login} />
      ) : (
        <LoggedIn />
      )}
    </>
  );
}

export default App;
