const client = require('../client')

const createPost = async ({ book_image, book_title, book_author, book_summary, user_id}) => {
    try {
        const {
            rows: [post],
            // insert SQL query
        } = await client.query (
            // INSERT INTO table(column1, column2, column3)
            // VALUES(var1, var2, var3)
            // RETURNING everything
            ` INSERT INTO posts(book_image, book_title, book_author, book_summary, user_id)
              VALUES($1, $2, $3, $4, $5)
              RETURNING *;
            `,
            // dependency array to hook up the parameters to the variables
            [ book_image, book_title, book_author, book_summary, user_id]
        )
        return post
    } catch (error) {
        throw error
    }
}

const getPostById = async (post_id) => {
    const query = `SELECT * FROM posts WHERE post_id = $1`;
    const values = [post_id];

    try {
        const result = await client.query(query, values);
        let record = result.rows[0];
        record.book_image = _bytesToString(record.book_image);
        return record;
    } catch (error) {
        throw error
    }
}

const getAllPosts = async () => {
    try {
        const { rows }
        = await client.query(`
        SELECT *
        FROM posts;
        `)
        for (const row of rows) {
            row.book_image = _bytesToString(row.book_image);
        }
        return rows;
    } catch (error) {
        throw error
    }
}

const _bytesToString = (bytes) => {
    const buffer = Buffer.from(bytes);
    const string = buffer.toString();
    return string;
}

module.exports = { createPost, getPostById, getAllPosts }