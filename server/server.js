require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

//middleware
app.use(cors())
app.use(express.json())

//routers
const authRouter = require('./routes/auth')

//routes
app.use('/login', authRouter)

const port = process.env.PORT || 3001
app.listen(port)