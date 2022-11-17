const express = require('express')
const router = express.Router()

const { getTopTracks, getTopArtists, getMe } = require('../controllers/spotify')

router.post('/topTracks', getTopTracks)
router.post('/topArtists', getTopArtists)
router.post('/getMe', getMe)

module.exports = router