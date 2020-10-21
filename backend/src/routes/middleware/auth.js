import { verify } from 'jsonwebtoken'

export async function requireToken (req, res, next) {
  const token = req.headers['x-access-token']

  if (!token) return res.status(403).send({ message: 'No token provided!' })

  verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).send({ message: 'Unauthorized!' })

    req.userId = decoded.id
    next()
  })
}

export async function checkToken (req, res, next) {
  const token = req.headers['x-access-token']

  if (!token) return next()

  verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (!err) req.userId = decoded.id

    return next()
  })
}
