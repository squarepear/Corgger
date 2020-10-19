import { Schema, model } from 'mongoose'

import fuzzySearch from 'mongoose-fuzzy-searching'

const UserSchema = Schema({
  displayname: {
    type: String,
  },
  username: {
    type: String,
  },
  tag: {
    type: String,
  },
})

UserSchema.index(
  {
    username: 1,
    tag: 1,
  },
  {
    unique: true,
  }
)

UserSchema.plugin(fuzzySearch, { fields: ['displayname', 'username'] })

export default model('User', UserSchema)
