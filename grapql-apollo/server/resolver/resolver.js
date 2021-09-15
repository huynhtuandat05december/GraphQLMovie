const { books, authors } = require("../data/data")

const resolvers = {
    Query: {
        books: () => books,
        authors: () => authors,
        book: (parent, args) => books.find(item => item.id === Number(args.id)),
        author: (parent, args) => authors.find(item => item.id === Number(args.id))
    },
    Book: {
        // name: (parent) => console.log(parent),
        author: (parent, args) => {
            return authors.find(item => item.id === Number(parent.authorID))
        }
    },
    Author: {
        books: (parent, args) => {
            return books.filter(item => item.id === Number(parent.id))
        }
    },
    Mutation: {
        addBook: (parent, args) => args

    }
}
module.exports = resolvers