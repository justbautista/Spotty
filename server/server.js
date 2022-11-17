require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./db/connect')

//middleware
app.use(cors())
app.use(express.json())

//routers
const authRouter = require('./routes/auth')
const spotifyRouter = require('./routes/spotify')

//routes
app.use('/auth', authRouter)
app.use('/spotify', spotifyRouter)

const port = process.env.PORT || 3001

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI)
      app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
      console.log(error)
    }
}  

start()