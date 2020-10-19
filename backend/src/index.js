import './db/models'

import bodyParser from 'body-parser'
import { connect } from 'mongoose'
import express from 'express'
import routes from 'routes'

connect('mongodb://database:27017/corgger')

export const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
