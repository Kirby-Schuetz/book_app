const client = require("../client")

const createLike = async ({ like_id, user_id, post_id }) => {
    try {
        const {
            rows: [like],
        } = await client.query (
            `INSERT INTO likes(like_id, user_id, post_id)
             VALUES($1, $2, $3)
             RETURNING *;
            `,
            [like_id, user_id, post_id]
        )
        return like
    } catch (error) {
        throw error
    }
}

const getLikeById = async (like_id) => {
    try {
        const { 
            rows: [like]
         } 
        = await client.query(`
        SELECT *
        FROM likes
        WHERE like_id = ${like_id};
        `)
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

module.exports = { createLike, getLikeById, getAllLikes }