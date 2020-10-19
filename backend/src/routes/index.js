import { checkDuplicate, signin, signup } from './middleware/user'

import { app } from '../'

app.get('/', (req, res) => {
  res.json({ message: req.body })
})

app.post('/auth/signup', checkDuplicate, signup, signin)

app.post('/auth/signin', signin)
