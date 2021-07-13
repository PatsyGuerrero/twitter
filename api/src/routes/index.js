const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const users = require('./users.js');
const tweets = require ('./tweets');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', tweets);
router.use('/', users);

module.exports = router;
