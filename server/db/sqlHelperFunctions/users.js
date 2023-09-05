const client = require('../client')

const createUser = async ({ username, password, first_name, last_name, email }) => {
    try {
        const {
            rows: [user],
        // insert SQL query
        } = await client.query (
            // INSERT into table(column1, column2, column3)
            // VALUES(var1, var2)
            // RETURNING everything
            ` INSERT INTO users (username, password, first_name, last_name, email)
              VALUES($1, $2, $3, $4, $5)
              RETURNING *;
            `,
            // dependency array to hook up the parameters to the variables
            [username, password, first_name, last_name, email]
        )
            return user
    } catch (error) {
        throw error
    }
}

const getAllUsers = async () => {
    try {
        const { rows }
        = await client.query(`
        SELECT *
        FROM users;
        `)
        return rows
    } catch (error) {
        throw error
    }
}

const getUserById = async (user_id) => {
    try {
        const { 
            rows: [user]
         } 
        = await client.query(`
        SELECT *
        FROM users
        WHERE user_id = ${user_id};
        `)
        return user
    } catch (error) {
        throw error
    }
}


module.exports = { createUser, getAllUsers, getUserById }