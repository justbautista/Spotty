const clientID = process.env.REACT_APP_CLIENT_ID
const redirectUri = process.env.REACT_APP_REDIRECT_URI
const scopes = [
    'user-top-read',
    'user-read-email',
]

export const accessURL = `https://accounts.spotify.com/authorize?client_id=${ clientID }&response_type=code&redirect_uri=${ redirectUri }&scope=${ scopes.join('%20') }&show_dialog=true`