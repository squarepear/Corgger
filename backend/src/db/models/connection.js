import { Schema, Types, model } from 'mongoose'

const ConnectionSchema = Schema({
  follower: {
    type: Types.ObjectId,
    index: true
  },
  followee: {
    type: Types.ObjectId,
    index: true
  }
})

export default model('Connection', ConnectionSchema)