const express = require('express')
const router = express.Router()

const { getTopTracks, getTopArtists } = require('../controllers/spotify')

router.post('/topTracks', getTopTracks)
router.post('/topArtists', getTopArtists)

module.exports = router