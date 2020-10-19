import { Schema, Types, model } from 'mongoose'

const ConnectionSchema = Schema({
  follower: {
    type: Types.ObjectId,
    ref: 'User',
    index: true,
  },
  followee: {
    type: Types.ObjectId,
    ref: 'User',
    index: true,
  },
})

export default model('Connection', ConnectionSchema)
