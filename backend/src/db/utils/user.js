import { Connection, User } from '../models'
import { compareSync, hashSync } from 'bcryptjs'

export function createTag () {
  let tag = ''

  for (let i = 0; i < 4; i++) {
    tag += Math.floor(Math.random() * 10)
  }

  return tag
}

export function createPassword (password) {
  this.password = hashSync(password, 8)

  return this.password
}

export function comparePassword (password) {
  return compareSync(password, this.password)
}

export function isFollowedBy (username, tag) {
  User.findOne({
    username,
    tag
  }).exec((err, otherUser) => {
    if (err || !otherUser) return null

    Connection.findOne({
      followee: this._id,
      follower: otherUser._id
    }).exec((err, connection) => {
      if (err || !connection) return null

      return otherUser
    })
  })
}

export function isFollowing (username, tag) {
  User.findOne({
    username,
    tag
  }).exec((err, otherUser) => {
    if (err || !otherUser) return null

    Connection.findOne({
      followee: otherUser._id,
      follower: this._id
    }).exec((err, connection) => {
      if (err || !connection) return null

      return otherUser
    })
  })
}

export function followUser (username, tag) {
  User.findOne({
    username,
    tag
  }).exec((err, otherUser) => {
    if (err || !otherUser) return null

    const connection = new Connection({
      follower: this._id,
      followee: otherUser._id
    })

    connection.save((err, con) => {
      if (err) return null

      return con
    })
  })
}
