const express = require('express')
const app = express()
const SpotifyApi = require('spotify-web-api-node')

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