var express = require('express');
var router = express.Router();

const auth = require('../utils/auth')();
// Require the controllers WHICH WE DID NOT CREATE YET!!
const user_controller = require('../controllers/users');


// a simple test url to check that all of our files are communicating correctly.
router.post('/login',  user_controller.login);

router.post('/create', auth.authenticate(),  user_controller.user_create);

router.get('/:id', auth.authenticate(),  user_controller.user_details);

router.put('/:id/update', auth.authenticate(),  user_controller.user_update);

router.delete('/:id/delete', auth.authenticate(),  user_controller.user_delete);


module.exports = router;