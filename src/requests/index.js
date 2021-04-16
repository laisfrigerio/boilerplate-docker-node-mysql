import express from 'express'
import connect from '../config/database.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello, World!!!\n\n')
})

export default router
