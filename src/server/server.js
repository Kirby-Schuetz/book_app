const http = require('http')
const { PORT = 5497 } = process.env
const app = require('./app')

const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`listening on Port ${PORT}`)
})