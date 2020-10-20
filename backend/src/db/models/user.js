import { Schema, model } from 'mongoose'
import {
  comparePassword,
  createPassword,
  createTag,
  followUser,
  isFollowedBy,
  isFollowing,
} from '../utils/user'

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
UserSchema.methods.isFollowedBy = isFollowedBy
UserSchema.methods.isFollowing = isFollowing
UserSchema.methods.followUser = followUser

UserSchema.plugin(fuzzySearch, {
  fields: ['displayname', 'username'],
})

export default model('User', UserSchema)
