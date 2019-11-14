'use strict'

const express = require('express')
const cors = require('cors')
const app = express()

require('dotenv').config()

const db = require('./db')
db.connect().catch(e => console.error(e))

app.use(cors())

app.get('/', async (req, res) => {
	let user = new db.User({name: 'Jason'})
	console.log('GET')
	await user.save()
	db.User.find()
		.then(users => {
			return res.send(users.map(u => u.toObject()))
		})
		.catch(e => {
			return res.status(500).send(e)
		})
})

app.listen(process.env.API_PORT)

