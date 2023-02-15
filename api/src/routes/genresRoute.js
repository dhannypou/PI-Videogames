const express = require('express')
const { getGenres } = require('../controllers/getGenres')

const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const genres = await getGenres();
        res.status(200).send(genres);
    } catch (error) {
        res.status(400).send(error.message);
    }
})





module.exports = router;