// import and invoke express to create your app
const express = require('express');
const app = express();
const PORT = 3000;

const client = require('./db/client');
// connect to client
client.connect();

// base route that returns "hello world"
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// create router that adds the /api prefix to your routes
app.use('/api', require('./api'));

// listen to the port your server is running on
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})

