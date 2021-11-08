const SpotifyWebApi = require('spotify-web-api-node')

const login = async (req, res) => {
    const code = req.body.code

    const spotifyApi = new SpotifyWebApi({
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        redirectUri: process.env.REDIRECT_URI
    })

    try {
        const data = await spotifyApi.authorizationCodeGrant(code)
        spotifyApi.setAccessToken(data.body.access_token)
        
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    } catch (error) {
        throw error
    }
}

module.exports = { login }