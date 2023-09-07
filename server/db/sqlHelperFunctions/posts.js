const client = require('../client')

const createPost = async ({ book_image, book_title, book_author, book_summary, user_id }) => {
    const inputParams = {
        book_image: book_image,
        book_title: book_title,
        book_author: book_author,
        book_summary: book_summary,
        user_id: user_id
    };
    console.log("DB Handler: ", inputParams);
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

const updatePost = async (post_id, updatedPost) => {
    try {
        const { rows: [post], } = await client.query(`
        UPDATE posts
        SET
        book_image = $1,
        book_title = $2,
        book_author = $3,
        book_summary = $4
        WHERE post_id = ${post_id}
        RETURNING *;
        `,
        [
            updatedPost.book_image,
            updatedPost.book_title,
            updatedPost.book_author,
            updatedPost.book_summary
        ]
        );
        return post;
    } catch (error) {
        throw error;
    }
}

const deletePost = async (post_id) => {
    try {
        const { rows: [post], }
        = await client.query(`
        DELETE 
        FROM posts
        WHERE post_id = ${post_id};
        `);
         return post;
        } catch (error) {
         throw error;
    }
}


const _bytesToString = (bytes) => {
    const buffer = Buffer.from(bytes);
    const string = buffer.toString();
    return string;
}

module.exports = { createPost, getPostById, getAllPosts, updatePost, deletePost }