import jwt from 'jsonwebtoken'

export function requireToken(req, res, next) {
  const token = req.headers['x-access-token']

  if (!token) return res.status(403).send({ message: 'No token provided!' })

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).send({ message: 'Unauthorized!' })

    req.userId = decoded.id
    next()
  })
}

export function checkToken(req, res, next) {
  const token = req.headers['x-access-token']

  if (!token) return next()

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return next()

    req.userId = decoded.id
    next()
  })
}
