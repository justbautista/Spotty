const express = require('express')
const router = express.Router()
const cors = require('cors')

const corsOptions = {
    origin: 'https://songbirdapp.netlify.app'
}

const { login, refresh } = require('../controllers/auth')

router.post('/login', cors(corsOptions), login)
router.post('/refresh', cors(corsOptions), refresh)

module.exports = router