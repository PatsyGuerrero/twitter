const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const users = require('./users.js');
const tweets = require ('./tweets.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', users);
// router.use('/', tweets);




module.exports = router;
