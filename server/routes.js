var controller = require('./controller.js');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/start', controller.start.get);

router.post('/start', controller.start.post);



module.exports = router;

