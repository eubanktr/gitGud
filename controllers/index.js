const router = require('express').Router();
<<<<<<< HEAD

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

module.exports = router;
=======
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes')

router.use('/api', apiRoutes);
router.use('/homeRoutes', homeRoutes);

module.exports = router; 

>>>>>>> e50ca5c480cac456f2ec23e53362f9a6b303cebe
