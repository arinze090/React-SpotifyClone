// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/


// Once you click the login button, it directs to spotify then later redirects you to the spotify-clone app using the localhost uri

// so this authEndPoint is for authorization (when you click on the login button it requests for authorization before signing you in)
export const authEndPoint = "https://accounts.spotify.com/authorize";

// the uri below is the localhost where our app is running on
const redirectUri = "http://localhost:3000/";

// this Id was gotten from spotify itself. so this is gotten when you register with "spotify for developers", and creates an Id for you
const clientId = "9dbf05f9b0614f5bbc14adde968abc52"

// scopes gives the app permission to do these stated functions. Asides the listed scopes, anyother function done wont occur (like deleting a song or playlist)
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1])

            return initial;
    }, {})
}

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
