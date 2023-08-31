const client = require('../client')

const createPost = async ({ post_id, book_image, book_title, book_author, book_summary, user_id}) => {
    try {
        const {
            rows: [post],
            // insert SQL query
        } = await client.query (
            // INSERT INTO table(column1, column2, column3)
            // VALUES(var1, var2, var3)
            // RETURNING everything
            ` INSERT INTO posts(post_id, book_image, book_title, book_author, book_summary, user_id)
              VALUES($1, $2, $3, $4, $5, $6)
              RETURNING *;
            `,
            // dependency array to hook up the parameters to the variables
            [post_id, book_image, book_title, book_author, book_summary, user_id]
        )
        return trainer
    } catch (error) {
        throw error
    }
}

const getPostsById = async (post_id) => {
    try {
        const { 
            rows: [posts]
         } 
        = await client.query(`
        SELECT *
        FROM posts
        WHERE post_id = ${post_id};
        `)
        return posts
    } catch (error) {
        throw error
    }
}

module.exports = { createPosts, getPostsById }