export const address = 'http://localhost:8150/'

async function getData(id, data = {}) {
  const response = await fetch(address + id, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'x-access-token': localStorage.getItem('jwt'),
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  })

  return response.json()
}

async function postData(id, data = {}) {
  const response = await fetch(address + id, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'x-access-token': localStorage.getItem('jwt'),
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  })

  return response.json()
}

export async function signupUser(displayname, username, tag, password) {
  const data = await postData('auth/signup', {
    displayname,
    username,
    tag,
    password,
  })

  return data
}

export async function signinUser(username, tag, password) {
  const data = await postData('auth/signin', {
    username,
    tag,
    password,
  })

  localStorage.setItem('jwt', data.accessToken)

  delete data.accessToken

  localStorage.setItem('userInfo', JSON.stringify(data))

  return data
}

export async function postMessage(content) {
  const data = await postData('message/post', {
    content,
  })

  return data
}

export async function getMessagesByUser(username, tag) {
  const data = await getData('message/get_by_user', {
    username,
    tag,
  })

  return data
}

export async function getUsersByName(name) {
  const data = await getData('user/get_by_name', {
    name,
  })

  return data
}
