import ISpotifyContextState from "./SpotifyContextState"

export default interface ISpotifyContextAction {
    type: string;
    payload: ISpotifyContextState
};