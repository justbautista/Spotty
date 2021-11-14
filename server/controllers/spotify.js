const SpotifyWebApi = require('spotify-web-api-node')

const getTopTracks = async (req, res) => {
    const timeRange = req.body.timeRange
    const accessToken = req.body.accessToken

    const spotifyApi = new SpotifyWebApi({
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        accessToken: accessToken
    })

    try {
        const data = await spotifyApi.getMyTopTracks({
            time_range: timeRange,
            limit: 50
        })

        res.json({
            topTracks: data.body.items
        })     
    } catch (error) {
        throw error
    }
}

const getTopArtists = async (req, res) => {
    const timeRange = req.body.timeRange
    const accessToken = req.body.accessToken

    const spotifyApi = new SpotifyWebApi({
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        accessToken: accessToken
    })

    try {
        const data = await spotifyApi.getMyTopArtists({
            time_range: timeRange,
            limit: 50
        })
        res.json({
            topArtists: data.body.items
        })     
    } catch (error) {
        throw error
    }
}

module.exports = { getTopTracks, getTopArtists }