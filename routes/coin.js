var express = require('express'),
    router = express.Router(),
    CoinController = require('../controllers/CoinController');

// Read
router.get('/',CoinController.getAll);
router.get('/id/:id', CoinController.get);
router.get('/country/:country', CoinController.getPorPais);
router.get('/name/:name', CoinController.getPorNombre);
router.get('/year/:year', CoinController.getPorAnio);
router.get('/status/:status', CoinController.getPorDisponibilidad);

module.exports = router;