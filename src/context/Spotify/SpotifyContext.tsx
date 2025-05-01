import React from 'react'
import IContext from '../../types/Context/IContext'
import ISpotifyContextState from '../../types/Context/Spotify/SpotifyContextState'
import ISpotifyContextAction from '../../types/Context/Spotify/SpotifyContextAction'
import initialState from './SpotifyInitialState'

const dispatch:React.Dispatch<ISpotifyContextAction> = () => {}

const SpotifyContext = React.createContext<IContext<ISpotifyContextState>>({state:initialState, dispatch: dispatch})

export default SpotifyContext