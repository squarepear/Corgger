import { Schema, Types, model } from 'mongoose'

import fuzzySearch from 'mongoose-fuzzy-searching'

const MessageSchema = Schema({
  owner: {
    type: Types.ObjectId,
    index: true,
  },
  content: {
    type: String,
  },
})

MessageSchema.plugin(fuzzySearch, { fields: ['content'] })

export default model('Message', MessageSchema)
