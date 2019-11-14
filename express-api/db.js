'use strict'

const mongoose = require('mongoose')
const User = mongoose.model('User', new mongoose.Schema({name: 'string'}, {timestamps: true}))
const Data = mongoose.model('Data', new mongoose.Schema({data: 'object'}, {timestamps: true}))
const {promisify} = require('util')
const sleep = promisify(setTimeout)

async function connect() {
	let done = false
	while (!done) {
		try {
			await mongoose.connect(process.env.MONGODB_URI)
			done = true
		} catch (err) {
			console.log(err)
			await sleep(10000)
		}
	}
}

module.exports = {
	mongoose,
	User,
	Data,
	connect
}

