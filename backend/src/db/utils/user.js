import { compareSync, hashSync } from 'bcryptjs'

export function createTag() {
  let tag = ''

  for (let i = 0; i < 4; i++) {
    tag += Math.floor(Math.random() * 10)
  }

  return tag.toString()
}

export function createPassword(password) {
  this.password = hashSync(password, 8)

  return this.password
}

export function comparePassword(password) {
  return compareSync(password, this.password)
}
