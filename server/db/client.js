const { Client } = require('pg')

const postgres = 'postgres'

const client = new Client(`http://localhost:5497/${postgres}`)

module.exports = client