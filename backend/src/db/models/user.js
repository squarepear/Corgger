import { Schema, model } from 'mongoose'
import { comparePassword, createPassword, createTag } from '../utils/user'

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
    default: createTag(),
  },
  password: {
    type: String,
  },
})

UserSchema.methods.createPassword = createPassword
UserSchema.methods.comparePassword = comparePassword

UserSchema.plugin(fuzzySearch, { fields: ['displayname', 'username'] })

export default model('User', UserSchema)
