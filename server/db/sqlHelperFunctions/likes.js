const client = require("../client")

const createLike = async ({ like_id, user_id, post_id }) => {
    try {
        const {
            rows: [like],
        } = await client.query (
            `INSERT INTO like(like_id, user_id, post_id)
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

module.exports = { createLike }