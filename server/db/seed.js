// pull in connection to my local database
const client = require('./client')

const { createUser } = require('./sqlHelperFunctions/users')
const { createPost } = require('./sqlHelperFunctions/posts')
const { createLike } = require('./sqlHelperFunctions/likes')

const { users, posts, likes } = require('./seedData')

// drop tables
const dropTables = async () => {
    try {
        console.log("starting to drop tables")
        await client.query(`
        DROP TABLE IF EXISTS likes;
        DROP TABLE IF EXISTS posts;
        DROP TABLE IF EXISTS users;
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
        user_id SERIAL PRIMARY KEY,
        username varchar(30) UNIQUE NOT NULL,
        password varchar(30) NOT NULL,
        first_name varchar NOT NULL,
        last_name varchar,
        email varchar NOT NULL
    );
    CREATE TABLE posts (
        post_id SERIAL PRIMARY KEY,
        book_image varchar,
        book_title varchar,
        book_author varchar,
        book_summary varchar,
        user_id INT REFERENCES users(user_id) ON DELETE CASCADE
    );
    CREATE TABLE likes (
        like_id SERIAL PRIMARY KEY,
        user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
        post_id INT REFERENCES posts(post_id) ON DELETE CASCADE
    )
    `)
    console.log("tables are built")
}

// INSERT MOCK DATA
// 
// create users
const createInitialUsers = async () => {
    try {
        // looping through "users" array from seedData
        for (const user of users) {
            // insert each user into the table
            await createUser(user)
        }
        console.log("created users")
    } catch (error) {
        throw error
    }
}

// create posts
const createInitialPosts = async () => {
    try {
        // looping through "posts" array from seedData
        for (const post of posts) {
            // insert each post into the table
            await createPost(post)
        }
        console.log("created posts")
    } catch (error) {
        throw error
    }
}

// create likes
const createInitialLikes = async () => {
    try {
        // looping through "likes" array from seedData
        for (const like of likes) {
            // insert each like into the table
            await createLike(like)
        }
        console.log("created likes")
    } catch (error) {
        throw error
    }
}

// call all my functions and 'build' my database
const rebuildDb = async () => {
    try {
        // connect to my local database
        client.connect()
        // run our functions
        await dropTables()
        await createTables()

        // generating starting data
        console.log("starting to seed")
        await createInitialUsers()
        await createInitialPosts()
        await createInitialLikes()

    } catch (error) {
        console.log(error)
    } finally{
        // close our connection
        client.end()
    }
}

rebuildDb()