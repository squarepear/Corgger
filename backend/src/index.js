import './db/models'
import 'regenerator-runtime/runtime.js'

import bodyParser from 'body-parser'
import { connect } from 'mongoose'
import cors from 'cors'
import express from 'express'

connect('mongodb://database:27017/corgger')

export const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

export const router = import('./routes')

const PORT = process.env.PORT || 8150
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
