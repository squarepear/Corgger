import { join } from 'path'

export const address = 'http://backend:3000/'

async function getData(id, data = {}) {
  const response = await fetch(join(address, id), {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  })

  return response.json()
}

async function postData(id, data = {}) {
  const response = await fetch(join(address, id), {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  })

  return response.json()
}

export async function signupUser(displayname, username, tag, password) {
  const users = await getData('auth/signup', {
    displayname,
    username,
    tag,
    password,
  })

  return users
}

export async function signinUser(username, tag, password) {
  const users = await getData('auth/signin', {
    username,
    tag,
    password,
  })

  return users
}

export async function getUsersByName(name) {
  const users = await getData('user/get_by_name', {
    name,
  })

  return users
}
