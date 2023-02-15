const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const gamesRoute = require('./gamesRoute')
const genresRoute = require('./genresRoute')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/games', gamesRoute);
router.use('/genres', genresRoute);

module.exports = router;
