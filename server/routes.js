var controller = require('./controller.js');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/start', controller.start.get);




module.exports = router;

