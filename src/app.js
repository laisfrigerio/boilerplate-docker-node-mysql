import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import requests from './requests/index.js'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use(requests)

export default app
