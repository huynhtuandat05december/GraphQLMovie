import { addMovie, deletaMovie, getAll, getById } from "./db"


const resolvers = {
    Query: {
        movies: () => getAll(),
        movie: (_, { id }) => getById(id)
    },
    Mutation: {
        addMovie: (_, { name, score }) => addMovie({ name, score }),
        removeMovie: (_, { id }) => deletaMovie(id)
    }
}
export default resolvers