const { Client } = require('pg')

const bcrypt = 'bcrypt'

const client = new Client(`http://localhost:5497/${bcrypt}`)

module.exports = client