import { Message, User } from '../../db/models'

import { createTag } from '../../db/utils/user'
import { sign } from 'jsonwebtoken'

export async function checkDuplicate (req, res, next) {
  if (!req.body.tag) req.body.tag = createTag()

  try {
    const user = await User.findOne({
      username: req.body.username,
      tag: req.body.tag
    }).exec()

    if (!user) return next()

    return res.status(400).send({
      message:
      'Username and tag combo is already in use! Did you mean to sign in instead?'
    })
  } catch (err) {
    return next(err)
  }
}

export async function signup (req, res, next) {
  const user = new User({
    displayname: req.body.displayname,
    username: req.body.username,
    tag: req.body.tag
  })

  user.createPassword(req.body.password)

  user.save((err, user) => {
    if (err) return next(err)

    next()
  })
}

export async function signin (req, res, next) {
  try {
    const user = await User.findOne({
      username: req.body.username,
      tag: req.body.tag
    }).exec()

    if (!user) return res.status(404).send({ message: 'User Not found.' })

    if (!user.comparePassword(req.body.password)) {
      return res.status(401).send({
        accessToken: null,
        message: 'Invalid Password!'
      })
    }

    const token = sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: 60 * 60 * 24 // 24 hours
    })

    res.status(200).send({
      id: user._id,
      displayname: user.displayname,
      username: user.username,
      tag: user.tag,
      accessToken: token
    })
  } catch (err) {
    if (err) return next(err)
  }
}

export async function postMessage (req, res, next) {
  const message = new Message({
    owner: req.userId,
    content: req.body.content
  })

  message.save((err, message) => {
    if (err) return next(err)

    res.status(200).send({
      id: message._id,
      owner: message.owner,
      content: message.content,
      date: message.date
    })

    next()
  })
}

export async function followUser (req, res, next) {
  try {
    const user = await User.findOne({
      _id: req.userId
    }).exec()

    const otherUser =
      user.isFollowing(req.body.username, req.body.tag) ||
      user.followUser(req.body.username, req.body.tag)

    if (!otherUser) return res.status(404).send({ message: 'User Not found.' })

    return res.status(200).send({
      id: otherUser._id,
      displayname: otherUser.displayname,
      username: otherUser.username,
      tag: otherUser.tag
    })
  } catch (err) {
    if (err) return next(err)
  }
}
