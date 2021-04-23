const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexControllers');
router.get('/', indexController.index);
router.get('/tarjeta', indexController.tarjeta);
router.get('/snif', indexController.snif);

const graphController = require('../controllers/graphControllers');
router.get('/graficos', graphController.graficos);

module.exports = router;

// router.get('/graficos', function(req, res, next) {
//    res.render('graficos');
//}); */