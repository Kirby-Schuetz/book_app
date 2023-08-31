const { Client } = require('pg')

const library = 'library'

const client = new Client(`postgres://localhost:5497/${library}`)

module.exports = client