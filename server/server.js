const express = require('express')
const cookie = require('cookie-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const fallbacks = require('./fallbacks')

const app = express()

app.use(cors())
app.use(cookie())
app.use(express.json())

// TODO: Place this string into a .env variable
mongoose.connect(
  'mongodb://localhost:27017/igrow',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('📦 => database')
  }
)

// app.use('/auth', authRouter)

app.use(fallbacks.notFound)
app.use(fallbacks.errorHandler)

app.listen(5000, () => {
  console.log(`🌎 => http server`)
})
