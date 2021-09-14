let data = [
    {
        id: 0,
        name: "movie 0",
        score: 1

    },
    {
        id: 1,
        name: "movie 1",
        score: 1

    },
    {
        id: 2,
        name: "movie 2",
        score: 1

    },
    {
        id: 3,
        name: "movie 3",
        score: 1

    }

]
export const getAll = () => data
export const getById = (id) => {
    return data.find(item => item.id === id)
}
export const addMovie = ({ name, score }) => {
    const newMovie = {
        id: data.length,
        name,
        score
    }
    data.push(newMovie)
    return newMovie
}
export const deletaMovie = (id) => {
    const newData = data.filter(item => item.id !== id)
    if (newData.length < data.length) {
        data = newData
        return true
    }
    return false
}