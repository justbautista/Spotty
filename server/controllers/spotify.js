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
        // throw error
        res.status(500).json({
            message: "Internal Server Error"
        })
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
        // throw error
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

const getMe = async (req, res) => {
    const accessToken = req.body.accessToken

    const spotifyApi = new SpotifyWebApi({
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        accessToken: accessToken
    })

    try {
        const data = await spotifyApi.getMe()

        res.json(data.body)

    } catch (error) {
        // throw error
        res.status(401).json({
            message: "Account used isn't authorized by the owner of the website"
        })
        //authorize user with creator before using these features 
        //change throws to res.status or whatever to return errors to client, json
    }
}

module.exports = { getTopTracks, getTopArtists, getMe }