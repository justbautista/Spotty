const express = require('express')
const app = express()
const SpotifyApi = require('spotify-web-api-node')
const cors = require('cors')
app.use(cors())

app.get('/redirect', (req, res) => {
    var scopes = ['user-read-private', 'user-read-email'],
  redirectUri = 'https://localhost:3000',
  clientId = 'b61700da73754441825c847b8ea113b1',
  state = 'some-state-of-my-choice';

// Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
var spotifyApi = new SpotifyApi({
  redirectUri: redirectUri,
  clientId: clientId
});

// Create the authorization URL
var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

// https://accounts.spotify.com:443/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice
res.send(authorizeURL)

})

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyApi({
        redirectUri: '',
        clientId: '',
        clientSecret: ''
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    })
})

app.listen(3001)