import './NotLoggedIn.scss';

type TProps = {
  onLogin: () => void;
};

const NotLoggedIn = ({ onLogin }: TProps) => {
  return (
    <div className="not-logged-in">
      <h1>Acesse com o Spotify</h1>
      <button className="spotify-button" onClick={onLogin}>
        Spotify
      </button>
    </div>
  );
};

export default NotLoggedIn;