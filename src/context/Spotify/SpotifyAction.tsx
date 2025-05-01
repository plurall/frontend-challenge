import ISpotifyContextAction from "../../types/Context/Spotify/SpotifyContextAction";
import ISpotifyContextState from "../../types//Context/Spotify/SpotifyContextState";

export enum actionType {
  SET_TOKEN = 'SET_TOKEN',
}

export const setActiveMenu = (currentState: ISpotifyContextState, payload: string): ISpotifyContextAction => {
    return {
        type: actionType.SET_TOKEN,
        payload: {
            ...currentState,
            token: payload
        }
    } as ISpotifyContextAction
}