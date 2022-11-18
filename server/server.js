require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

//middleware
app.use(cors({ origin: 'https://songbirdapp.netlify.app' , credentials :  true}));
app.use(express.json())

//routers
const authRouter = require('./routes/auth')
const spotifyRouter = require('./routes/spotify')

//routes
app.use('/auth', authRouter)
app.use('/spotify', spotifyRouter)

const port = process.env.PORT || 3001
app.listen(port)