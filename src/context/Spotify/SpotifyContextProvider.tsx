import React, { useReducer, useEffect } from 'react';
import SpotifyContext from './SpotifyContext';
import SpotifyReducer from './SpotifyReducer';
import initialState from './SpotifyInitialState';
import { actionType } from './SpotifyAction';
import { CLIENT_ID, REDIRECT_URI } from '../../utils/consts/spotify';

type TProps = {
  children: React.ReactNode
}

const SpotifyContextProvider = ({ children }: TProps) => {
  const [state, dispatch] = useReducer(SpotifyReducer, initialState);

  const fetchToken = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const storedVerifier = localStorage.getItem('code_verifier');

    if (!code || !storedVerifier) {
      console.error('Authorization code or code verifier is missing.');
      return;
    }

    try {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: CLIENT_ID,
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: REDIRECT_URI,
          code_verifier: storedVerifier,
        }).toString(),
      });

      if (!response.ok) {
        throw new Error(`Error fetching token: ${response.statusText}`);
      }

      const data = await response.json();
      dispatch({ type: actionType.SET_TOKEN, payload: { token: data.access_token } });
      localStorage.setItem('access_token', data.access_token);
      window.history.replaceState({}, '', '/'); // Limpa o ?code da URL
    } catch (error) {
      console.error('Failed to fetch token:', error);
    }
  };

  useEffect(() => {
    const existingToken = localStorage.getItem('access_token');
    if (existingToken) {
      dispatch({ type: actionType.SET_TOKEN, payload: { token: existingToken } });
    } else {
      fetchToken();
    }
  }, []);

  return (
    <SpotifyContext.Provider value={{ state, dispatch }}>
      {children}
    </SpotifyContext.Provider>
  );
};

export default SpotifyContextProvider;