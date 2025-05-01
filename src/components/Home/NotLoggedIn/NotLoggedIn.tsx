import './NotLoggedIn.scss';

type TProps = {
  onLogin: () => void;
};

const NotLoggedIn = ({ onLogin }: TProps) => {
  return (
    <div className="not-logged-in">
      
      <h1 
        data-testid="not-logged-in-title"
        data-cy="not-logged-in-title"
      >
        Acesse com o Spotify
      </h1>

      <button
        className="spotify-button" 
        onClick={onLogin}
        data-testid="spotify-login-button"
        data-cy="spotify-login-button"
        aria-label="Login com Spotify"
      >
        Spotify
      </button>
    </div>
  );
};

export default NotLoggedIn;