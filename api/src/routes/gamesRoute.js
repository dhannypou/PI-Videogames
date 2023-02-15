const express = require('express')
const { getGames, gameDetail, createGame} = require('../controllers/getVideogames')

const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const { name } = req.query
        const games = await getGames();
        if(name){
            const gameFilter = games.filter(g => g.name.toLowerCase().includes(name.toLowerCase()))
            gameFilter.length ? res.status(200).send(gameFilter) : res.status(400).send("videogame not found")
        } else {
            res.status(200).send(games);
        }
    } catch (error) {
        res.status(404).send(error.message);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const detail = await gameDetail(id)
        res.status(200).send(detail);
    } catch (error) {
        res.status(400).send(error.message)
    }
})


router.post('/', async (req, res) => {
    try {
        const { name, description, released, rating, background_image, genres, platforms } = req.body;
        const createdGame = await createGame(name, description, released, rating, background_image, genres, platforms);
        res.status(201).send(createdGame);
    } catch (error) {
        res.status(404).send(error.message);
    }
})



module.exports = router;