const client = require('../client')

const createUser = async ({ user_id, username, password, first_name, last_name, email }) => {
    try {
        const {
            rows: [user],
        // insert SQL query
        } = await client.query (
            // INSERT into table(column1, column2, column3)
            // VALUES(var1, var2)
            // RETURNING everything
            ` INSERT INTO users(user_id, username, password, first_name, last_name, email)
              VALUES($1, $2, $3, $4, $5, $6)
              RETURNING *;
            `,
            // dependency array to hook up the parameters to the variables
            [user_id, username, password, first_name, last_name, email]
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

module.exports = { createUser, getAllUsers }