import React, {useEffect, useState} from 'react';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();


function App() {

  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  // Runs code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        // console.log(':person', user);

        dispatch({
          type: 'SET_USER',
          user: user
        })

       //  Fetching the User's exact Playlist from Spotify !
        spotify.getUserPlaylists().then((playlists) => {
          dispatch({
            type: 'SET_PLAYLISTS',
            playlists: playlists,
          });
        });

        // Fetching the User's Discover weekly from spotify !
        // copy the url from your spotify account page when you click on Playlist
        spotify.getPlaylist('37i9dQZVXcIJazRV9ISoM').then(response => {
          dispatch({
            type: 'SET_DISCOVER_WEEKLY',
            discover_weekly: response,
          });
        });

      })
    }


    // console.log("I HAVE A TOKEN ", token);
  }, []);

  // console.log(':person', user);
  // console.log(':alien', token);


  return (
    <div className="App">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
      </div>

  );
}

export default App;
