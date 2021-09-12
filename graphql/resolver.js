const person = {
    name: 'dat',
    age: 20,
    gender: 'female'
}

const resolvers = {
    Query: {
        person: () => { return person }
    },
}
export default resolvers