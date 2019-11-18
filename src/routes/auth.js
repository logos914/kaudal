var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// define the home page route
router.get('/', function(req, res) {
    res.send('No hay función GET de usuarios');
});

// define the about route
router.post('/login', userController.loginWithCredential);

module.exports = router;