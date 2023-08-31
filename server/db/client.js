const { Client } = require('pg')

const postgres = 'postgres'

const client = new Client(`postgres://localhost:5497/${postgres}`)

module.exports = client