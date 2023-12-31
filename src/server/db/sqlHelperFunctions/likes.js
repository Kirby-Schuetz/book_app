const client = require("../client")

const createLike = async ({ user_id, post_id }) => {
    try {
        const {
            rows: [like],
        } = await client.query (
            `INSERT INTO likes(user_id, post_id)
             VALUES($1, $2)
             RETURNING *;
            `,
            [user_id, post_id]
        )
        return like
    } catch (error) {
        throw error
    }
}

const getAllLikes = async () => {
    try {
        const { rows }
        = await client.query(`
        SELECT *
        FROM likes;
        `)
        return rows
    } catch (error) {
        throw error
    }
}

const unLike = async (like_id) => {
    try {
        const { rows: [like], }
        = await client.query(`
        DELETE 
        FROM likes
        WHERE like_id = ${like_id}
        RETURNING *;
        `);
         return like;
        } catch (error) {
         throw error;
    }
}

module.exports = { createLike, getAllLikes, unLike }