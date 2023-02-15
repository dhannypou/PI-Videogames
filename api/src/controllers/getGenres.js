const axios = require('axios');
const { Videogame, Genre } = require('../db')


const getGenres = async () => {
    const apiGenres = await axios.get(`https://api.rawg.io/api/genres?key=d4dfed4573fe44ecb8f1ddf8124451e3`)
    const dataGenres = apiGenres.data
    const genres = dataGenres.results.map(g => g.name)

    genres.map(g => Genre.findOrCreate({
        where:{
            name: g
        }
    }))

    const allGenres = await Genre.findAll();

    return allGenres;
}


module.exports = {
    getGenres
}