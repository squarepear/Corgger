import { Schema, Types, model } from 'mongoose'

import fuzzySearch from 'mongoose-fuzzy-searching'

const MessageSchema = Schema({
  owner: {
    type: Types.ObjectId,
    ref: 'User',
    index: true,
  },
  parent: {
    type: Types.ObjectId,
    ref: 'Message',
    index: true,
  },
  content: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
})

MessageSchema.plugin(fuzzySearch, { fields: ['content'] })

export default model('Message', MessageSchema)
