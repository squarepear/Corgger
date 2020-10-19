import './db/models'

import bodyParser from 'body-parser'
import { connect } from 'mongoose'
import express from 'express'
import routes from 'routes'

connect('mongodb://database:27017/corgger')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

routes.create(app)

app.get('/', (req, res) => {
  res.json({ message: req.body })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
