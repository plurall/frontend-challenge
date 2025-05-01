import { actionType } from './SpotifyAction';
import ISpotifyContextState from '../../types/Context/Spotify/SpotifyContextState';
import ISpotifyContextAction from '../../types/Context/Spotify/SpotifyContextAction';

const SpotifyReducer = (state: ISpotifyContextState, action: ISpotifyContextAction): ISpotifyContextState => {
  switch (action.type) {
    case actionType.SET_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };
    case actionType.SET_LOGOUT:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default SpotifyReducer;