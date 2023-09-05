// arrays of object based on schema design 

const users = [
    { username: 'MysticalMort', password: 'mystical',first_name: 'Morticia', last_name: 'Addams', email: 'mystical.morticia@email.com'},
    { username: 'HauntedHessian', password: 'haunted', first_name: 'Ichabod', last_name: 'Crane', email: 'haunted.ichabod@email.com'},
    { username: 'EerieEddie', password: 'eerie', first_name: 'Eddie', last_name: 'Munster', email: 'eerie.eddie@email.com'},
    { username: 'GhostlyGrim', password: 'ghostly',first_name: 'Casper', last_name: 'McFadden', email: 'ghostly.casper@email.com'},
    { username: 'SpookySally', password: 'spooky', first_name: 'Sally', last_name: 'Skellington', email: 'spooky.sally@email.com'}
]

const posts = [
    { book_image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1668181003i/62703226.jpg', book_title: 'The Only One Left', book_author: 'Riley Sager', book_summary: 'As Kit helps Lenora write about the events leading to the Hope family massacre, it becomes clear there is more to the tale than people know.', user_id: 1},

    { book_image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1570443079i/45885644.jpg', book_title: 'The Sun Down Motel', book_author: 'Simone St. James', book_summary: 'The secrets lurking in a rundown roadside motel ensnare a young woman, just as they did her aunt thirty-five years before.', user_id: 2},

    { book_image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1607462569i/53152636.jpg', book_title: 'Mexican Gothic', book_author: 'Silvia Moreno-Garcia', book_summary: 'After receiving a frantic letter from her newly-wed cousin begging for someone to save her from a mysterious doom, Noemí Taboada heads to High Place, a distant house in the Mexican countryside. Mesmerized by the terrifying yet seductive world of High Place, may soon find it impossible to ever leave this enigmatic house behind.', user_id: 3},

    { book_image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1492802012i/34037113.jpg', book_title: 'The Rules of Magic', book_author: 'Alice Hoffman', book_summary: 'For the Owens family, love is a curse that began in 1620, when Maria Owens was charged with witchery for loving the wrong man. Hundreds of years later, in New York City at the cusp of the sixties,Susanna sets down rules for her children: No walking in the moonlight, no red shoes, no wearing black, no cats, no crows, no candles, no books about magic. And most importantly, never, ever, fall in love.', user_id: 4},

    { book_image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1650818993i/59414094.jpg', book_title: 'How to Sell a Haunted House', book_author: 'Grady Hendrix', book_summary: 'When Louise finds out her parents have died, she dreads going home to see her brother, Mark. Unfortunately, she will need his help to get the house ready for sale because it will take more than some new paint on the walls and clearing out a lifetime of memories to get this place on the market. But some houses do not want to be sold, and their home has other plans for both of them… ', user_id: 5}
]

const likes = [
    { user_id: 1, post_id: 1},
    { user_id: 3, post_id: 3},
    { user_id: 4, post_id: 4},
    { user_id: 5, post_id: 5}
]

module.exports = { users, posts, likes }