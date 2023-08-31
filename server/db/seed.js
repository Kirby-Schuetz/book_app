const client = require('./client')

// drop tables
const dropTables = async () => {
    try {
        console.log("starting to drop tables")
        await client.query(`
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS posts;
        DROP TABLE IF EXISTS likes;
        `)
        console.log("tables dropped")
    } catch (error) {
        console.log("error dropping tables")
        throw error
    }
}


// create tables
const createTables = async () => {
    console.log("building tables")
    await client.query(`
    CREATE TABLE users (
        
    )
    `)
}

// insert mock data from seedData.js

// create users


// create posts

// create likes


// call all my functions and 'build' my database